import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000; // 글자색을 검정색으로 설정
  cursor: pointer;
  font-weight: bold;
  width: 50%;
  text-align: center;
  padding: 10px 0;
`;

export const container = styled.div`
  text-align: center;
  padding-top: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 474px;
  background-color: #fff;
`;
export const menu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 274px;
  height: 48px;
  border-radius: 18px;
  border: 1px solid #a8a8a8;
  background-color: #fff;
  margin-top: 5px;
`;

interface MenuItemProps {
  rightBorder?: boolean;
}

export const menuItem = styled.a<MenuItemProps>`
  color: #000;
  cursor: pointer;
  font-weight: bold;
  line-height: 27px;
  width: 50%;
  border-radius: 18px;
  text-align: center;
  padding: 10px 0;
  font-size: 18px;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: 2px;
`;
export const MenuText = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 35px;
  font-weight: 900;
  line-height: normal;
  margin-top: 30px;

  span {
    color: #FEEA63;
    font-weight: 900;
  }
`;
export const TestInstructions = styled.p`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  white-space: pre-line;

  span.strongHighlight {
    font-weight: bold;
    background-color: yellow;
  }

  span.strong {
    font-weight: bold;
  }
`;

export const image = styled.img`
  width: 460px;
  width: 100%x;
  height: 280px;
  margin-top: 20px;
`;





export const startButton = styled.button`
  padding: 20px 66px;
  font-size: 20px;
  cursor: pointer;
  background-color: #84614b;
  color: #fff;
  border: none;
  border-radius: 50px;
  transition: 0.3s;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  outline: none;
  margin-top: 40px;

  &:hover {
    background-color: #84614b;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;

export const socialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  margin-top: 25px;
`;

export const socialIcon = styled.a`
  margin: 0 10px;
`;
export const socialIconImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
export const participantsContainer = styled.div`
  font-size: 16px;
  color: #333;
  margin: 10px;
  margin-bottom: 30px;
`;
