import React, { useState, useEffect } from 'react';
import {
  container as Container,
  menu as Menu,
  menuItem as MenuItem,
  image as Image,
  startButton as StartButton,
  // socialIcons as SocialIcons,
  // socialIcon as SocialIcon,
  // socialIconImage as SocialIconImage,
  // participantsContainer as ParticipantsContainer,
  StyledLink,
  MenuText,
  TestInstructions,
} from '@/pages/literacytest/LiteracyTestMain.Style';
import { useNavigate } from 'react-router-dom';
import literacyTestImage from '@/assets/img/문해력.png';
// import facebookIcon from '../../assets/img/facebook.png';
// import twitterIcon from '../../assets/img/twitter.png';
// import kakaoIcon from '../../assets/img/카카오톡아이콘.png';
import { useLocation } from 'react-router-dom';

const LiteracyTestMain: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [participants, setParticipants] = useState(0);

  useEffect(() => {
    setParticipants(376);
  }, []);

  const handleStartTest = () => {
    navigate('/literacy-test/screen');
  };

  return (
    <Container>
      <Menu>
        <MenuItem
          style={{
            backgroundColor:
              location.pathname === '/literacy-test'
                ? '#84614B'
                : 'transparent',
          }}
        >
          <StyledLink
            to="/literacy-test"
            style={{ textDecoration: 'none', color: '#FFF' }}
          >
            문해력 테스트
          </StyledLink>
        </MenuItem>
        <MenuItem
          rightBorder
          style={{
            backgroundColor:
              location.pathname === '/ox-quiz' ? '#84614B' : 'transparent',
          }}
        >
          <StyledLink
            to="/ox-quiz"
            style={{ textDecoration: 'none', color: '#818181' }}
          >
            OX 퀴즈
          </StyledLink>
        </MenuItem>
      </Menu>

      <div>
        <Image src={literacyTestImage} alt="Description" />
      </div>
      <TestInstructions>
        <MenuText>
          <span>문해력</span> 진단 테스트
        </MenuText>
        {'\n'}
        테스트는 <span className="strongHighlight">10개의 문항</span>으로
        구성되어 있습니다.
        {'\n'}
        문제를 읽고 정답을 체크해주세요.
        {'\n'}
        {'\n'}
        클릭시 다음 문제로 바로 넘어가니,
        {'\n'}
        <span className="strong">신중하게 선택</span>해주세요.
      </TestInstructions>

      <StartButton onClick={handleStartTest}>테스트 시작하기</StartButton>
      {/* <SocialIcons>
        <SocialIcon href="https://facebook.com">
          <SocialIconImage src={facebookIcon} alt="Facebook" />
        </SocialIcon>
        <SocialIcon href="https://twitter.com">
          <SocialIconImage src={twitterIcon} alt="Twitter" />
        </SocialIcon>
        <SocialIcon href="https://www.kakaocorp.com">
          <SocialIconImage src={kakaoIcon} alt="Kakao" />
        </SocialIcon>
      </SocialIcons> */}
    </Container>
  );
};

export default LiteracyTestMain;
