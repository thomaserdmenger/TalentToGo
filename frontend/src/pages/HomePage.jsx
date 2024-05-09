import Hero from "../components/Hero"
import { homeDataHeroDE, homeDataHeroUS } from "../data/homeData.js"
import { navigationDE, navigationUS } from "../data/navigation.js"
import {
  homeDataProcessDE,
  homeDataProcessUS,
  homeDataServiceDE,
  homeDataServiceUS,
} from "../data/homeData.js"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { languageContext } from "../Context/Context.jsx"

const HomePage = () => {
  const { language } = useContext(languageContext)

  return (
    <>
      <header>
        <Hero
          homeDataHeroDE={homeDataHeroDE}
          homeDataHeroUS={homeDataHeroUS}
          navigationDE={navigationDE}
          navigationUS={navigationUS}
        />
      </header>
      <main>
        {/* SECTION PROCESS INFORMATION */}
        <section className="processInformationsSection">
          <div className="bg-gray-50">
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
              <section aria-labelledby="details-heading">
                {language === "DE" && (
                  <>
                    <div className="flex flex-col items-center text-center">
                      <h2
                        id="details-heading"
                        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {homeDataProcessDE.heading}
                      </h2>
                      <p className="mt-3 max-w-3xl text-lg text-gray-600">
                        {homeDataProcessDE.text}
                      </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                      <Link to="/employer">
                        <div>
                          <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                              alt="Drawstring top with elastic loop closure and textured interior padding."
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <h2 className="mt-8 font-bold text-lg">
                            {homeDataProcessDE.headingImgOne}
                          </h2>
                          <p className="mt-2 text-base text-gray-500">
                            {homeDataProcessDE.textImgOne}
                          </p>
                        </div>
                      </Link>
                      <Link to="/employees">
                        <div>
                          <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-02.jpg"
                              alt="Front zipper pouch with included key ring."
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <h2 className="mt-8 font-bold text-lg">
                            {homeDataProcessDE.headingImgTwo}
                          </h2>
                          <p className="mt-2 text-base text-gray-500">
                            {homeDataProcessDE.textImgTwo}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </>
                )}

                {language === "US" && (
                  <>
                    <div className="flex flex-col items-center text-center">
                      <h2
                        id="details-heading"
                        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {homeDataProcessUS.heading}
                      </h2>
                      <p className="mt-3 max-w-3xl text-lg text-gray-600">
                        {homeDataProcessUS.text}
                      </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                      <Link to="/employer">
                        <div>
                          <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                              alt="Drawstring top with elastic loop closure and textured interior padding."
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <h2 className="mt-8 font-bold text-lg">
                            {homeDataProcessUS.headingImgOne}
                          </h2>
                          <p className="mt-2 text-base text-gray-500">
                            {homeDataProcessUS.textImgOne}
                          </p>
                        </div>
                      </Link>
                      <Link to="/employees">
                        <div>
                          <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-02.jpg"
                              alt="Front zipper pouch with included key ring."
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <h2 className="mt-8 font-bold text-lg">
                            {homeDataProcessUS.headingImgTwo}
                          </h2>
                          <p className="mt-2 text-base text-gray-500">
                            {homeDataProcessUS.textImgTwo}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </>
                )}
              </section>
            </div>
          </div>
        </section>
        <section className="serviceSection">
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              {language === "DE" && (
                <>
                  <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">
                      {homeDataServiceDE.slogan}
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {homeDataServiceDE.heading}
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">{homeDataServiceDE.text}</p>
                  </div>
                  <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                      {homeDataServiceDE.features.map((feature) => (
                        <div key={feature.name} className="relative pl-16">
                          <dt className="text-base font-semibold leading-7 text-gray-900">
                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                              <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            {feature.name}
                          </dt>
                          <dd className="mt-2 text-base leading-7 text-gray-600">
                            {feature.description}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </>
              )}

              {language === "US" && (
                <>
                  <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">
                      {homeDataServiceUS.slogan}
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {homeDataServiceUS.heading}
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">{homeDataServiceUS.text}</p>
                  </div>
                  <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                      {homeDataServiceUS.features.map((feature) => (
                        <div key={feature.name} className="relative pl-16">
                          <dt className="text-base font-semibold leading-7 text-gray-900">
                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                              <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            {feature.name}
                          </dt>
                          <dd className="mt-2 text-base leading-7 text-gray-600">
                            {feature.description}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage
