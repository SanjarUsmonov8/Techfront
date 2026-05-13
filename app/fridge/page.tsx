import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Home() {
    return(
        <div>
            <Navbar/>
            <div className="relative flex items-center  h-screen">
                <img className="absolute inset-0 object-cover w-full" src="https://cdn.tanguay.ca/images/products/1024px/0729862_8.jpg" alt="" />
                <div className="relative z-10 gap-4 flex flex-col pt-150">
                    <h1 className="text-black text-9xl font-bold font-mono pl-20 uppercase">Fridges</h1>
                    <h1 className="text-gray-600 text-7xl font-bold font-mono pl-20 w-200 pt-20">Keep Your Food Fresh</h1>
                    <h1 className="text-sm text-gray-600 pl-20 w-200 font-mono">Fridges keep your food fresh for longer, with advanced cooling technology and energy-efficient design.</h1>
                </div>
            </div>
            <Footer/>
        </div>
    )
}