import { Button } from "@/components/ui/button";

export default async function Card1() {
  const res = await fetch('http://127.0.0.1:8000/phone/');
  const data = await res.json();
  const specificItem1 = data.find((item: any) => item.id === 2);
  const specificItem2 = data.find((item: any) => item.id === 3);

    return (
        <div>
            <div>{specificItem1 && (
                <div key={specificItem1.id}>
                    <div className="flex justify-around px-8 gap-30">
                        <div className="w-1/2"><img className="w-170" src={specificItem1.image} alt={specificItem1.name} /></div>
                        <div className="items justify-center items-center w-1/2 m-25 bg-gradient-to-r from-green-900 to-orange-600 bg-clip-text text-transparent">
                         <h1 className="text-4xl font-bold  ">{specificItem1.name}</h1>
                         <h1 className="text-red-600 text-3xl py-2 font-bold">{specificItem1.price}$</h1>
                         <p>{specificItem1.description} Samsung S26 Ultra is a high-end smartphone with exceptional performance and features. This phone offers a premium experience with its advanced camera system and powerful processor. With Samsung ecosystem integration, it provides a seamless user experience.</p>
                         <Button className="bg-red-800 mt-5 p-6 rounded-3xl ml-110 font-bold">Buy Now</Button>
                        </div>
                    </div>
                </div>
            )}</div>
            <div>{specificItem2 &&(
                <div key={specificItem2.id}>
                    <div className="flex justify-around pl-8 gap-30">
                        <div className="items justify-center items-center w-1/2 m-25 pt-20 bg-gradient-to-r from-red-950 to-blue-900 bg-clip-text text-transparent">
                            <h1 className="text-4xl font-bold">{specificItem2.name}</h1>
                            <h1 className="text-3xl font-bold text-red-600">{specificItem2.price}$</h1>
                            <p>{specificItem2.description} Apple iPhone 17 Pro Max is a premium smartphone with cutting-edge technology and exceptional performance. It features a stunning display, powerful processor, and advanced camera system, providing users with an unparalleled mobile experience.</p>
                            <Button className="bg-red-800 mt-5 p-6 rounded-3xl mr-110 font-bold">Buy Now</Button>
                        </div>
                        <div className="pr-2"><img className="w-170" src={specificItem2.image} alt={specificItem2.name} /></div>
                    </div>
                </div>
            )}</div>
        </div>
       
    )
}