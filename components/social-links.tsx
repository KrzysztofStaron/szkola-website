import { Facebook, Youtube, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
// Add the missing Image import if we're using images here
import Image from "next/image"

export default function SocialLinks() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Button variant="outline" className="flex items-center gap-2 border-blue-500 text-blue-500 hover:bg-blue-50">
          <Facebook className="h-5 w-5" />
          <span>Facebook</span>
        </Button>
        <Button variant="outline" className="flex items-center gap-2 border-red-500 text-red-500 hover:bg-red-50">
          <Youtube className="h-5 w-5" />
          <span>YouTube</span>
        </Button>
        <Button
          variant="outline"
          className="flex items-center gap-2 border-purple-500 text-purple-500 hover:bg-purple-50"
        >
          <Instagram className="h-5 w-5" />
          <span>Instagram</span>
        </Button>
        <Button variant="outline" className="flex items-center gap-2 border-gray-500 text-gray-500 hover:bg-gray-50">
          <Mail className="h-5 w-5" />
          <span>Newsletter</span>
        </Button>
      </div>

      <div className="rounded-lg border p-4">
        <h3 className="mb-2 font-semibold">Rap o LO</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-md">
            <Image
              src="/placeholder.svg?height=150&width=250"
              alt="Rap o LO v2"
              width={250}
              height={150}
              className="w-full object-cover"
            />
            <p className="mt-2 text-sm">Rap o LO v2</p>
          </div>
          <div className="overflow-hidden rounded-md">
            <Image
              src="/placeholder.svg?height=150&width=250"
              alt="Rap o LO"
              width={250}
              height={150}
              className="w-full object-cover"
            />
            <p className="mt-2 text-sm">Rap o LO</p>
          </div>
        </div>
      </div>
    </div>
  )
}

