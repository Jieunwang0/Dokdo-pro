import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  align-items: center;
  margin: 30px 0;
`;
export const Container = styled.div`
  width: 88px;
  height: 88px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid #ddd;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 55px;
`;

export const Genre = styled.div`
  padding: 7px;
  font-size: 14px;
  text-align: center;
  width: 100%;
  color: black;
`;
export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
