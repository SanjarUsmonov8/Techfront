import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Home() {
    return(
        <div>
            <Navbar/>
            <div className="relative flex items-center  h-screen">
                <img className="absolute inset-0 object-cover w-full bg-black/50 brightness-[0.4]" src="https://i.ytimg.com/vi/lxD-AsHSiIU/maxresdefault.jpg" alt="" />
                <div className="relative z-10 gap-4 flex flex-col">
                    <h1 className="text-white text-9xl font-bold font-mono pl-36 uppercase">Asus</h1>
                    <h1 className="text-white text-7xl font-bold font-mono pl-36">Gaming Laptops</h1>
                    <h1 className="text-sm text-white pl-36 w-216 font-mono">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                </div>
            </div>
            <Footer/>
        </div>
    )
}