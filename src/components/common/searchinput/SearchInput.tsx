import React from 'react';
import * as SI from '@/components/common/searchinput/SearchInput.styled';
import searchIcon from '@/assets/icon/newIcon/페이지별검색.png';

// props -> { placeholder }
function SearchInput() {
  return (
    <SI.Wrapper>
      {/*placeholder={placeholder} 입력해야 함 */}
      <SI.Input type="text" />
      <SI.Button>
        <SI.Icon src={searchIcon} alt="돋보기 아이콘" />
      </SI.Button>
    </SI.Wrapper>
  );
}

export default SearchInput;
