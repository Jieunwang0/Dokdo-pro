import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as GBD from '@/pages/group/groupboarddetail/GroupBoaderDetail.styled';
import { getCookie } from '@/helper/Cookie';
import { useParams } from 'react-router-dom';
interface GroupDetailData {
  error: null | string;
  data: {
    post: {
      _id: string;
      title: string;
      content: string;
      images: string[];
      createdAt: string;
      updatedAt: string;
      post_id: number;
      __v: number;
    };
    user: {
      name: string;
      profilePic: string[];
    };
  };
}

interface Comment {
  text: string;
  isDeleted: boolean;
  comment_id: number;
  createdAt: string;
}
interface UserData {
  name: string;
  profilePic: string;
}

interface GroupBoardDetailDataProps {
  data?: GroupDetailData;
}

interface GroupNameData {
  data: {
    name: string;
  };
}

interface GroupNameProps {
  data?: GroupNameData;
}

const GroupBoardDetail: React.FC<
  GroupBoardDetailDataProps & GroupNameProps
> = ({ data }) => {
  const loginToken = getCookie('loginToken');
  const { groupId, postsId } = useParams<{
    groupId?: string;
    postsId?: string;
    gId?: string;
  }>();
  const group_Id = groupId ? parseInt(groupId, 10) : undefined;
  const post_Id = postsId ? parseInt(postsId, 10) : undefined;
  const [groupDetail, setGroupDetail] = useState<GroupDetailData | null>(
    data || null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentsName, setCommentsName] = useState<UserData[]>([]);

  const [commentText, setCommentText] = useState('');
  const [replyText, setReplyText] = useState<string>('');
  const [groupName, setGroupName] = useState<string>('');

  function formatCreatedAt(createdAt: string | number | Date) {
    const date = new Date(createdAt);

    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${month}월 ${day}일`;
  }

  useEffect(() => {
    if (group_Id && post_Id) {
      fetchGroupDetail(group_Id, post_Id);
      fetchComments(group_Id, post_Id);
      fetchGroupName(group_Id);
    }
    // useEffect의 의존성 배열에 사용된 함수들 추가
  }, [loginToken, group_Id, post_Id]);

  const fetchGroupDetail = async (gId: number, pId: number) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/group/${gId}/posts/${pId}`,
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        setGroupDetail(response.data);
      } else {
        console.error('Error fetching detail data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching detail data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchGroupName = async (gId: number) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/group/${gId}`,
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        const groupData = response.data.data;
        if (groupData) {
          setGroupName(response.data.data.name);
        } else {
          console.error('Group data not found');
        }
      } else {
        console.error('Error fetching Name data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching group name:', error);
      setGroupName('');
    } finally {
      setIsLoading(false);
    }
  };

  const postComment = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3001/api/v1/group/${group_Id}/posts/${post_Id}/comments`,
        { text: commentText },
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        // 댓글 작성 후에 댓글 목록을 업데이트
        //@ts-ignore
        fetchComments(group_Id, post_Id);
        setCommentText(''); // 작성한 댓글 내용을 초기화
      } else {
        console.error('Error posting comment:', response.status);
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  const postReply = async (commentId: number) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/api/v1/group/${group_Id}/posts/${post_Id}/comments/${commentId}/reply`,
        { text: replyText },
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );
      if (response.status === 200) {
        // window.location.reload();
      } else {
        console.error('Error posting reply:', response.status);
      }
    } catch (error) {
      console.error('Error posting reply:', error);
    }
  };

  const fetchComments = async (gId: number, pId: number) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/group/${gId}/posts/${pId}/comments`,
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        const commentsData = response.data.data;
        setComments(commentsData.map((comment: any) => comment.comments));
        setCommentsName(commentsData.map((comment: any) => comment.user));
      } else {
        console.error('Error fetching comments:', response.status);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const deletePost = async () => {
    const confirmed = window.confirm('게시글을 삭제하시겠습니까?');

    if (!confirmed) {
      return; // 삭제를 취소한 경우 함수 종료
    }

    try {
      const response = await axios.delete(
        `http://localhost:3001/api/v1/group/${group_Id}/posts/${post_Id}`,
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );

      if (response.status === 204) {
        // 게시글이 성공적으로 삭제된 경우, 해당 페이지를 새로고침하거나 다른 동작을 수행할 수 있습니다.
        // 예: history.push()를 사용하여 게시글 목록 페이지로 이동
      } else {
        console.error('Error deleting post:', response.status);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <GBD.Wrapper>
      <GBD.GroupBoardTitle>
        <div>{groupName} 🍀 모임의 게시글</div>
      </GBD.GroupBoardTitle>
      <GBD.EditButton onClick={deletePost}>●●●</GBD.EditButton>

      <GBD.User>
        <div>
          <GBD.ProfileImg
            src={`http://localhost:3001/api/v1/image/profile/${groupDetail?.data.user.profilePic}`}
          ></GBD.ProfileImg>
        </div>
        <GBD.Desc>
          <GBD.DescDisplay>
            <GBD.UserName>{groupDetail?.data.user.name}</GBD.UserName>
            <GBD.MMDD>
              {formatCreatedAt(
                groupDetail?.data?.post.createdAt || 'Loading...',
              )}
            </GBD.MMDD>
          </GBD.DescDisplay>
        </GBD.Desc>
      </GBD.User>

      <GBD.UserWriteBox>
        <GBD.UserContent>
          {groupDetail?.data?.post.content || '게시글이 없습니다.'}
        </GBD.UserContent>
        {/* 이미지 배열이 정의되어 있고 비어있지 않은 경우에만 이미지 출력 */}
        {groupDetail?.data?.post.images &&
          groupDetail.data.post.images.length > 0 && (
            <img
              src={`http://localhost:3001/api/v1/image/post/${groupDetail.data.post.images[0]}`}
              alt="게시된 이미지"
            />
          )}
      </GBD.UserWriteBox>
      <GBD.Button>
        <button>❤️ 555</button>
        <button>공유하기</button>
      </GBD.Button>
      <GBD.Comment>
        <GBD.CommentsTitle>
          댓글 <span> {comments.length}</span>
        </GBD.CommentsTitle>
        {comments.map((comment, index) => (
          <div key={comment.comment_id}>
            {!comment.isDeleted ? (
              <GBD.CommentsList>
                <GBD.ComentsBox>
                  <GBD.PFImg>
                    <img
                      src={`http://localhost:3001/api/v1/image/profile/${commentsName[index]?.profilePic}`}
                      alt="프사"
                    />
                  </GBD.PFImg>
                  <GBD.PFText>
                    <GBD.CommentUser>
                      {commentsName[index]?.name}
                    </GBD.CommentUser>
                    <GBD.CommentText>{comment.text}</GBD.CommentText>
                    <GBD.CommnetCreatedAt>
                      {formatCreatedAt(comment.createdAt)}
                    </GBD.CommnetCreatedAt>
                  </GBD.PFText>
                </GBD.ComentsBox>
              </GBD.CommentsList>
            ) : (
              <div>Deleted Comment</div>
            )}
          </div>
        ))}
      </GBD.Comment>
      <GBD.CIWrapper>
        <GBD.CIDisplay>
          <GBD.CIInput>
            <input
              type="text"
              placeholder="댓글을 입력하세요."
              value={commentText}
              onChange={e => setCommentText(e.target.value)}
            />
          </GBD.CIInput>
          <GBD.CIButton>
            <button onClick={postComment}>등록</button>
          </GBD.CIButton>
        </GBD.CIDisplay>
      </GBD.CIWrapper>
    </GBD.Wrapper>
  );
};

export default GroupBoardDetail;
