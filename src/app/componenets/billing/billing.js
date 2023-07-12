import '../../styles/billing.css'

export default function Billing({price1, price2, price3}){
    return(<div className="wrap_bill">
<div  className='bill_type'>
    <h3>Hobby</h3>
    <div>All the basics to start new business</div>
    <h1>${price1}</h1>
    <button className='subscribe_btn'>Subscribe</button>
</div>
<div className='bill_type'>
    <h3>Freelancer</h3>
    <div>All the basics to start new business</div>
    <h1>${price2}</h1>
    <button className='subscribe_btn'>Subscribe</button>
</div>
<div className='bill_type'>
    <h3>Startup</h3>
<div>All the basics to start new business</div>
<h1>${price3}</h1>
<button className='subscribe_btn'>Subscribe</button>
</div>

    </div>)
}