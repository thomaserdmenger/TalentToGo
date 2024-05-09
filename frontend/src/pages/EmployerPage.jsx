import Footer from "../components/Footer.jsx"
import Hero from "../components/Hero"
import { employerDataDE, employerDataUS } from "../data/employerData.js"
import { homeDataHeroDE, homeDataHeroUS } from "../data/homeData.js"
import { navigationDE, navigationUS } from "../data/navigation.js"
import { employerPlacementDE, employerPlacementUS } from "../data/employerData.js"
import { CheckIcon } from "@heroicons/react/20/solid"
import { useContext } from "react"
import { languageContext } from "../Context/Context.jsx"

const EmployerPage = () => {
  const { language } = useContext(languageContext)

  return (
    <>
      <header>
        <Hero
          homeDataHeroDE={homeDataHeroDE}
          homeDataHeroUS={homeDataHeroUS}
          navigationDE={navigationDE}
          navigationUS={navigationUS}
          employerDataDE={employerDataDE}
          employerDataUS={employerDataUS}
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
                      <p className="mt-6 text-base leading-7 text-gray-600">
                        {employerPlacementDE.text}
                      </p>
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

                {language === "US" && (
                  <>
                    <div className="lg:text-center col-span-2 ">
                      <h2 className="text-base font-semibold leading-7 text-indigo-600">
                        {employerPlacementUS.slogan}
                      </h2>
                      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {employerPlacementUS.heading}
                      </p>
                      <p className="mt-6 text-base leading-7 text-gray-600">
                        {employerPlacementUS.text}
                      </p>
                    </div>
                    <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
                      {employerPlacementUS.features.map((feature) => (
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
      </main>
      <Footer />
    </>
  )
}

export default EmployerPage
