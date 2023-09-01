import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/components/common/slider/styles.css';

import BookAndContestBox from '@/components/common/BookContest/BookAndContestBox';
import BcBox1 from '@/components/common/BookContest/BCBox1';
import BcBox2 from '@/components/common/BookContest/BCBox2';
import BcBox3 from '@/components/common/BookContest/BcBox3';
import BcBox4 from '@/components/common/BookContest/BcBox4';

// 도서 추천 슬라이드에 사용할 컴포넌트
export default function Slider2() {
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
          <BookAndContestBox />
        </SwiperSlide>
        <SwiperSlide>
          <BcBox1 />
        </SwiperSlide>
        <SwiperSlide>
          <BcBox2 />
        </SwiperSlide>
        <SwiperSlide>
          <BcBox3 />
        </SwiperSlide>
        <SwiperSlide>
          <BcBox4 />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
