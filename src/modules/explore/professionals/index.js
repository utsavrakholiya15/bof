import React from "react";
export default function Professionals() {
    return (
        <div className="bg-[#ae9b9b1a] py-[30px]" >
            <div className="px-[200px]">
                <h1 className=" text-[30px] ">BoF <span className="text-[#ebbc01]" >PROFESSIONAL</span></h1>
                <p className=" text-[18px] font-[300] mb-[30px] ">Agenda setting intelligence, analysis and advice for the global fashion and beauty community.</p>
                <div className="w-[875px] h-[270px] shadow-xl shadow-[#00000043] bg-white ">
                    <div className="p-[26px] grid grid-cols-2 ">
                        {/* data */}
                        <div>
                            <h3 className=" text-[25px] ">Try unlimited access</h3>
                            <h4 className=" text-[17px] font-[300] ">Only ₹100 for your first 30 days</h4>
                            <ul className="list-disc mt-[20px] ml-[30px] ">
                                <li>Then from ₹900.00 per month</li>
                                <li>Unlimited access to all articles</li>
                                <li>Includes live and on-demand masterclasses</li>
                                <li>Cancel any time during your trial</li>
                            </ul>
                        </div>
                        {/* button */}
                        <div className="flex items-center ">
                            <button className="bg-[#ebbc01] text-[20px] font-[700] py-[10px] px-[30px] ">KEEP READING FOR  ₹100</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}