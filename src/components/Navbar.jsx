import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/mento-care-logo.png";
import BurgerMenu from "../assets/burgerMenu.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const menus = [
    { name: "o nas", id: "about" },
    { name: "usługi", id: "services" },
    { name: "cennik", id: "pricing" },
  ];

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(null);
      return; // Exit early if not on the homepage
    }

    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.4, // Trigger when 40% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    menus.forEach((menu) => {
      const ids = menu.ids || [menu.id];
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, [menus]);

  return (
    <nav className="fixed top-5 md:top-10 left-0 w-full z-50 px-4 md:px-[98px]">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-20">
          <img
            src={Logo}
            alt="Logo"
            className="logo cursor-pointer h-[60px] md:h-[100px] md:mt-[40px]"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-[32px] uppercase text-lg font-light">
          {menus.map((menu, i) => (
            <a
              key={i}
              href={`#${menu.id}`}
              onClick={() => `/#${menu.id}`}
              className={`cursor-pointer flex items-center ${
                [menu.id].some((id) => activeSection === id)
                  ? "text-prime"
                  : "text-textPrimary"
              }`}
            >
              {[menu.id].some((id) => activeSection === id) && (
                <span className="w-2 h-2 bg-prime rounded-full mr-2"></span>
              )}
              {menu.name}
            </a>
          ))}
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex space-x-[32px] uppercase text-lg font-light">
          <span className="cursor-pointer text-textPrimary">BLOG</span>

          <p className="text-prime cursor-pointer flex items-center gap-2">
            <span>{`>`}</span>
            <span>
              <a
                href="https://booksy.com/pl-pl/118318_mento-barber-shop_barber-shop_10189_bochnia#ba_s=seo"
                target="_blank"
                rel="noopener noreferrer"
              >
                zarezerwuj
              </a>
            </span>
            <span>{`<`}</span>
          </p>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-20">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-3xl text-prime focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <AiOutlineClose style={{ color: "#FFFFFF" }} />
            ) : (
              <img src={BurgerMenu} style={{ height: "20px" }} alt="Menu" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-md flex flex-col justify-center items-center text-lg font-light uppercase z-10">
          <ul className="flex flex-col gap-8 text-center text-white text-[18px]">
            {menus.map((item, index) => (
              <a
                key={index}
                href={`/#${item.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="cursor-pointer"
              >
                {item.name}
              </a>
            ))}
            <li>BLOG</li>
            <li>
              <p className="text-prime font-bold flex justify-center items-center gap-2">
                <span>{`>`}</span>
                <span>
                  <a
                    href="https://booksy.com/pl-pl/118318_mento-barber-shop_barber-shop_10189_bochnia#ba_s=seo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    zarezerwuj
                  </a>
                </span>
                <span>{`<`}</span>
              </p>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
