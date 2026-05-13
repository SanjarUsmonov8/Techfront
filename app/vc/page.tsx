import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Home() {
    return(
        <div>
            <Navbar/>
            <div className="relative flex items-center  h-screen">
                <img className="absolute inset-0 object-cover w-full" src="https://www.electrolux.com.au/globalassets/article/robotic-vacuum-cleaner-contender/robotic-contender-og.jpg" alt="" />
                <div className="relative z-10 gap-4 flex flex-col">
                    <h1 className="text-white text-9xl font-bold font-mono pl-15 uppercase">Vacuum Cleaners</h1>
                    <h1 className="text-white text-7xl font-bold font-mono pl-15 w-200">Your home feels like museum</h1>
                    <h1 className="text-sm text-white pl-15 w-216 font-mono">Vacuum cleaners have revolutionized the way we clean our homes, making it easier and more efficient than ever before.</h1>
                </div>
            </div>
            <Footer/>
        </div>
    )
}