import React, { useEffect, useState } from 'react';
import * as MyPageStyle from './MyPage.styled';
import { getCookie, removeCookie } from '../../../helper/Cookie';
import { useNavigate } from 'react-router-dom';
import AxiosC from '../../../helper/AxiosC';
import axios from 'axios';
import Slider5 from '../../../components/common/slider/Slider5';

function MyPageComponent() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState<{
    name: any;
    profilePic: string;
    introduction: string;
  } | null>(null);

  const loginToken = getCookie('loginToken');
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/v1/auth/me', {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
      })
      .then(response => {
        if (response.status === 200) {
          setUserData(response.data.data.getUser);
        } else {
          navigate('/signup');
        }
      })
      .catch(error => {
        console.error('유저 정보 가져오기 에러:', error);
        navigate('/login');
      });
  }, [navigate, loginToken]);

  if (!userData) {
    return <div>로딩 중...</div>;
  }

  // 로그아웃 버튼의 onClick Event
  // 이 함수에서 AxiosC를 axios로 바꾸면 로그아웃이 안된다
  const handleLogout = async () => {
    try {
      const response = await AxiosC.put(
        'http://localhost:3001/api/v1/auth/logout',
      );
      console.log(response);
      // 액세스 토큰 쿠키 삭제
      console.log('삭제 전');
      await removeCookie('loginToken'); // await 추가
      console.log('삭제 후');
      alert('로그아웃에 성공하셨습니다.');
      console.log('navigate 이전');
      navigate('/');
      console.log('navigate 이후');
    } catch (e) {
      console.error('로그아웃 에러:', e);
      alert('서버 오류: 다시 시도해주세요.');
    }
  };

  return (
    <MyPageStyle.Container>
      <MyPageStyle.Wrapper>
        <MyPageStyle.UserIcon
          src={`http://localhost:3001/api/v1/image/profile/${userData.profilePic}`}
          alt="유저 설정 이미지"
        />
        <MyPageStyle.Introduce>
          <MyPageStyle.NickName>{userData.name}</MyPageStyle.NickName>
          <MyPageStyle.SimpleIntro>
            {userData.introduction}
          </MyPageStyle.SimpleIntro>
        </MyPageStyle.Introduce>
      </MyPageStyle.Wrapper>

      <MyPageStyle.Group>
        <MyPageStyle.Title>내 모임</MyPageStyle.Title>
        <MyPageStyle.ManageLink to="/user/mypage/mygroups">
          전체보기
        </MyPageStyle.ManageLink>
      </MyPageStyle.Group>

      <Slider5 />
      <MyPageStyle.Section />
      <MyPageStyle.ManageList>
        <MyPageStyle.ManageTitle>나의 관리 목록</MyPageStyle.ManageTitle>
        <MyPageStyle.ManageLink2 to="/user/mypage/myposts">
          <p>나의 글 목록</p>
        </MyPageStyle.ManageLink2>
        <MyPageStyle.ManageLink2 to="/user/mypage/editprofile">
          <p>나의 정보 수정</p>
        </MyPageStyle.ManageLink2>
      </MyPageStyle.ManageList>
      <MyPageStyle.ManageList2>
        <MyPageStyle.ManageTitle>고객센터</MyPageStyle.ManageTitle>
        <MyPageStyle.ManageLink2 to="/user/mypage/inquiry">
          <p>문의하기</p>
        </MyPageStyle.ManageLink2>
      </MyPageStyle.ManageList2>
      <MyPageStyle.Logout onClick={handleLogout}>로그아웃</MyPageStyle.Logout>
    </MyPageStyle.Container>
  );
}

export default MyPageComponent;
