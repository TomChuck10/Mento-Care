import { useState, useEffect } from "react";

import "./App.css";
import FacebookLogo from "./assets/facebook_logo.svg";
import InstagramLogo from "./assets/instagram_logo.svg";
import TikTokLogo from "./assets/tiktok_logo.svg";
import Girl from "./assets/girl_main_page.png";
import PriceListPhoto from "./assets/cennik.png";
import Navbar from "./components/Navbar";

// Services Images
import Kobido from "./assets/servicesPhotos/uslugi-kobido.png";
import MezoterapiaMikroiglowa from "./assets/servicesPhotos/2-min.png";
import MezoterapiaIglowa from "./assets/servicesPhotos/3-min.png";
import MezoterapiaSkoryGlowy from "./assets/servicesPhotos/4-min.png";
import StylizacjaBrwi from "./assets/servicesPhotos/5-min.png";
import PeelingKwasowy from "./assets/servicesPhotos/6-min.png";
import RytualMentoCare from "./assets/servicesPhotos/7-min.png";

import { useIsMobile } from "./hooks/useIsMobile";

const listOfServices = [
  {
    id: 1,
    name: "Kobido",
    description:
      "(inaczej naturalna medycyna estetyczna) to technika masażu, która wywodzi się z Japonii i ma swoje unikalne elementy. Powolne, płynne ruchy mają na celu rozluźnienie napięć, głębokie pobudzają skórę i zapewniają efekt liftingu.",
    image: Kobido,
  },
  {
    id: 2,
    name: "Mezoterapia Mikroigłowa",
    description:
      "Mezoterapia frakcyjna to innowacyjny zabieg, który pozwala na odmładzanie skóry, nawilżenie oraz redukcję oznak starzenia. Jest to jedna z odmian mezoterapii, wykorzystująca mikroigłowe nakłucia skóry twarzy",
    image: MezoterapiaMikroiglowa,
  },
  {
    id: 3,
    name: "Mezoterapia Igłowa",
    description:
      "Jaki jest najlepszy zabieg na nawilżenie i odżywienie skóry? Zastrzyk młodości MEZOTERAPIA igłowa polega na wprowadzeniu w głąb skóry preparatow: Nawilżających Rozświetlających Odżywczych Regenerujących Rewitalizujących",
    image: MezoterapiaIglowa,
  },
  {
    id: 4,
    name: "Mezoterapia Skóry Głowy",
    description:
      "Peptydowa terapia włosów to nowoczesny zabieg hamujący wypadanie i stymulujący odrost włosów. Sprawdza się przy łysieniu androgenowym oraz wypadaniu spowodowanym stresem, dietą, farbowaniem czy złą pielęgnacją.",
    image: MezoterapiaSkoryGlowy,
  },
  {
    id: 5,
    name: "Stylizacja brwi",
    description:
      "Zabieg, który nadaje brwiom kształt, utrwala włoski i podkreśla kolor. Laminacja sprawia, że są bardziej zdyscyplinowane, a henna pudrowa zagęszcza je optycznie i nadaje im głębię. Efekt utrzymuje się przez kilka tygodni.",
    image: StylizacjaBrwi,
  },
  {
    id: 6,
    name: "Peeling kwasowy",
    description:
      "Zabieg złuszczający, który intensywnie oczyszcza skórę, usuwa martwy naskórek i pobudza jej regenerację. Wyrównuje koloryt, wygładza strukturę skóry i pomaga redukować niedoskonałości, przebarwienia oraz drobne zmarszczki. Skóra staje się świeża, gładka i promienna.",
    image: PeelingKwasowy,
  },
  {
    id: 7,
    name: "Rytuał MENTO CARE",
    description:
      "Autorski zabieg oparty na terapeutycznym działaniu ultradźwięków. Obejmuje demakijaż, masaż relaksacyjny, peeling kawitacyjny, sonoforezę z odżywczą ampułką oraz maskę dopasowaną do potrzeb skóry. Gwarantuje oczyszczenie, odżywienie i głęboki relaks.",
    image: RytualMentoCare,
  },
];

function App() {
  const isMobile = useIsMobile();
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isInServicesSection, setIsInServicesSection] = useState(false);

  const priceData = [
    {
      title: "Wiosna w Mento Care",
      services: [
        { name: "Pan Młody", price: "270 zł" },
        { name: "Panna Młoda", price: "320 zł" },
        { name: "Zabieg dla kobiet w ciąży/karmiących", price: "350 zł" },
        { name: "Rytułał ESTHEMAX", price: "320 zł" },
      ],
    },
    {
      title: "Pierwsza wizyta",
      services: [
        { name: "Konsultacja kosmetologiczna", price: "100 zł" },
        { name: "Konsultacja + zabieg", price: "180 zł" },
      ],
    },
    {
      title: "Mezoterapia igłowa",
      services: [
        { name: "Okolica oka", price: "250 zł" },
        { name: "Twarz + oczy", price: "450 zł" },
        { name: "Twarz + oczy", price: "550 zł" },
        { name: "Twarz + oczy + szyja", price: "650 zł" },
        { name: "NEAUVIA HUDRO DELUXE", price: "590 zł" },
      ],
    },
    {
      title: "Biostymulatory tkankowe",
      services: [
        { name: "Stymulator twarz/szyja/dekolt", price: "600 zł" },
        { name: "Stymulator - okolica oczu", price: "500 zł" },
        { name: "Stymulator - dłonie", price: "500 zł" },
      ],
    },
    {
      title: "Mezoterapia mikroigłowa",
      services: [
        { name: "Twarz", price: "400 zł" },
        { name: "Twarz + szyja", price: "500 zł" },
        { name: "Twarz + szyja + dekolt", price: "550 zł" },
        { name: "DERMAPEN + peeling kwasowy", price: "470 zł" },
      ],
    },
    {
      title: "Japoński masaż",
      services: [
        { name: "Pakiet 10 Kobido", price: "1700 zł" },
        { name: "Kobido basic", price: "220 zł" },
        { name: "+ Maska ESTHEMAX", price: "270 zł" },
        { name: "Pakiet 5 Kobido", price: "880 zł" },
        { name: "+ Taping", price: "270 zł" },
        { name: "+ Masaż Transbukalny", price: "280 zł" },
        { name: "+ Kwas Ferulowy + maska", price: "350 zł" },
      ],
    },
    {
      title: "Zabiegi na twarz",
      services: [
        { name: "Rytułał Mento Care", price: "220 zł" },
        { name: "Pakiet Pan&Pani", price: "550 zł" },
        {
          name: "DERMAPLANING (depilacja twarzy)",
        },
        {
          name: "Wariant 1",
          price: "180 zł",
        },
        { name: "+ Peeling Kwasowy", price: "260 zł" },
        { name: "Męski detox twarzy", price: "180 zł" },
        { name: "Antyoksydacyjna tarcza", price: "240 zł" },
      ],
    },
    {
      title: "Peeling kwasowy",
      services: [
        { name: "Terapia cery trądziwkowej i tłustej", price: "250 zł" },
        { name: "Terapia na przebarwienia", price: "500 zł" },
        { name: "Terapia nawilżająca - Odbudowa bariery", price: "230 zł" },
        { name: "Terapia trądzik różowaty/naczynka", price: "250 zł" },
        { name: "MULTI IGŁA - blizny", price: "550 zł" },
      ],
    },
    {
      title: "TRYCHOLOGIA - Skóra głowy",
      services: [
        { name: "Mizoterapia skóry głowy/broda - wariant 1" },
        { name: "Wariant 1", price: "600 zł" },
        { name: "Pakiet 4 zabiegów", price: "2000 zł" },
        { name: "Mizoterapia Mikroigłowa skóry głowy" },
        { name: "+ EGZOSOMY", price: "500 zł" },
        { name: "Wariant 2", price: "350 zł" },
        { name: "Głębokie oczyszczanie skóry głwoy", price: "130 zł" },
      ],
    },
    {
      title: "Brwi",
      services: [
        { name: "Regulacja brwi", price: "40 zł" },
        { name: "Henna brwi + regulacja", price: "60 zł" },
      ],
    },
    {
      title: "Makijaż Permanentny",
      services: [
        { name: "Brwi Soft Ombre", price: "800 zł" },
        { name: "Usta Soft Lips", price: "900 zł" },
        { name: "Dopigmentowanie/Korekta", price: "0,01 zł" },
        {
          name: "Odświeżenie makijażu wykonanego w naszym salonie",
          price: "500 zł",
        },
        {
          name: "Odświeżenie makijażu wykonanego w innym salonie",
          price: "600 zł",
        },
        { name: "Bezpłatna konsultacja online", price: "0,01 zł" },
      ],
    },
    {
      title: "TROPOKOLGEN",
      services: [
        { name: "Okolice oka i dłonie", price: "349 zł" },
        { name: "Ciało", price: "500 zł" },
        { name: "Twarz | Szyja | Dekolt | Skóra", price: "0,01 zł" },
      ],
    },
    {
      title: "Światłoterapia LED CELLUMA PRO",
      services: [
        { name: "Lampa LED CECLLUMA", price: "100 zł" },
        { name: "Lampa LED CECLLUMA - dodatek do zabiegu", price: "50 zł" },
      ],
    },
  ];

  // Handle wheel scroll for service navigation
  const handleServiceScroll = (e) => {
    if (isScrolling) return;

    e.preventDefault(); // Zapobiega domyślnemu scrollowaniu

    const scrollDirection = e.deltaY > 0 ? "down" : "up";
    const currentServiceId = listOfServices[currentServiceIndex].id;

    setIsScrolling(true);

    if (scrollDirection === "down") {
      // Scroll down - next service or next section
      if (currentServiceIndex < listOfServices.length - 1) {
        setCurrentServiceIndex((prev) => prev + 1);
      } else {
        // Tylko z ostatniej usługi (id=7) można przejść do pricing
        if (currentServiceId === 7) {
          document.getElementById("pricing")?.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    } else {
      // Scroll up - previous service or previous section
      if (currentServiceIndex > 0) {
        setCurrentServiceIndex((prev) => prev - 1);
      } else {
        // Tylko z pierwszej usługi (id=1) można przejść do about
        if (currentServiceId === 1) {
          document.getElementById("about")?.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    }

    // Krótszy debounce dla płynniejszego działania
    setTimeout(() => setIsScrolling(false), 150);
  };

  // Handle dot click navigation
  const handleDotClick = (index) => {
    setCurrentServiceIndex(index);
  };

  // Handle touch events for mobile - zwiększona wrażliwość
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const currentServiceId = listOfServices[currentServiceIndex].id;
    // Zmniejszona wrażliwość - wystarczy 30px zamiast 50px
    const isUpSwipe = distance > 30;
    const isDownSwipe = distance < -30;

    if (isUpSwipe) {
      // Swipe up - next service or next section
      if (currentServiceIndex < listOfServices.length - 1) {
        setCurrentServiceIndex((prev) => prev + 1);
      } else {
        // Tylko z ostatniej usługi (id=7) można przejść do pricing
        if (currentServiceId === 7) {
          document.getElementById("pricing")?.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    }
    if (isDownSwipe) {
      // Swipe down - previous service or previous section
      if (currentServiceIndex > 0) {
        setCurrentServiceIndex((prev) => prev - 1);
      } else {
        // Tylko z pierwszej usługi (id=1) można przejść do about
        if (currentServiceId === 1) {
          document.getElementById("about")?.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    }
  };

  // Globalna funkcja obsługi scroll'a - blokuje scroll gdy jesteśmy w sekcji services
  useEffect(() => {
    const handleGlobalScroll = (e) => {
      if (isInServicesSection) {
        const currentServiceId = listOfServices[currentServiceIndex].id;
        const scrollDirection = e.deltaY > 0 ? "down" : "up";

        // Blokuj scroll jeśli nie jesteśmy na odpowiedniej usłudze
        if (scrollDirection === "down" && currentServiceId !== 7) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
        if (scrollDirection === "up" && currentServiceId !== 1) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }
    };

    // Globalna obsługa touch events dla mobile
    let globalTouchStart = null;
    let globalTouchEnd = null;

    const handleGlobalTouchStart = (e) => {
      if (isInServicesSection) {
        globalTouchStart = e.touches[0].clientY;
        globalTouchEnd = null;
      }
    };

    const handleGlobalTouchMove = (e) => {
      if (isInServicesSection && globalTouchStart) {
        globalTouchEnd = e.touches[0].clientY;

        const distance = globalTouchStart - globalTouchEnd;
        const currentServiceId = listOfServices[currentServiceIndex].id;
        const isUpSwipe = distance > 30;
        const isDownSwipe = distance < -30;

        // Blokuj touch move jeśli próbujemy wyjść z sekcji services
        if (isUpSwipe && currentServiceId !== 7) {
          // Próbujemy swipe'ować w górę (do pricing) ale nie jesteśmy na ostatniej usłudze
          e.preventDefault();
          e.stopPropagation();
        }
        if (isDownSwipe && currentServiceId !== 1) {
          // Próbujemy swipe'ować w dół (do about) ale nie jesteśmy na pierwszej usłudze
          e.preventDefault();
          e.stopPropagation();
        }
      }
    };

    const handleGlobalTouchEnd = () => {
      globalTouchStart = null;
      globalTouchEnd = null;
    };

    // Intersection Observer do wykrywania czy jesteśmy w sekcji services
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "services") {
            setIsInServicesSection(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.5 }
    );

    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      observer.observe(servicesSection);
    }

    // Dodaj event listenery dla desktop i mobile
    document.addEventListener("wheel", handleGlobalScroll, { passive: false });
    document.addEventListener("touchstart", handleGlobalTouchStart, {
      passive: false,
    });
    document.addEventListener("touchmove", handleGlobalTouchMove, {
      passive: false,
    });
    document.addEventListener("touchend", handleGlobalTouchEnd, {
      passive: false,
    });

    return () => {
      document.removeEventListener("wheel", handleGlobalScroll);
      document.removeEventListener("touchstart", handleGlobalTouchStart);
      document.removeEventListener("touchmove", handleGlobalTouchMove);
      document.removeEventListener("touchend", handleGlobalTouchEnd);
      observer.disconnect();
    };
  }, [isInServicesSection, currentServiceIndex]);

  const currentService = listOfServices[currentServiceIndex];

  const PriceCard = ({ title, services, isMobile }) => {
    return (
      <fieldset className="mb-10 relative border-2 border-[#FFF8E7]/40 rounded-md pt-6 px-6 pb-5">
        <legend className="px-3 mx-2">
          <h3
            className={`text-[#FFF8E7] ${
              isMobile ? "text-[18px]" : "text-[24px]"
            }`}
            style={{ fontFamily: "Cormorant Garamond, SemiBold" }}
          >
            {title}
          </h3>
        </legend>

        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="flex justify-between">
              <span className={`text-[#FFF8E7] ${isMobile ? "text-sm" : ""}`}>
                {service.name}
              </span>
              <span
                className={`text-[#FFF8E7] font-semibold ${
                  isMobile ? "text-sm" : ""
                }`}
              >
                {service.price}
              </span>
            </div>
          ))}
        </div>
      </fieldset>
    );
  };

  return (
    <>
      <Navbar />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {/* First Section - Home */}
        {!isMobile ? (
          <section
            id="about"
            className="snap-start h-screen w-full overflow-hidden relative"
          >
            <div className="flex flex-col justify-center items-start h-full px-[98px]">
              <h1
                style={{
                  fontFamily: "Cormorant Garamond, SemiBold",
                  fontSize: "80px",
                  color: "#FCAF56",
                  marginBottom: "-10px",
                  marginTop: "auto",
                }}
              >
                MENTO CARE
              </h1>
              <p className="max-w-[515px] text-[#FFF8E7]">
                wyjątkowe miejsce, gdzie profesjonalizm łączy się z komfortem i
                indywidualnym podejściem. Diagnozujemy problemy skórne i
                dobieramy skuteczne terapie, stawiając na slow aging – naturalne
                piękno i zdrową, promienną cerę. Zapraszamy!
              </p>
              <div className="flex justify-between items-center w-full mt-auto py-[2rem] z-20">
                <div className="flex space-x-4">
                  <div className="border-2 border-gray-400 rounded-full py-2 px-5 text-textPrimary">
                    Nad Babicą 2, Bochnia
                  </div>
                  <div className="border-2 border-gray-400 rounded-full py-2 px-5 text-textPrimary">
                    +48 798 144 399
                  </div>
                </div>
                <div className="flex space-x-4 text-textPrimary items-center">
                  <a
                    href="https://www.facebook.com/MentoBarberShop"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={FacebookLogo}
                      alt="facebook_logo"
                      style={{ height: "48px" }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/mento.barbershop/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={InstagramLogo}
                      alt="instagram_logo"
                      style={{ height: "38px" }}
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@mento_barbershop"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={TikTokLogo}
                      alt="instagram_logo"
                      style={{ height: "38px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <img
              src={Girl}
              alt="background photo"
              className="absolute right-0 w-[40%] h-auto pointer-events-none z-10"
              style={{ bottom: -100 }}
            />
            <div
              className="absolute bottom-0 left-0 w-full h-[15%] pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 40%, #0B0C0F 90%)",
              }}
            ></div>
          </section>
        ) : (
          <section
            id="about"
            className="snap-start h-screen w-full relative px-6 py-10 flex flex-col"
            style={{
              minHeight: "100dvh",
              // paddingTop: "max(10px, env(safe-area-inset-top))",
              paddingBottom: "max(100px, env(safe-area-inset-bottom))",
            }}
          >
            <div className="flex flex-col items-center justify-end h-full mt-auto z-30">
              {/* Social Icons */}
              <div className="flex space-x-6 justify-center items-center  mt-10">
                <a
                  href="https://www.facebook.com/MentoBarberShop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={FacebookLogo}
                    alt="facebook_logo"
                    style={{ height: "38px" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/mento.barbershop/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={InstagramLogo}
                    alt="instagram_logo"
                    style={{ height: "30px" }}
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@mento_barbershop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={TikTokLogo}
                    alt="tiktok_logo"
                    style={{ height: "30px" }}
                  />
                </a>
              </div>

              <div className="flex flex-col items-center text-center">
                {/* Title */}
                <h1
                  style={{
                    fontFamily: "Cormorant Garamond, SemiBold",
                    fontSize: "50px",
                    color: "#FCAF56",
                    marginBottom: 6,
                  }}
                >
                  MENTO CARE
                </h1>

                {/* Description */}
                <p className="text-[#FFF8E7] text-[13px] text-justify max-w-xs mb-6">
                  wyjątkowe miejsce, gdzie profesjonalizm łączy się z komfortem
                  i indywidualnym podejściem. Diagnozujemy problemy skórne i
                  dobieramy skuteczne terapie, stawiając na slow aging –
                  naturalne piękno i zdrową, promienną cerę. Zapraszamy!
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col space-y-3 mt-0 mb-4 w-full items-center">
                <div className="border-2 border-gray-400 rounded-full py-2 px-5 text-textPrimary text-sm w-full max-w-xs text-center z-30">
                  Nad Babicą 2, Bochnia
                </div>
                <div className="border-2 border-gray-400 rounded-full py-2 px-5 text-textPrimary text-sm w-full max-w-xs text-center z-30">
                  +48 798 144 399
                </div>
              </div>
            </div>
            <img
              src={Girl}
              alt="background photo"
              className="absolute right-0 w-[100%] h-auto pointer-events-none z-0"
              style={{ bottom: 60 }}
            />

            {/* Bottom gradient overlay */}
            <div
              className="absolute bottom-0 left-0 w-full h-[15%] pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 10%, #0B0C0F 50%)",
              }}
            ></div>
          </section>
        )}

        {/* Second Section - Kobido Massage */}
        {!isMobile ? (
          <section
            id="services"
            className="snap-start h-screen w-full relative flex items-end pb-[98px]"
            onWheel={handleServiceScroll}
          >
            {/* Background Image */}
            <img
              src={currentService.image}
              alt={currentService.name}
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 transition-all duration-500"
            />

            {/* Content container */}
            <div className="px-[98px] z-20 relative">
              <div className="flex flex-row items-end justify-between">
                {/* Text content */}
                <div className="md:w-1/2 md:pr-12">
                  <h2
                    className="text-[#FFF8E7] text-[72px] transition-all duration-500"
                    style={{
                      fontFamily: "Cormorant Garamond, SemiBold",
                    }}
                  >
                    {currentService.name}
                  </h2>
                  <p className="text-[#FFF8E7] text-[18px] transition-all duration-500">
                    {currentService.description}
                  </p>
                  <div className="mt-[48px]">
                    <a
                      href="#"
                      className="border-2 text-[18px] border-prime text-prime rounded-[5px] py-[16px] px-[48px] hover:bg-prime hover:text-black transition-colors duration-300"
                    >
                      Umów się na wizytę
                    </a>
                  </div>
                </div>

                {/* Navigation dots */}
                <div className="flex flex-col space-y-[6px]">
                  {listOfServices.map((_, index) => (
                    <div
                      key={index}
                      className={`w-5 h-5 border-[1px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                        index === currentServiceIndex
                          ? "border-prime"
                          : "border-[#FFF8E7] hover:border-prime"
                      }`}
                      onClick={() => handleDotClick(index)}
                    >
                      {index === currentServiceIndex && (
                        <div className="bg-prime border-prime w-3 h-3 m-auto rounded-full transition-all duration-300" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom gradient overlay */}
            <div
              className="absolute bottom-0 left-0 w-full h-[15%] pointer-events-none z-30"
              style={{
                background:
                  "linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 40%, #0B0C0F 90%)",
              }}
            ></div>
          </section>
        ) : (
          <section
            id="services"
            className="snap-start h-screen w-full relative flex flex-col px-6 py-10"
            style={{
              minHeight: "100dvh",
              paddingBottom: "max(100px, env(safe-area-inset-bottom))",
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Background Image */}
            <img
              src={currentService.image}
              alt={currentService.name}
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 transition-all duration-500"
            />

            <div className="flex flex-col h-full z-20">
              {/* Navigation dots aligned to the left */}
              <div className="flex flex-col justify-center items-center space-y-[6px] self-start mt-20">
                {listOfServices.map((_, index) => (
                  <div
                    key={index}
                    className={`w-5 h-5 border-[1px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      index === currentServiceIndex
                        ? "border-prime"
                        : "border-[#FFF8E7]"
                    }`}
                    onClick={() => handleDotClick(index)}
                  >
                    {index === currentServiceIndex && (
                      <div className="bg-prime border-prime w-3 h-3 m-auto rounded-full transition-all duration-300" />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center flex-grow justify-end">
                {/* Title centered */}
                <h2
                  className="text-[#FFF8E7] text-[54px] mb-2 text-center transition-all duration-500"
                  style={{
                    fontFamily: "Cormorant Garamond, SemiBold",
                  }}
                >
                  {currentService.name}
                </h2>

                {/* Description centered */}
                <p className="text-[#FFF8E7] text-[13px] text-justify mb-10 max-w-xs transition-all duration-500">
                  {currentService.description}
                </p>

                {/* Button centered */}
                <div className="mb-10">
                  <a
                    href="#"
                    className="border-2 text-[16px] border-prime text-prime rounded-[5px] py-[14px] px-[32px] hover:bg-prime hover:text-black transition-colors duration-300"
                  >
                    Umów się na wizytę
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom gradient overlay */}
            <div
              className="absolute bottom-0 left-0 w-full h-[15%] pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 40%, #0B0C0F 90%)",
              }}
            ></div>
          </section>
        )}

        {/* Third Section - Price List */}
        {!isMobile ? (
          <section
            id="pricing"
            className="snap-start h-screen w-full relative "
          >
            <div className="flex h-full">
              {/* Left side - Image */}
              <div className="w-1/2 h-full relative">
                <img
                  src={PriceListPhoto}
                  alt="Price List"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
              </div>

              {/* Right side - Price List */}
              <div
                className="w-1/2 h-full overflow-y-auto flex flex-col px-[60px] pt-[200px] pb-[100px]"
                // style={{ fontFamily: "sans-serif" }}
              >
                {priceData.map((category, index) => (
                  <PriceCard
                    key={index}
                    title={category.title}
                    services={category.services}
                    isMobile={false}
                  />
                ))}
              </div>
            </div>
            <div
              className="absolute bottom-0 left-0 w-full h-[15%] pointer-events-none z-30"
              style={{
                background:
                  "linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 40%, #0B0C0F 90%)",
              }}
            ></div>
            <div
              className="absolute top-0 left-0 w-full h-[25%] pointer-events-none z-30"
              style={{
                background:
                  "linear-gradient(0deg, #0B0C0F00 0%, #0B0C0F80 20%, #0B0C0F 80%)",
              }}
            ></div>
          </section>
        ) : (
          <section
            id="pricing"
            className="snap-start h-screen w-full relative px-6 py-10"
            style={{
              minHeight: "100dvh",
              // paddingTop: "max(10px, env(safe-area-inset-top))",
              paddingBottom: "max(100px, env(safe-area-inset-bottom))",
            }}
          >
            <div className="h-full overflow-y-auto flex flex-col pt-10 pb-20">
              <h2
                className="text-[#FFF8E7] text-[40px] text-center mb-8"
                style={{ fontFamily: "Cormorant Garamond, SemiBold" }}
              >
                Cennik
              </h2>

              {priceData.map((category, index) => (
                <PriceCard
                  key={index}
                  title={category.title}
                  services={category.services}
                  isMobile={true}
                />
              ))}
            </div>

            {/* Bottom gradient overlay */}
            <div
              className="absolute bottom-0 left-0 w-full h-[15%] pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 40%, #0B0C0F 90%)",
              }}
            ></div>
            <div
              className="absolute top-0 left-0 w-full h-[10%] pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(0deg, #0B0C0F00 0%, #0B0C0F80 40%, #0B0C0F 90%)",
              }}
            ></div>
          </section>
        )}
      </div>
    </>
  );
}

export default App;
