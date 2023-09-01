import React from 'react';
import * as FT from '@/components/layout/footer/Footer.styled';
import homeIcon from '@/assets/icon/newIcon/푸터_홈1.png';
import groupIcon from '@/assets/icon/newIcon/푸터_둘러보기0.png';
import boardIcon from '@/assets/icon/newIcon/푸터_글작성0.png';
import likeIcon from '@/assets/icon/newIcon/푸터_하트0.png';
import userIcon from '@/assets/icon/newIcon/푸터_마이페이지.png';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

function Footer() {
  const isLoggedIn = cookies.get('loginToken');
  
  return (
    <FT.StyledFooter>
      <FT.MenuItem>
        <FT.StyledLink to="/">
          <img src={homeIcon} alt="홈 아이콘" />
          <div>홈</div>
        </FT.StyledLink>
        <FT.StyledLink to="/group/list">
          <img src={groupIcon} alt="내 모임 아이콘" />
          <div>둘러보기</div>
        </FT.StyledLink>
        <FT.StyledLink to="/create-group/step1">
          <img src={boardIcon} alt="자유 게시판 아이콘" />
          <div>모임 등록</div>
        </FT.StyledLink>
        <FT.StyledLink to="/likes">
          <img src={likeIcon} alt="좋아요 아이콘" />
          <div>좋아요</div>
        </FT.StyledLink>

        {isLoggedIn ? (
          <FT.StyledLink to="/user/mypage">
            <img src={userIcon} alt="마이페이지 아이콘" />
            <div>마이페이지</div>
          </FT.StyledLink>
        ) : (
          <FT.StyledLink to="/login">
            <img src={userIcon} alt="로그인/가입 아이콘" />
            <div>로그인/가입</div>
          </FT.StyledLink>
        )}
      </FT.MenuItem>
    </FT.StyledFooter>
  );
}

export default Footer;
