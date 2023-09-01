import styled from 'styled-components';

export const Border = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: solid 1px #ddd;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  height: 131px;
  padding: 10px;
  margin: 10px 0;
  background-color: white;
`;

export const TextBox = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px;
  width: 285px;
  height: 95%;
  overflow: hidden;
`;

export const ImgBox = styled.div`
  width: 104px;
  height: 104px;
  background-color: #fff7ec;
  object-fit: cover;
  border-radius: 20px;
`;
export const HashTagDisplay = styled.div`
  display: flex;
  & div {
    margin-right: 7px;
  }
`;

export const HashTags = styled.div`
 border: none;
  height: 20px;
  border-radius: 20px;
  background-color: #fff7ec;
  color: #84614b;
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  padding: 2px 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  white-space: nowrap; 
`;

export const GroupName = styled.div`
  text-overflow: ellipsis;
  font-size: 15px;
  font-weight: 600;
`;

export const Intro = styled.div`
  width: 95%;
  color: #707070;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 3px 0;
`;

export const Members = styled.div`
  color: #84614b;
  font-size: 12px;
  font-weight: 500;
`;

export const Place = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18%;
  color: #7e7e7e;
  font-size: 14px;
  font-weight: 500;
`;
