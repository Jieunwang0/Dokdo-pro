import React from 'react';
import * as BC from './Constest.styled';
import bookImg3 from '@/assets/img/책추천3.png';
import bookImg4 from '@/assets/img/책추천4.png';
import Contest1 from '@/assets/img/독서공모전2.png';
import Contest2 from '@/assets/img/독서공모전1.png';

const Contest = () => {
  return (
    <BC.Wrapper>
      <BC.Box>
        <BC.BoxTitleBox>
          <BC.BoxTitle>
            독도 추천 독서 토론 모임으로
            <br /> 공모전도 도전 하세요!🔥
          </BC.BoxTitle>
        </BC.BoxTitleBox>
        <BC.SliederBox>
          <BC.Wrapper>
            <BC.List>
              <BC.StyledLink to="https://mobile.newsis.com/view.html?ar_id=NISX20230724_0002387538">
                <BC.ImgBox>
                  <BC.Img>
                    <img src={Contest1} alt="공모전이미지" />
                  </BC.Img>
                  <BC.Info>
                    <div>전국민 독서 사진 공모!</div>
                    <div>제주시 우당도서관</div>
                    <div>23.7.24 ~ 23.9.4</div>
                  </BC.Info>
                </BC.ImgBox>
              </BC.StyledLink>
              <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000000781176">
                <BC.ImgBox>
                  <BC.Img>
                    <img src={Contest2} alt="공모전이미지" />
                  </BC.Img>
                  <BC.Info>
                    <div>H마트에서 울다</div>
                    <div>미셀자우너/문학동네</div>
                    <div>2022.02.28</div>
                  </BC.Info>
                </BC.ImgBox>
              </BC.StyledLink>
            </BC.List>{' '}
            <BC.List>
              <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000208590459">
                <BC.ImgBox>
                  <BC.Img>
                    <img src={bookImg3} alt="도서이미지" />
                  </BC.Img>
                  <BC.Info>
                    <div>1%를 읽는 힘</div>
                    <div>메르토네이도</div>
                    <div>2023.08.30</div>
                  </BC.Info>
                </BC.ImgBox>
              </BC.StyledLink>
              <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000202687816">
                <BC.ImgBox>
                  <BC.Img>
                    <img src={bookImg4} alt="도서이미지" />
                  </BC.Img>
                  <BC.Info>
                    <div>아메리칸 프로메테우스</div>
                    <div>카이버드외/사이언스북스</div>
                    <div>2023.06.12</div>
                  </BC.Info>
                </BC.ImgBox>
              </BC.StyledLink>
            </BC.List>{' '}
          </BC.Wrapper>
        </BC.SliederBox>
      </BC.Box>
    </BC.Wrapper>
  );
};

export default Contest;
