import React, { useEffect, useState } from 'react';
import * as MyPostsStyle from '@/pages/mypage/myposts/MyPosts.styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '@/helper/Cookie';

interface PostData {
  _id: string;
  group_id: number;
  post_id: number;
  user_id: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  content: string;
  images: string[];
}

interface UserData {
  name: string;
  profilePic: string;
}

function MyPostsComponent() {
  const navigate = useNavigate();
  const [myPosts, setMyPosts] = useState<PostData[]>([]);
  const [selectedPosts, setSelectedPosts] = useState<PostData[]>([]);
  const [userData, setUserData] = useState<UserData | null>(null);

  function formatCreatedAt(createdAt: string | number | Date) {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
  }

  useEffect(() => {
    const loginToken = getCookie('loginToken');

    axios
      .get('http://localhost:3001/api/v1/auth/me', {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
      })
      .then(response => {
        if (response.status === 200) {
          setUserData(response.data.data.getUser);
        } else {
          navigate('/signup');
        }
      })
      .catch(error => {
        console.error('myposts유저 정보 가져오기 에러:', error);
        navigate('/');
      });
  }, [navigate]);

  useEffect(() => {
    const loginToken = getCookie('loginToken');
    axios
      .get(`http://localhost:3001/api/v1/auth/me/posts`, {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
      })
      .then(postsResponse => {
        if (postsResponse.data.error === null) {
          const userPosts: PostData[] = postsResponse.data.data;
          setMyPosts(userPosts);

          const fetchAllPosts = async () => {
            const selectedPostsWithImages: PostData[] = [];

            for (const post of userPosts) {
              try {
                const postResponse = await axios.get(
                  `http://localhost:3001/api/v1/group/${post.group_id}/posts/${post.post_id}`,
                );

                if (postResponse.data.error === null) {
                  const postData: PostData = {
                    ...postResponse.data.data,
                  };
                  selectedPostsWithImages.push(postData);
                } else {
                  console.error(
                    '포스트 가져오기 오류:',
                    postResponse.data.error,
                  );
                }
              } catch (error) {
                console.error('포스트 가져오기 에러:', error);
              }
            }

            setSelectedPosts(selectedPostsWithImages);
          };

          fetchAllPosts();
        } else {
          console.error('게시글 가져오기 오류:', postsResponse.data.error);
        }
      })
      .catch(error => {
        console.error('게시글 가져오기 에러:', error);
      });
  }, []);

  return (
    <MyPostsStyle.Container>
      <MyPostsStyle.Wrapper>
        <MyPostsStyle.GroupBoardList>
          {userData &&
            selectedPosts.map(selectedPost => (
              <MyPostsStyle.Boardbox key={selectedPost._id}>
                <MyPostsStyle.BoardLeft>
                  <MyPostsStyle.ProfileData>
                    <MyPostsStyle.ProfileImg
                      src={`http://localhost:3001/api/v1/image/profile/${userData.data.getUser.profilePic}`}
                      alt={`${userData.data.getUser.name}의 프로필 사진`}
                    />
                    <MyPostsStyle.UpdatedProfile>
                      <MyPostsStyle.Writer>
                        {userData.data.getUser.name}
                      </MyPostsStyle.Writer>
                      <MyPostsStyle.PostedDate>
                        {formatCreatedAt(selectedPost.createdAt)}
                      </MyPostsStyle.PostedDate>
                    </MyPostsStyle.UpdatedProfile>
                  </MyPostsStyle.ProfileData>

                  <MyPostsStyle.Content>
                    {formatCreatedAt(selectedPost.createdAt)}
                  </MyPostsStyle.Content>
                </MyPostsStyle.BoardLeft>
                <MyPostsStyle.BoardImg
                  src={`http://localhost:3001/api/v1/image/post/${selectedPost.images[0]}`}
                  alt="게시된 이미지"
                />
              </MyPostsStyle.Boardbox>
            ))}
        </MyPostsStyle.GroupBoardList>
      </MyPostsStyle.Wrapper>
    </MyPostsStyle.Container>
  );
}

export default MyPostsComponent;