"use client"



import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import {
    ButtonGroup,
    ButtonGroupSeparator,
} from "@/components/ui/button-group"
import { useState, useEffect } from "react"
import Types from "./Types"
import Link from "next/link"


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Top Shadow */}
            {isScrolled && (
                <div
                    className="fixed top-0 left-0 right-0 z-30 h-8 pointer-events-none"
                    style={{
                        background: "linear-gradient(to bottom, rgba(0,0,0,0.1), transparent)",
                    }}
                />
            )}
            {/* Bottom Shadow */}
            {isScrolled && (
                <div
                    className="fixed bottom-0 left-0 right-0 z-30 h-8 pointer-events-none"
                    style={{
                        background: "linear-gradient(to top, rgba(0,0,0,0.1), transparent)",
                    }}
                />
            )}
            <div className={`sticky z-40 flex items-center justify-center gap-50 p-8 transition-all duration-300 ml-17 mr-4 rounded-2xl ${isScrolled ? "top-3 bg-white/40 backdrop-blur-md" : "top-0 mt-2"}`}>
                <div className="flex -mt-5">
                    <Link href="/">
                        <div className="flex items-center">
                            <img className="h-20 rounded-4xl" src="https://static.vecteezy.com/system/resources/thumbnails/013/760/485/small/abstract-connection-logo-illustration-in-trendy-and-minimal-style-png.png" alt="" />
                            <h1 className="text-5xl font-bold pl-3">Tech°</h1>
                        </div>
                    </Link>
                </div>
                <div className="">
                    <Field className="w-100 bg-white/40 rounded-2xl" orientation="horizontal">
                        <Input type="search" placeholder="Search..." />
                        <Button className="bg-blue-900">Search</Button>
                    </Field>
                </div>
                <div className="flex gap-5 items-center -mt-5">
                    <div><img className="h-18 rounded-full" src="https://philpeople.org/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCSklRdlFFPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--57d1dd49d79ed91ccbe3d2304ec1815986a0d448/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lNTkRBd2VEUXdNQVk2QmtWVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--2422306b323f3aba93f01c757930e31db82d5d38/blob?app=" alt="" /></div>
                    <div className="flex flex-col items-start gap-2">
                        <div>
                            <ButtonGroup>
                                <Button variant="secondary">@usm_on_off_s</Button>
                                <ButtonGroupSeparator />
                                <Button size="icon" variant="secondary">
                                    <h1>+</h1>
                                </Button>
                            </ButtonGroup>
                        </div>
                        <div>
                            <div className="flex flex-col items-start gap-8">
                                <ButtonGroup>
                                    <Button variant="outline" size="sm">
                                        Settings
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        <h1 className="text-red-600">Log out</h1>
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed flex w-330 h-px mt-18 bg-stone-300"></div>
                <div className="fixed flex gap-15 pt-25 justify-around text-stone-600">
                    <Link href="/phone">Phones</Link>
                    <Link href="/laptops">Laptops</Link>
                    <Link href="/tv">TV</Link>
                    <Link href="/vc">Vacuum Cleaners</Link>
                    <Link href="/wm">Washing Machines</Link>
                    <Link href="/fridge">Fridges</Link>
                    <Link href="/acc">Accessories</Link>
                    <Link href="/other">Others</Link>
                </div>
            </div>
        </>
    )
}