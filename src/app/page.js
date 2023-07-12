import Mynav from './componenets/mynave/myanv';
import Feature from '@/app/componenets/feature/feature';
import About from './componenets/about/aboutUs';
import Image from 'next/image';
import Footer from './componenets/Footer';
export default function Home() {
    /*
    window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
*/
    return ( <>
    <div className='page_l_wrap'>
        <div className='back_contast'>
        <div className='transparent_background'>
<Mynav/>

<div className='inner_landing'>

    <h1 className='inner_landing_text'>
   
  <div style={{fontFamily:"mythirdFont",letterSpacing: "7px",fontSize: "xx-small"}}>Chatbot Application</div>
   <div className='text-sising'>CHATBOT</div>
    <br/>
   <div style={{color:"#dddcde"}} >Ask questions and receive accurate and helpful answers instantly from our AI-powered chatbot.</div> <br/>
    {/*Your Intelligent Assistant for All Tasks*/}
  
     </h1>
    <div className='btn_start_wrap'><button className='sign_in_btn get_started_btn'>LET'S GO</button></div> 
</div>

</div>
<div className='scroll-btn'><Image src="/images/mouse.png"  width={30} height={30} className='scroll_btn'/></div>
</div>

    </div>
    <About/>
    <Footer className="mt-8"/>
   
   </>
    
    )}