import React from "react";
export default function Services({img,title,discription}){
    return(
        <div className="flex gap-4 bg-gray-100 dark:bg-slate-600 px-4 py-6">
            <div>
                {img}
            </div>
            <div>
                <h4 className="font-medium text-xl dark:white">{title}</h4>
                <p className="text-gray-600 dark:text-white">{discription}</p>
            </div>
        </div>
    )
}