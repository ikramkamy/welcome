"use client"
import Image from "next/image";
import './footer.css'
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';
export default function Footer() {
  return (<>

   <div className="w-full flex flex-row   mt-8 justify-around items-center footer_s">
<Image width={50} height={50} src="/images/ntl-logo.png"/>
<div className="w-1/5  ">
  <div className='text-blue-200 '>Info</div>
<div>info@nuterralabs.com</div> 
<div>+1 (587) 984-2923</div></div>

<div className="w-1/5 ">
  <div className='text-blue-200 '>Pages</div>
  <div>Features</div>
  <div><a href="/subscription">Subscription</a></div>
  </div>
  <div className="w-1/5 ">
  <div className='text-blue-200 '>Social media</div>
  <FacebookShareButton className="m-1"
        
        url={'http://localhost:3000'} >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <PinterestShareButton
       
        url={'http://localhost:3000'} >
        <PinterestIcon size={32} round />
      </PinterestShareButton>
    
      <WhatsappShareButton
      
        url={'http://localhost:3000'} >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton
        
        url={'http://localhost:3000'} >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
 
  </div>
</div>

   
    <div className='w-full text-center mt-8'>Copyright © 2022, Nu Terra Labs. All Rights Reserved.</div>
  
    </>
  );

}
