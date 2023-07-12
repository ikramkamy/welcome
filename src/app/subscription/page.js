"use client";
import Billing from "../componenets/billing/billing";
import '../styles/subscription.css'
import { useState } from "react";
export default function Home() {
    const [show,setShow]=useState(false)
    return (<div className='sub_page'>
        <h1 className="text-3xl font-bold underline">Princing Plans </h1>
        <div className='text_pricing'>Start building for free, then add a site plan to go live. Account <br/>plans unlock additional features. </div>
        <div className='btn_pricing_wrap'>
        <button onClick={()=>setShow(true)}>Monthly billing</button>
        <button onClick={()=>setShow(false)}>Yearly  billing</button>
        </div>
       

{show && (<Billing price1={12} price2={24} price3={32}/>)}

{!show && (<Billing price1={32} price2={64} price3={96}/>)}
    </div>)}