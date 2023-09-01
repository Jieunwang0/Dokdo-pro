import React, { useState, useEffect } from 'react';
import * as GB from '@/pages/group/groupboard/GorupBoard.styled';
import SearchInput from '@/components/common/searchinput/SearchInput';
import axios from 'axios';
import PenFooter from '@/components/layout/footer/PenFooter';
import GroupHeader from '@/components/layout/header/GroupHeader';
import { useParams, useNavigate } from 'react-router-dom';
import { getCookie } from '@/helper/Cookie';

interface GroupData {
  group_id: number;
  user: {
    name: string;
    profilePic: string;
  };
  post: {
    _id: string;
    title: string;
    content: string;
    images: string[];
    createdAt: string;
    post_id: number;
    updatedAt: string;
  };
}

interface GroupBoardProps {
  data?: GroupData;
}

const GroupBoard: React.FC<GroupBoardProps> = ({ data }) => {
  const { groupId } = useParams<{ groupId: string }>();
  const [groupBoardData, setGroupBoardData] = useState<GroupData[]>([]);
  const loginToken = getCookie('loginToken');
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const formatDate = (dateString: string | number | Date) => {
    const options = { month: '2-digit', day: '2-digit' };
    //@ts-ignore
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  //localhost:3000
  async function fetchAllGroupBoardData(groupId: number) {
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/group/${groupId}/posts?`,
      );
      return response.data.data;
    } catch (error) {
      setLoading(false);
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
          setGroupBoardData(
            await fetchAllGroupBoardData(fetchedGroupData.group_id),
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


  
  // 스크롤 이벤트 감지 함수
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (windowHeight + scrollTop >= documentHeight - 100 && !loading) {
      // 스크롤이 가장 아래로 도달하면 추가 데이터를 로드합니다.
      setOffset(prevOffset => prevOffset + 5);
    }
  };

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <GB.Wrapper>
      <GroupHeader data={{ group: Number(groupId) }} />
      <GB.GroupBoardList>
        <PenFooter />
        <SearchInput />
        <GB.GroupBoardTitle>
          <div>게시글 목록</div>
        </GB.GroupBoardTitle>
        {groupBoardData.map((groupBoardItem, index) => (
          <GB.Boardbox
            key={index}
            onClick={() =>
              navigate(`/group/${groupId}/board/${groupBoardItem.post.post_id}`)
            }
          >
            <GB.BoardLeft>
              <GB.User>
                <img src={`http://localhost:3001/api/v1/image/profile/${groupBoardItem.user.profilePic}`} alt="게시자 프로필" />
                <GB.UserName>
                  <div>{groupBoardItem.user.name}</div>
                  <GB.UserDate>{formatDate(groupBoardItem.post.createdAt)}</GB.UserDate>
                </GB.UserName>
              </GB.User>
              <div>
                <GB.BoardTitle>{groupBoardItem.post.title}</GB.BoardTitle>
                <GB.BoardContent>{groupBoardItem.post.content}</GB.BoardContent>
              </div>
            </GB.BoardLeft>
            <GB.BoardImg>
              <img
                src={`http://localhost:3001/api/v1/image/post/${groupBoardItem.post.images[0]}`}
                alt="게시된 이미지"
              />
            </GB.BoardImg>
          </GB.Boardbox>
        ))}
      </GB.GroupBoardList>
    </GB.Wrapper>
  );
};

export default GroupBoard;
