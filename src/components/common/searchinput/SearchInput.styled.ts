import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 60px;
  display: flex;

  justify-content: center;
  align-items: center;
  width: 474px;
`;

export const Input = styled.input`
  border: 1px solid #E8E8E8;
  border-radius: 30px;
  width: 85%;
  height: 35px;
  background-color: #F3F3F3;
  padding: 10px 10px 10px 20px;
`;

export const Button = styled.button`
  width: 39px;
  height: 39px;
  position: absolute;
  right: 74px;
  background-color: #F3F3F3;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 6%;
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
