import React from 'react';
import * as BC from '../../bookContest/bookandcontest/BookAndContest.styled';
import bookImg1 from '../../../assets/img/bookImg/책추천8.jpeg';
import bookImg2 from '../../../assets/img/bookImg/책추천7.jpeg';

// BookAndContestBox 컴포넌트의 props 타입 정의

function BcBox2() {
  return (
    <BC.Wrapper>
      <BC.List>
        <BC.ImgBox>
          <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000202671445">
            <BC.Img>
              <img src={bookImg1} alt="도서이미지" />
            </BC.Img>
            <BC.Info>
              <div>문과 남자의 과학 공부</div>
              <div>유시민/돌베개</div>
              <div>2023.06.23</div>
            </BC.Info>
          </BC.StyledLink>
        </BC.ImgBox>
        <BC.ImgBox>
          <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000201621022">
            <BC.Img>
              <img src={bookImg2} alt="도서이미지" />
            </BC.Img>
            <BC.Info>
              <div>도둑 맞은 집중력</div>
              <div>요한 하리/어크로스</div>
              <div>2023.04.28</div>
            </BC.Info>
          </BC.StyledLink>
        </BC.ImgBox>
      </BC.List>
    </BC.Wrapper>
  );
}

export default BcBox2;
