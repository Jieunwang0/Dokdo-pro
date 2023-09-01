import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/components/common/slider/styles.css';
import CTBox1 from '@/components/common/BookContest/CTBox1';
import CTBox2 from '@/components/common/BookContest/CTBox2';

// 도서 추천 슬라이드에 사용할 컴포넌트
export default function Slider6() {
  return (
    <>
      <Swiper
        //@ts-ignore
        keyboard={true}
        mousewheel={true}
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CTBox1 />
        </SwiperSlide>
        <SwiperSlide>
          <CTBox2 />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
