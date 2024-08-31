import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { Link, NavLink } from 'react-scroll'
import { useTranslation } from 'react-i18next'
// import NavbarMenu from '../Menu/Menu';
import HamburgerMenu from '../Menu/Menu';
// import BurgerMenu from '../Menu/Menu';
// import NavbarMenu from '../Menu/Menu';



const lngs ={
  en:{nativeName:' 🇺🇿 | '},
  de:{nativeName:'| 🇺🇸 '}
};

const Navbar = () => {
  const {t,i18n} = useTranslation()

  return (
   <div className='fixed top-0 left-0 w-full  shadow-xl bg-white z-50'>
     <div className='container mx-auto px-16 '>
      <div className='flex justify-between   py-[25px]  items-center '>
        {/* 1 */}
       <div>
       <Link to={'/'} >
       <h1 id='name' className='text-[30px]'>
            K. D E V
        </h1>
       </Link>
       </div>
       {/* 2 */}
       <div className="gap-[60px] text-[20px] flex max-lg:hidden">
            <NavLink className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to={"/"}>{t("learn1")}</NavLink>
            <a className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/#card">{t("learn2")}</a>
            <NavLink className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to={"pages3"}>{t("learn3")}</NavLink>
            <NavLink className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to={"pages4"}>{t("learn4")}</NavLink>
            <NavLink className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to={"pages5"}>{t("learn5")}</NavLink>
          </div>
       {/* 3 */}
       <div className='text-[20px] outline-none'  >
        {/* <select>
            <option>UZ</option>
            <option>  ENG</option>
        </select> */}
       <div className='flex items-center  '>
       <div>
          {
            Object.keys(lngs).map((lng)=>(
              <button type='submit' key={lng} onClick={()=>i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{lngs[lng].nativeName}</button>
            ))
          }
        </div>
        <div id='menu' className='hidden max-lg:block h-[30px] '>
      <HamburgerMenu />
        </div>
       </div>
       </div>
      </div>
      
    </div>
   </div>
  )
}

export default Navbar
