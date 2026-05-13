const slides = [
  { id: 1, title: "Samsung Galaxy S26 Ultra", img: "https://images.samsung.com/uz_ru/smartphones/galaxy-s26-ultra/images/galaxy-s26-ultra-share-image.jpg" },
  { id: 2, title: "Apple iPhone 17 Pro Max", img: "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/tile/Apple-iPhone-17-Pro-camera-close-up-250909-lp.jpg.landing-big_2x.jpg" },
  { id: 3, title: "Google Pixel 10 Pro XL", img: "https://storage.ghost.io/c/c2/03/c203530f-f8d7-44e0-8253-441466ca83ad/content/images/size/w2000/2025/08/pixel-10-pro-xl-real-life-image-3.jpg" },
  { id: 4, title: "Xiaomi 17 Pro Max", img: "https://www.eluniverso.com/resizer/v2/RCLUQD6M7JGPTGWLMNAOIGDU2I.jpg?auth=bf4811c21b8bc43856a7de9cd6c99fd4c1fa7d45a8129cc3faa0f805e475b63e&width=1117&height=670&quality=75&smart=true" },
  { id: 5, title: "Honor X9d", img: "https://cdn.new-brz.net/public/images/articles/ge/60/zKFnOZT3IafaR5wxra2y3h4j7NB9vpQtkpsUhfQP.jpg" }
];

export default function Carouselp() {
  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-0 h-180 no-scrollbar">
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