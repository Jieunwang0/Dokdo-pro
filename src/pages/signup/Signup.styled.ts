import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  box-sizing: border-box;
  width: 474px;
  margin: 0 auto;
`;

export const Wrapper = styled.form`
  width: 420px;
  margin: 15px 27px 16px 27px;
  justify-content: center;
`;
export const FormTag = styled.div`
  display: flex;
  margin-top: 30px;
  padding-bottom: 15px;
`;
export const Tag = styled.div`
  display: flex;
  justify-items: left;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.1rem;
`;

export const FormInput = styled.div`
  display: flex;
`;

export const Input = styled.input`
  display: flex;
  font-size: 16px;
  width: 100%;
  height: 50px;
  border-radius: 15px;
  border: 1px solid #cbcbcb;
  padding: 0 15px;

  &::placeholder {
    color: #cbcbcb;
    font-size: 15px;
  }
  &:hover {
    border: 2px solid #d31a38;
  }
`;

export const Alert = styled.div`
  display: flex;
  justify-content: left;
  padding-top: 10px;
  margin-left: 5px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.1rem;

  color: ${({ className }) => (className === 'success' ? 'green' : '#d31a38')};
`;

export const EmailInput = styled(Input)`
  width: 100%;
`;

export const InputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
`;

export const CheckContainer = styled.div`
  display: flex;
  width: 420px;
  margin: 15px 27px 16px 27px;
`;

export const Wrapper2 = styled.form``;

export const CheckWrapper = styled.div`
  box-sizing: border-box;
  border-radius: 4px;

  width: 350px;
`;

export const CheckLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 420px;
`;

export const CheckLabel = styled.label`
  display: flex;
  font-size: 15px;
  padding: 7px;
  color: #484848;
  align-items: center;
  letter-spacing: 0.1rem;
`;

export const AllCheckLabel = styled(CheckLabel)`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.1rem;

  padding: 3px;
  color: black;
`;

export const AllCheckInput = styled.input`
  margin-right: 8px;
  zoom: 1.5;
  cursor: pointer;
`;

export const CheckInput = styled(AllCheckInput)`
  zoom: 1.2;
\
`;

export const CheckBox = styled.div`
  margin-top: 10px;
  
`;

export const SubmitButton = styled(InputButton)`
  width: 100%;
  height: 50px;
  display: flex;
  margin: 80px auto 10px auto;
  background-color: #84614b;
  border: none;
  text-decoration: none;
  color: white;
`;

export const ModalButton = styled.button`
  padding-bottom: 3px;
  border: none;
  background-color: white;
  margin-bottom: 10px;
  cursor: pointer;
  & div {
    font-size: 12px;
    color: #cbcbcb;
    border-bottom: 1px solid #cbcbcb;
  }
`;
export const ModalSubmitButton = styled.button`
  width: 100%;
  height: 30px;
  background-color: #84614b;
  border: none;
  text-decoration: none;
  color: white;
`;

export const Ptag = styled.p`
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 0.1rem;
`;
