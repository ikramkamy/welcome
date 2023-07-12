"use client"
import Image from 'next/image'
import DropD from '../dropDown'
import BoxFeature from '../boxFeature'
import './about.css'
export default function About() {
    return (
    
    <div className='flex flex-col items-center w-full p-7 mt-8 '>
       <div className="flex flex-row w-full justify-around">
        <div className='w-2/5'>
        <h5 className='text-blue-200 '>About Chatbot </h5>
        <h1 className='text-6xl font-bold'>Unlock Your Productivity Potential</h1>
        <p className='text-gray-500'>Our GPT Chatbot streamlines your workflow, saves time, and boosts your productivity.</p>
        </div>
        <div className='w-2/5 p-'>
<div className='mar-dropdown flex w-full  justify-between '><DropD  feature="Natural Language Processing (NLP)" item1="item 1" item2="item 2" item3="item 3"/></div>
<div className='mar-dropdown flex w-full justify-between'><DropD feature="Sentiment Analysis (recognize sentiments)" item1="item 1" item2="item 2" item3="item 3"/> </div>
<div className='mar-dropdown flex w-full justify-between'><DropD feature="Contextual Understanding" item1="item 1" item2="item 2" item3="item 3"/> </div>
<div className='mar-dropdown flex w-full justify-between'><DropD feature="Personalization and User Profiling" item1="item 1" item2="item 2" item3="item 3"/> </div>    
        
        </div>
       </div>
<div className="section_about_two flex flex-row justify-around w-full mt-8">
<BoxFeature icon="/images/ai.png" text1="Feature one " text2="description"/>
<BoxFeature icon="/images/artificial-intelligence.png"  text1="Feature two " text2="description"/>
<BoxFeature icon="/images/brain.png" text1="Feature three"  text2="description"/>
<BoxFeature icon="/images/chip.png" text1="Feature four"  text2="description"/>
</div>
    </div>)}