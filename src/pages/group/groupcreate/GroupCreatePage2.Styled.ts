import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-top: 5%;
  flex-direction: column;
  align-items: center;
  width: 474px;
`;

export const StepsContainer = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
  & > div:nth-child(2) {
    background-color: #84614b;
    color: #fdf8ef;
  }
`;

export const StepCircle = styled.div`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #7e7e7e;
  margin-bottom: 20px;
`;

export const Step = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #000000;
`;

export const Title = styled.h1`
  margin: 15px;
  font-size: 27px;
  text-align: center;
  color: #000000;
  margin-bottom: 30px;
  font-weight: bold;
  position: relative;
  top: -15px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column; // 추가한 속성
  align-items: flex-start; // 이전의 center에서 시작으로 변경
  font-size: 18px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 400px;
  position: relative;
  top: -15px;
  color: #000000;

  label {
    margin-bottom: 20px; // 레이블과 입력 필드 사이에 간격 추가
    flex-shrink: 0;
  }

  input,
  textarea {
    padding: 5px;
    box-sizing: border-box;
    background-color: #ededed;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }

  textarea {
    width: 314px;
    height: 296px;
    border-radius: 15px;
  }
`;
export const TagButton = styled.button`
  margin-left: 10px; // 입력 필드와 버튼 사이의 간격
  padding: 5px 10px;
  width: 80px;
  height: 54px;
  color: #ffffff;
  background-color: #84614b; // 임의 배경색 (조정해 주세요)
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ccc; // 호버 시 배경색 (조정해 주세요)
  }
`;

export const FileInputContainer = styled(FormGroup)`
  input[type='file'] {
    font-size: 16px;
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 54px;
  border-radius: 15px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-left: 0px;
`;
export const SubmitButton = styled.button`
  width: 440px;
  height: 66px;
  border-radius: 20px;
  background: #84614b;
  border: none;
  color: white;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  bottom: 65px;
  position: fixed;

  &:hover {
    background: #71503c;
  }
`;

export const SubmitButtonDisplay = styled.div`
  display: flex;
  justify-content: center;
  width: 474px;
`;

export const KeywordGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  width: 100%;
  max-width: 400px;

  label {
    margin-bottom: 10px;
  }
`;

export const KeywordInputGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  input {
    flex: 1;
    padding: 5px;
    box-sizing: border-box;
    background-color: #ededed;
    border: 1px solid #ccc;
    min-width: 0;
    margin-right: 10px; // TagButton과의 간격
  }
`;
export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

export const Tag = styled.div`
  background-color: #e9e9e9;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 15px;
  background-color: #ffffff;
  color: #9b9b9b;
  border: 0.5px solid;
`;

export const RemoveTagButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #9b9b9b;
`;
