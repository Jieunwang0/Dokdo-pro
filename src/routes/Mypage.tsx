import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginComponent from '../pages/login/Login';
import SignupComponent from '../pages/signup/Signup';
import SignupSuccessComponent from '../pages/signupsuccess/Signupsuccess';
import EditProfileComponent from '../pages/mypage/editprofile/EditProfile';
import InquiredSuccessComponent from '../pages/mypage/inquiredsuccess/InquiredSuccess';
import InquiryComponent from '../pages/mypage/inquiry/Inquiry';
import LikedGroupsComponent from '../pages/mypage/likedgroups/LikedGroups';
import MyGroupsComponent from '../pages/mypage/mygroups/MyGroups';
import MyPageComponent from '../pages/mypage/mainmypage/MyPage';
import MyPostsComponent from '../pages/mypage/myposts/MyPosts';
import DeleteAccountComponent from '../pages/mypage/deleteaccount/DeleteAccount';
import Layout1 from '../components/layout/layout1/Layout1';
import Layout6 from '../components/layout/layout1/Layout6';
import Layout8 from '../components/layout/layout1/Layout8';
import Layout3 from '../components/layout/layout1/Layout3';

const MypageRoutes = () => {
  return (
    <Routes>
      {/* 로그인 */}
      <Route
        path="/login"
        element={
          <Layout8>
            <LoginComponent />
          </Layout8>
        }
      />
      {/* 회원가입 */}
      <Route
        path="/signup"
        element={
          <Layout8>
            <SignupComponent />
          </Layout8>
        }
      />
      {/* 회원가입 성공 */}
      <Route
        path="/signupsuccess"
        element={
          <Layout1>
            <SignupSuccessComponent />
          </Layout1>
        }
      />
      {/* 마이페이지/회원탈퇴 */}
      <Route
        path="/user/deleteaccount"
        element={
          <Layout8>
            <DeleteAccountComponent />
          </Layout8>
        }
      />
      {/* 마이페이지/내모임 */}
      <Route
        path="/user/mypage/mygroups"
        element={
          <Layout3>
            <MyGroupsComponent />
          </Layout3>
        }
      />
      {/* 마이페이지/내가좋아요한모임 */}
      <Route
        path="/user/mypage/likedgroups"
        element={
          <Layout3>
            <LikedGroupsComponent />
          </Layout3>
        }
      />
      {/* 마이페이지/나의글목록 */}
      <Route
        path="/user/mypage/myposts"
        element={
          <Layout3>
            <MyPostsComponent />
          </Layout3>
        }
      />
      {/* 마이페이지/나의정보수정 */}
      <Route
        path="/user/mypage/editprofile"
        element={
          <Layout8>
            <EditProfileComponent />
          </Layout8>
        }
      />

      {/* 마이페이지/문의하기성공페이지 */}
      <Route
        path="/user/mypage/inquiredsuccess"
        element={
          <Layout1>
            <InquiredSuccessComponent />
          </Layout1>
        }
      />
      {/* 마이페이지/문의하기 */}
      <Route
        path="/user/mypage/inquiry"
        element={
          <Layout6>
            <InquiryComponent />
          </Layout6>
        }
      />
      {/* 마이페이지 */}
      <Route
        path="/user/mypage"
        element={
          <Layout8>
            <MyPageComponent />
          </Layout8>
        }
      />
    </Routes>
  );
};
export default MypageRoutes;
