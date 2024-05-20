import { useContext } from "react"
import ContactForm from "../components/ContactForm.jsx"
import Footer from "../components/Footer.jsx"
import Hero from "../components/Hero"
import {
  employeesDataDE,
  employeesDataES,
  employeesFaqDE,
  employeesFaqES,
} from "../data/employeesData.js"
import { homeDataHeroDE, homeDataHeroES } from "../data/homeData.js"
import { navigationDE, navigationES } from "../data/navigation.js"
import { languageContext } from "../Context/Context.jsx"
import { Disclosure } from "@headlessui/react"
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline"
import HeroVideo from "../components/HeroVideo.jsx"

const EmployeesPage = () => {
  const { language } = useContext(languageContext)

  return (
    <>
      <header>
        <HeroVideo
          homeDataHeroDE={homeDataHeroDE}
          homeDataHeroES={homeDataHeroES}
          navigationDE={navigationDE}
          navigationES={navigationES}
          employeesDataDE={employeesDataDE}
          employeesDataES={employeesDataES}
        />
      </header>
      <main>
        {/* FAQ for Employees */}
        <section className="faqSectionForEmployees">
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-0 lg:py-40">
              <div className="px-8 mx-auto max-w-4xl divide-y divide-gray-900/10 lg:max-w-6xl">
                <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                  {language === "DE" && employeesFaqDE.heading}
                  {language === "ES" && employeesFaqES.heading}
                </h2>
                <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                  {language === "DE" && (
                    <>
                      {employeesFaqDE.faqs.map((faq, index) => (
                        <Disclosure as="div" key={index} className="pt-6">
                          {({ open }) => (
                            <>
                              <dt>
                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                  <span className="text-base font-semibold leading-7">
                                    {faq.question}
                                  </span>
                                  <span className="ml-6 flex h-7 items-center">
                                    {open ? (
                                      <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                    ) : (
                                      <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </dt>
                              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </>
                  )}

                  {language === "ES" && (
                    <>
                      {employeesFaqES.faqs.map((faq, index) => (
                        <Disclosure as="div" key={index} className="pt-6">
                          {({ open }) => (
                            <>
                              <dt>
                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                  <span className="text-base font-semibold leading-7">
                                    {faq.question}
                                  </span>
                                  <span className="ml-6 flex h-7 items-center">
                                    {open ? (
                                      <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                    ) : (
                                      <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </dt>
                              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </section>
        {/* CONTACT FORM SECTION */}
        <section id="contactEmployees" className="contactFormSection">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default EmployeesPage
