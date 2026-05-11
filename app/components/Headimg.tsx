export default function Headimg() {
    return (
        <div className=" w-full ">

            {/* 1. The Base Image */}
            <img
                src="https://www.momscleanairforce.org/wp-content/uploads/2023/02/appliances.jpg"
                alt="Circuit board background"
                className="w-full " />



            {/* 3. The Text (Positioned Absolutely) */}
            <div className="absolute top-50 left-8 right-8 text-white">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase bg-blue-900 rounded-full">
                    Innovation
                </span>
                <div className="bg-gradient-to-r from-zinc-700 to-blue-400 bg-clip-text text-transparent">
                    <div className="text-4xl  font-bold tracking-tight">
                        <h1>Every TECHnology you need</h1> <h1>can be found here</h1>
                    </div>
                    <div className="mt-2 text-lg ">
                        <h1>Our platform offers a comprehensive collection</h1> <h1>of cutting-edge technologies, tools, and resources to make</h1> <h1>your life easier and</h1> drive innovation forward.
                    </div>
                </div>
            </div>

        </div>
    );
}