import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

async function getPhonesDetail(id: string) {
  // Muhim: API manzilingiz to'g'riligini tekshiring
  const res = await fetch(`http://127.0.0.1:8000/phone/${id}/`, {
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function PhonesDetailPage({ params }: { params: { id: string } }) {
  // Next.js 15+ versiyalarida params'ni kutish (await) kerak
  const { id } = await params;
  const phone = await getPhonesDetail(id);

  if (!phone) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Nothing found</h1>
        <Link href="/Phones" className="text-blue-500 underline mt-4">Back to List</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Link href="/Phones" className="text-sm text-gray-500 hover:text-black transition-colors">
        ← Back to List
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        {/* Chap tomon: Rasm */}
        <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
          <img 
            src={phone.image} 
            alt={phone.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* O'ng tomon: Ma'lumotlar */}
        <div className="flex flex-col justify-center space-y-6">
          <Badge className="w-fit text-lg py-1 px-4" variant="secondary">
            {phone.price.toLocaleString()} $
          </Badge>
          
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
            {phone.name}
          </h1>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed border-l-4 border-blue-500 pl-6">
            <p>{phone.description}</p>
          </div>

          <div className="pt-6 flex gap-4">
            <Button size="lg" className="flex-1 h-14 text-lg font-bold">
              Sotib olish
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8">
              ♡
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}