import './Pricing.css';
import { useState } from 'react';
// import InputSlider from './InputSlider';

export default function Pricing() {
    const [data, setData] = useState(0);
    const updateValue = ((e) => setData(e.target.value));

    return (
        <section className="main">
            <h1 className="pricing-h1">{data} Pageviews</h1>
            <div className="slide-container">
                <input type="range"
                 min="1"
                 max="100" 
                 name="slider" 
                 id="slider" 
                 value={data} 
                 className="slider" 
                 onChange={updateValue}/>
            </div>
            {/* <InputSlider /> */}
            <h2>$ /month</h2>
            <p><span className="span-1">Monthly Billing</span> <span className="span2">Yearly Billing</span></p>
            <h3>Unlimited websites</h3>
            <h3>100% data ownership</h3>
            <h3>Email reports</h3>
            <button>Start my trial</button>
        </section>
    )
}