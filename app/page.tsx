import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MainCarousel from "@/components/main-carousel";
import PartnerLogos from "@/components/partner-logos";
import SocialLinks from "@/components/social-links";
import { NewsCarousel } from "@/components/news-carousel";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 py-16 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/eu-stars-bg.png')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="container relative mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="mb-2 text-3xl font-bold md:text-4xl lg:text-5xl">
                Zespół Szkół Ogólnokształcących w Strzelinie
              </h1>
              <p className="mb-6 text-xl font-light">Liceum Ogólnokształcące im Marii Skłodowskiej-Curie</p>
              <blockquote className="border-l-4 border-yellow-400 pl-4 italic">
                "Trzeba mieć wytrwałość i wiarę w siebie. Trzeba wierzyć, że człowiek jest do czegoś zdolny i osiągnąć
                to za wszelką cenę."
                <footer className="mt-2 text-sm">— Maria Skłodowska-Curie</footer>
              </blockquote>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="bg-yellow-500 text-blue-900 hover:bg-yellow-400">
                  Rekrutacja
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white text-black hover:bg-zinc-100">
                  Kierunki
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-white/20 blur-md"></div>
                <div className="relative overflow-hidden rounded-lg bg-white p-2">
                  <Image
                    src="/images/marie_curie.jpg"
                    alt="Budynek szkoły"
                    width={400}
                    height={400}
                    className="h-auto w-full max-w-[350px]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Witamy na stronie głównej Liceum Ogólnokształcącego
              <br />
              im. Marii Skłodowskiej-Curie w Strzelinie
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Przygotowujemy do matury i studiów na wyższych uczelniach
            </p>
          </div>

          {/* News Carousel Section */}
          <div className="mt-4 mb-16">
            <NewsCarousel />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-bold">Szybki dostęp</h3>
                <ul className="grid gap-2">
                  {[
                    "Plan lekcji",
                    "Dziennik elektroniczny",
                    "Kalendarz roku szkolnego",
                    "Dokumenty do pobrania",
                    "Dla rodziców",
                    "Biblioteka szkolna",
                  ].map(item => (
                    <li key={item}>
                      <a
                        href="#"
                        className="flex items-center gap-2 rounded-md bg-gray-50 p-3 transition-colors hover:bg-blue-50"
                      >
                        <ChevronRight className="h-4 w-4 text-blue-600" />
                        <span>{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-bold">Osiągnięcia</h3>
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=150&width=300"
                      alt="Osiągnięcia uczniów"
                      width={300}
                      height={150}
                      className="w-full object-cover"
                    />
                  </div>
                  <p>
                    Nasi uczniowie regularnie odnoszą sukcesy w olimpiadach przedmiotowych i zawodach sportowych na
                    szczeblu wojewódzkim i krajowym.
                  </p>
                  <Button variant="outline" className="w-full">
                    Sukcesy naszych uczniów
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold">Nasi partnerzy</h2>
          <PartnerLogos />
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Znajdź nas w mediach społecznościowych</h2>
              <SocialLinks />
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-bold">Wirtualny spacer po szkole</h2>
              <div className="overflow-hidden rounded-lg border">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Wirtualny spacer po szkole"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <p className="mb-4">
                    Zapraszamy do wirtualnego spaceru po naszej szkole. Zobacz nasze nowoczesne pracownie, bibliotekę i
                    inne przestrzenie edukacyjne.
                  </p>
                  <Button>Rozpocznij wirtualny spacer</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-blue-900 py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src="/images/school-logo.png"
                  alt="Logo szkoły"
                  width={40}
                  height={40}
                  className="h-10 w-auto invert"
                />
                <h3 className="text-lg font-bold">Zespół Szkół Ogólnokształcących w Strzelinie</h3>
              </div>
              <address className="not-italic">
                <p>ul. Przykładowa 123</p>
                <p>57-100 Strzelin</p>
                <p>tel. 71 123 45 67</p>
                <p>email: sekretariat@lo-strzelin.pl</p>
              </address>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Szybkie linki</h3>
              <ul className="space-y-2">
                {["O szkole", "Aktualności", "Rekrutacja", "Kontakt"].map(item => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Dla ucznia</h3>
              <ul className="space-y-2">
                {["Plan lekcji", "Dziennik elektroniczny", "Biblioteka", "Samorząd uczniowski"].map(item => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Dla rodzica</h3>
              <ul className="space-y-2">
                {["Konsultacje", "Zebrania", "Dokumenty do pobrania", "Pedagog i psycholog"].map(item => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-blue-800 pt-6 text-center text-sm">
            <p>
              © 2025 Zespół Szkół Ogólnokształcących w Strzelinie. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
