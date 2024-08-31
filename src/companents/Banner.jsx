
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import axios from "axios"

// import bannerimg from "../assets/bg.png"

const Banner = () => {
const {t} = useTranslation()
const [modal, setModal]=useState(false);
const [courses, setCourses] = useState('');
const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [tel, setTel] = useState('');
const [massage, setMassage] = useState('');

const MadalEvenly = ()=>{
setModal(!modal)
}
if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

// massage telegram
const handleData = (e) => {
    e.preventDefault()

    const courses = e.target.courses.value
    const name= e.target.name.value
    const phone = e.target.phone.value
    const tel = e.target.tel.value
    const massage = e.target.massage.value


    if (!courses.length || !name.length || !phone.length || !massage.length) {
      alert(`${t('text11')}`)
    }else{
		alert(`${t('text13')}`)
	}

    const chat_id = "-4267869289"
    const token = "7243337863:AAHpB4nySI2LjvEzhyMJeppTXwJokgFqp6c"
    const my_text = `Tanlangan kursi: ${courses}.                       Ism/Familyasi: ${name}.                  Telefon raqami: ${tel} ${phone}.                             Qo'shimcha xabar: ${massage}`
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(my_text)}`;

    axios.get(url)
      .then((response) => {
        console.log('Message sent', response.data);
      })
      .catch((error) => {
        console.error('Error sending message', error);
      });

    setCourses('')
    setName('')
    setPhone('')
    setTel('')
    setMassage('')


  }

	return (
		<div id='banner'>
			<div className='container mx-auto px-16 mt-24 '>
				{/* 1 */}
				<div id='bannerr' className='flex flex-col justify-center align-center text-center w-full py-[20px] lg:pt-[270px] pt-[200px]  absolute right-[30px] '>
					<h1 className='text-white text-[36px] w-[100%] font-bold lg:text-[66px] py-[20px] sm:text-[46px] font-serif '>{t('text1')}</h1>
					<p className='w-full   mx-auto text-[15px] text-white py-[20px] lg:text-[19px]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
						vestibulum euismod nullam elementum. Urna, posuere nisi sit gravida
						massa. Ultrices bibendum sagittis pellentesque vitae sit.
					</p>
					<Link>
					<button onClick={MadalEvenly} className='w-[140px] mx-auto  bg-[#086CF9] text-white  rounded-xl cursor-pointer font-black py-[20px]'>{t('text3')}</button>
					</Link>
				</div>
			</div>
			{modal && (
        <div className="modal">
          <div onClick={MadalEvenly} className="overlay"></div>
          <div className="modal-content">
            <h2 className='text-[20px] font-bold'>{t('text4')}</h2>
            {/* input */}
			<form onSubmit={handleData}  >

			<div className='flex flex-col gap-3 mt-9 my-[10px]' >
      <select className='bg-white p-[5px] py-[10px] outline-none text-[#1a1919]' value={courses} onChange={(e) => setCourses(e.target.value)} name="courses">
        <option >Front-End</option>
        <option >Back-End</option>
        <option >Python</option>
        <option >English</option>
      </select>
      {/* <input value={courses} onChange={(e) => setCourses(e.target.value)} name="courses" type="text" placeholder={t('text5')} /> */}
			<input value={name} onChange={(e) => setName(e.target.value)} name="name" className='p-[5px] flex outline-none rounded-sm py-[10px]' type="text" placeholder={t('text6')} />
      <div className='flex w-100%'>
        <div className='w-[100%]'>
     <select value={tel} onChange={(e) => setTel(e.target.value)} name="tel"  className='bg-white p-[5px] py-[11.9px] outline-none w-[100%] text-[#1a1a1a]' >
      <option>Uzbekiston (+998)</option>
      <option>Afghanistan (+93)</option>
      <option>Rassiya (+7)</option>
      <option>Albania (+335)</option>



     </select>
        </div>
        <div className='w-[100%]'>
			<input value={phone} onChange={(e) => setPhone(e.target.value)} name="phone" className='w-[100%] p-[5px] flex outline-none rounded-sm py-[10px] ' type="number" placeholder={t('text7')} />
        </div>
      </div>
			<textarea value={massage} onChange={(e) => setMassage(e.target.value)} name="massage" className='p-[5px] flex outline-none rounded-sm' type="" placeholder={t('text8')} rows={5} ></textarea>
			<button className='border w-[100%] border-blue-400 p-2 rounded-lg text-blue-400 hover:bg-blue-400 hover:text-white'>{t('text10')}</button>
			</div>
			</form>
            <button className="close-modal cursor-pointer border-spacing-1 border border-red-500 rounded-lg" onClick={MadalEvenly}>
              {t('text9')}
            </button>
          </div>
        </div>
      )}
		</div>
	);
};

export default Banner;
