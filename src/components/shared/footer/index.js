import React from "react";
import footerimage from '../../../assets/images/footerimage.avif';
export default function Footer() {
    return (
        <footer className=" bg-[#1d1d1b] text-[white] pt-[70px] ">
            <div className="container">
                <h1 className=" text-[28px] ">The Business of Fashion</h1>
                <p className=" text-[13px] ">Agenda-setting intelligence, analysis and advice for the global fashion community.</p>
                {/* grid  */}
                <div className="grid grid-cols-3 gap-[20px] tablet:grid-cols-2 mobile:grid-cols-1 ">
                    {/* item  */}
                    <div className="pt-[20px]">
                        <h4 className="uppercase mb-[10px] border-b-[1px] border-[#a4a4a4]  text-[14px] font-[700] ">about us</h4>
                         <p className=" text-[14px] pb-[5px] ">About Us</p>
                         <p className=" text-[14px] pb-[5px]">What We Do</p>
                         <p className=" text-[14px] pb-[5px]">Our Journalism</p>
                         <p className=" text-[14px] pb-[5px]">Who We Are</p>
                         <p className=" text-[14px] pb-[5px]">Work With Us</p>
                         <p className=" text-[14px] pb-[5px]">Imran Amed</p>
                    </div>
                    <div className="pt-[20px]">
                        <h4 className="uppercase mb-[10px] border-b-[1px] border-[#a4a4a4]  text-[14px] font-[700] ">about us</h4>
                         <p className=" text-[14px] pb-[5px] ">About Us</p>
                         <p className=" text-[14px] pb-[5px]">What We Do</p>
                         <p className=" text-[14px] pb-[5px]">Our Journalism</p>
                         <p className=" text-[14px] pb-[5px]">Who We Are</p>
                         <p className=" text-[14px] pb-[5px]">Work With Us</p>
                         <p className=" text-[14px] pb-[5px]">Imran Amed</p>
                    </div>
                    <div className="pt-[20px]">
                        <img className=" mt-[20px]" src={footerimage} />
                    </div>
                    <div className="pt-[20px]">
                        <h4 className="uppercase mb-[10px] border-b-[1px] border-[#a4a4a4]  text-[14px] font-[700] ">about us</h4>
                         <p className=" text-[14px] pb-[5px] ">About Us</p>
                         <p className=" text-[14px] pb-[5px]">What We Do</p>
                         <p className=" text-[14px] pb-[5px]">Our Journalism</p>
                         <p className=" text-[14px] pb-[5px]">Who We Are</p>
                         <p className=" text-[14px] pb-[5px]">Work With Us</p>
                         <p className=" text-[14px] pb-[5px]">Imran Amed</p>
                    </div>
                </div>
                <div className=" border-t-[1px] mt-[30px] py-[20px] border-white ">
                    <p className=" text-[12px] ">© 2024 The Business of Fashion. All rights reserved. For more information read our Terms & Conditions, Privacy Policy, Cookie Policy and Accessibility Statement.</p>
                </div>
            </div>
        </footer>
    )
}