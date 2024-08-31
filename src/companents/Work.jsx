import React from 'react'
import { useTranslation } from 'react-i18next'
import Kopyuter from '../assets/Komuter.png'
import Axborot from '../assets/notes 1.png'
import Praktika from '../assets/image.png'
import Setting from '../assets/setting.png'


const Work = () => {
  const {t} = useTranslation()

  return (
    <div className='container mx-auto px-16 mt-24'>
      <div className='py-[90px]'>
        {/* 1 */}
        <div className='flex flex-col justify-center text-center'>
            <h1 className='text-[39px] lg:text-[50px] font-bold'>{t('work1')}</h1>
            <p>{t('work2')}</p>
        </div>
        {/* 2 */}
        <div id='work2' className=' mt-[60px] grid grid-cols-1 gap-[20px] 2xl:grid-cols-3 2xl:grid-cols-4 lg:grid-cols-2 '>
        {/* 1 */}
        <div className='flex flex-col justify-center text-center items-center p-[10px] hover:bg-[#f5f4f4] hover:rounded-xl hover:transition-all '>
            <img className='w-[120px] h-[120px] py-[10px]' src={Kopyuter} alt="" />
            <h1 className='text-[35px] font-bold py-[5px]'>{t('work3')}</h1>
            <p className='py-[7px]'>{t('work4')}</p>
        </div>
        {/* 2 */}
        <div className='flex flex-col justify-center text-center items-center p-[10px] hover:bg-[#f5f4f4] hover:rounded-xl hover:transition-all '>
            <img className='w-[120px] h-[120px] py-[10px]' src={Axborot} alt="" />
            <h1 className='text-[35px] font-bold py-[5px]'>{t('work5')}</h1>
            <p className='py-[7px]'>{t('work6')}</p>
        </div>
        {/* 3 */}
        <div className='flex flex-col justify-center text-center items-center p-[10px] hover:bg-[#f5f4f4] hover:rounded-xl hover:transition-all '>
            <img className='w-[120px] h-[120px] py-[10px]' src={Praktika} alt="" />
            <h1 className='text-[35px] font-bold py-[5px]'>{t('work7')}</h1>
            <p className='py-[7px]'>{t('work8')}</p>
        </div>
        {/* 4 */}
        <div className='flex flex-col justify-center text-center items-center p-[10px] hover:bg-[#f5f4f4] hover:rounded-xl hover:transition-all '>
            <img className='w-[120px] h-[120px] py-[10px]' src={Setting} alt="" />
            <h1 className='text-[35px] font-bold py-[5px]'>{t('work9')}</h1>
            <p className='py-[7px]'>{t('work10')}</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Work
