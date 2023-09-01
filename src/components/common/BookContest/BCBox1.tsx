import React from 'react';
import * as BC from '@/components/bookContest/bookandcontest/BookAndContest.styled';
import bookImg1 from '@/assets/img/책추천2.png';
import bookImg2 from '@/assets/img/책추천9.png';


// BookAndContestBox 컴포넌트의 props 타입 정의

function BcBox1() {
  return (
    <BC.Wrapper>
      <BC.List>
        <BC.ImgBox>
          <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000208603716">
            <BC.Img>
              <img src={bookImg1} alt="도서이미지" />
            </BC.Img>
            <BC.Info>
              <div>슈퍼노멀</div>
              <div>주언규/웅진지식하우스</div>
              <div>2023.08.30</div>
            </BC.Info>
          </BC.StyledLink>
        </BC.ImgBox>
        <BC.ImgBox>
          <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000203331812">
            <BC.Img>
              <img src={bookImg2} alt="도서이미지" />
            </BC.Img>
            <BC.Info>
              <div>아주 희미한 빛만으로도</div>
              <div>최은영/문학동네</div>
              <div>2023.08.07</div>
            </BC.Info>
          </BC.StyledLink>
        </BC.ImgBox>
      </BC.List>
    </BC.Wrapper>
  );
}

export default BcBox1;
