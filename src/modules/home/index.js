import React from "react";
import Herobanner from "./herobanner";
import Subscribe from "./subscribe";
import Topic from "./topic";
export default function Home(){
    return(
        <div>
            <Herobanner/>
            <Topic/>
            <Subscribe/>
        </div>
    )
}