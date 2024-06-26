import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { languageContext } from "../Context/Context.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero";
import { employerDataDE, employerDataES } from "../data/employerData.js";
import { homeDataHeroDE, homeDataHeroES } from "../data/homeData.js";
import { navigationDE, navigationES } from "../data/navigation.js";
import {
  employerPlacementDE,
  employerPlacementES,
  employerFaqDE,
  employerFaqES,
} from "../data/employerData.js";
import ContactForm from "../components/ContactForm.jsx";
import HeroVideo from "../components/HeroVideo.jsx";

const EmployerPage = () => {
  const { language } = useContext(languageContext);

  return (
    <>
      <header>
        <HeroVideo
          homeDataHeroDE={homeDataHeroDE}
          homeDataHeroES={homeDataHeroES}
          navigationDE={navigationDE}
          navigationES={navigationES}
          employerDataDE={employerDataDE}
          employerDataES={employerDataES}
        />
      </header>
      <main>
        {/* Placement Process Section */}
        <section className="placementProcessSection">
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:max-w-none lg:grid-cols-2 ">
                {language === "DE" && (
                  <>
                    <div className="lg:text-center col-span-2 ">
                      <h2 className="text-base font-semibold leading-7 text-indigo-600">
                        {employerPlacementDE.slogan}
                      </h2>
                      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {employerPlacementDE.heading}
                      </p>
                      {/* <p className="mt-6 text-base leading-7 text-gray-600">
                        {employerPlacementDE.text}
                      </p> */}
                      {employerPlacementDE.text.map((text, index) => {
                        return (
                          <p
                            className="mt-6 text-lg leading-8 text-gray-600 px-6 max-w-[1250px] mx-auto"
                            key={index}>
                            {text}
                          </p>
                        );
                      })}
                    </div>
                    <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
                      {employerPlacementDE.features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                          <dt className="font-semibold text-gray-900">
                            <CheckIcon
                              className="absolute left-0 top-1 h-5 w-5 text-indigo-500"
                              aria-hidden="true"
                            />
                            {feature.name}
                          </dt>
                          <dd className="mt-2">{feature.description}</dd>
                        </div>
                      ))}
                    </dl>
                  </>
                )}

                {language === "ES" && (
                  <>
                    <div className="lg:text-center col-span-2 ">
                      <h2 className="text-base font-semibold leading-7 text-indigo-600">
                        {employerPlacementES.slogan}
                      </h2>
                      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {employerPlacementES.heading}
                      </p>

                      {/* {employerPlacementES.text} */}
                      {employerPlacementES.text.map((text, index) => {
                        return (
                          <p
                            className="mt-6 text-lg leading-8 text-gray-600 px-6 max-w-[1250px] mx-auto"
                            key={index}>
                            {text}
                          </p>
                        );
                      })}
                    </div>
                    <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
                      {employerPlacementES.features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                          <dt className="font-semibold text-gray-900">
                            <CheckIcon
                              className="absolute left-0 top-1 h-5 w-5 text-indigo-500"
                              aria-hidden="true"
                            />
                            {feature.name}
                          </dt>
                          <dd className="mt-2">{feature.description}</dd>
                        </div>
                      ))}
                    </dl>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* FAQ for Employers */}
        <section className="faqSectionForEmployers">
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-0 lg:py-40">
              <div className="px-8 mx-auto max-w-4xl divide-y divide-gray-900/10 lg:max-w-6xl">
                <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                  {language === "DE" && employerFaqDE.heading}
                  {language === "ES" && employerFaqES.heading}
                </h2>
                <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                  {language === "DE" && (
                    <>
                      {employerFaqDE.faqs.map((faq, index) => (
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
                      {employerFaqES.faqs.map((faq, index) => (
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
        <section id="contactEmployers" className="contactFormSection">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EmployerPage;
