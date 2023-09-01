import React from 'react';
import questions from '@/assets/data/questions.json';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  ResultText,
  // SocialIcons,
  // SocialIcon,
  // SocialIconImage,
  ResultImage,
  ReviewButton,
  TestInstructions,
  RepeatButton,
  StyledLink,
  ImgResult
,
} from '@/pages/literacytest/LiteracytestResult.Style';
// import facebookIcon from '@/assets/img/facebook.png';
// import twitterIcon from '@/assets/img/twitter.png';
// import kakaoIcon from '@/assets/img/카카오톡아이콘.png';

import pigImage from '@/assets/img/pig-image.png';
import smartImage from '@/assets/img/smart-image.png';
// import geniusImage from '@/assets/img/genius-image.jpeg';
//import godImage from '@/assets/img/god-image.png';
//import defaultImage from '@/assets/img/default-image.png';

type LiteracyTestResultProps = {
  userAnswers: number[]; // 사용자가 선택한 답변 인덱스 배열
};

const LiteracyTestResult: React.FC<LiteracyTestResultProps> = ({
  userAnswers,
}) => {
  const navigate = useNavigate();
  // 정답 수 계산
  const correctAnswers = userAnswers.reduce((count, answer, index) => {
    return (
      count + (answer === questions.questions[index].correctAnswer ? 1 : 0)
    );
  }, 0);

  const getResultMessage = () => {
    if (correctAnswers <= 3) return '돼지 입니다.';
    if (correctAnswers <= 6) return '꽤나 똑똑합니다.';
    if (correctAnswers <= 9) return 'iq 146 입니다.';
    if (correctAnswers === 10) return '신 입니다';
    return '';
  };

  const getImageSource = () => {
    if (correctAnswers <= 3) return pigImage;
    if (correctAnswers <= 6) return smartImage;
    //if (correctAnswers <= 9) return geniusImage;
    //if (correctAnswers === 10) return godImage;
    // return defaultImage;
  };

  const imageSource = getImageSource();
  const handleRepeatTest = () => {
    navigate('/literacy-test'); /// 특정 경로로 이동
  };

  return (
    <Container>
      <ImgResult>
        {/* <ResultText>{getResultMessage()}</ResultText> */}
      <ResultText>{`${correctAnswers} / ${questions.questions.length}`}</ResultText>
      <ResultImage src={imageSource} alt="Result" />
      </ImgResult>
      
      <TestInstructions>
        문해력 향상에 도움을 받고 싶다면?
      </TestInstructions>
      <StyledLink to="group/list">독서토론 시작하기</StyledLink>

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
      <TestInstructions>
        문해력이 궁금한 친구에게 공유해 보세요!
      </TestInstructions>
      <ReviewButton>틀린 문제 확인하기</ReviewButton>
      <RepeatButton onClick={handleRepeatTest}>
        ✔ 테스트 다시하기 ✔
      </RepeatButton>
    </Container>
  );
};

export default LiteracyTestResult;
