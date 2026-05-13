import Card1 from "./components/Card1";
import Carousel1 from "./components/Carousel1";
import Footer from "./components/Footer";
import Fourpic from "./components/Fourpic";
import Headimg from "./components/Headimg";
import Lent from "./components/Lent";
import Navbar from "./components/Navbar";
import Three from "./components/Three";

export default function Page() {

  return(
    <div className="bg-white">
      <Three/>
      <Navbar/>
      <div className="-mt-7"> <Headimg/></div>
      <div className="flex justify-center pt-5 text-4xl font-bold"><h1>With our store your life becomes like a dream°</h1></div>
      <div className="py-8 w-full"><Carousel1/></div>
      <div><Lent/></div>
      <div className="flex justify-center pt-5 text-4xl font-bold"><h1>Our Best Sellers</h1></div>
      <div><Card1/></div>
      <div className="py-5"><Fourpic/></div>
      <div><Footer/></div>
    </div>
  
  )
}

