import styled from 'styled-components';

export const StyledSelect = styled.select`
  text-align: center;
  font-size: 14px;
  outline: none;
  height: 30px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid white;

  &:focus {
    border-color: #ddd;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
`;
