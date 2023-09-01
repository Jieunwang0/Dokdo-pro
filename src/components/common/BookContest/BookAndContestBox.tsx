import React from 'react';
import * as BC from '@/components/bookContest/bookandcontest/BookAndContest.styled';
import bookImg9 from '@/assets/img/책추천13.png';
import bookImg10 from '@/assets/img/책추천12.png';

function BookAndContestBox() {
  return (
    <BC.Wrapper>
      <BC.List>
        <BC.ImgBox>
          <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000000781176">
            <BC.Img>
              <img src={bookImg9} alt="도서이미지" />
            </BC.Img>
            <BC.Info>
              <div>H마트에서 울다</div>
              <div>미셀자우너/문학동네</div>
              <div>2022.02.28</div>
            </BC.Info>
          </BC.StyledLink>
        </BC.ImgBox>
        <BC.ImgBox>
          <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000201142283">
            <BC.Img>
              <img src={bookImg10} alt="도서이미지" />
            </BC.Img>
            <BC.Info>
              <div>메리골드 마음 세탁소</div>
              <div>윤정은/북로망스</div>
              <div>2023.03.06</div>
            </BC.Info>
          </BC.StyledLink>
        </BC.ImgBox>
      </BC.List>
    </BC.Wrapper>
  );
}

export default BookAndContestBox;
