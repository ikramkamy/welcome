"use client"
import Image from "next/image";
import './box.css'
export default function BoxFeature({icon, text1,text2}) {
  return (
   <div className="flex items-center flex-col box-f-style mt-8 border p-2  shadow-slate-200 bg-transparent hover:bg-slate-100 cursor-pointer">
<Image src={icon} width={100} height={100} alt="feature" className="mt-8"/>
<div className="font-bold mt-8">{text1}</div>
<div className="text-gray-500">{text2}</div>
   </div>
  );
}
