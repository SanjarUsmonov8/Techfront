import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Home() {
    return(
        <div>
            <Navbar/>
            <div className="relative flex items-center  h-screen">
                <img className="absolute inset-0 object-cover w-full" src="https://cdn.mos.cms.futurecdn.net/2Ex7xvzGwa7XLBzSwg7j4P-1200-80.jpg" alt="" />
                <div className="relative z-10 gap-4 flex flex-col">
                    <h1 className="text-white text-9xl font-bold font-mono pl-20 uppercase">tv</h1>
                    <h1 className="text-white text-7xl font-bold font-mono pl-20">Feels like a cinema</h1>
                    <h1 className="text-sm text-white pl-20 w-216 font-mono">TV has been really entertaining and our store can give you the best moments!</h1>
                </div>
            </div>
            <Footer/>
        </div>
    )
}