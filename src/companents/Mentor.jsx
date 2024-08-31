import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useTranslation } from 'react-i18next'
import MentorSW from './Swiper/MentorSwiper';

// import 'react-loading-skeleton/disk/Skeleton'

const Mentor = () => {
  const {t} = useTranslation()

    const [courses, setCourses] = useState([])
    const navigate = useNavigate();
    const url = 'https://c23ca0549a04fc85.mokky.dev/Courses'
  
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
  return (
  <div  className='pb-[70px] mt-24'>
      <div className='container mx-auto px-16  overflow-hidden  '>
        <h1 className='text-[40px] font-bold text-center sm:text-[50px] py-[70px]'>{t('mentor1')}</h1>
      <div className='w-[1400px] overflow-x-scroll sm:overflow-hidden '>
      <MentorSW/>
      </div>
      </div>
  </div>
  )
}

export default Mentor
