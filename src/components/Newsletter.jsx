import Checkout from "./Checkout";
import Footer from "./Footer";


export default function Newsletter() {
  return (
        
    <div className='w-screen  mx-auto h-[44rem]  '>
      <Checkout />
      <iframe className='mx-auto h-[50rem] w-[100%] mb-24' src="https://forms.visme.co/formsPlayer/90p7rqqm-expert-blog-subscription" frameborder="0"></iframe>

      <div className="md:h-60 h-10 top-[-21rem] left-[16rem] w-40  md:w-64 bg-black z-20 relative md:top-[-24rem] md:left-[54rem]"></div>
      <Footer />
    </div>

  )
}
