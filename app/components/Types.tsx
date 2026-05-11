"use client"

import { useState } from "react"

const categories = {
    Phones: ["iPhone 15 Pro", "Samsung Galaxy S24", "Google Pixel 8", "OnePlus 12"],
    Laptops: ["MacBook Pro", "Dell XPS", "HP Pavilion", "Lenovo ThinkPad"],
    TV: ["QLED 65\"", "OLED 55\"", "4K Smart TV", "Mini LED"],
    "Vacuum Cleaners": ["Dyson V15", "Robot Vacuum", "Upright Vacuum", "Handheld"],
    "Washing Machines": ["Front Load", "Top Load", "Combo Unit", "Portable"],
    Fridges: ["French Door", "Side-by-Side", "Bottom Freezer", "Counter Depth"],
    Accessories: ["Phone Cases", "Chargers", "Screen Protectors", "Adapters"],
    Others: ["Smart Watches", "Headphones", "Tablets", "Speakers"]
};

export default function Types() {
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

    return (
        <div className="flex items-center justify-center gap-8 px-4 py-3 border-t border-white/20 overflow-x-auto">
            {Object.entries(categories).map(([category, items]) => (
                <div
                    key={category}
                    className="relative group shrink-0"
                    onMouseEnter={() => setHoveredCategory(category)}
                    onMouseLeave={() => setHoveredCategory(null)}
                >
                    <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap transition-colors">
                        {category}
                    </button>

                    {/* Dropdown Menu */}
                    {hoveredCategory === category && (
                        <div className="absolute left-0 top-full mt-2 w-44 bg-white rounded-lg shadow-xl z-50">
                            {items.map((item, index) => (
                                <a
                                    key={item}
                                    href="#"
                                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors ${
                                        index === 0 ? "rounded-t-lg" : ""
                                    } ${index === items.length - 1 ? "rounded-b-lg" : ""}`}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
