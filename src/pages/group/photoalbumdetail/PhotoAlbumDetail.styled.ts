import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 474px;
`;

export const User = styled.div`
  display: grid;
  grid-template-columns: 75px auto;
  margin: 10px 0;
  width: 90%;
`;

export const EditButton = styled.div`
  font-size: 10px;
  cursor: pointer;
  text-align: right;
  width: 100%;
  padding: 20px 0 0 0;
  margin-right: 40px;
`;

export const DescDisplay = styled.div`
  display: flex;
  flex-direction: column;

  & div {
    padding: 3px 0;
  }
`;

export const UserName = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const MMDD = styled.div`
  font-size: 13px;
  color: #727272;
`;

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff7ec;
  overflow: hidden;
  margin: auto;
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const UserWriteBox = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  & img {
    bottom: 0;
    height: 309px;
  }
`;

export const UserContent = styled.div`
  width: 90%;
  height: 100%;
  padding: 10px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 40px;

  & button {
    width: 90px;
    height: 35px;
    border: 1px solid #868686;
    background-color: white;
    margin: 0 10px;
    border-radius: 17px;
    text-align: center;
  }
`;

export const Comment = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 55px;
`;

export const CommentsTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
  width: 100%;
  padding-bottom: 20px;

  & span {
    color: #84614b;
  }
`;

export const CommentsList = styled.div`
  width: 474px;
  height: 55px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ComentsBox = styled.div`
  display: flex;

  width: 90%;
  height: 100%;
`;

export const PFImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-right: 20px;
  width: 50px;
  height: 50px;

  & img {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 50%;
    box-sizing: border-box;
  }
`;

export const CommentProfileImg = styled.div`
  width: 39px;
  height: 39px;
  border-radius: 50%;
  background-color: #fff7ec;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  flex-shrink: 0;
`;

export const UserReply = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  overflow: hidden;
  word-wrap: break-word;
`;

export const UserCommentBox = styled.div`
  display: grid;
  grid-template-columns: 75px auto;
  margin: 20px 10px;
  justify-items: end;
  padding: 5px;

  & div {
    padding: 2px;
  }
`;

export const GroupBoardTitle = styled.div`
  height: 40px;
  width: 100%;
  background-color: #84614b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const CommentTitle = styled.div`
  font-size: 20px;
  padding: 30px 30px 20px 30px;
`;

export const CIWrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 70px;
  font-size: 13px;
  background-color: white;
  width: 472px;
  z-index: 9998;
  border-top: 0.5px solid #d7d7d7;
  margin-bottom: 58px;
`;

export const CIDisplay = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const CIButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  background-color: #84614b;
  height: 50px;
  border-radius: 20px;

  & button {
    border: none;
    color: white;
    background-color: transparent;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const CIInput = styled.div`
  width: 74%;

  & input {
    width: 100%;
    height: 45px;
    border-radius: 20px;
    border: 1px solid #868686;

    &::placeholder {
      padding-left: 10px;
      font-size: 15px;
      color: #a8a8a8;
    }
  }
`;

export const CommentUser = styled.div`
  width: 100%;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 3px;
`;

export const CommentText = styled.div`
  width: 100%;
  margin-bottom: 3px;
`;

export const CommnetCreatedAt = styled.div`
  width: 100%;
  margin-bottom: 3px;
  color: #aeaeae;
`;

export const PFText = styled.div`
  width: 100%;
  margin-bottom: 3px;
`;
