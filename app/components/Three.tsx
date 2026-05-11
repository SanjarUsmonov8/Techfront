export default function Three() {

    return (
        <div>
              <div className="fixed left-0 top-0 h-screen z-50 group">

                    {/* 1. The Trigger Icon Area */}
                    <div className="absolute left-4 top-6 flex flex-col gap-1.5 cursor-pointer z-50">
                        <div className="h-1 w-8 bg-slate-800 rounded-full transition-all group-hover:rotate-45 group-hover:translate-y-2.5"></div>
                        <div className="h-1 w-8 bg-slate-800 rounded-full transition-all group-hover:opacity-0"></div>
                        <div className="h-1 w-8 bg-slate-800 rounded-full transition-all group-hover:-rotate-45 group-hover:-translate-y-2.5"></div>
                    </div>

                    {/* 2. The Full Height Side Part */}
                    <div className="fixed left-0 top-0 h-screen w-64 bg-white text-black shadow-2xl 
                      -translate-x-full transition-transform duration-500 ease-in-out
                      group-hover:translate-x-0">

                        <div className="pt-20 px-6 flex flex-col gap-6">
                            <h2 className="text-xl font-bold border-b border-slate-700 pb-2">Settings</h2>

                            <nav className="flex flex-col gap-4">
                                <a href="#" className="hover:text-blue-400 transition-colors">User Dashboard</a>
                                <a href="#" className="hover:text-blue-400 transition-colors">Project Config</a>
                                <a href="#" className="hover:text-blue-400 transition-colors">API Keys</a>
                                <hr className="border-slate-700" />
                                <a href="#" className="text-red-400 hover:text-red-300">System Logout</a>
                            </nav>
                        </div>
                    </div>

                    {/* 3. Optional: Background Overlay (Blur) */}
                    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm opacity-0 pointer-events-none 
                      transition-opacity duration-500 group-hover:opacity-100 -z-10">
                    </div>
                </div>
        </div>
    )
}