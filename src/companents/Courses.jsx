import React, { useState } from 'react'
import puple from "../assets/puple.png"
import { useTranslation } from 'react-i18next'
import Video from "../assets/Vector.png"
import MadalVd from "../assets/7 Best Free Learning Websites for Students.mp4"


const Courses = () => {
  const {t} = useTranslation()
const [modal, setModal]=useState(false);

  const MadalEvenly = ()=>{
    setModal(!modal)
    }
    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

  return (
    <div className='container mx-auto px-16 mt-24'>
      <div className='flex justify-between flex-col-reverse lg:flex-row'>
        {/* 1 */}
        <div>
          <div id='corser' >
            <h1 className='text-[32px] w-100% font-bold py-[10px] lg:w-[680px] sm:w-[480px] sm:text-[48px]'>
               {t('courses1')}
            </h1>
            <p className='w-100% text-[16px] py-[10px] lg:w-[520px]'> {t('courses2')}</p>
            <h3 className='text-[20px] w-100% py-[10px] lg:w-[500px]'>{t('courses3')} </h3>
            <button  className='bg-[#086CF9] py-[10px] px-[10px] text-white my-[10px] rounded-lg hover:border hover:border-[#086CF9] hover:bg-white hover:text-[#086CF9]'>{t('courses4')}</button>
          </div>
        </div>
        {/* 2 */}
        <div id='pupleimg'>
          <h1 onClick={MadalEvenly} id='vid' className=' cursor-pointer opacity-95 relative left-[280px] border w-[50px] text-center bg-white align-center p-[16px] rounded-2xl text-white top-[230px]'><img src={Video} alt="" /></h1>
        <img src={puple} alt="" />
        </div>
        {/* madal */}
        {modal && (
        <div  className="modal">
          <div onClick={MadalEvenly} className="overlay"></div>
          <div className="modal-content p-3 "  id='mad'>
            {/* <h2 className='text-[20px] font-bold'>Videoni tomosha qiling</h2> */}
            <video className='   h-[400px] rounded-xl' src={MadalVd} loop playsInline autoPlay muted='true' controls ></video>


            {/* <button className="close-modal cursor-pointer border-spacing-1 border border-red-500 rounded-lg" onClick={MadalEvenly}>
              {t('text9')}
            </button> */}
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Courses
