import React from 'react';
import * as SBox from '@/components/common/selectbox/SelectBox.styled';

interface Option {
  value: string;
  label: string;
}

interface SelectBoxProps {
  options: Option[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
function SelectBox({ options, value, onChange }: SelectBoxProps) {
  return (
    <SBox.SelectWrapper>
      <SBox.StyledSelect value={value} onChange={onChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SBox.StyledSelect>
    </SBox.SelectWrapper>
  );
}
export default SelectBox;
