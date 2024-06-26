import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { languageContext } from "../Context/Context";
import LanguageSelect from "./LanguageSelect";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

export default function Hero({
  homeDataHeroDE,
  homeDataHeroES,
  navigationDE,
  navigationES,
  employerDataDE,
  employerDataES,
  employeesDataDE,
  employeesDataES,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <div className="bg-white">
      {/* Header and Navigation */}
      <header className="absolute inset-x-0 top-0 z-50">
        {/* Desktop Menu */}
        <nav className="flex items-center justify-between p-6 lg:px-8 relative" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              {/* <span className="sr-only">TalentToGo</span> */}
              {/* Logo here */}
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {language === "DE" &&
              navigationDE.map((item) => (
                <Link
                  onClick={scrollToDifferentSections}
                  key={item.name}
                  to={item.href}
                  className="text-sm font-semibold leading-6 text-white text-shadow-sm">
                  {item.name}
                </Link>
              ))}
            {language === "ES" &&
              navigationES.map((item) => (
                <Link
                  onClick={scrollToDifferentSections}
                  key={item.name}
                  to={item.href}
                  className="text-sm font-semibold leading-6 text-white text-shadow-sm">
                  {item.name}
                </Link>
              ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-2">
            {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a> */}
            <a href="https://www.facebook.com/" target="_blank">
              <FaSquareFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaSquareInstagram size={20} />
            </a>
            <a href="#">
              <FaSquareWhatsapp size={20} />
            </a>
          </div>
          <div className="fixed top-16 right-8">
            <LanguageSelect />
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 ">
                {/* <span className="sr-only">Your Company</span> */}
                {/* Logo here */}
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {language === "DE" &&
                    navigationDE.map((item) => (
                      <a
                        onClick={scrollToDifferentSections}
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {item.name}
                      </a>
                    ))}

                  {language === "ES" &&
                    navigationES.map((item) => (
                      <a
                        onClick={scrollToDifferentSections}
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {item.name}
                      </a>
                    ))}
                </div>
                <div className="py-6 flex gap-2">
                  {/* <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Log in
                  </a> */}
                  <a href="https://www.facebook.com/" target="_blank">
                    <FaSquareFacebook size={20} />
                  </a>
                  <a href="https://www.instagram.com/" target="_blank">
                    <FaSquareInstagram size={20} />
                  </a>
                  <a href="#">
                    <FaSquareWhatsapp size={20} />
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div
        className={`lg:min-h-screen relative isolate px-6 pt-14 lg:px-8 ${
          pathname === "/" && "bg-hero-home"
        } ${pathname === "/employer" && "bg-hero-employers"} ${
          pathname === "/employees" && "bg-hero-employees"
        } bg-no-repeat bg-center bg-cover`}>
        {language === "DE" && (
          <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-shadow-sm lg:leading-[1.1]">
                {pathname === "/" && homeDataHeroDE.heading}
                {pathname === "/employer" && employerDataDE.heading}
                {pathname === "/employees" && employeesDataDE.heading}
              </h1>
              <p className="mt-6 text-lg leading-8 text-white text-shadow-sm">
                {pathname === "/" && homeDataHeroDE.text}
                {pathname === "/employer" && employerDataDE.text}
                {pathname === "/employees" && employeesDataDE.text}
              </p>
              {pathname === "/" && (
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    to="/employer"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {homeDataHeroDE.buttonEmployers}
                  </Link>
                  <Link
                    to="/employees"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {homeDataHeroDE.buttonEmployees}
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {language === "ES" && (
          <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white text-shadow sm:text-6xl">
                {pathname === "/" && homeDataHeroES.heading}
                {pathname === "/employer" && employerDataES.heading}
                {pathname === "/employees" && employeesDataES.heading}
              </h1>
              <p className="mt-6 text-lg leading-8 text-white text-shadow-lg font-medium">
                {pathname === "/" && homeDataHeroES.text}
                {pathname === "/employer" && employerDataES.text}
                {pathname === "/employees" && employeesDataES.text}
              </p>
              {pathname === "/" && (
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    to="/employer"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {homeDataHeroES.buttonEmployers}
                  </Link>
                  <Link
                    to="/employees"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {homeDataHeroES.buttonEmployees}
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
