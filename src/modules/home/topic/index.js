import React from "react";
import lt1 from '../../../assets/images/lt1.avif';
import lt2 from '../../../assets/images/lt2.avif';
import lt3 from '../../../assets/images/lt3.avif';
import lt4 from '../../../assets/images/lt4.avif';
import lt5 from '../../../assets/images/lt5.avif';
import lt6 from '../../../assets/images/lt6.avif';
import lt7 from '../../../assets/images/lt7.avif';
export default function Topic() {
    return (
        <div className="py-10 border-b-[2px] border-black ">
            <div className="container">
                <h1 className="text-[25px] font-[600] my-[10px]">Latest by Topic</h1>
                {/* grid */}
                <div className="grid grid-cols-3 gap-6 tablet:grid-cols-2 mobile:grid-cols-1 ">
                    {/* items  */}
                    <div>
                        <img src={lt1} />
                        <h2 className=" text-[28px] my-2 font-[500] ">Retail</h2>
                        <p className=" text-[14px] mb-[10px] ">Analysis and advice from the front lines of the retail transformation.</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">Lululemon Is at a Crossroads</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">The Rise of Sportswear’s Challenger Brands, in Four Charts</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">After China, Zara Expands Live Shopping Experiment to Europe and US</p>
                    </div>
                    <div>
                        <img src={lt2} />
                        <h2 className=" text-[28px] my-2 font-[500] ">Retail</h2>
                        <p className=" text-[14px] mb-[10px] ">Analysis and advice from the front lines of the retail transformation.</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">Lululemon Is at a Crossroads</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">The Rise of Sportswear’s Challenger Brands, in Four Charts</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">After China, Zara Expands Live Shopping Experiment to Europe and US</p>
                    </div>
                    <div>
                        <img src={lt3} />
                        <h2 className=" text-[28px] my-2 font-[500] ">Retail</h2>
                        <p className=" text-[14px] mb-[10px] ">Analysis and advice from the front lines of the retail transformation.</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">Lululemon Is at a Crossroads</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">The Rise of Sportswear’s Challenger Brands, in Four Charts</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">After China, Zara Expands Live Shopping Experiment to Europe and US</p>
                    </div>
                    <div>
                        <img src={lt4} />
                        <h2 className=" text-[28px] my-2 font-[500] ">Retail</h2>
                        <p className=" text-[14px] mb-[10px] ">Analysis and advice from the front lines of the retail transformation.</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">Lululemon Is at a Crossroads</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">The Rise of Sportswear’s Challenger Brands, in Four Charts</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">After China, Zara Expands Live Shopping Experiment to Europe and US</p>
                    </div>
                    <div>
                        <img src={lt5} />
                        <h2 className=" text-[28px] my-2 font-[500] ">Retail</h2>
                        <p className=" text-[14px] mb-[10px] ">Analysis and advice from the front lines of the retail transformation.</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">Lululemon Is at a Crossroads</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">The Rise of Sportswear’s Challenger Brands, in Four Charts</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">After China, Zara Expands Live Shopping Experiment to Europe and US</p>
                    </div>
                    <div>
                        <img src={lt6} />
                        <h2 className=" text-[28px] my-2 font-[500] ">Retail</h2>
                        <p className=" text-[14px] mb-[10px] ">Analysis and advice from the front lines of the retail transformation.</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">Lululemon Is at a Crossroads</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">The Rise of Sportswear’s Challenger Brands, in Four Charts</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">After China, Zara Expands Live Shopping Experiment to Europe and US</p>
                    </div>
                    <div>
                        <img src={lt7} />
                        <h2 className=" text-[28px] my-2 font-[500] ">Retail</h2>
                        <p className=" text-[14px] mb-[10px] ">Analysis and advice from the front lines of the retail transformation.</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">Lululemon Is at a Crossroads</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">The Rise of Sportswear’s Challenger Brands, in Four Charts</p>
                        <p className=" text-[14px] font-[300] mb-[7px] ml-5">After China, Zara Expands Live Shopping Experiment to Europe and US</p>
                    </div>
                </div>
            </div>
        </div>
    )
}