/** @format */

import React from 'react';
import onlinekurs from '../assets/lecture (1) 1.png';
import mutahasismurabbiylar from "../assets/instructor 1.png"
import muvoffaqiyat from "../assets/XMLID_1591_.png"
import { useTranslation } from 'react-i18next'


const Statistika = () => {
	const {t} = useTranslation()

	return (
		<div>
			<div className='container mx-auto px-16 mt-24 ' >

				<div className='flex justify-between py-[50px] px-[80px] bg-[white] shadow-xl rounded-xl   flex-col gap-6 lg:flex-row my-[40px] border-2 border-[#ddd]' >
					{/* 1 */}
					<hr />
					<div className='flex items-center gap-6'>
						<div>
							<img
								className='w-[72px] h-[62px] object-fill '
								src={onlinekurs}
								alt={onlinekurs}
							/>
						</div>
						<div>
							<h1 className='text-[36px] font-bold'>1400+</h1>
							<p className='text-[#086CF9] text-[16px]'>{t('statistika1')}</p>
						</div>
					</div>
          {/* 2 */}
          <div className='flex items-center gap-6'>
						<div>
							<img
								className='w-[72px] h-[62px]  '
								src={mutahasismurabbiylar}
								alt={mutahasismurabbiylar}
							/>
						</div>
						<div>
							<h1 className='text-[36px] font-bold'>1100+</h1>
							<p className='text-[#086CF9] text-[16px]'>{t('statistika2')}</p>
						</div>
					</div>
          {/* 3 */}
          <div className='flex items-center gap-6'>
						<div>
							<img
								className='w-[72px] h-[62px] '
								src={muvoffaqiyat}
								alt={muvoffaqiyat}
							/>
						</div>
						<div>
							<h1 className='text-[36px] font-bold'>800+</h1>
							<p className='text-[#086CF9] text-[16px]'>{t('statistika3')}</p>
						</div>
					</div>
					<hr />
				</div>
			</div>
		</div>
	);
};

export default Statistika;
