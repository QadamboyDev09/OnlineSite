/** @format */

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		fallbackLng: 'en',
		resources: {
			en: {
				translation: {
					// Navbar
					learn1: 'Asosiy',
					learn2: 'Kurslar',
					learn3: 'Sahifalar',
					learn4: 'Blog',
					learn5: 'Aloqa uchun',
					// Banner
					text1: `O'z-o'zidan o'rganish kurslari Onlayn`,
					text3: 'Kursga yozilish',
					text4: `Kurslar haqida ma'lumot?`,
					text5: `Kurs nomi...`,
					text6: `Ism/Familya...`,
					text7: `Telefon raqam...`,
					text8: `Xabar qoldirish...`,
					text9: 'Orqaga',
					text10: 'Yuborish',
					text11: `Ma'lumotlarni to'liq to'ldiring?`,
					text12: `Boshiga +998ni qo'yish lozim?`,
					text13: `Sizning so'rovingiz muvoffaqiyatli yuborildi.Yaaqin orada siz bilan bog'lamnamiz?`,

					// Statistika
					statistika1: 'Ishchi hodimlar',
					statistika2: 'Mutaxassis murabbiylar',
					statistika3: 'Muvaffaqiyat hikoyalari',
					// Courses
					courses1: 'Yorqin kelajakni yaratadigan kursingizni toping',
					courses2:
						'salom Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at diam magnis faucibus et faucibus gravida.  malesuada fauci bus iaculis eu. Fusce est, consectetur tempor penatibus sed. Ut dolor, vulputate quam nec aliquam aliquam nisl. Auctor eros, iaculis quam nisi,',
					courses3:
						'uzbek Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit.',
					courses4: `Batafsil ma'lumot`,
					// Work
					work1: 'Bu qanday ishlaydi',
					work2: "Bizning o'zimizga yarasha qulayliklarimiz va nazoratimiz?",
					work3: 'Online kurslar',
					work4: `Bizda onlina va offline kurslarni mavjud`,
					work5: `Eslatmalar yozish`,
					work6: `Bizda narsalar online kelishingizni hojati yo'q`,
					work7: `Har oy imtihon`,
					work8: `Bizda har oyda imtihon o'tkaziladi`,
					work9: `Texnik muammolar`,
					work10: `Bizda o'zimizni stansiya talabga javob beradi`,
					// CardCorusel
					cardCorusel1: 'Bizning barcha kurslarimiz !',
					cardCorusel4: 'Kurs narxi:',
					cardCorusel6: 'Davomiyligi:',
					cardCorusel7: 'Batafsil...',
					cards1: "so'm",
					cards2: 'oy',
					// CardDN
					cardDN7: 'Kursga yozilish',
					cardDN8: 'Orqaga',
					cardDN9: 'Dars rejasi!',
					// Mentor
					mentor1: 'Ustozimiz bilan uchrashing'
				}
			},
			de: {
				translation: {
					// Navbar
					learn1: 'Home',
					learn2: 'Courses',
					learn3: 'Pages',
					learn4: 'Blog',
					learn5: 'For communication',
					// Banner
					text1: 'Self-Paced Learning Courses Online',
					text3: 'Start a coures',
					text4: `Information about courses?`,
					text5: `Course Name...`,
					text6: `Name/Surname...`,
					text7: `Phone number...`,
					text8: `Leave a message...`,
					text9: 'Back',
					text10: 'Seend?',
					text11: 'Complete the details?',
					text12: '+998 is not found',
					text13:
						'Your request has been sent successfully. Will we be in touch with you soon?',

					// Statistika
					statistika1: 'Workers',
					statistika2: 'Professional trainers',
					statistika3: 'Success stories',
					// Courses
					courses1: 'Find your course that will create a bright future for you',
					courses2:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at diam magnis faucibus et faucibus gravida.  malesuada fauci bus iaculis eu. Fusce est, consectetur tempor penatibus sed. Ut dolor, vulputate quam nec aliquam aliquam nisl. Auctor eros, iaculis quam nisi,',
					courses3:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit.',
					courses4: `Learn More`,
					// Work
					work1: 'How It Work',
					work2: 'Our own convenience and control?',
					work3: 'Online courses',
					work4: 'We have online and offline courses',
					work5: 'Writing Notes',
					work6: `We don't need you to come online for everything`,
					work7: 'Exam every month',
					work8: 'We have an exam every month!',
					work9: 'Technical problems',
					work10: 'We have our own station that meets the demand',
					// CardCorusel
					cardCorusel1: 'Our All The Online Courses',
					cardCorusel4: 'Course price:',
					cardCorusel6: 'Duration:',
					cardCorusel7: 'More...',
					cards1: 'soums',
					cards2: 'months',
					// CardDN
					cardDN7: 'Sign up for the course',
					cardDN8: 'Back',
					cardDN9: 'Lesson plan!',
					// Mentor
					mentor1: 'Meet with Our Mentor'
				}
			}
		}
	});
