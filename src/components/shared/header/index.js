import React from "react";
import menu from '../../../assets/icons/menu.png';
import search from '../../../assets/icons/icons8-search-30.png';
import contacts from '../../../assets/icons/icons8-contacts-32.png';
export default function Header() {
    return (
        <div className="sticky top-0">
            <header className="npm  bg-[white] border-y-[1px] border-gray-400 py-2">
                <div className="container flex justify-between items-center">
                    <div className="header-menu ">
                        <img src={menu} className="w-[35px]" />
                    </div>
                    <div className="header-nav laptop:hidden  ">
                        <nav className="w-[910px] flex justify-between font-[700] text-[14px]">
                            <a>RETAIL</a>
                            <a>LUXURY</a>
                            <a>TECHNOLOGY</a>
                            <a>SUSTAINABILITY</a>
                            <a>MARKETING</a>
                            <a>BEAUTY</a>
                            <a>DTC</a>
                            <a>GLOBAL MARKETS</a>
                            <a>FASHION WEEK</a>
                        </nav>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img className="w-5 h-5" src={search} />
                        <img className="w-6 h-6" src={contacts} />
                    </div>
                </div>
            </header>
            <div className="container bg-yellow">
                <div className="ad py-3 flex justify-between items-center laptop:flex-col laptop:gap-[10px] laptop:items-start  ">
                    <p className="tablet:text-[15px] ">Join BoF Professional today for agenda-setting analysis and advice. Start your 30-day trial for just ₹100.</p>
                    <button className="bg-white py-2 px-8 font-[700] text-[13px] ">START TRIAL</button>
                </div>
            </div>
        </div>
    )
}