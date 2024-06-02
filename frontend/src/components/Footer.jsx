import { useContext } from "react";
import { languageContext } from "../Context/Context.jsx";
import { calculateYear } from "../utils/calculateYear.js";
import { footerDataDE, footerDataES } from "../data/footerData";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const { language } = useContext(languageContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const scrollToDifferentSections = (e) => {
    // Conditionals for About Us
    if (e.target.textContent === "Über uns" && pathname === "/") {
      const aboutUsSection = document.querySelector("#aboutUs");
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }

    if (e.target.textContent === "Sobre nosotros" && pathname === "/") {
      const aboutUsSection = document.querySelector("#aboutUs");
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }

    if (pathname === "/employer" && e.target.textContent === "Über uns") {
      setTimeout(() => {
        navigate("/");
        setTimeout(() => {
          const aboutUsSection = document.querySelector("#aboutUs");
          aboutUsSection.scrollIntoView({ behavior: "smooth" });
        }, 20);
      }, 50);
    }

    if (pathname === "/employer" && e.target.textContent === "Sobre nosotros") {
      setTimeout(() => {
        navigate("/");
        setTimeout(() => {
          const aboutUsSection = document.querySelector("#aboutUs");
          aboutUsSection.scrollIntoView({ behavior: "smooth" });
        }, 20);
      }, 50);
    }

    if (pathname === "/employees" && e.target.textContent === "Über uns") {
      setTimeout(() => {
        navigate("/");
        setTimeout(() => {
          const aboutUsSection = document.querySelector("#aboutUs");
          aboutUsSection.scrollIntoView({ behavior: "smooth" });
        }, 20);
      }, 50);
    }

    if (pathname === "/employees" && e.target.textContent === "Sobre nosotros") {
      setTimeout(() => {
        navigate("/");
        setTimeout(() => {
          const aboutUsSection = document.querySelector("#aboutUs");
          aboutUsSection.scrollIntoView({ behavior: "smooth" });
        }, 20);
      }, 50);
    }

    // Conditionals for Contact Sections
    if (e.target.textContent === "Kontakt" && pathname === "/") {
      const aboutUsSection = document.querySelector("#contactHome");
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }

    if (e.target.textContent === "Contacto" && pathname === "/") {
      const aboutUsSection = document.querySelector("#contactHome");
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }

    if (e.target.textContent === "Kontakt" && pathname === "/employer") {
      const aboutUsSection = document.querySelector("#contactEmployers");
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }

    if (e.target.textContent === "Contacto" && pathname === "/employer") {
      const aboutUsSection = document.querySelector("#contactEmployers");
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }

    if (e.target.textContent === "Kontakt" && pathname === "/employees") {
      const aboutUsSection = document.querySelector("#contactEmployees");
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }

    if (e.target.textContent === "Contacto" && pathname === "/employees") {
      const aboutUsSection = document.querySelector("#contactEmployees");
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        {language === "DE" && (
          <>
            {/* Navigation Links */}
            <nav
              className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12 flex-wrap"
              aria-label="Footer">
              {footerDataDE.main.map((item) => (
                <div key={item.name} className="pb-6">
                  <Link
                    onClick={scrollToDifferentSections}
                    to={item.href}
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                    {item.name}
                  </Link>
                </div>
              ))}
            </nav>
            {/* Social Media Icons */}
            {/* <div className="mt-10 flex justify-center space-x-10">
              {footerDataDE.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div> */}
            <p className="mt-10 text-center text-xs leading-5 text-gray-500">
              &copy; {calculateYear()} {footerDataDE.copyright}
            </p>
          </>
        )}

        {language === "ES" && (
          <>
            {/* Navigation Links */}
            <nav
              className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
              aria-label="Footer">
              {footerDataES.main.map((item) => (
                <div key={item.name} className="pb-6">
                  <Link
                    onClick={scrollToDifferentSections}
                    to={item.href}
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                    {item.name}
                  </Link>
                </div>
              ))}
            </nav>
            <div className="mt-10 flex justify-center space-x-10">
              {footerDataES.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-10 text-center text-xs leading-5 text-gray-500">
              &copy; {calculateYear()} {footerDataES.copyright}
            </p>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
