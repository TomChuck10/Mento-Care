import "./App.css";
import FacebookLogo from "./assets/facebook_logo.svg";
import InstagramLogo from "./assets/instagram_logo.svg";
import TikTokLogo from "./assets/tiktok_logo.svg";
import Girl from "./assets/girl_main_page.png";
import Kobido from "./assets/uslugi-kobido.png";
import PriceListPhoto from "./assets/cennik.png";
import Navbar from "./components/Navbar";

import { useIsMobile } from "./hooks/useIsMobile";

function App() {
  const isMobile = useIsMobile();

  return (
    <>
      <Navbar />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {/* First Section - Home */}
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
              indywidualnym podejściem. Diagnozujemy problemy skórne i dobieramy
              skuteczne terapie, stawiając na slow aging – naturalne piękno i
              zdrową, promienną cerę. Zapraszamy!
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

        {/* Second Section - Kobido Massage */}
        <section
          id="services"
          className="snap-start h-screen w-full relative flex items-end pb-[98px]"
        >
          {/* Background Image */}
          <img
            src={Kobido}
            alt="Kobido massage"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
          />

          {/* Dark overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div> */}

          {/* Content container */}
          <div className="px-[98px] z-20 relative">
            <div className="flex flex-row items-end justify-between">
              {/* Text content */}
              <div className="md:w-1/2  md:pr-12">
                <h2
                  className="text-[#FFF8E7] text-[72px]"
                  style={{
                    fontFamily: "Cormorant Garamond, SemiBold",
                  }}
                >
                  Kobido
                </h2>
                <p className="text-[#FFF8E7] text-[18px]">
                  (inaczej naturalna medycyna estetyczna) to technika masażu,
                  która wywodzi się z Japonii i ma swoje unikalne elementy.
                  Powolne, płynne ruchy mają na celu rozluźnienie napięć,
                  głębokie pobudzają skórę i zapewniają efekt liftingu.
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

              {/* Benefits box */}
              <div className="felx flex-col space-y-[6px]">
                <div
                  className={
                    "w-5 h-5 border-[1px] border-prime rounded-full flex items-center justify-center"
                  }
                >
                  <div
                    className={
                      "bg-prime border-prime w-3 h-3 m-auto rounded-full"
                    }
                  />
                </div>
                <div className="flex flex-col space-y-[6px]">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="w-5 h-5 border-[1px] border-[#FFF8E7] rounded-full flex items-center justify-center"
                    ></div>
                  ))}
                </div>
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

        {/* Third Section - Price List */}
        <section id="pricing" className="snap-start h-screen w-full relative ">
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
            <div className="w-1/2 h-full overflow-y-auto flex flex-col px-[60px] pt-[200px] pb-[100px]">
              {/* Facial Treatments - with fieldset styling */}
              <div className="mb-10 relative border-2 border-[#FFF8E7]/40 rounded-md pt-6 px-6 pb-5">
                {/* Legend/Title */}
                <div className="absolute -top-4 left-4 px-4 bg-[#3C2A21]">
                  <h3 className="text-[#FFF8E7] text-[24px]">
                    Zabiegi na twarz
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between ">
                    <span className="text-[#FFF8E7]">
                      Kobido - lifting japoński
                    </span>
                    <span className="text-[#FFF8E7] font-semibold">250 zł</span>
                  </div>

                  <div className="flex justify-between ">
                    <span className="text-[#FFF8E7]">
                      Masaż twarzy relaksacyjny
                    </span>
                    <span className="text-[#FFF8E7] font-semibold">160 zł</span>
                  </div>

                  <div className="flex justify-between ">
                    <span className="text-[#FFF8E7]">Zabieg nawilżający</span>
                    <span className="text-[#FFF8E7] font-semibold">180 zł</span>
                  </div>

                  <div className="flex justify-between ">
                    <span className="text-[#FFF8E7]">Zabieg oczyszczający</span>
                    <span className="text-[#FFF8E7] font-semibold">200 zł</span>
                  </div>
                </div>
              </div>

              {/* Body Treatments - with fieldset styling */}
              <div className="mb-10 relative border-2 border-[#FFF8E7]/40 rounded-md pt-6 px-6 pb-5">
                {/* Legend/Title */}
                <div className="absolute -top-4 left-4 px-4 bg-[#3C2A21]">
                  <h3 className="text-[#FFF8E7] text-[24px] font">
                    Zabiegi na ciało
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between ">
                    <span className="text-[#FFF8E7]">
                      Masaż relaksacyjny całego ciała
                    </span>
                    <span className="text-[#FFF8E7] font-semibold">220 zł</span>
                  </div>

                  <div className="flex justify-between ">
                    <span className="text-[#FFF8E7]">
                      Masaż gorącymi kamieniami
                    </span>
                    <span className="text-[#FFF8E7] font-semibold">240 zł</span>
                  </div>

                  <div className="flex justify-between ">
                    <span className="text-[#FFF8E7]">Peeling całego ciała</span>
                    <span className="text-[#FFF8E7] font-semibold">150 zł</span>
                  </div>
                </div>
              </div>

              {/* Packages - with fieldset styling */}
              <div className="mb-10 relative border-2 border-[#FFF8E7]/40 rounded-md pt-6 px-6 pb-5">
                {/* Legend/Title */}
                <div className="absolute -top-4 left-4 px-4 bg-[#3C2A21]">
                  <h3 className="text-[#FFF8E7] text-[24px]">
                    Pakiety zabiegów
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between ">
                    <span className="text-[#FFF8E7]">3x Kobido - pakiet</span>
                    <span className="text-[#FFF8E7] font-semibold">680 zł</span>
                  </div>

                  <div className="flex justify-between ">
                    <span className="text-[#FFF8E7]">
                      Rytuał piękna (twarz + ciało)
                    </span>
                    <span className="text-[#FFF8E7] font-semibold">350 zł</span>
                  </div>
                </div>
              </div>
              <div className="mb-10 relative border-2 border-[#FFF8E7]/40 rounded-md pt-6 px-6 pb-5">
                {/* Legend/Title */}
                <div className="absolute -top-4 left-4 px-4 bg-[#3C2A21]">
                  <h3 className="text-[#FFF8E7] text-[24px]">
                    Pakiety zabiegów
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between ">
                    <span className="text-[#FFF8E7]">3x Kobido - pakiet</span>
                    <span className="text-[#FFF8E7] font-semibold">680 zł</span>
                  </div>

                  <div className="flex justify-between ">
                    <span className="text-[#FFF8E7]">
                      Rytuał piękna (twarz + ciało)
                    </span>
                    <span className="text-[#FFF8E7] font-semibold">350 zł</span>
                  </div>
                </div>
              </div>
              <div className="mb-10 relative border-2 border-[#FFF8E7]/40 rounded-md pt-6 px-6 pb-5">
                {/* Legend/Title */}
                <div className="absolute -top-4 left-4 px-4 bg-[#3C2A21]">
                  <h3 className="text-[#FFF8E7] text-[24px]">
                    Pakiety zabiegów
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between ">
                    <span className="text-[#FFF8E7]">3x Kobido - pakiet</span>
                    <span className="text-[#FFF8E7] font-semibold">680 zł</span>
                  </div>

                  <div className="flex justify-between ">
                    <span className="text-[#FFF8E7]">
                      Rytuał piękna (twarz + ciało)
                    </span>
                    <span className="text-[#FFF8E7] font-semibold">350 zł</span>
                  </div>
                </div>
              </div>
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
      </div>
    </>
  );
}

export default App;
