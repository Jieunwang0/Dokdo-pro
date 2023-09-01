import React, { useState, useEffect } from 'react';
import GroupImg from '@/assets/img/독서모임3.png';
import axios from 'axios';
import { getCookie } from '@/helper/Cookie';
import * as GD from '@/pages/group/groupdetail/GroupDetail.styled';

import {
  ModalWrapper,
  ModalHeader,
  ModalContent,
} from '@/pages/group/groupdetail/GroupDetail.styled';
import { useParams } from 'react-router-dom'; // useParams 임포트
import GroupHeader from '@/components/layout/header/GroupHeader';
import Modal from 'react-modal';
Modal.setAppElement('#root');

interface MemberType {
  post: {
    _id: string;
    title: string;
    content: string;
    images: string[];
  };
  user: {
    name: string;
    profilePic: string;
  };
}
interface GroupData {
  group_id: number;
  name: string;
  isRecruit: boolean;
  profile: string;
  leader: number;
  like: number;
  mem: Array<{
    _id: string;
    group_id: number;
    user_id: number;
    createdAt: string;
  }>;
  introduction: string;
  place: string;
  search: {
    _id: string;
    group_id: number;
    location: string;
    day: string;
    genre: string;
    age: string;
    __v: number;
  };
  tags: string[];
  error: any;
  createdAt: string;
}

function GroupDetail() {
  const [groupData, setGroupData] = useState<GroupData | null>(null);
  const { groupId } = useParams<{ groupId: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [schedules, setSchedules] = useState<Array<any>>([]);
  const loginToken = getCookie('loginToken');
  const getLocalStorageKey = () => `schedules_${groupId}`;
  const [members, setMembers] = useState<Array<any>>([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  // Method to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Method to add a schedule
  const addSchedule = (newSchedule: any) => {
    if (schedules.length < 5) {
      const newSchedules = [...schedules, newSchedule];
      setSchedules(newSchedules);
      localStorage.setItem(getLocalStorageKey(), JSON.stringify(newSchedules)); // 새로운 일정 추가될 때 로컬 스토리지에도 저장
      closeModal();
    } else {
      console.log('Schedule limit reached!');
    }
  };

  useEffect(() => {
    // API 요청 함수 정의
    async function fetchAllGroupBoardData(groupId: number) {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/v1/group/${groupId}/posts`,
        );
        if (response.status === 200) {
          setMembers(response.data.data);
        } else {
          console.error('멤버 정보 가져오기 에러:', response.status);
        }
      } catch (error) {
        console.error('멤버 정보 가져오기 에러:', error);
      }
    }

    // 함수 호출
    fetchAllGroupBoardData(Number(groupId));
  }, [groupId]);
  useEffect(() => {
    // 페이지 로드 시 로컬 스토리지에서 해당 groupId의 일정 데이터 불러오기
    const savedSchedules = JSON.parse(
      localStorage.getItem(getLocalStorageKey()) || '[]',
    );
    setSchedules(savedSchedules);
  }, [groupId]); // groupId가 변경될 때만 실행

  useEffect(() => {
    // schedules 상태가 변경될 때마다 로컬 스토리지에 저장
    localStorage.setItem(getLocalStorageKey(), JSON.stringify(schedules));
  }, [schedules, groupId]);
  useEffect(() => {
    // API 요청 함수 정의
    async function fetchGroupData(groupId: number) {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/v1/group/${groupId}`,
          {
            headers: {
              Authorization: `Bearer ${loginToken}`,
            },
            withCredentials: true,
          },
        );
        if (response.status === 200) {
          setGroupData(response.data.data);
        } else {
          console.error('그룹 정보 가져오기 에러:', response.status);
        }
      } catch (error) {
        console.error('그룹 정보 가져오기 에러:', error);
      }
    }

    // 미리 정의한 API 요청 함수를 호출하여 데이터를 가져옴
    fetchGroupData(Number(groupId)); // groupId를 숫자로 변환하여 함수에 전달
  }, [loginToken, groupId]);

  if (!groupData) {
    return <div>로딩 중...</div>;
  }

  //그룹 가입 버튼
  async function handleJoinGroup(e: { preventDefault: () => void }) {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3001/api/v1/auth/group/${groupId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        console.log('그룹 가입 성공:', response.data);
        alert('그룹에 가입되었습니다!');
      } else {
        console.error('그룹 가입 실패:', response.status);
      }
    } catch (error) {
      console.error('그룹 가입 에러:', error);
    }
  }

  return (
    <GD.Wrapper>
      <GD.GroupHeader>
        <GroupHeader data={{ group: Number(groupId) }} />
      </GD.GroupHeader>

      <GD.GroupImage>
        <img src={GroupImg} alt="모임 설정 이미지" />
      </GD.GroupImage>
      <GD.GroupInfo>
        <GD.EditButton>
          <div>▪︎▪︎▪︎</div>
        </GD.EditButton>
        <GD.GroupName>📚{groupData.name}</GD.GroupName>
        <GD.GroupInfoTP>
          <div>🏖️ {groupData.place}</div>
          <div>⏰ 매주 {groupData.search.day}</div>
        </GD.GroupInfoTP>
        <GD.HashTagDisplay>
          <GD.HashTag>
            {groupData.tags.map((tag, index) => (
              <div key={index}>{tag}</div>
            ))}
          </GD.HashTag>
        </GD.HashTagDisplay>
        <GD.GroupInfoBox>
          <div>{groupData.introduction}</div>
        </GD.GroupInfoBox>
      </GD.GroupInfo>
      <GD.Schedule>
        <GD.ScheduleTop>
          <GD.ScheduleTitle>일정</GD.ScheduleTitle>
          <button onClick={openModal}>일정 등록</button>
        </GD.ScheduleTop>

        {schedules.length === 0 ? (
          <GD.NotScheduleBox>등록된 일정이 없습니다.</GD.NotScheduleBox>
        ) : (
          schedules.map((schedule, index) => (
            <GD.ScheduleBox key={index}>
              <GD.SDTitle>{schedule.title}</GD.SDTitle>
              <GD.SDDate>
                🍀 <span>일시</span> {schedule.date}
              </GD.SDDate>
              <GD.SDPlace>
                ❣️ <span>위치</span> {schedule.location}
              </GD.SDPlace>
              <GD.SDDues>
                🤑 <span>회비</span> {schedule.amount}
              </GD.SDDues>
            </GD.ScheduleBox>
          ))
        )}

        {isModalOpen && ( // Modal의 isOpen 대신 조건부 렌더링 사용
          <ModalWrapper>
            <ModalHeader>
              <div>일정 등록</div>
            </ModalHeader>
            <ModalContent>
              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();

                  const target = e.target as typeof e.target & {
                    title: { value: string };
                    date: { value: string };
                    location: { value: string };
                    amount: { value: string };
                  };

                  const newSchedule = {
                    title: target.title.value,
                    date: target.date.value,
                    location: target.location.value,
                    amount: target.amount.value,
                  };

                  addSchedule(newSchedule);
                }}
              >
                <div>
                  <label>제목</label>
                  <input type="text" name="title" required />
                </div>
                <div>
                  <label>일시</label>
                  <input
                    type="text"
                    placeholder="   **월 **일"
                    name="date"
                    required
                  />
                </div>
                <div>
                  <label>위치</label>
                  <input type="text" name="location" required />
                </div>
                <div>
                  <label>금액</label>
                  <input type="text" name="amount" required />
                </div>
                <div className="button-container">
                  <button onClick={closeModal}>취소</button>
                  <button type="submit">일정 추가</button>
                </div>
              </form>
            </ModalContent>
          </ModalWrapper>
        )}
      </GD.Schedule>
      <GD.MemberBox>
        <GD.Member>모임 멤버 ({members.length + 1})</GD.Member>{' '}
        {/* Displaying count of members here */}
        <ul>
          {members.map((member: MemberType, index: number) => (
            <li key={index}>
              <GD.MemberList>
                <GD.MemberImg>
                  <img src={member.post.images[0]} alt="프로필" />
                </GD.MemberImg>
                <GD.Desc>
                  <div>{member.user.name}</div>
                </GD.Desc>
              </GD.MemberList>
            </li>
          ))}
        </ul>
        <GD.ButtonDisplay>
          <GD.NFWrapper>
            <GD.NFDisplay>
              <GD.NFNextBtn>
                <button onClick={handleJoinGroup}>모임 가입하기</button>
              </GD.NFNextBtn>
            </GD.NFDisplay>
          </GD.NFWrapper>
        </GD.ButtonDisplay>
      </GD.MemberBox>
    </GD.Wrapper>
  );
}

export default GroupDetail;
