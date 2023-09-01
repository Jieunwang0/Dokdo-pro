import React, { useState } from 'react';
import {
  Container,
  QuestionText,
  Options,
  OptionButton1,
  OptionButton2,

  CurrentPosition,
  BackButton,
  Navigation,
  ProgressBarContainer,
  ProgressBarFiller,
} from '@/pages/literacytest/OXTestScreen.Style';
import { useNavigate } from 'react-router-dom';
import questionsData from '@/assets/data/ox-questions.json';
import backButtonImage from '@/assets/icon/Vector.png';
type OXTestScreenProps = {
  setUserAnswers: (answers: string[]) => void;
};

const OXTestScreen: React.FC<OXTestScreenProps> = ({ setUserAnswers }) => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [localAnswers, setLocalAnswers] = useState<string[]>([]);
  const questions = questionsData.questions;

  const handleNextQuestion = (option: 'O' | 'X') => {
    const updatedAnswers = [...localAnswers, option];
    setLocalAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setUserAnswers(updatedAnswers);
      navigate('/ox-quiz/screen/result');
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Container>
      <Navigation>
        <BackButton
          onClick={() =>
            currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)
          }
          disabled={currentQuestion === 0}
        >
          <img src={backButtonImage} alt="뒤로 가기" /> {/* 이미지 적용 */}
        </BackButton>
        <CurrentPosition>{`${currentQuestion + 1} / ${
          questions.length
        }`}</CurrentPosition>
      </Navigation>
      <ProgressBarContainer>
        <ProgressBarFiller progress={progress} />
      </ProgressBarContainer>
      <QuestionText>{questions[currentQuestion]?.question}</QuestionText>
      <Options>
        <OptionButton1 onClick={() => handleNextQuestion('O')}>O</OptionButton1>
        <OptionButton2 onClick={() => handleNextQuestion('X')}>X</OptionButton2>
      </Options>
    </Container>
  );
};

export default OXTestScreen;
