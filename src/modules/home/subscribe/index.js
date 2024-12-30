import React from "react";
export default function Subscribe() {
    return (
        <div className="py-[60px]">
            <div className="container">
                <h1 className="text-[30px] font-[500] pb-[10px]  ">Subscribe to the BoF Daily Digest</h1>
                <p className=" text-[20px] font-[400] pb-[30px] ">The essential daily round-up of fashion news, analysis, and breaking news alerts.</p>
                <div className="flex justify-between items-center laptop:flex-col laptop:gap-[20px] laptop:items-start ">
                    <input className=" border-[1px] border-[black] py-[6px] px-[10px] w-[850px] laptop:w-[750px] tablet:w-[400px] mobile:w-[260px] " type="text" placeholder="Enter your email address"  ></input>
                    <button className="bg-black text-[white] text-[14px] font-[800] px-[45px] py-[10px]">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}