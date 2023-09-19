import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch() {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn); // Toggle the state (true to false or false to true)
    };

    return (
        <div className="toggle-switch">
            <label className="switch">
                <input className="toggle-input"
                    type="checkbox" checked={isOn}
                    onChange={toggleSwitch} />
                <span className="slider-span round"></span>
            </label>
        </div>
    );
}