import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";


import React from "react";
const Footers = () => {
  const { t, i18n } = useTranslation();

  return <div className="bg-[#2a426474]">
    <div className="container mx-auto px-16">
      <div className="  p-[30px] grid  sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
        {/* 1 */}
        <div>
        <Link to={"/"}>
          <h1 className="text-3xl font-bold">K.DEV</h1>
            </Link>
        </div>
        {/* 2 */}
        <div>
         <h1 className="text-[30px]">Pages</h1>
         <div className="gap-[60px] text-[20px] max-lg:hidden  ">
            <NavLink className={'block'} to={"/"}>{t("learn1")}</NavLink>
            <a className={'block'} href="/#card">{t("learn2")}</a>
            <NavLink className={'block'} to={"pages3"}>{t("learn3")}</NavLink>
            <NavLink className={'block'} to={"pages4"}>{t("learn4")}</NavLink>
            <NavLink className={'block'} to={"pages5"}>{t("learn5")}</NavLink>
          </div>
        </div>
        {/* 3 */}
        <div className="text-[20px]">
          <h1 className="text-[30px]">Kantackt</h1>
          <p>+998 88 036 09 20</p>
          <p>qadamboy@gmail.com</p>
          <p>www.githubQadamboyDev09</p>
        </div>
      </div>
    </div>
  </div>
};

export default Footers;
