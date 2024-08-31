import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper } from 'swiper/types';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// import required modules
import { Grid, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function MentorSW() {
    // const {t} = useTranslation()
    const [modal, setModal]=useState(false);
    const [courses, setCourses] = useState([])
    const navigate = useNavigate();
    const url = 'https://c23ca0549a04fc85.mokky.dev/mentor'
  
    const getData = async () => {
      try {
        const response = await axios.get(url)
        setCourses(response.data)
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
        getData()
    }, [])
    // madal
    // const MadalEvenly = ()=>{
    //   setModal(!modal)
    //   }
    //   if(modal) {
    //       document.body.classList.add('active-modal')
    //     } else {
    //       document.body.classList.remove('active-modal')
    //     }
  return (
    <>
      <Swiper
        slidesPerView={5}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
       {
        courses.map((product)=>{
            return(
             <div>
                   <div id='box' key={product.id}>
                    <SwiperSlide className=' border-blue-500 border-[5px] rounded-2xl '><div>
                    <img className='rounded-t-lg ' src={product.img} alt="" />
                    <div className='flex  m-[20px] justify-between'>
                      <div>
                    <button id='butn' className=' px-[10px] bottom-[140px] text-center left-[80px] p-[10px] rounded-2xl bg-blue-500 text-white shadow-2xl'>{product.button}</button>

                      </div>
                      <div>
                    <button onClick={() => navigate(`/mentorSV/${product.id}`)} id='butn' className=' px-[10px] bottom-[140px] text-center left-[80px] p-[10px] rounded-2xl bg-blue-500 text-white shadow-2xl hover:bg-white hover:border-blue-500 hover:text-blue-500 hover:border'>Batafsil</button>

                      </div>
                    </div>
                      </div>
                      </SwiperSlide>
                </div>
             </div>
            )
        })
       }
        {/* <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ50O1S7VgD3uB_R2aP1IagxKzNYod4GOVTVQ&s" alt="" /></SwiperSlide> */}
        {/* <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}