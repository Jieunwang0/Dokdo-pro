import React, { useEffect, useState } from 'react';
import * as MyGroupsStyle from '@/pages/mypage/mygroups/MyGroups.styled';
import { getCookie } from '@/helper/Cookie';
import axios from 'axios';
import MoreButton from '@/components/common/morebutton/MoreButton';

interface UserData {
  group: number[];
}

interface GroupData {
  name: string;
  introduction: string;
  profile: string;
  tags: string[];
}

export default function MyGroupsComponent() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [groupData, setGroupData] = useState<GroupData[]>([]);

  useEffect(() => {
    const loginToken = getCookie('loginToken');

    axios
      .get('http://localhost:3001/api/v1/auth/me', {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
      })
      .then(response => {
        if (response.status === 200) {
          const userData: UserData = response.data.data;
          setUserData(userData);

          if (userData.group && userData.group.length > 0) {
            fetchMyGroups(userData.group);
          }
        } else {
          console.error('사용자 데이터를 가져오지 못했습니다.');
        }
      })
      .catch(error => {
        console.error('사용자 데이터를 가져오는 중 에러 발생:', error);
      });
  }, []);

  const fetchMyGroups = async (groupIds: number[]) => {
    const groupDataArray: GroupData[] = [];

    for (const groupId of groupIds) {
      try {
        const groupResponse = await axios.get(
          `http://localhost:3001/api/v1/group/${groupId}`,
        );

        if (groupResponse.data.error === null) {
          const groupInfo: GroupData = groupResponse.data.data;
          groupDataArray.push(groupInfo);
        } else {
          console.error(
            '그룹 슬라이드 가져오기 오류:',
            groupResponse.data.error,
          );
        }
      } catch (error) {
        console.error('그룹 슬라이드 가져오기 에러:', error);
      }
    }
    setGroupData(groupDataArray);
  };

  return (
    <MyGroupsStyle.Container>
      <MyGroupsStyle.Wrapper>
        {/* 여기에 그룹의 대표 이미지를 가져와야 함 구현되면!! */}
        <MyGroupsStyle.MyGroupBoardBox>
          <MyGroupsStyle.Title>내가 가입한 모임</MyGroupsStyle.Title>
          {groupData.map((group, index) => (
            <MyGroupsStyle.GroupBoardBox key={index}>
              <MyGroupsStyle.BoardImg
                src={group.profile}
                alt="그룹의 대표 이미지"
              />
              <MyGroupsStyle.RightSide>
                <MyGroupsStyle.GroupName>{group.name}</MyGroupsStyle.GroupName>
                <MyGroupsStyle.GroupIntro>
                  {group.introduction}
                </MyGroupsStyle.GroupIntro>
                <MyGroupsStyle.GroupTags>
                  {group.tags.map((tag, tagIndex) => (
                    <MyGroupsStyle.GroupTag key={tagIndex}>
                      {tag}
                    </MyGroupsStyle.GroupTag>
                  ))}
                </MyGroupsStyle.GroupTags>
              </MyGroupsStyle.RightSide>
            </MyGroupsStyle.GroupBoardBox>
          ))}
        </MyGroupsStyle.MyGroupBoardBox>
        <MoreButton to="/group/list">더보기</MoreButton>
      </MyGroupsStyle.Wrapper>
    </MyGroupsStyle.Container>
  );
}
