import React from "react";
import card1 from '../../../assets/images/explore card.avif';
export default function Card() {
    return (
        <div className="py-[30px]">
            <div className="container">
                <p className=" text-[13px] font-[700] ">LUXURY</p>
                <h1 className=" text-[45px] font-[500] ">Bridal Gets Its Gen-Z Overhaul</h1>
                <p className=" text-[20px] font-[400] ">A wide spectrum of brands, from emerging labels to mass retailers, are looking to cater to Gen-Z and Millennial brides looking for a more unconventional take on wedding wear — and multiple ensembles.</p>
                <img src={card1} />
            </div>
        </div>
    )
}