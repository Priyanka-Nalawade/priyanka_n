import React from "react";
export default function Services({img,title,discription}){
    return(
        <div className="flex gap-2">
            <div>
                {img}
            </div>
            <div>
                <h4 className="font-bold">{title}</h4>
                <p>{discription}</p>
            </div>
        </div>
    )
}