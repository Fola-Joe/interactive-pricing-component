import './App.css';
import Pricing from './Pricing';

function App() {

  return (
    <section>
      <section className='header'>
        <h1 className='h1'>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. <br /> No credit card required.</p>
      </section>
      <Pricing />
    </section>
  )
}

export default App
