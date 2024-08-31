import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next'


const CardDN = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});
  const {t} = useTranslation()
const [modal, setModal]=useState(false);
const [courses, setCourses] = useState('');
const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [tel, setTel] = useState('');
const [massage, setMassage] = useState('');
// const [loading, setLoading]= useState(flase)

  const getData = async () => {
    try {
      const respons = await axios.get(
        `https://c23ca0549a04fc85.mokky.dev/Courses/${params.id}`
      );
      setData(respons.data);
    } catch (error) {
      seterrorMesg(error.respons.data);
    }
  };

  useEffect(() => {
    getData();
  }, [params]);
  const MadalEvenly = ()=>{
    setModal(!modal)
    }
    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

//   telegram massage
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
  <div className='mt-24'>
            <img className='w-[100%] h-[500px] object-cover' src={data.img} alt="" />
    <div className='container mx-auto px-16 ' >
   
   
        {/* img */}
        <div className='w-[450px] border bg-[#ECF4FF] border-[#7993d8] float-right relative bottom-[400px] rounded-2xl  p-[20px] px-[30px] h-[280px]'>
       <div className='p-[10px]'>
        <h1 className='text-[35px] font-bold'>{data.title}</h1>
        {/* <h2 className='w-[310px]'>{data.text}</h2> */}
        <div className='flex gap-10 py-[20px]  '>
                <div>
                    <h1 className='text-[21px] font-bold'>{t('cardCorusel4')}</h1> 
                    <p>{data.price}{t('cards1')}</p>
                </div>
                <div>
                    <h1 className='text-[21px] font-bold'>{t('cardCorusel6')}</h1>
                    <p>{data.duration} {t('cards2')}</p>
                </div>
               
        </div>
        <button  onClick={MadalEvenly}  className='bg-blue-500 text-white p-[8px] px-[40px] rounded-lg mt-[10px]'>
        {t('cardDN7')}
                    </button>
                    {modal && (
        <div className="modal">
          <div onClick={MadalEvenly} className="overlay"></div>
          <div className="modal-content">
            <h2 className='text-[20px] font-bold'>{t('text4')}</h2>
            {/* input */}
			<form onSubmit={handleData}  >

			<div className='flex flex-col gap-3 mt-9 my-[10px]' >
      <select className='bg-white p-[5px] py-[10px] outline-none text-[#363636]' value={courses} onChange={(e) => setCourses(e.target.value)} name="courses">
        <option>{data.title}</option>

      </select>
      {/* <input value={courses} onChange={(e) => setCourses(e.target.value)} name="courses" type="text" placeholder={t('text5')} /> */}
			<input value={name} onChange={(e) => setName(e.target.value)} name="name" className='p-[5px] flex outline-none rounded-sm py-[10px]' type="text" placeholder={t('text6')} />
      <div className='flex w-100%'>
        <div className='w-[100%]'>
     <select value={tel} onChange={(e) => setTel(e.target.value)} name="tel"  className='bg-white p-[5px] py-[11.9px] outline-none w-[100%] text-[#a3a2a2]' >
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
        </div>
       <h1 className="text-[17px] py-[20px] font-bold">
        <Link to={'/'}>
         {`< ${t('cardDN8')}`}
        </Link>
       </h1>

       <h1 className="font-bold text-[30px]">
        {t('cardDN9')}
       </h1>
       <div className="bg-[#ECF4FF] p-[50px] m-[20px] rounded-3xl leading-10">
        <div>
        <h1 className="text-[20px] font-bold">{data.rejaName1}</h1>
        </div>
        <div>
            <h1 className=" text-[20px]">{data.rejaMalumot1}</h1>
            <h1 className=" text-[20px]">{data.rejaMalumot2}</h1>
            <h1 className=" text-[20px]">{data.rejaMalumot3}</h1>
            <h1 className=" text-[20px]">{data.rejaMalumot4}</h1>
            <h1 className=" text-[20px]">{data.rejaMalumot5}</h1>
            <h1 className=" text-[20px]">{data.rejaMalumot6}</h1>
            <h1 className=" text-[20px]">{data.rejaMalumot7}</h1>
            <h1 className=" text-[20px]">{data.rejaMalumot8}</h1>
            <h1 className=" text-[20px]">{data.rejaMalumot9}</h1>
            <h1 className=" text-[20px]">{data.rejaMalumot10}</h1>

        </div>
        <div>
            <h1 className="text-[20px] font-bold">{data.rejaName2}</h1>
        </div>
        <div>
            <h1 className=" text-[20px]">{data.rejaMalumot11}</h1>
            <h1 className=" text-[20px]">{data.rejaMalumot12}</h1>
            <h1 className=" text-[20px]">{data.rejaMalumot13}</h1>
            <h1 className=" text-[20px]">{data.rejaMalumot14}</h1>
            <h1 className=" text-[20px]">{data.rejaMalumot15}</h1>
            <h1 className=" text-[20px]">{data.rejaMalumot16}</h1>
            <h1 className=" text-[20px]">{data.rejaMalumot17}</h1>
            <h1 className=" text-[20px]">{data.rejaMalumot18}</h1>
            <h1 className=" text-[20px]">{data.rejaMalumot19}</h1>
            <h1 className=" text-[20px]">{data.rejaMalumot20}</h1>

        </div>
        <div>
            <h1 className="text-[20px] font-bold">{data.rejaName3}</h1>
        </div>
        <div>
        <h1 className=" text-[20px]">{data.rejaMalumot21}</h1>
        </div>
        <div>
            <h1 className="text-[20px] font-bold">{data.rejaName4}</h1>
        </div>
        <div>
        <h1 className=" text-[20px]">{data.rejaMalumot22}</h1>
        </div>
        <div>
            <h1 className="text-[20px] font-bold">{data.rejaName5}</h1>
        </div>
        <div>
        <h1 className=" text-[20px]">{data.rejaMalumot23}</h1>
        </div>
        <div>
            <h1 className="text-[20px] font-bold">{data.rejaName6}</h1>
        </div>
        <div>
        <h1 className=" text-[20px]">{data.rejaMalumot24}</h1>

        </div>
       </div>

    </div>
  </div>
  );
};

export default CardDN;
