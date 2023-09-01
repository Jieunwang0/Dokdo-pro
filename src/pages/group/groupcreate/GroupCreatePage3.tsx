import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import SelectBox from '@/components/common/selectbox/SelectBox';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  FormGroup,
  StepsContainer,
  StepCircle,
  Input,
  SubmitButton,
  FormGroupDate,
  Place,
  FormGroupPlace,
} from '@/pages/group/groupcreate/GroupCreatePage3.Styled';

import GenreBox2 from '@/components/common/GenreBox/GenreBox2'; // GenreBox 컴포넌트의 경로를 지정해주세요.

interface GroupCreatePage3Data {
  name: string;
  introduction: string;
  location: string;
  age: string;
  tag: string[];
  genre: string;
  day: string;
  place: string;
}

interface GroupCreatePage3Props {
  data: GroupCreatePage3Data;
  updateData: (newData: Partial<GroupCreatePage3Data>) => void;
}

const GroupCreatePage3: React.FC<GroupCreatePage3Props> = ({
  data,
  updateData,
}) => {
  const [genre, setGenre] = useState(data.genre);
  const [day, setDay] = useState(data.day);
  const [place, setPlace] = useState(data.place);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ message: string } | null>(null);
  const navigate = useNavigate();

  const handlePageSubmit = async () => {
    console.log('GroupCreatePage3: handlePageSubmit is called');

    updateData({
      genre,
      day,
      place,
    });

    setLoading(true);
    setError(null);

    const payload = {
      ...data,
      genre,
      day,
      place,
    };

    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/group/',
        payload,
        { withCredentials: true },
      );
      console.log('Response from the server:', response.data);
    } catch (err) {
      console.error('Error while sending data to the API:', err);

      if ((err as AxiosError).isAxiosError) {
        const axiosError = err as AxiosError;
        setError({ message: axiosError.message });
      } else {
        setError({ message: 'An unknown error occurred.' });
      }
    } finally {
      setLoading(false);
    }
    navigate('/group/list');
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

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <label>장르 </label>
      <FormGroup>
        <GenreBox2 onGenreSelect={setGenre} selectedGenre={genre} />
        <FormGroupDate>
          <div>요일</div>
          <SelectBox
            options={[
              { value: '', label: '모임 일정' },
              { value: '월요일', label: '월요일' },
              { value: '화요일', label: '화요일' },
              { value: '수요일', label: '수요일' },
              { value: '목요일', label: '목요일' },
              { value: '금요일', label: '금요일' },
              { value: '토요일', label: '토요일' },
              { value: '일요일', label: '일요일' },
            ]}
            onChange={event => setDay(event.target.value)}
            value={day}
          />
        </FormGroupDate>
        <Place>
          <FormGroupPlace>
            <div>장소</div>
            <Input
              type="text"
              value={place}
              onChange={e => setPlace(e.target.value)}
              placeholder="장소를 입력하세요."
            />
          </FormGroupPlace>
        </Place>
      </FormGroup>

      <SubmitButton onClick={handlePageSubmit}>모임등록</SubmitButton>
    </Container>
  );
};

export default GroupCreatePage3;
