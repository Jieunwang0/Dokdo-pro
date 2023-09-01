// GroupCreatePage1.Styled.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 474px;
  padding-top: 30px;
`;

export const StepsContainer = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
  & > div:nth-child(3) {
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
  align-items: center;
  font-size: 18px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 400px;
  top: -15px;
  color: #000000;
  label {
    margin-right: 10px;
    flex-shrink: 0;
  }
  input,
  textarea {
    padding: 10px;
    box-sizing: border-box;
    background-color: #ededed;
    border: 1px solid #ccc;
    width: 100%;
  }
  textarea {
    width: 100%;
    height: 296px;
    border-radius: 15px;
  }
`;

export const FileInputContainer = styled(FormGroup)`
  input[type='file'] {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 54px;
  border-radius: 15px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-left: 16px;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
