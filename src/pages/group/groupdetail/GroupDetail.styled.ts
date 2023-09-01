import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 474px;
`;

export const GroupHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  margin-bottom: 50px;
  &:hover {
    font-weight: bold;
  }
`;

export const GroupName = styled.div`
  width: 90%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;

// 이미지 유압프레스로 들어가게 해야 함
export const GroupImage = styled.div`
  text-align: right;
  height: 200px;
  width: 100%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const EditButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  margin-bottom: 10px;
  padding: 10px;
  width: 95%;
  text-align: right;

  & div {
    background-color: transparent;
  }
`;

export const HashTagDisplay = styled.div`
  display: flex;
  justify-content: center;
`;

export const HashTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  width: 380px;
  & div {
    padding: 8px;
    background-color: #fff7ec;
    border-radius: 20px;
    width: 80px;
    color: #84614b;
    margin-left: 15px;
    font-size: 14px;
  }
`;
export const GroupInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  height: 400px;

  box-sizing: border-box;
  border-bottom: solid 1px #ddd;
  width: 100%;
`;

export const GroupInfoBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  border-top: 1px solid #eeeeee;
  margin: 5px;

  & div {
    padding: 20px;
  }
`;

export const GroupInfoTitle = styled.div`
  width: 95%;
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
  text-align: center;
`;

export const GroupInfoTP = styled.div`
  display: flex;
  padding: 5px;

  & div {
    padding: 10px 0 0 20px;
    color: #7e7e7e;
    font-weight: 500;
  }
`;

export const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const ScheduleTitle = styled.div`
  text-align: left;
  font-size: 20px;
`;

export const ScheduleTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;

  & button {
    border: none;
    background-color: white;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 20px;
    height: 35px;
    width: 90px;
    font-size: 14px;
  }
`;
export const ScheduleBox = styled.div`
  box-sizing: border-box;

  border: solid 1px #ddd;
  width: 95%;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  margin: 15px 0;

  & div {
    line-height: 20px;
    padding: 3px;
  }
`;

export const SDTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
`;
export const SDDate = styled.div`
  margin-top: 10px;
  font-size: 15px;
  padding: 2px;
  & > span {
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
  }
`;
export const SDPlace = styled.div`
  font-size: 15px;
  padding: 2px;
  & > span {
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
  }
`;
export const SDDues = styled.div`
  font-size: 15px;
  padding: 2px;
  & > span {
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
  }
`;

export const NotScheduleBox = styled.div`
  margin: 15px 0;
  width: 405px;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

export const MemberBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-top: solid 15px #ddd;
`;

export const MemberList = styled.li`
  display: grid;
  grid-template-columns: 75px auto;
  margin: 15px 0;
`;

export const Member = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 40px;
  font-weight: bold;
`;

export const MemberImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ddd;
  overflow: hidden;
  margin: auto;
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-weight: bold;
`;

export const ButtonDisplay = styled.div`
  display: flex;
  justify-content: center;
`;
export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 20%;
  transform: translateY(-50%);
  width: 409px;
  height: 381px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 1000;

  display: flex; // Flexbox 사용
  flex-direction: column; // 수직 방향으로 아이템 배치
`;

export const ModalHeader = styled.div`
  display: flex;
  margin-top: 30px;
  font-weight: bold;
  justify-content: center; // 항목들을 수평 방향으로 중앙에 배치합니다.
  align-items: center; // 항목들을 세로 방향으로 중앙에 배치합니다.
  padding: 10px 15px;
  font-size: 24px;
`;

export const ModalContent = styled.div`
  flex: 1;
  padding: 15px;
  overflow: auto;
  & > form > div {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-left: 10px;
  }

  & > form > div > label {
    width: 60px;
    margin-left: 10px;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
  }

  & > form > div > input {
    flex: 1;
    width: 306px;
    height: 31.6px;
    border-radius: 10px;
    border: 0px solid #ccc;
    background-color: #efefef;
    margin-left: -15px;
    margin-right: 20px;
  }

  & > form > .button-container > button {
    margin-top: 10px;
    width: 76px;
    height: 35px;
    background-color: #84614b;
    color: white;
    border: none;
    border-radius: 15px;
    cursor: pointer;
  }

  & > form > .button-container > button:hover {
    background-color: #ffffff;
    border: 1px solid #84614b;
    color: #84614b;
  }
  & > form > .button-container {
    display: flex;
    justify-content: center;
    gap: 10px; // 버튼들 사이의 간격
  }
`;

export const NFWrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 60px;
  font-size: 13px;
  width: 470px;
  border-top: 0.5px solid #d7d7d7;
  margin-bottom: 58px;
  z-index: 9999;
`;

export const NFDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: white;
`;

export const NFNextBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  background-color: #84614b;
  width: 380px;
  height: 45px;
  border-radius: 20px;

  & button {
    border: none;
    color: white;
    background-color: transparent;
    font-size: 19px;
    font-weight: 700;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
export const DropdownButton = styled.button`
  position: fixed;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  position: absolute;
  right: 21%;
  bottom: 75%;
  font-size: 25px;
  top: 0;
`;

export const DropdownContent = styled.div`
  position: absolute;
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  border-radius: 15px;
  width: 180px;
  height: 80px;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #000;
`;

export const DeleteSection = styled.div`
  display: flex;
  align-items: center;
`;
// 스타일링된 파일 선택 버튼
export const StyledFileInput = styled.input`
  display: none;
`;

export const CustomFileInput = styled.label`
  display: inline-block;
  background-color: #ffffff;
  color: 000;
  padding: 10px 37px;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: #634b36;
  }
`;

// 파일 선택 버튼의 라벨 디자인
export const CustomFileInputLabel = styled.span`
  font-size: 15px;
`;
