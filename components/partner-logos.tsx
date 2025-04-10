import Image from "next/image"

const partners = [
  {
    id: 1,
    name: "Uniwersytet Wrocławski",
    logo: "/placeholder.svg?height=80&width=160",
  },
  {
    id: 2,
    name: "Ministerstwo Edukacji Narodowej",
    logo: "/placeholder.svg?height=80&width=160",
  },
  {
    id: 3,
    name: "Centralna Komisja Egzaminacyjna",
    logo: "/placeholder.svg?height=80&width=160",
  },
  {
    id: 4,
    name: "Südzucker Polska",
    logo: "/placeholder.svg?height=80&width=160",
  },
  {
    id: 5,
    name: "Gmina Strzelin",
    logo: "/placeholder.svg?height=80&width=160",
  },
]

export default function PartnerLogos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
      {partners.map((partner) => (
        <div key={partner.id} className="flex flex-col items-center">
          <div className="relative h-16 w-32 grayscale transition-all hover:grayscale-0">
            <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
          </div>
          <span className="mt-2 text-xs text-gray-500">{partner.name}</span>
        </div>
      ))}
    </div>
  )
}

