import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyleHeader = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90px;
  width: 472px;
  margin-bottom: 10px;
  position: fixed;
  z-index: 9999;
  font-family: Pretendard;
  font-weight: 500;
border-left: 1px solid #ddd;
border-right: 1px solid #ddd;
font-size: 15px;

`;

export const Logo = styled.h1`
  font-size: 20px;
  display: flex;
  align-items: center;
  height: 40px;
  white-space: normal;
`;

export const StyleLogo = styled.img`
  height: 27px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65px;
`;

export const Up = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: white;
  margin: 5px 0;
`;

export const Down = styled.div`
padding-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 50px;
  padding: 5px;
  background-color: white;
  color: black;
`;

export const StyledLink = styled(NavLink)`
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #333;
  list-style: none;
  justify-content: center;
  color: black;
  border-bottom: 2px solid transparent;
  height: 100%;

  &.active {
    border-bottom: 5px solid #7c6250;
  }
`;
export const StlyedImg = styled.img`
  width: 27px;
  height: 27px;
`;

export const StlyedImg2 = styled.img`
  width: 34px;
  height: 34px;
`;
