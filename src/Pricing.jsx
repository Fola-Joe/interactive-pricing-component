import './Pricing.css';
import ToggleSwitch from './toggleSwitch';
import { useState } from 'react';

//function to display views as 10k - 1M
function formatLabel(views) {
    if (views >= 1000000) {
        return `${(views / 1000000)}M`
    } else if (views >= 1000) {
        return `${(views / 1000)}k`;
    };
    return views.toLocaleString();
}

export default function Pricing() {

    const [views, setViews] = useState(10000);
    const [price, setPrice] = useState(8);

    const updateValue = (e) => {
        // Parse the input value to an integer
        const newViews = parseInt(e.target.value);
        // Update the views state
        setViews(newViews);

        if (newViews == 1000000) {
            setPrice(36);
        } else if (newViews >= 500000) {
            setPrice(24);
        } else if (newViews >= 100000) {
            setPrice(16);
        } else if (newViews >= 50000) {
            setPrice(12);
        } else if (newViews >= 10000) {
            setPrice(8);
        }
    };

    return (
        <section className="main">
            <h1 className="pricing-h1">{formatLabel(views)} PAGEVIEWS</h1>
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

            <h2 className="pricing-h2"><span className="priceValue">${price}.00</span>/ month</h2>
            <div className="billing-section">
                <p className="mth-billing">Monthly Billing</p>
                <ToggleSwitch />
                <div className="discount">
                    <span className="yr-billing">Yearly Billing</span>
                    <span className="percentage percent-short">-25%</span>
                    <span className="percentage percent-long">-25% discount</span>
                </div>
            </div>
            <div>
                <section className="bottom-section">
                    <section className="check-section">
                        <img src="./icon-check.svg" alt="" />
                        <h3>Unlimited websites</h3>
                    </section>
                    <section className="check-section">
                        <img src="./icon-check.svg" alt="" />
                        <h3>100% data ownership</h3>
                    </section>
                    <section className="check-section">
                        <img src="./icon-check.svg" alt="" />
                        <h3>Email reports</h3>
                    </section>
                </section>
                <button className="btn">Start my trial</button>
            </div>
        </section>
    );
}