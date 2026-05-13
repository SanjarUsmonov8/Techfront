import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Home() {
    return(
        <div>
            <Navbar/>
            <div className="relative flex h-screen">
                <img className="absolute inset-0 object-cover w-full" src="https://dam.thdstatic.com/content/production/428hEqrBEee9XtzFv6upvQ/VQP08IYiww__FZw0CBcuLA/Original%20file/types-of-washing-machines-section-6.jpg" alt="" />
                <div className="relative z-10 gap-4 flex flex-col">
                    <h1 className="text-white text-9xl font-bold font-mono pl-20 pt-20 uppercase">Washing Machines</h1>
                    <h1 className="text-white text-7xl font-bold font-mono pl-20 w-150 pt-10">Loundry never been this easy</h1>
                    <h1 className="text-sm text-white pl-20 w-130 pt-10 font-mono">Washing machines have made laundry day so much easier, with advanced features and efficient cleaning power.</h1>
                </div>
            </div>
            <Footer/>
        </div>
    )
}