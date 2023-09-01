import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  FormGroup,
  StepsContainer,
  StepCircle,
  Input,
  SubmitButton,
  TagButton,
  KeywordGroup,
  KeywordInputGroup,
  TagList,
  Tag,
  RemoveTagButton,
  SubmitButtonDisplay,
} from '@/pages/group/groupcreate/GroupCreatePage2.Styled';

import SelectBox from '@/components/common/selectbox/SelectBox2';

interface GroupCreatePage2Data {
  location: string;
  age: string;
  tag: string[];
}
interface GroupCreatePage2Props {
  data: GroupCreatePage2Data;
  updateData: (newData: Partial<GroupCreatePage2Data>) => void;
  handleNext: () => void;
}

const regions = [
  { value: '', label: '지역' },
  { value: '서울', label: '서울' },
  { value: '부산', label: '부산' },
  { value: '인천', label: '인천' },
  { value: '대구', label: '대구' },
  { value: '울산', label: '울산' },
  { value: '세종', label: '세종' },
  { value: '전남', label: '대전' },
  { value: '전북', label: '전북' },
  { value: '경남', label: '경남' },
  { value: '경북', label: '경북' },
  { value: '제주', label: '제주' },
  { value: '강원', label: '강원' },
  { value: '광주', label: '광주' },
  { value: '경기', label: '경기' },
  { value: '충남', label: '충남' },
  { value: '충북', label: '충북' },
];
const ageRanges = [
  { value: '', label: '연령' },
  { value: '무관', label: '무관' },
  { value: '청소년', label: '청소년' },
  { value: '20대', label: '20대' },
  { value: '30대', label: '30대' },
  { value: '40대', label: '40대' },
  { value: '50대', label: '50대' },
  { value: '60대', label: '60대' },
  { value: '70대', label: '70대' },
];

const GroupCreatePage2: React.FC<GroupCreatePage2Props> = ({
  data,
  updateData,
}) => {
  const navigate = useNavigate();

  const [location, setLocation] = useState(data.location);
  const [age, setAge] = useState(data.age);
  const [tag, setTag] = useState<string[]>(data.tag);
  const [inputTag, setInputTag] = useState<string>('');

  const handleAddTag = () => {
    if (inputTag) {
      setTag(prevTags => [...prevTags, inputTag]);
      setInputTag('');
    }
  };

  const handleSubmit = () => {
    updateData({ location, age, tag });
    handleNext();
  };

  const handleNext = () => {
    navigate('/create-group/step3');
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTag(prevTags => prevTags.filter(tag => tag !== tagToRemove));
  };

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedValue = event.target.value;
    setLocation(selectedValue);
  };
  const handleAgeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setAge(selectedValue);
  };
  return (
    <Container>
      <StepsContainer>
        <StepCircle>1</StepCircle>
        <StepCircle>2</StepCircle>
        <StepCircle>3</StepCircle>
      </StepsContainer>
      <Title>
        독서 토론 모임에 대한 <br /> 정보를 설정해주세요
      </Title>
      <FormGroup>
        <label>모임지역 </label>
        <SelectBox
          options={regions}
          value={location}
          onChange={handleLocationChange}
        />
      </FormGroup>
      <FormGroup>
        <label>연령 </label>
        <SelectBox options={ageRanges} value={age} onChange={handleAgeChange} />
      </FormGroup>
      <KeywordGroup>
        <label>키워드 </label>
        <KeywordInputGroup>
          <Input
            type="text"
            value={inputTag}
            onChange={e => setInputTag(e.target.value)}
            placeholder="키워드를 입력하세요. (최대 5개)"
          />
          <TagButton onClick={handleAddTag}>등록</TagButton>
        </KeywordInputGroup>
        <TagList>
          {tag.map(t => (
            <Tag key={t}>
              {t}
              <RemoveTagButton onClick={() => handleRemoveTag(t)}>
                x
              </RemoveTagButton>
            </Tag>
          ))}
        </TagList>
      </KeywordGroup>
      <SubmitButtonDisplay>
        {' '}
        <SubmitButton onClick={handleSubmit}>다음</SubmitButton>
      </SubmitButtonDisplay>
    </Container>
  );
};

export default GroupCreatePage2;
