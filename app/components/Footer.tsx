"use client"

export default function Footer() {
    return (
        <footer className="bg-white text-gray-700 py-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                {/* Disclaimer Text - TOP */}
                <div className="mb-8 pb-8 border-b border-gray-200 text-gray-600 text-xs leading-relaxed space-y-4">
                    <p>
                        Trade in values will vary based on the condition, year, and configuration of your eligible trade in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for a Tech Gift Card. Trade in value may be applied toward qualifying new device purchase, or added to a Tech Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In store trade in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores and may vary between in store and online trade in. Some stores may have additional requirements. Tech or its trade in partners reserve the right to refuse, cancel, or limit quantity of any trade in transaction for any reason. More details are available from Techs trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.
                    </p>

                    <p>
                        To access and use all Tech Card features and products available only to Tech Card users, you must add Tech Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Tech Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
                    </p>

                    <p>
                        Tech Payments Services LLC, a subsidiary of Tech Inc., is a service provider of Goldman Sachs Bank USA for Tech Card and Savings accounts. Neither Tech Inc. nor Tech Payments Services LLC is a bank.
                    </p>

                    <p>
                        All communications from Tech and Goldman Sachs Bank USA about Tech Card (including transactional and marketing communications) and customer service support are available in English. Certain communications about Tech Card can be viewed in another language depending on your device language settings. If you reside in the U.S. Virgin Islands, American Samoa, Guam, Northern Mariana Islands, or U.S. Minor Outlying Islands, please call Goldman Sachs at 877-255-5923 with questions about Tech Card.
                    </p>

                    <p>
                        Learn more about how Tech Card applications are evaluated at support.tech.com/kb/HT209218.
                    </p>

                    <p>
                        A subscription is required for Tech Arcade, Tech Fitness+, Tech Music, and Tech TV.
                    </p>

                    <p>
                        Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
                    </p>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-gray-900 text-2xl font-bold mb-4">Tech°</h3>
                        <p className="text-sm leading-relaxed">
                            Your ultimate destination for cutting-edge technology, tools, and resources to drive innovation forward.
                        </p>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-gray-900 font-semibold mb-4">Products</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Phones</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Laptops</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">TVs</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Accessories</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Support</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Warranty</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Repairs</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Trade-in</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <a href="/contact" className="text-gray-900 font-semibold mb-4">Contact</a>
                        <ul className="space-y-2 text-sm">
                            <li><a href="mailto:info@tech.com" className="text-gray-600 hover:text-gray-900 transition">info@tech.com</a></li>
                            <li><a href="tel:+998880019678" className="text-gray-600 hover:text-gray-900 transition">+998 (88) 001-9678</a></li>
                            <li className="text-gray-600">123 Tech Street</li>
                            <li className="text-gray-600">Tech City, TC 12345</li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 py-8"></div>

                {/* Social & Legal */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Social Links */}
                    <div className="flex gap-6 mb-4 md:mb-0">
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.5 4.5-6 7z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                <path d="M16.5 6.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-3 3c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#fff"/>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                            </svg>
                        </a>
                    </div>

                    {/* Legal Links */}
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition">Privacy Policy</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition">Terms & Conditions</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition">Cookie Policy</a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-500 text-sm mt-8 pt-8 border-t border-gray-200">
                    <p>&copy; 2026 Tech°. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
