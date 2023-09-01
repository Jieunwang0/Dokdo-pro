import React from 'react';
import * as BC from '@/components/bookContest/bookandcontest/BookAndContest.styled';
import bookImg2 from '@/assets/img/bookImg/책추천9.jpeg';
import Contest3 from '@/assets/img/독서공모전2.jpeg';

function CTBox1() {
  return (
    <BC.Wrapper>
      <BC.List>
        <BC.ImgBox>
          <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000208603716">
            <BC.Img>
              <img src={Contest3} alt="공모전이미지" />
            </BC.Img>
            <BC.Info>
              <div>안</div>
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

export default CTBox1;
