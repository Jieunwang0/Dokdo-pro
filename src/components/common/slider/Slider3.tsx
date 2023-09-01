import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/components/common/slider/5.styles.css';
import MiddleBoardBox from '@/components/common/boardbox/MiddleBoardBox';

import axios from 'axios';
import { MiddleBoardData } from '@/components/common/boardbox/MiddleBoardBox';

// 서버에서 인기 데이터를 가져오는 함수
async function fetchPopularData() {
  try {
    const response = await axios.get(
      'http://localhost:3001/api/v1/group?orderBy=&limit=10&offset=0',
    );
    return response.data.data;
  } catch {
    console.log('error');
    return [];
  }
}

export default function Slider3() {
  const [popularData, setPopularData] = useState<MiddleBoardData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchPopularData();
        setPopularData(data);
      } catch (error) {
        console.error('인기 데이터를 가져오는 중 에러 발생:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <Swiper
      //@ts-ignore
      keyboard={true}
      mousewheel={true}
      cssMode={true}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      {popularData.length === 0 ? (
        <p> 인기순으로 정렬하는 중!</p>
      ) : (
        popularData.map((item, index) => (
          <SwiperSlide key={index}>
            {item.name && <MiddleBoardBox data={item} />}
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
}
