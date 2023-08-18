import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center; // 수평 중앙 정렬
    justify-content: center; // 수직 중앙 정렬
    width: 474px;
    height: 100vh; // 화면의 높이만큼 설정
`;

export const ResultText = styled.div`
    font-size: 24px; // 원하는 글꼴 크기로 설정
    font-weight: bold; // 원하는 글꼴 두께로 설정
    color: #333; // 원하는 색상으로 설정
    margin: 20px; // 원하는 마진으로 설정
`;
