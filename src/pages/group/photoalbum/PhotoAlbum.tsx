import React, { useState, useEffect } from 'react';
import * as PA from '@/pages/group/photoalbum/PhotoAlbum.styled';
import SearchInput from '@/components/common/searchinput/SearchInput';
import axios from 'axios';
import PenFooter2 from '@/components/layout/footer/PenFooter2';
import { getCookie } from '@/helper/Cookie';
import { useParams, useNavigate } from 'react-router-dom';
import GroupHeader from '@/components/layout/header/GroupHeader';

interface PhotoItem {
  post: {
    _id: string;
    title: string;
    content: string;
    images: string[];
    createdAt: string;
    updateAT: string;
    post_id: number;
  };
  user: {
    name: string;
    profilePic: string;
  };
}

interface PhotoItemProps {
  data?: PhotoItem;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${month}월 ${day}일`;
}

const PhotoAlbum: React.FC<PhotoItemProps> = ({ data }) => {
  const { groupId } = useParams<{ groupId: string }>();
  const [photoItems, setPhotoItems] = useState<PhotoItem[]>([]);
  const loginToken = getCookie('loginToken');
  const navigate = useNavigate();

  async function fetchAllGroupPhotoData(groupId: number) {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/group/${groupId}/albums?limit=5&offset=0`,
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const groupDataResponse = await axios.get(
          `http://localhost:3001/api/v1/group/${groupId}`,
          {
            headers: {
              Authorization: `Bearer ${loginToken}`,
            },
            withCredentials: true,
          },
        );
        if (groupDataResponse.status === 200) {
          const fetchedGroupData = groupDataResponse.data.data;
          setPhotoItems(
            await fetchAllGroupPhotoData(fetchedGroupData.group_id),
          );
        } else {
          console.error('그룹 정보 가져오기 에러:', groupDataResponse.status);
        }
      } catch (error) {
        console.error('그룹 정보 가져오기 에러:', error);
      }
    }

    fetchData();
  }, [loginToken, groupId]);

  return (
    <PA.Wrapper>
      <GroupHeader data={{ group: Number(groupId) }} />
      <PenFooter2 />
      <PA.InputDisplay>
        <SearchInput />
      </PA.InputDisplay>
      <PA.GroupPhotoTitle>사진첩 목록</PA.GroupPhotoTitle>

      <PA.PhotoList>
        <ul>
          {photoItems.length === 0 ? (
            <div> 등록된 사진이 없습니다.</div>
          ) : (
            photoItems.map((photoItem, index) => (
              <li
                key={index}
                onClick={() =>
                  navigate(`/group/${groupId}/photo/${photoItem.post.post_id}`)
                }
              >
                <PA.PhotoBoardBox>
                  <PA.Profile>
                    <PA.ProfileImg>
                      <img
                        src={`http://localhost:3001/api/v1/image/profile/${photoItem.user.profilePic}`}
                        alt="게시자 프로필"
                      />
                    </PA.ProfileImg>
                    <PA.User>
                      <div>{photoItem.user.name}</div>
                      <div>{formatDate(photoItem.post.createdAt)}</div>
                    </PA.User>
                  </PA.Profile>
                  <PA.PhotoImg>
                    <img
                      src={`http://localhost:3001/api/v1/image/post/${photoItem.post.images[0]}`}
                      alt="업로드사진"
                    />
                  </PA.PhotoImg>
                  <PA.PhotoBoxBottom>
                    <PA.PhotoBoardTitle>
                      {photoItem.post.title}
                    </PA.PhotoBoardTitle>
                  </PA.PhotoBoxBottom>
                </PA.PhotoBoardBox>
              </li>
            ))
          )}
        </ul>
      </PA.PhotoList>
    </PA.Wrapper>
  );
};

export default PhotoAlbum;
