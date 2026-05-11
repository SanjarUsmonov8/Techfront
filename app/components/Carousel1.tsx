const slides = [
  { id: 1, title: "Graund-breaking Phones", img: "https://m-cdn.phonearena.com/images/article/102319-wide-two_1200/The-best-camera-phones-in-2026.jpg" },
  { id: 2, title: "Cool Refrigerators", img: "https://article.images.consumerreports.org/image/upload/t_article_tout/v1694111918/prod/content/dam/CRO-Images-2023/09September/Appliances/CR-Appliances-InlineHero-Best-Mini-Fridges-0923" },
  { id: 3, title: "Laptops that can handle anything", img: "https://www.notebookcheck.net/fileadmin/Notebooks/Sonstiges/bestmobilelaptops.jpg" },
  { id: 4, title: "TVs you feel like like a cinema", img: "https://cdn.mos.cms.futurecdn.net/YaWSd7qbkHCBq7LSdrheM4-1200-80.jpg" },
  { id: 5, title: "Laundry is a fun", img: "https://www.whirlpool.com/is/image/content/dam/business-unit/whirlpoolv2/en-us/marketing-content/site-assets/page-content/oc-articles/washing-machine-types-and-sizes-buying-guide-opti/Washing_Machine_Types-Shoppable1-set-230718wlp01-104_srgb-WFW6720RR.jpg?fmt=png-alpha&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&scl=1&constrain=fit,1" }
];

export default function TechCarousel() {
  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-[10%] h-180 no-scrollbar">
      {slides.map((slide) => (
        <div key={slide.id} className="flex-none w-[80vw] snap-center relative group">
          
          {/* THE IMAGE BACKGROUND */}
          <div className="w-full h-full  overflow-hidden shadow-2xl bg-slate-100">
            <img 
              src={slide.img} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt={slide.title} 
            />
            
            {/* TEXT OVERLAY (Using the "Method 1" we discussed earlier) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
              <h2 className="text-white text-4xl font-bold tracking-tighter">
                {slide.title}
              </h2>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}