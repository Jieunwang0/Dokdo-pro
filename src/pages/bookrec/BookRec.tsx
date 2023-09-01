import React from 'react';
import * as BC from '@/pages/bookrec/BookRec.styled'
import bookImg1 from '@/assets/img/책추천12.png';
import bookImg2 from '@/assets/img/책추천13.png';
import bookImg3 from '@/assets/img/책추천3.png';
import bookImg4 from '@/assets/img/책추천4.png';
import bookImg5 from '@/assets/img/책추천5.png';
import bookImg6 from '@/assets/img/책추천6.png';
import bookImg7 from '@/assets/img/책추천7.png';
import bookImg8 from '@/assets/img/책추천8.png';
import bookImg9 from '@/assets/img/책추천9.png';
import bookImg10 from '@/assets/img/책추천2.png';

const BookRec = () => {
  return (
    <BC.Wrapper>
      <BC.Box>
        <BC.BoxTitleBox>
          <BC.BoxTitle>
            독도에서 추천하는
            <br /> 독서 토론 추천도서!
          </BC.BoxTitle>
        </BC.BoxTitleBox>
        <BC.SliederBox>
          <BC.Wrapper>
            <BC.List>
              <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000201142283">
                <BC.ImgBox>
                  <BC.Img>
                    <img src={bookImg1} alt="도서이미지" />
                  </BC.Img>
                  <BC.Info>
                    <div>메리골드 마음 세탁소</div>
                    <div>윤정은/북로망스</div>
                    <div>2023.03.06</div>
                  </BC.Info>
                </BC.ImgBox>
              </BC.StyledLink>
              <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000000781176">
                <BC.ImgBox>
                  <BC.Img>
                    <img src={bookImg2} alt="도서이미지" />
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
            <BC.List>
              <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000208698551">
                <BC.ImgBox>
                  <BC.Img>
                    <img src={bookImg5} alt="도서이미지" />
                  </BC.Img>
                  <BC.Info>
                    <div>일론머스크</div>
                    <div>월터 아이작슨/21세기북스</div>
                    <div>2023.09.19(예정)</div>
                  </BC.Info>
                </BC.ImgBox>
              </BC.StyledLink>
              <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000202340164">
                <BC.ImgBox>
                  <BC.Img>
                    <img src={bookImg6} alt="도서이미지" />
                  </BC.Img>
                  <BC.Info>
                    <div>역행자</div>
                    <div>자청/웅진지식하우스</div>
                    <div>2023.05.29</div>
                  </BC.Info>
                </BC.ImgBox>
              </BC.StyledLink>
            </BC.List>{' '}
            <BC.List>
              <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000201621022">
                <BC.ImgBox>
                  <BC.Img>
                    <img src={bookImg7} alt="도서이미지" />
                  </BC.Img>
                  <BC.Info>
                    <div>도둑 맞은 집중력</div>
                    <div>요한 하리/어크로스</div>
                    <div>2023.04.28</div>
                  </BC.Info>
                </BC.ImgBox>
              </BC.StyledLink>
              <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000202671445">
                <BC.ImgBox>
                  <BC.Img>
                    <img src={bookImg8} alt="도서이미지" />
                  </BC.Img>
                  <BC.Info>
                    <div>문과 남자의 과학 공부</div>
                    <div>유시민/돌베개</div>
                    <div>2023.06.23</div>
                  </BC.Info>
                </BC.ImgBox>
              </BC.StyledLink>
            </BC.List>{' '}
            <BC.List>
              <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000203331812">
                <BC.ImgBox>
                  <BC.Img>
                    <img src={bookImg9} alt="도서이미지" />
                  </BC.Img>
                  <BC.Info>
                    <div>아주 희미한 빛만으로도</div>
                    <div>최은영/문학동네</div>
                    <div>2023.08.07</div>
                  </BC.Info>
                </BC.ImgBox>
              </BC.StyledLink>
              <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000208603716">
                <BC.ImgBox>
                  <BC.Img>
                    <img src={bookImg10} alt="도서이미지" />
                  </BC.Img>
                  <BC.Info>
                    <div>슈퍼노멀</div>
                    <div>주언규/웅진지식하우스</div>
                    <div>2023.08.30</div>
                  </BC.Info>
                </BC.ImgBox>
              </BC.StyledLink>
            </BC.List>
          </BC.Wrapper>
        </BC.SliederBox>
      </BC.Box>
    </BC.Wrapper>
  );
};

export default BookRec;
