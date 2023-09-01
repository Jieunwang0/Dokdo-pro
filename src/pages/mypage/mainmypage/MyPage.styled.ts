import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 474px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;
  width: 400px;
  
`;
export const UserIcon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #f2f2f2;
`;

export const Introduce = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: auto;
  overflow: hidden;
  padding-top: 5px;
 padding-left: 30px;
`;

export const NickName = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const SimpleIntro = styled.div`
  font-size: 18px;
  color: #868686;
  padding-top: 15px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 40px;
`;

export const Section = styled.div`
background-color: #f1f1f1;
width: 474px;
height: 12px;
margin-top: 42px;
`;

export const Title = styled.p`
  font-weight: bold;
  text-decoration: none;
  font-size: 20px;
  color: black;
  display: flex;
  padding-right: 305px;
`;

export const ManageList = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  width: 100%;
  margin-bottom: 28px;
  margin-top: 53px;

  border-bottom: 1px solid #d7d7d7;

  & p {
    margin-left: 30px;
    font-size: 20px;
  }
`;

export const ManageList2 = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  width: 100%;
  

  & p {
    font-size: 20px;
    margin-left: 30px;
  }
`;

export const ManageTitle = styled.p`
  
  margin-bottom: 20px;
  font-weight: bold;
`;

export const ManageLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  color: #b1b1b1;

  border-bottom: 1px solid #b1b1b1;
`;

export const ManageLink2 = styled(Link)`
  margin-bottom: 20px;
  text-decoration: none;
  font-size: 12px;
  color: black;
  & p {

    font-size: 18px;
  }
`;

export const Logout = styled.button`
  border: none;
  text-decoration: none;
  border-bottom: 1px solid #b1b1b1;
  font-size: 12px;
  text-decoration: none;
  color: #b1b1b1;
  background-color: white;
  cursor: pointer;
  margin: 15px 0 16px 355px;
`;
