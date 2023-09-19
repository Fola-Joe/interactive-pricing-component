import './Pricing.css';
import { useState } from 'react';


export default function Pricing() {

    const [views, setViews] = useState(10000);
    const [price, setPrice] = useState(8);

    const updateValue = (e) => {
        const newViews = parseInt(e.target.value, 10); // Parse the input value to an integer
        setViews(newViews); // Update the views state
        if (newViews == 50000) {
            setPrice(12);
        } else if (newViews == 100000) {
            setPrice(16);
        } else if (newViews == 500000) {
            setPrice(24);
        } else if (newViews == 1000000) {
            setPrice(36);
        } else if (newViews == 10000) {
            setPrice(8);
        }
    };

    return (
        <section className="main">
            <h1 className="pricing-h1">{views.toLocaleString()} Pageviews</h1>
            <div className="slide-container">
                <input type="range"
                    min="10000"
                    max="1000000"
                    step="10000"
                    className="slider"
                    name="slider"
                    value={views}
                    onChange={updateValue} />
            </div>

            <h2>${price}.00/month</h2>
            <p><span className="span-1">Monthly Billing</span> <span className="span2">Yearly Billing</span></p>
            <h3>Unlimited websites</h3>
            <h3>100% data ownership</h3>
            <h3>Email reports</h3>
            <button>Start my trial</button>
        </section>
    );
}