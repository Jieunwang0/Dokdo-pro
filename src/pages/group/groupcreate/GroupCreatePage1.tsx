import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  FormGroup,
  FileInputContainer,
  StepsContainer,
  StepCircle,
  Input,
  SubmitButton,
  Form,
 SubmitButtonDisplay, 
} from '@/pages/group/groupcreate/GroupCreatePage1.Styled';
import axios from 'axios'; // API 요청을 위해 axios를 가져옴

interface GroupCreatePage1Data {
  name: string;
  introduction: string;
  image: File | null; // 이미지 파일 또는 null
}

interface GroupCreatePage1Props {
  data: GroupCreatePage1Data;
  updateData: (newData: Partial<GroupCreatePage1Data>) => void;
  handleNext: () => void;
}

const GroupCreatePage1: React.FC<GroupCreatePage1Props> = ({
  data,
  updateData,
  handleNext,
}) => {
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState(data.name);
  const [introduction, setIntroduction] = useState(data.introduction);
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let uploadedImageName = null;
      if (image) {
        uploadedImageName = await uploadImage();
      }

      updateData({
        name,
        introduction,
        image: uploadedImageName,
      });

      handleNext();

      navigate('/create-group/step2');
    } catch (error: any) {
      console.error('에러:', error);
    }
  };

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append('img', image!, 'img');

      const uploadResponse = await axios.post(
        'http://localhost:3001/api/v1/group/images',
        formData,
        { withCredentials: true },
      );

      if (uploadResponse.data.error === null) {
        return uploadResponse.data.data[0];
      } else {
        console.error('이미지 업로드 실패:', uploadResponse.data.error);
        throw new Error('이미지 업로드 실패');
      }
    } catch (error) {
      console.error('이미지 업로드 에러:', error);
      throw error;
    }
  };
  return (
    <Container>
      <StepsContainer>
        <StepCircle>1</StepCircle>
        <StepCircle>2</StepCircle>
        <StepCircle>3</StepCircle>
      </StepsContainer>
      <Title>
        새로운 독서 토론 모임을 <br /> 시작해볼까요?
      </Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label>모임명 </label>
          <Input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="모임명을 입력하세요."
          />
        </FormGroup>

        <FormGroup>
          <label>모임소개 </label>
          <textarea
            value={introduction}
            onChange={e => setIntroduction(e.target.value)}
            placeholder="모임소개를 입력하세요."
          />
        </FormGroup>
        <FileInputContainer>
          <label>사진 업로드 </label>
          <input type="file" onChange={handleImageChange} />
        </FileInputContainer>

        <SubmitButtonDisplay>
        <SubmitButton type="submit">다음</SubmitButton>
        </SubmitButtonDisplay>

      </Form>
    </Container>
  );
};

export default GroupCreatePage1;
