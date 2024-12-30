import React from "react";
import topimage from '../../../assets/images/herobanner one.avif';
import card1 from '../../../assets/images/card1.avif';
import card2 from '../../../assets/images/card2.avif';
import ln1 from '../../../assets/images/ln1.avif';
import ln2 from '../../../assets/images/ln2.avif';
import ln3 from '../../../assets/images/ln3.avif';
import ln4 from '../../../assets/images/ln4.avif';
import ln5 from '../../../assets/images/ln5.avif';
import ln6 from '../../../assets/images/ln6.avif';
import ln7 from '../../../assets/images/ln7.avif';
export default function Herobanner() {
    return (
        <div className="container border-b-[2px] border-black ">
            <div className="grid-900 tablet:grid-cols-1 ">
                {/* left */}
                <div>
                    <div className="top pb-5 mt-8 mb-3 text-[50px] font-[500] border-b-[2px] border-[#545553b9] border-dashed ">
                        <h1 className="mobile:text-[35px]">Lululemon Is at a Crossroads</h1>
                        <img src={topimage} className="w-[100%]" />
                        <p className="text-[18px] font-[700] ">TODAY'S MUST READ
                            <span className="font-[400]"> When the company reports earnings today, analysts expect another quarter of slowing growth. The question is whether Lululemon’s ongoing slowdown is temporary or a sign that the brand is trapped in a downward spiral.</span>
                        </p>
                        <ul className=" ml-4 text-[18px] font-[400] list-disc ">
                            <li>The company's sales growth is slowing dramatically in North America, its most important market, leading to at least one prediction that it could turn negative in the next year.</li>
                            <li>It looks to be transitioning from a fast-rising challenger to an incumbent that's simultaneously facing a slowing market, shifts in fashion and new challengers of its own, like Alo Yoga.</li>
                            <li>Ultimately it may continue growing at a slower but steady pace, but if it can't address its biggest challenges, it could find itself in a period of extended decline watching its relevance fade and sales drop.</li>
                        </ul>
                    </div>
                    <div className="middle mb-[70px] grid grid-cols-2 gap-9 mobile:grid-cols-1 ">
                        <div>
                            <img src={card1} className="mb-5" />
                            <h2 className="font-[600] text-[25px] mb-3 ">What Happens When It’s Too Hot to Make Fashion?</h2>
                            <p>The deadly heatwaves that have swept manufacturing hubs across Asia in recent months highlight a challenge the fashion industry is not prepared for.</p>
                        </div>
                        <div>
                            <img src={card2} className="mb-5" />
                            <h2 className="font-[600] text-[25px] mb-3 ">Fashion Recycling’s Second Act</h2>
                            <p>The nascent textile-to-textile recycling industry is emerging from crisis with fresh momentum, as Swedish pioneer Renewcell is rescued out of administration and Sri Lankan manufacturing giant MAS pledges to buy thousands of metres of recycled polyester.</p>
                        </div>
                    </div>
                    <div className="bottom ">
                        <h1 className=" font-[500] text-[30px] border-b-[2px] border-black ">Latest News & Analysis</h1>
                        <div className=" py-[15px] flex justify-between  border-b-2 border-[#555454] border-dashed mobile:flex-col-reverse ">
                            <div className=" w-[60%] mobile:w-[100%] ">
                                <p className=" mb-2 text-[14px] font-[800] ">LUXURY</p>
                                <p className=" mb-[10px] font-[400] text-[30px] leading-[40px] ">Inside Louis Vuitton’s High Jewellery Ambitions</p>
                                <span className="font-[350] text-[14px] ">Artistic director Francesca Amfitheatrof has forged a creative identity for Louis Vuitton’s ambitious jewellery program — whose estimated sales have reached €1 billion — by combining cutting-edge craftsmanship with an unabashed embrace of the luxury giant’s logo and codes.</span>
                                <p className=" text-[#887f7f] mt-[10px] text-[12px] font-[500] ">05 June 2024</p>
                            </div>
                            <div>
                                <img src={ln1} className=" w-[300px] h-[200px] mobile:w-[100%] mobile:h-[100%] " />
                            </div>
                        </div>
                        <div className=" py-[15px] flex justify-between  border-b-2 border-[#555454] border-dashed mobile:flex-col-reverse ">
                            <div className=" w-[60%] mobile:w-[100%] ">
                                <p className=" mb-2 text-[14px] font-[800] ">LUXURY</p>
                                <p className=" mb-[10px] font-[400] text-[30px] leading-[40px] ">Inside Louis Vuitton’s High Jewellery Ambitions</p>
                                <span className="font-[350] text-[14px] ">Artistic director Francesca Amfitheatrof has forged a creative identity for Louis Vuitton’s ambitious jewellery program — whose estimated sales have reached €1 billion — by combining cutting-edge craftsmanship with an unabashed embrace of the luxury giant’s logo and codes.</span>
                                <p className=" text-[#887f7f] mt-[10px] text-[12px] font-[500] ">05 June 2024</p>
                            </div>
                            <div>
                                <img src={ln2} className=" w-[300px] h-[200px] mobile:w-[100%] mobile:h-[100%]  " />
                            </div>
                        </div>
                        <div className=" py-[15px] flex justify-between  border-b-2 border-[#555454] border-dashed mobile:flex-col-reverse ">
                            <div className=" w-[60%] mobile:w-[100%] ">
                                <p className=" mb-2 text-[14px] font-[800] ">LUXURY</p>
                                <p className=" mb-[10px] font-[400] text-[30px] leading-[40px] ">Inside Louis Vuitton’s High Jewellery Ambitions</p>
                                <span className="font-[350] text-[14px] ">Artistic director Francesca Amfitheatrof has forged a creative identity for Louis Vuitton’s ambitious jewellery program — whose estimated sales have reached €1 billion — by combining cutting-edge craftsmanship with an unabashed embrace of the luxury giant’s logo and codes.</span>
                                <p className=" text-[#887f7f] mt-[10px] text-[12px] font-[500] ">05 June 2024</p>
                            </div>
                            <div>
                                <img src={ln3} className=" w-[300px] h-[200px] mobile:w-[100%] mobile:h-[100%]  " />
                            </div>
                        </div>
                        <div className=" py-[15px] flex justify-between  border-b-2 border-[#555454] border-dashed mobile:flex-col-reverse ">
                            <div className=" w-[60%] mobile:w-[100%] ">
                                <p className=" mb-2 text-[14px] font-[800] ">LUXURY</p>
                                <p className=" mb-[10px] font-[400] text-[30px] leading-[40px] ">Inside Louis Vuitton’s High Jewellery Ambitions</p>
                                <span className="font-[350] text-[14px] ">Artistic director Francesca Amfitheatrof has forged a creative identity for Louis Vuitton’s ambitious jewellery program — whose estimated sales have reached €1 billion — by combining cutting-edge craftsmanship with an unabashed embrace of the luxury giant’s logo and codes.</span>
                                <p className=" text-[#887f7f] mt-[10px] text-[12px] font-[500] ">05 June 2024</p>
                            </div>
                            <div>
                                <img src={ln4} className=" w-[300px] h-[200px] mobile:w-[100%] mobile:h-[100%]  " />
                            </div>
                        </div>
                        <div className=" py-[15px] flex justify-between  border-b-2 border-[#555454] border-dashed mobile:flex-col-reverse ">
                            <div className=" w-[60%] mobile:w-[100%] ">
                                <p className=" mb-2 text-[14px] font-[800] ">LUXURY</p>
                                <p className=" mb-[10px] font-[400] text-[30px] leading-[40px] ">Inside Louis Vuitton’s High Jewellery Ambitions</p>
                                <span className="font-[350] text-[14px] ">Artistic director Francesca Amfitheatrof has forged a creative identity for Louis Vuitton’s ambitious jewellery program — whose estimated sales have reached €1 billion — by combining cutting-edge craftsmanship with an unabashed embrace of the luxury giant’s logo and codes.</span>
                                <p className=" text-[#887f7f] mt-[10px] text-[12px] font-[500] ">05 June 2024</p>
                            </div>
                            <div>
                                <img src={ln5} className=" w-[300px] h-[200px] mobile:w-[100%] mobile:h-[100%]  " />
                            </div>
                        </div>
                        <div className=" py-[15px] flex justify-between  border-b-2 border-[#555454] border-dashed mobile:flex-col-reverse ">
                            <div className=" w-[60%] mobile:w-[100%] ">
                                <p className=" mb-2 text-[14px] font-[800] ">LUXURY</p>
                                <p className=" mb-[10px] font-[400] text-[30px] leading-[40px] ">Inside Louis Vuitton’s High Jewellery Ambitions</p>
                                <span className="font-[350] text-[14px] ">Artistic director Francesca Amfitheatrof has forged a creative identity for Louis Vuitton’s ambitious jewellery program — whose estimated sales have reached €1 billion — by combining cutting-edge craftsmanship with an unabashed embrace of the luxury giant’s logo and codes.</span>
                                <p className=" text-[#887f7f] mt-[10px] text-[12px] font-[500] ">05 June 2024</p>
                            </div>
                            <div>
                                <img src={ln6} className=" w-[300px] h-[200px] mobile:w-[100%] mobile:h-[100%]  " />
                            </div>
                        </div>
                        <div className=" py-[15px] flex justify-between  border-b-2 border-[#555454] border-dashed mobile:flex-col-reverse ">
                            <div className=" w-[60%] mobile:w-[100%] ">
                                <p className=" mb-2 text-[14px] font-[800] ">LUXURY</p>
                                <p className=" mb-[10px] font-[400] text-[30px] leading-[40px] ">Inside Louis Vuitton’s High Jewellery Ambitions</p>
                                <span className="font-[350] text-[14px] ">Artistic director Francesca Amfitheatrof has forged a creative identity for Louis Vuitton’s ambitious jewellery program — whose estimated sales have reached €1 billion — by combining cutting-edge craftsmanship with an unabashed embrace of the luxury giant’s logo and codes.</span>
                                <p className=" text-[#887f7f] mt-[10px] text-[12px] font-[500] ">05 June 2024</p>
                            </div>
                            <div>
                                <img src={ln7} className=" w-[300px] h-[200px] mobile:w-[100%] mobile:h-[100%]  " />
                            </div>
                        </div>
                        <div className="m-10 flex justify-center items-center ">
                            <button className=" border-[1px] border-black px-[50px] py-[10px] text-[14px] font-[600] ">LOAD MORE</button>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className="mt-[40px]">
                    <h3 className=" font-[700] text-[20px] border-b-[2px] border-black ">THE NEWS IN BRIEF</h3>
                    {/* item  */}
                    <div className=" pb-[15px] border-b-[2px] border-dashed border-[#b9b9b9] ">
                        <p className=" pt-[18px] text-[13px] font-[700] leading-[18px] ">Nike Layoffs Reach Its European Headquarters in the NetherlandsNike is</p>
                        <p className="text-[13px] my-2 leading-[18px] ">laying off about 2 percent of its global workforce as part of a plan to slash $2 billion in costs.</p>
                        <p className="font-[500] text-[12px] text-[#9a9999] ">05 June 2024</p>
                    </div>
                    <div className=" pb-[15px] border-b-[2px] border-dashed border-[#b9b9b9] ">
                        <p className=" pt-[18px] text-[13px] font-[700] leading-[18px] ">Nike Layoffs Reach Its European Headquarters in the NetherlandsNike is</p>
                        <p className="text-[13px] my-2 leading-[18px] ">laying off about 2 percent of its global workforce as part of a plan to slash $2 billion in costs.</p>
                        <p className="font-[500] text-[12px] text-[#9a9999] ">05 June 2024</p>
                    </div>
                    <div className=" pb-[15px] border-b-[2px] border-dashed border-[#b9b9b9] ">
                        <p className=" pt-[18px] text-[13px] font-[700] leading-[18px] ">Nike Layoffs Reach Its European Headquarters in the NetherlandsNike is</p>
                        <p className="text-[13px] my-2 leading-[18px] ">laying off about 2 percent of its global workforce as part of a plan to slash $2 billion in costs.</p>
                        <p className="font-[500] text-[12px] text-[#9a9999] ">05 June 2024</p>
                    </div>
                    <div className=" pb-[15px] border-b-[2px] border-dashed border-[#b9b9b9] ">
                        <p className=" pt-[18px] text-[13px] font-[700] leading-[18px] ">Nike Layoffs Reach Its European Headquarters in the NetherlandsNike is</p>
                        <p className="text-[13px] my-2 leading-[18px] ">laying off about 2 percent of its global workforce as part of a plan to slash $2 billion in costs.</p>
                        <p className="font-[500] text-[12px] text-[#9a9999] ">05 June 2024</p>
                    </div>
                    <div className=" pb-[15px] border-b-[2px] border-dashed border-[#b9b9b9] ">
                        <p className=" pt-[18px] text-[13px] font-[700] leading-[18px] ">Nike Layoffs Reach Its European Headquarters in the NetherlandsNike is</p>
                        <p className="text-[13px] my-2 leading-[18px] ">laying off about 2 percent of its global workforce as part of a plan to slash $2 billion in costs.</p>
                        <p className="font-[500] text-[12px] text-[#9a9999] ">05 June 2024</p>
                    </div>
                    <div className=" pb-[15px] border-b-[2px] border-dashed border-[#b9b9b9] ">
                        <p className=" pt-[18px] text-[13px] font-[700] leading-[18px] ">Nike Layoffs Reach Its European Headquarters in the NetherlandsNike is</p>
                        <p className="text-[13px] my-2 leading-[18px] ">laying off about 2 percent of its global workforce as part of a plan to slash $2 billion in costs.</p>
                        <p className="font-[500] text-[12px] text-[#9a9999] ">05 June 2024</p>
                    </div>
                    <div className=" pb-[15px] border-b-[2px] border-dashed border-[#b9b9b9] ">
                        <p className=" pt-[18px] text-[13px] font-[700] leading-[18px] ">Nike Layoffs Reach Its European Headquarters in the NetherlandsNike is</p>
                        <p className="text-[13px] my-2 leading-[18px] ">laying off about 2 percent of its global workforce as part of a plan to slash $2 billion in costs.</p>
                        <p className="font-[500] text-[12px] text-[#9a9999] ">05 June 2024</p>
                    </div>
                    <div className=" pb-[15px] border-b-[2px] border-dashed border-[#b9b9b9] ">
                        <p className=" pt-[18px] text-[13px] font-[700] leading-[18px] ">Nike Layoffs Reach Its European Headquarters in the NetherlandsNike is</p>
                        <p className="text-[13px] my-2 leading-[18px] ">laying off about 2 percent of its global workforce as part of a plan to slash $2 billion in costs.</p>
                        <p className="font-[500] text-[12px] text-[#9a9999] ">05 June 2024</p>
                    </div>
                    <p className=" my-10 font-[700] text-[14px] ">VIEW MORE</p>
                    {/* most popular */}
                    <div>
                        <h3 className=" font-[700] text-[20px] border-b-[2px] border-black "> MOST POPULAR</h3>
                        <ol className=" max-w-[260px] mt-[20px] ml-[20px] list-decimal">
                            <li className="mb-[10px]">Exclusive: Inside De Beers’ About-Face on Lab-Grown Diamonds</li>
                            <li className="mb-[10px]">Exclusive: Inside De Beers’ About-Face on Lab-Grown Diamonds</li>
                            <li className="mb-[10px]">Exclusive: Inside De Beers’ About-Face on Lab-Grown Diamonds</li>
                            <li className="mb-[10px]">Exclusive: Inside De Beers’ About-Face on Lab-Grown Diamonds</li>
                            <li className="mb-[10px]">Exclusive: Inside De Beers’ About-Face on Lab-Grown Diamonds</li>
                            <li className="mb-[10px]">Exclusive: Inside De Beers’ About-Face on Lab-Grown Diamonds</li>
                            <li className="mb-[10px]">Exclusive: Inside De Beers’ About-Face on Lab-Grown Diamonds</li>
                            <li className="mb-[10px]">Exclusive: Inside De Beers’ About-Face on Lab-Grown Diamonds</li>
                        </ol>
                    </div>
                    {/* latest jobs */}
                    <div className="mt-[40px]">
                        {/* title */}
                        <div className=" pb-[5px] border-b-[2px] border-black flex justify-between items-center ">
                            <h3 className=" font-[700] text-[20px]">LATEST JOBS</h3>
                            <button className=" bg-[#147014] text-[white] text-[13px] font-[700]  py-[8px] px-[15px] border-0 ">BoF CAREERS</button>
                        </div>
                        {/* item  */}
                        <div className="py-[10px] border-b-[2px] border-dashed border-[#c5c5c5] ">
                            <p className=" text-[14px] font-[700] ">Store Director - King of Prussia</p>
                            <p className="  text-[13px]">Tiffany & Co.</p>
                            <p className=" text-[13px] text-[#8f8e8e] ">King of Prussia, Pennsylvania, United States</p>
                        </div>
                        <div className="py-[10px] border-b-[2px] border-dashed border-[#c5c5c5] ">
                            <p className=" text-[14px] font-[700] ">Store Director - King of Prussia</p>
                            <p className="  text-[13px]">Tiffany & Co.</p>
                            <p className=" text-[13px] text-[#8f8e8e] ">King of Prussia, Pennsylvania, United States</p>
                        </div>
                        <div className="py-[10px] border-b-[2px] border-dashed border-[#c5c5c5] ">
                            <p className=" text-[14px] font-[700] ">Store Director - King of Prussia</p>
                            <p className="  text-[13px]">Tiffany & Co.</p>
                            <p className=" text-[13px] text-[#8f8e8e] ">King of Prussia, Pennsylvania, United States</p>
                        </div>
                        <div className="py-[10px] border-b-[2px] border-dashed border-[#c5c5c5] ">
                            <p className=" text-[14px] font-[700] ">Store Director - King of Prussia</p>
                            <p className="  text-[13px]">Tiffany & Co.</p>
                            <p className=" text-[13px] text-[#8f8e8e] ">King of Prussia, Pennsylvania, United States</p>
                        </div>
                        <div className="py-[10px] border-b-[2px] border-dashed border-[#c5c5c5] ">
                            <p className=" text-[14px] font-[700] ">Store Director - King of Prussia</p>
                            <p className="  text-[13px]">Tiffany & Co.</p>
                            <p className=" text-[13px] text-[#8f8e8e] ">King of Prussia, Pennsylvania, United States</p>
                        </div>
                        <div className="py-[10px] border-b-[2px] border-dashed border-[#c5c5c5] ">
                            <p className=" text-[14px] font-[700] ">Store Director - King of Prussia</p>
                            <p className="  text-[13px]">Tiffany & Co.</p>
                            <p className=" text-[13px] text-[#8f8e8e] ">King of Prussia, Pennsylvania, United States</p>
                        </div>
                        <div className="py-[10px] border-b-[2px] border-dashed border-[#c5c5c5] ">
                            <p className=" text-[14px] font-[700] ">Store Director - King of Prussia</p>
                            <p className="  text-[13px]">Tiffany & Co.</p>
                            <p className=" text-[13px] text-[#8f8e8e] ">King of Prussia, Pennsylvania, United States</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}