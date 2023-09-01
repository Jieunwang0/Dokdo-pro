import React from 'react';
import * as S from '@/pages/search/Search.styled';
import SearchInput from '@/components/common/searchinput/SearchInput';
import BookAndContestBox from '@/components/common/BookContest/BookAndContestBox';

const Search = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <h1>Logo</h1>
      </S.Logo>
      <SearchInput />
      <S.TagBox>
        <S.TagBoxTitle>키워드 추천</S.TagBoxTitle>
        <S.TagList>
          <div>토론모임</div>
          <div>공모전</div>
          <div>책추천</div>

          <div>이 달의 모임</div>
          <div>이 달의 모임</div>
          <div>이 달의 모임</div>
        </S.TagList>
      </S.TagBox>
      <S.BookRecBox>
        <S.BookRecBoxTitle>도서 추천</S.BookRecBoxTitle>
        <S.BookRecList>
          <BookAndContestBox />
        </S.BookRecList>
      </S.BookRecBox>
      <S.BookRecBox>
        <S.BookRecBoxTitle>이런 독서 토론 모임도 있어요! </S.BookRecBoxTitle>
        <S.GorupBoxDisplay>
          <S.GroupSmallBox>
            <S.GroupBox>
              <S.GroupBoxImg>
                <img src="" alt="이미지" />
              </S.GroupBoxImg>
              <S.GroupBoxInfo>
                <div>새벽비대면토론</div>
                <div>
                  새벽시간마다 디스코드를 켜고 비대면 독서 토론을 진행합니다.
                </div>
                <div>올빼미족 비대면</div>
              </S.GroupBoxInfo>
            </S.GroupBox>
          </S.GroupSmallBox>
          <S.GroupSmallBox>
            <S.GroupBox>
              <S.GroupBoxImg>
                <img src="" alt="이미지" />
              </S.GroupBoxImg>
              <S.GroupBoxInfo>
                <div>새벽비대면토론</div>
                <div>
                  새벽시간마다 디스코드를 켜고 비대면 독서 토론을 진행합니다.
                </div>
                <div>올빼미족 비대면</div>
              </S.GroupBoxInfo>
            </S.GroupBox>
          </S.GroupSmallBox>
        </S.GorupBoxDisplay>
      </S.BookRecBox>
    </S.Wrapper>
  );
};

export default Search;
