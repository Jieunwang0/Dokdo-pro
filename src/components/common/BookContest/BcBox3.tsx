import React from 'react';
import * as BC from '@/components/bookContest/bookandcontest/BookAndContest.styled';
import bookImg5 from '@/assets/img/책추천6.png';
import bookImg6 from '@/assets/img/책추천5.png';

// BookAndContestBox 컴포넌트의 props 타입 정의

function BcBox3() {
  return (
    <BC.Wrapper>
      <BC.List>
        <BC.ImgBox>
          <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000202340164">
            <BC.Img>
              <img
                src={bookImg5}
                alt="도서이미지"
              />
            </BC.Img>
            <BC.Info>
              <div>역행자</div>
              <div>자청/웅진지식하우스</div>
              <div>2023.05.29</div>
            </BC.Info>
          </BC.StyledLink>
        </BC.ImgBox>
        <BC.ImgBox>
          <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000208698551">
            <BC.Img>
              <img
                src={bookImg6}
                alt="도서이미지"
              />
            </BC.Img>
            <BC.Info>
              <div>일론머스크</div>
              <div>월터 아이작슨/21세기북스</div>
              <div>2023.09.19(예정)</div>
            </BC.Info>
          </BC.StyledLink>
        </BC.ImgBox>
      </BC.List>
    </BC.Wrapper>
  );
}

export default BcBox3;
