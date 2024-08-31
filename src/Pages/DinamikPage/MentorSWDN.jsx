/** @format */

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MentorSWDN = () => {
	const navigate = useNavigate();
	const params = useParams();
	const [data, setData] = useState({});
	const { t } = useTranslation();
	const [modal, setModal] = useState(false);
	const [courses, setCourses] = useState('');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [tel, setTel] = useState('');
	const [massage, setMassage] = useState('');
	// const [loading, setLoading]= useState(flase)

	const getData = async () => {
		try {
			const respons = await axios.get(
				`https://c23ca0549a04fc85.mokky.dev/mentor/${params.id}`
			);
			setData(respons.data);
		} catch (error) {
			seterrorMesg(error.respons.data);
		}
	};

	useEffect(() => {
		getData();
	}, [params]);
	const MadalEvenly = () => {
		setModal(!modal);
	};
	if (modal) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}

	//   telegram massage
	const handleData = (e) => {
		e.preventDefault();

		const courses = e.target.courses.value;
		const name = e.target.name.value;
		const phone = e.target.phone.value;
		const tel = e.target.tel.value;
		const massage = e.target.massage.value;

		if (!courses.length || !name.length || !phone.length || !massage.length) {
			alert(`${t('text11')}`);
		} else {
			alert(`${t('text13')}`);
		}

		const chat_id = '-4267869289';
		const token = '7243337863:AAHpB4nySI2LjvEzhyMJeppTXwJokgFqp6c';
		const my_text = `Tanlangan kursi: ${courses}.                 Ism/Familyasi: ${name}.                  Telefon raqami: ${tel} ${phone}.                             Qo'shimcha xabar: ${massage}`;
		const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(
			my_text
		)}`;

		axios
			.get(url)
			.then((response) => {
				console.log('Message sent', response.data);
			})
			.catch((error) => {
				console.error('Error sending message', error);
			});

		setCourses('');
		setName('');
		setPhone('');
		setTel('');
		setMassage('');
	};
	return (
		<div className='mt-44'>
			<div className='container mx-auto px-16 '>
				<div className=''>
					<div className='flex'>
						<div className='w-[20%]'>
							<h1 className='text-[19px] py-[20px] font-bold'>
								<Link to={'/'}>{`< ${t('cardDN8')}`}</Link>
							</h1>
						</div>
						<div className='w-[60%]'>
							<h1 className='text-center text-5xl'>
								{data.button} haqida batafsil ma'lumot
							</h1>
						</div>
					</div>
					<div className=' flex justify-around p-[40px] border my-[60px]  gap-[40px]'>
						<div>
							<img
								className='w-[300px] h-[300px]'
								src={data.img}
								alt=''
							/>
						</div>
						<div>
							<h1 className='text-[40px] font-bold'>{data.button}</h1>
							<h1 className='text-[20px]'>{data.text}</h1>
							<button
								onClick={MadalEvenly}
								className='bg-blue-500 text-white p-[8px] px-[40px] rounded-lg mt-[10px]'>
								{t('cardDN7')}
							</button>
						</div>
					</div>
				</div>

				{modal && (
					<div className='modal'>
						<div
							onClick={MadalEvenly}
							className='overlay'></div>
						<div className='modal-content'>
							<h2 className='text-[20px] font-bold'>{t('text4')}</h2>
							{/* input */}
							<form onSubmit={handleData}>
								<div className='flex flex-col gap-3 mt-9 my-[10px]'>
									<select
										className='bg-white p-[5px] py-[10px] outline-none text-[#363636]'
										value={courses}
										onChange={(e) => setCourses(e.target.value)}
										name='courses'>
										<option><h1>{data.courses} </h1> </option>
									</select>
									{/* <input value={courses} onChange={(e) => setCourses(e.target.value)} name="courses" type="text" placeholder={t('text5')} /> */}
									<input
										value={name}
										onChange={(e) => setName(e.target.value)}
										name='name'
										className='p-[5px] flex outline-none rounded-sm py-[10px]'
										type='text'
										placeholder={t('text6')}
									/>
									<div className='flex w-100%'>
										<div className='w-[100%]'>
											<select
												value={tel}
												onChange={(e) => setTel(e.target.value)}
												name='tel'
												className='bg-white p-[5px] py-[11.9px] outline-none w-[100%] text-[#a3a2a2]'>
												<option>Uzbekiston (+998)</option>
												<option>Afghanistan (+93)</option>
												<option>Rassiya (+7)</option>
												<option>Albania (+335)</option>
											</select>
										</div>
										<div className='w-[100%]'>
											<input
												value={phone}
												onChange={(e) => setPhone(e.target.value)}
												name='phone'
												className='w-[100%] p-[5px] flex outline-none rounded-sm py-[10px] '
												type='number'
												placeholder={t('text7')}
											/>
										</div>
									</div>
									<textarea
										value={massage}
										onChange={(e) => setMassage(e.target.value)}
										name='massage'
										className='p-[5px] flex outline-none rounded-sm'
										type=''
										placeholder={t('text8')}
										rows={5}></textarea>
									<button className='border w-[100%] border-blue-400 p-2 rounded-lg text-blue-400 hover:bg-blue-400 hover:text-white'>
										{t('text10')}
									</button>
								</div>
							</form>
							<button
								className='close-modal cursor-pointer border-spacing-1 border border-red-500 rounded-lg'
								onClick={MadalEvenly}>
								{t('text9')}
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default MentorSWDN;
