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
    gId?:string;
  }>();
  const group_Id = groupId ? parseInt(groupId, 10) : undefined;
  const post_Id = postsId ? parseInt(postsId, 10) : undefined;

  const [groupDetail, setGroupDetail] = useState<GroupDetailData | null>(
    data || null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
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
      fetchGroupName(group_Id)
    }
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
        window.location.reload(); // 페이지를 새로고침
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
        window.location.reload();
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
        setComments(response.data.data);
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

  return (
    <GBD.Wrapper>
      <GBD.GroupBoardTitle>
      <div>{groupName || 'Loading...'}모임의 게시글</div>
      </GBD.GroupBoardTitle>
      <GBD.User>
        <GBD.UserName>{groupDetail?.data.user.name}</GBD.UserName>
        <GBD.ProfileImg
          src={`http://localhost:3001/api/v1/image/profile/${groupDetail?.data.user.profilePic}`}
        ></GBD.ProfileImg>
        <GBD.Desc>
          <GBD.DescDisplay>
            <div>
              {formatCreatedAt(
                groupDetail?.data?.post.createdAt || 'Loading...',
              )}
            </div>
            <GBD.EditButton>●●●</GBD.EditButton>
          </GBD.DescDisplay>
        </GBD.Desc>
      </GBD.User>
      <GBD.UserWriteBox>
        <div>{groupDetail?.data?.post.content || 'Loading...'}</div>
        <img
          src={`http://localhost:3001/api/v1/image/post/${groupDetail?.data.post.images[0]}`}
          alt="게시된 이미지"
        />
      </GBD.UserWriteBox>
      <GBD.Button>
        <button>❤️ 좋아요 숫자</button>
        <button>공유하기</button>
      </GBD.Button>
      <GBD.Comment>
        {comments.map(comment => (
          <div key={comment.comment_id}>
            {!comment.isDeleted ? (
              <>
                <div>{comment.text}</div>
                <div>{comment.createdAt}</div>
              </>
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
