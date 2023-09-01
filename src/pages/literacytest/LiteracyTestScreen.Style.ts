import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 474px;
  height: 100%;
`;

export const QuestionText = styled.div`
  font-size: 25px;
  margin: 20px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const OptionButton = styled.button`
  padding: 12px 10px;
  margin: 10px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  border: 0.5px solid #aeaeae;
  background: #fff;
  border-radius: 50px;
  transition: background 0.3s ease;

  &:hover {
    font-weight: bold;
    color: #84614b;
    background: #fdf8ef; // 기존에 있던 hover에 대한 배경색 변경
  }

  &:active {
    background: #d0d0d0;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const CurrentPosition = styled.div`
  font-size: 20px;
  margin: 10px;
  font-weight: bold;
  margin-left: auto; // 왼쪽 여백으로 자동 설정
  margin-right: 205px; // 오른쪽 여백으로 자동 설정
`;
export const Navigation = styled.div`
  display: flex;
  align-items: center; // 수직 중앙 정렬
  width: 100%; // 전체 너비 사용
`;
export const BackButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  margin-right: auto;
  margin-left: 25px; // 나머지 오른쪽 공간을 모두 마진으로 사용
  img {
    width: 10px;
    height: 20px;
  }
`;
export const ProgressBarContainer = styled.div`
  width: 90%;
  height: 10px;
  background-color: #f0f0f0;
  margin-bottom: 100px;
`;

export const ProgressBarFiller = styled.div<{ progress: number }>`
  width: ${props => props.progress}%;
  height: 100%;
  border-radius: 20px;
  background-color: #84614b;
`;
