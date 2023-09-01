import AxiosC from '@/helper/AxiosC';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoIcon from '@/assets/img/Logo1.png';
import * as LoginStyle from '@/pages/login/Login.styled';
import { useCookies } from 'react-cookie';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['rememberedEmail']);
  const navigate = useNavigate();

  useEffect(() => {
    // 컴포넌트가 마운트될 때 저장된 이메일을 가져와서 초기값으로 설정합니다.
    const savedEmail = cookies.rememberedEmail;
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const onEmailHandler = (e: { target: { value: any; }; }) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail !== cookies.rememberedEmail) {
      // 입력한 이메일이 저장된 이메일과 다를 경우, 저장된 이메일을 삭제합니다.
      removeCookie('rememberedEmail');
      setRememberMe(false);
    }
  };

  const onPasswordHandler = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const onClickLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!(email && password)) {
      alert('이메일과 비밀번호를 모두 입력하세요.');
      return;
    }

    try {
      const response = await AxiosC.post(
        'http://localhost:3001/api/v1/auth/login',
        {
          email,
          password,
        },
        { withCredentials: true },
      );

      const { data } = response.data;

      if (data.isLogin) {
      if (data.isLogin) {
        alert('로그인 성공하셨습니다.');
        if (rememberMe) {
          setCookie('rememberedEmail', email, {
            maxAge: 60 * 60 * 3,
            path: '/',
          });
        } else {
          removeCookie('rememberedEmail');
        }

        if (data.isAdmin) {
          navigate('/admin/user');
          return;
        }
        navigate('/');
      }
    } catch (e) {
      console.error('로그인 에러:', e);
      alert('다시 시도해주세요.');
    }
  };

  return (
    <LoginStyle.Container>
      <LoginStyle.LogoImg src={LogoIcon} alt="logo" />

      <LoginStyle.Form>
        <LoginStyle.Title>이메일 주소</LoginStyle.Title>
        <LoginStyle.Input
          type="text"
          id="email"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={onEmailHandler}
        />
        <LoginStyle.Title>비밀번호</LoginStyle.Title>
        <LoginStyle.Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={onPasswordHandler}
        />
        <LoginStyle.Save>
          <LoginStyle.SaveId
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={toggleRememberMe}
          />
          <LoginStyle.SaveLabel htmlFor="rememberMe">
            아이디 저장하기
          </LoginStyle.SaveLabel>
        </LoginStyle.Save>
        <LoginStyle.Button type="submit" onClick={onClickLogin}>
          로그인
        </LoginStyle.Button>

        <LoginStyle.SignupButton onClick={() => navigate('/signup')}>
          <p>이메일로 회원가입</p>
        </LoginStyle.SignupButton>
      </LoginStyle.Form>
    </LoginStyle.Container>
  );
}

export default LoginComponent;
