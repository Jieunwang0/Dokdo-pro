import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

interface GroupHeaderData {
  group: number;
}

interface GroupHeaderProps {
  data: GroupHeaderData; // data가 필수 필드로 지정됨
}

const GroupHeader: React.FC<GroupHeaderProps> = ({ data }) => {
  const navigate = useNavigate();

  const generateGroupDetailURL = (sequence: string): string => {
    return `/group/${sequence}/detail`;
  };

  const generateGroupBoardURL = (sequence: string): string => {
    return `/group/${sequence}/board`;
  };

  const generateGroupPhotoURL = (sequence: string): string => {
    return `/group/${sequence}/photo`;
  };

  const handleClick = (link: string) => {
    if (data) {
      const groupDetailURL = generateGroupDetailURL(data.group.toString());
      const groupBoardURL = generateGroupBoardURL(data.group.toString());
      const groupPhotoURL = generateGroupPhotoURL(data.group.toString());

      switch (link) {
        case 'home':
          navigate(groupDetailURL);
          break;
        case 'board':
          navigate(groupBoardURL);
          break;
        case 'photo':
          navigate(groupPhotoURL);
          break;
        default:
          break;
      }
    }
  };
  const location = useLocation();
  return (
    <StyleHeader>
      <Down>
        <Button
          onClick={() => handleClick('home')}
          className={
            location.pathname === generateGroupDetailURL(data.group.toString())
              ? 'active'
              : ''
          }
        >
          <div>HOME</div>
        </Button>
        <Button
          onClick={() => handleClick('board')}
          className={
            location.pathname === generateGroupBoardURL(data.group.toString())
              ? 'active'
              : ''
          }
        >
          <div>게시판</div>
        </Button>
        <Button
          onClick={() => handleClick('photo')}
          className={
            location.pathname === generateGroupPhotoURL(data.group.toString())
              ? 'active'
              : ''
          }
        >
          <div>사진첩</div>
        </Button>
      </Down>
    </StyleHeader>
  );
};

export default GroupHeader;

const StyleHeader = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 472px;
  position: fixed;
  padding-right: 2px;
  z-index: 9999;
`;

const Down = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  color: black;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 0;
  margin: 0;
  text-decoration: none;
  background-color: white;
  list-style: none;
  color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 60px;

  & div {
    display: flex;
  }

  &.active {
    border-bottom: 5px solid #7c6250;
    font-weight: bold;
  }
`;
