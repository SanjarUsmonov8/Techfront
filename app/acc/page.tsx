import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Home() {
    return(
        <div>
            <Navbar/>
            <div className="relative flex items-center  h-screen">
                <img className="absolute inset-0 object-cover w-full" src="https://img.freepik.com/free-vector/set-graphic-phone-accessories-flat-illustration_74855-16250.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                <div className="relative z-10 gap-4 flex flex-col text-orange-600">
                    <h1 className=" text-9xl font-bold font-mono pl-20 uppercase">Accessories</h1>
                    <h1 className=" text-7xl font-bold font-mono pl-20">Enhance Your Experience</h1>
                    <h1 className="text-sm  pl-20 w-216 font-mono">Accessories can enhance your devices functionality and style, providing a more personalized and convenient user experience.</h1>
                </div>
            </div>
            <Footer/>
        </div>
    )
}