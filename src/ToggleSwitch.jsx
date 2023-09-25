import './ToggleSwitch.css';

export default function ToggleSwitch({ onChange }) {
    return (
        <div className="toggle-switch">
            <label className="switch">
                <input className="toggle-input"
                    type="checkbox"
                    onChange={onChange} />
                <span className="slider-span round"></span>
            </label>
        </div>
    );
}