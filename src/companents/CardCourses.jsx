/** @format */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useTranslation } from 'react-i18next';

// import 'react-loading-skeleton/disk/Skeleton'

const CardCourses = () => {
	const { t } = useTranslation();

	const [courses, setCourses] = useState([]);
	const navigate = useNavigate();
	const url = 'https://c23ca0549a04fc85.mokky.dev/Courses';

	const getData = async () => {
		try {
			const response = await axios.get(url);
			setCourses(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<section id='card' className='bg-[#ECF4FF] pb-[70px] mt-24 '>
			<div  className='container mx-auto px-16'>
				<h1 className='text-[40px] font-bold text-center sm:text-[50px] py-[70px]'>
					{t('cardCorusel1')}
				</h1>
				<div className='grid grid-cols-1 gap-[20px] 2xl:grid-cols-3 lg:grid-cols-2 '>
					{courses.map((product) => {
						return (
							<div  className='container mx-auto px-16' key={product.id}>
								<div >
									<div className=' flex flex-col justify-center  items-center rounded-md p-[10px] '>
										{/* img */}
										<div
										
											className='bg-white m-[20px] p-[5px] rounded-2xl'>
											<img
												className='w-[100%] p-[10px] h-[252px]'
												src={product.img || <Skeleton />}
												alt=''
											/>
											<div className='p-[10px]'>
												<div className='px-[10px]'>
												<h1 className='text-[25px] font-bold'>
													{product.title}
												</h1>
												<h2 className='w-[310px]'>{product.text}</h2>
												</div>
												<div className='flex gap-10 py-[10px] p-[10px]'>
													<div>
														<h1 className='text-[18px] font-bold'>
															{t('cardCorusel4')}
														</h1>
														<p>
															{product.price} {t('cards1')}
														</p>
													</div>
													<div>
														<h1 className='text-[18px] font-bold'>
															{t('cardCorusel6')}
														</h1>
														<p>
															{product.duration} {t('cards2')}
														</p>
													</div>
												</div>
												<button
													onClick={() => navigate(`/Courses/${product.id}`)}
													className='bg-blue-500 text-white p-[5px] mx-[10px] px-[20px] rounded-lg mt-[10px]'>
													{t('cardCorusel7')}
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default CardCourses;
