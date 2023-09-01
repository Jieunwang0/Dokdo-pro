// Header.js
import React from 'react';
import * as HD from '@/components/layout/header/Header.styled';
import { Link } from 'react-router-dom';
import searchIcon from '@/assets/icon/newIcon/헤더검색.png';
import notificationIcon from '@/assets/icon/Bell.png';
import logo from '@/assets/icon/RightLogo.png';

function Header() {
  return (
    <HD.StyleHeader>
      <HD.Up>
        <HD.Logo>
          <Link to="/">
            <HD.StyleLogo src={logo} alt="독도 로고" />
          </Link>
        </HD.Logo>
        <HD.Nav>
          <Link to="/search">
            <HD.StlyedImg src={searchIcon} alt="돋보기 아이콘" />
          </Link>
          <Link to="/notifications">
            <HD.StlyedImg2 src={notificationIcon} alt="알림 아이콘" />
          </Link>
        </HD.Nav>
      </HD.Up>
      <HD.Down>
        <HD.StyledLink to="/">HOME</HD.StyledLink>
        <HD.StyledLink to="/group">토론 모임</HD.StyledLink>
        <HD.StyledLink to="/literacy-test">OX퀴즈/테스트</HD.StyledLink>
        <HD.StyledLink to="/bookrec">도서 추천</HD.StyledLink>
      </HD.Down>
    </HD.StyleHeader>
  );
}

export default Header;
