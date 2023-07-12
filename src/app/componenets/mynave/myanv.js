
import Image from 'next/image'
export default function Mynav() {
    return (<div className='nav_bar'>
        <div className='wrap_nat_items'>
        <div className='nav_item logo'><Image src='/images/ntl-logo.png' width={50} height={50} /></div>

<div className='nav_item'>Home</div>
<div className='nav_item'>My chatbot </div>
<div className='nav_item'>Training</div>
</div>
<button className='nav_item sign_in_btn'>Login</button>

    </div>)}