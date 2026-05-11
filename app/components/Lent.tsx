export default function Lent() {
    const logos = [
        { img: "https://1000logos.net/wp-content/uploads/2017/06/gray-samsung-logo.jpg" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSs8mVfEM_lPF0JSXjKHAU5XOBNhg1VE9ww&s" },
        { img: "https://static.toiimg.com/thumb/msid-86422612,width-1280,height-720,resizemode-4/86422612.jpg"},
        { img: "https://images.hindustantimes.com/img/2022/09/11/1600x900/gd_1662870108818_1662870128181_1662870128181.png" },
        { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Dyson_%28Unternehmen%29_logo.svg/3840px-Dyson_%28Unternehmen%29_logo.svg.png"},
        { img: "https://freepngimg.com/save/32021-lenovo-logo-transparent-image/430x190" },
        { img: "https://www.mac-group.com/wp-content/uploads/2018/02/hp.png" },
    ];

    return (
        <div className="w-full overflow-hidden bg-transparent py-2 pb-10">
            <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
                .scroll-strip {
                    animation: scroll 30s linear infinite;
                }
            `}</style>
            <div className="scroll-strip flex gap-8 whitespace-nowrap">
                {logos.map((logo, index) => (
                    <div key={index} className="flex items-center gap-2 shrink-0 bg-white/40 backdrop-blur-md rounded-xl px-4 py-3">
                        <img src={logo.img}  className="h-24 w-24 object-contain" />
                        
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {logos.map((logo, index) => (
                    <div key={`dup-${index}`} className="flex items-center gap-2 shrink-0 bg-white/40 backdrop-blur-md rounded-xl px-4 py-3">
                        <img src={logo.img}  className="h-24 w-24 object-contain" />
                        
                    </div>
                ))}
            </div>
        </div>
    )
}