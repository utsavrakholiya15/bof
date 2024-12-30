import React from "react";
import logo from '../../../assets/logo/BofLogo.svg';
export default function Topimage() {
    return (
        <div>
            <div className="bof-logo flex flex-col items-center text-[14px] mb-[30px]">
                <p>The Business of Fashion</p>
                <img src={logo} className="w-[275px]" />
            </div>
        </div>
    )
}