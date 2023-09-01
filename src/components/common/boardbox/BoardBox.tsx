// BoardBox.tsx
import React from 'react';
import * as BB from '@/components/common/boardbox/BoardBox.styled';
import BoardImgBox from '@/components/common/boardbox/BoardImgBox';

import { useNavigate } from 'react-router-dom';
import defaultImage from '@/assets/img/Logo1.png';

interface BoardData {
  _id: string;
  group_id: number;
  post_id: number;
  user_id: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  profile: string;
  name: string;
  isRecruit: boolean;
  maxMember: number;
  meeting: number;
  leader: number;
  like: number;

  tags: object;
  introduction: string;
  place: string;
  search: {
    location: string;
    day: string;
    genre: string;
    age: number;
  };
  mem: {
    _id: string;
    user_id: number;
    group_id: number;
  };
}

interface BoardBoxProps {
  data?: BoardData;
  isMainPage?: boolean;
}

function BoardBox({ data, isMainPage }: BoardBoxProps) {
  const navigate = useNavigate();

  const generateGroupDetailURL = (sequence: string): string => {
    return `/group/${sequence}/detail`;
  };

  const handleClick = () => {
    if (data) {
      const groupDetailURL = generateGroupDetailURL(data.group_id.toString());
      navigate(groupDetailURL);
    }
  };

  if (!data) {
    return null;
  }

  const { search, introduction, tags, name, like } = data;
  const location = search.location;
  // 이미지 데이터가 있는 경우 데이터의 이미지를 출력, 그렇지 않으면 내가 설정한 이미지를 출력
  const imageSource = data.profile || defaultImage;

  return (
    <BB.Border onClick={handleClick}>
      <BB.TextBox>
        {isMainPage ? (
          // 메인 페이지 렌더링
          <>
            <BB.GroupName>{name}</BB.GroupName>
            <BB.Intro>{introduction}</BB.Intro>
            <BB.Members>☺︎ {like}명 참여중</BB.Members>
            <BB.HashTagDisplay>
              <BB.Place>🇰🇷{location}</BB.Place>
              {Array.isArray(tags) &&
                tags.map((tag, index) => (
                  <BB.HashTags key={index}>{tag}</BB.HashTags>
                ))}
            </BB.HashTagDisplay>
          </>
        ) : (
          // 그룹 페이지 렌더링
          <>
            <BB.HashTagDisplay>
              {Array.isArray(tags) &&
                tags.map((tag, index) => (
                  <BB.HashTags key={index}>{tag}</BB.HashTags>
                ))}
            </BB.HashTagDisplay>
            <BB.GroupName>{name}</BB.GroupName>
            <BB.Intro>{introduction}</BB.Intro>
            <BB.Members>☺︎ {like}명 참여중</BB.Members>
          </>
        )}
      </BB.TextBox>
      <BB.ImgBox>
        <BoardImgBox data={{ profile: imageSource }} />
      </BB.ImgBox>
    </BB.Border>
  );
}

export default BoardBox;
