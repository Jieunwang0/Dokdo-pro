import React from 'react';
import styled from 'styled-components';
import PenIcon from '@/assets/icon/PenIcon.png';
import { Link, useParams } from 'react-router-dom';

function PenFooter() {
  const { groupId } = useParams<{ groupId: string }>(); // 파라미터 이름을 groupId로 변경

  return (
    <Wrapper>
      <Display>
        <Link to={`/group/${groupId}/photowrite`}>
          <Button>
            <img src={PenIcon} alt="" />
          </Button>
        </Link>
      </Display>
    </Wrapper>
  );
}

export default PenFooter;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 140px;
  font-size: 13px;
  background-color: transparent;
  width: 472px;
  z-index: 9998;
`;

const Display = styled.div`
  width: 95%;
  display: flex;
  justify-content: end;
`;

const Button = styled.button`
  width: 60px;
  height: 60px;
  background-color: white;
  cursor: pointer;
  border-radius: 50%;
  border: 3px solid black;
  & img {
    width: 40px;
    height: 40px;
  }
`;
