import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding-top: 4%;
  flex-direction: column;
  align-items: center;
  width: 474px;
`;

export const ChoiceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  text-align: center;
  width: 100%;
`;

export const HashTagBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-top: solid 1px #ddd;
  border-bottom: solid 1px #ddd;

  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 15px 0;
`;
export const HashTag = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 40px;
  margin-top: 20px;
`;

export const ClickBox = styled.div`
  box-sizing: border-box;
  border: solid 0.8px #b0b0b0;
  border-radius: 5px;
  width: 90%;
  height: 110px;
  padding: 10px;
  margin: 20px;
`;

export const NoResultText = styled.div`
  color: blue;
`;

export const ChoiceImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  width: 100%;
  padding-top: 10px;
`;

export const ChoiceSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 425px;
  padding: 10px;
`;

export const ChoiceGroupBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const NoResultBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 30px 0;
  margin: 20px 0;
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

export const ChoiceBoxTitle = styled.div`
  font-size: 22px;
  padding: 10px;
  font-weight: 700;
  font-weight: bold;
`;

export const ChoiceTitle = styled.div`
  font-size: 25px;
`;

export const ClickedInfoWrapper = styled.div`
  display: inline-block;
  margin: 10px 0 0 10px;
  padding: 5px 10px;
  border: none;
  background-color: #e7e6e6;
  border-radius: 15px;
  font-size: 13px;
  height: 18px;
  color: #505050;
`;

export const DeleteButton = styled.button`
  box-sizing: border-box;
  border: 1px solid #ccc;
  background-color: #e7e6e6;
  color: black;
  border: none;
  cursor: pointer;
`;
export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 90%;
`;
export const ImageRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
  width: 90%;
`;

export const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  background-color: white;
  border: 1px solid #ddd;
  height: 38px;
  border-radius: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  & div {
    font-size: 14px;
  }
`;
