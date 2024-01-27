import Checkout from "./Checkout";


export default function Newsletter() {
  return (
        
    <div className='w-screen  mx-auto h-screen'>
      <Checkout />
      <iframe aria-label="News letter" className='w-screen pb-10  h-[54rem]' src="https://forms.visme.co/formsPlayer/31oogmqr-newsletter-subscription" frameborder="0"></iframe>
    </div>

  )
}
