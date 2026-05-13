import Link from "next/link";

export default async function Cardp() {
    const res = await fetch('http://127.0.0.1:8000/phone/');
    const data = await res.json();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
            {data.map((item: any) => (
                <Link href={`/phone/${item.id}`} key={item.id}>
                    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden cursor-pointer">
                        {/* Image Container */}
                        <div className="relative bg-gray-200 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Content Container */}
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h2>

                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                {item.description}
                            </p>

                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-blue-600">
                                    ${item.price}
                                </span>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}