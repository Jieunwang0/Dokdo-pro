import React, { useState, useEffect } from 'react';
import * as M from '@/pages/main/Main.styled';
import Slider from '@/components/common/slider/Slider';
import Slider2 from '@/components/common/slider/Slider2';
import Slider3 from '@/components/common/slider/Slider3';
import MoreButton from '@/components/common/morebutton/MoreButton';
import BoardBox from '@/components/common/boardbox/BoardBox';
import axios from 'axios';
import GenreBox from '@/components/common/GenreBox/GenreBox';
import { useLocation } from 'react-router-dom';

// API 요청 함수 추가
async function fetchAllGroupData() {
  try {
    const response = await axios.get(
      'http://localhost:3001/api/v1/group?&limit=5&offset=0',
    ); // 최신순 정렬
    return response.data.data; // 서버 응답에서 실제 그룹 데이터를 반환
  } catch (error) {
    throw error;
  }
}

function Main() {
  const location = useLocation();
  const isMainPage = location.pathname === '/main';

  const [groupData, setGroupData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAllGroupData(); // API 요청 호출
        // 데이터 가공 및 저장
        setGroupData(data);
      } catch (error) {
        console.error('데이터를 가져오는 중 에러 발생:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <M.Wrapper>
      <Slider />
      <M.GridContainer>
        어떤 도서 분야의
        <br />
        토론 모임을 찾으세요?📖
        <GenreBox />
      </M.GridContainer>
      <M.StyledGroupLink to="/group/list">
        <M.GroupBoxTitle>모집 중인 독서 토론 모임 ⭐️</M.GroupBoxTitle>
      </M.StyledGroupLink>

      <M.GroupList>
        {groupData.slice(0, 3).map((groupItem, index) => (
          <BoardBox key={index} data={groupItem} isMainPage={isMainPage} />
        ))}
      </M.GroupList>
      <MoreButton to="/group/list">더보기</MoreButton>

      <M.GroupTop10>
        <M.GroupTopTitle>
          <M.StyledHotGroupLink to="/group">
            독도 인기 토론 모임🔥
            <div>지금 가장 인기있는 토론 모임을 확인해보세요!</div>
          </M.StyledHotGroupLink>
        </M.GroupTopTitle>
      </M.GroupTop10>

      <Slider3 />

      <M.BooksTop10>
        <M.BooksTitle>
          <M.StyledBookLink to="/bookrec">
            독서 토론 인기 책🔥<div>독서 토론 인기책을 확인해보세요!</div>
          </M.StyledBookLink>
        </M.BooksTitle>
      </M.BooksTop10>
      <Slider2 />
      <MoreButton to="/bookrec">더보기</MoreButton>
    </M.Wrapper>
  );
}

export default Main;
