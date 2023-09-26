import './Pricing.css';
import ToggleSwitch from './ToggleSwitch';
import { useState, useEffect } from 'react';

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
    const [isDiscounted, setIsDiscounted] = useState(false);

    const updateValue = (e) => {
        // Parse the input value to an integer
        const newViews = parseInt(e.target.value);
        // Update the views state
        setViews(newViews);
    }


    // To watch for changes in the isDiscounted state
    // and then calculate and set the discounted price
    useEffect(() => {
        let newPrice = 8;
        if (views === 1000000) {
          newPrice = 36;
        } else if (views >= 500000) {
          newPrice = 24;
        } else if (views >= 100000) {
          newPrice = 16;
        } else if (views >= 50000) {
          newPrice = 12;
        } else if (views >= 10000) {
          newPrice = 8;
        }
    
        if (isDiscounted) {
          newPrice = newPrice * 0.75;
        }
    
        setPrice(newPrice);
      }, [views, isDiscounted]);


      // function to toggle prices
      const toggleDiscount = () => {
        setIsDiscounted(!isDiscounted);
      };

    return (
        <section className="main">
            <div className="main-display">
                <h1 className="pricing-h1">{formatLabel(views)} PAGEVIEWS</h1>
                <h2 className="pricing-h2"><span className="priceValue">${price}.00</span>/ month</h2>
            </div>
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
                <ToggleSwitch onChange={toggleDiscount} />
                <div className="discount">
                    <span className="yr-billing">Yearly Billing</span>
                    <span className="percentage percent-short">-25%</span>
                    <span className="percentage percent-long">-25% discount</span>
                </div>
            </div>
            <footer className="footer">
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
            </footer>
        </section>
    );
}