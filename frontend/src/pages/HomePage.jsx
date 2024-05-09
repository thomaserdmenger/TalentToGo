import Hero from "../components/Hero"
import { homeDataHeroDE, homeDataHeroUS } from "../data/homeData.js"
import { navigationDE, navigationUS } from "../data/navigation.js"
import {
  homeDataProcessDE,
  homeDataProcessUS,
  homeDataServiceDE,
  homeDataServiceUS,
  aboutUsDE,
  aboutUsUS,
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
        {/* SERVICE SECTION */}
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
        {/* ABOUT US SECTION */}
        <section className="aboutUsSection">
          <div className="bg-white py-24 sm:py-32">
            {language === "DE" && (
              <>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl md:max-w-2xl lg:max-w-5xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {aboutUsDE.heading}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">{aboutUsDE.text}</p>
                  </div>
                  <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {aboutUsDE.people.map((person) => (
                      <li key={person.name}>
                        <img
                          className="aspect-[3/2] w-full rounded-2xl object-cover"
                          src={person.imageUrl}
                          alt=""
                        />
                        <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                          {person.name}
                        </h3>
                        <p className="text-base leading-7 text-gray-600">{person.role}</p>
                        <ul role="list" className="mt-6 flex gap-x-6">
                          <li>
                            <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">X</span>
                              <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href={person.linkedinUrl}
                              className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">LinkedIn</span>
                              <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {language === "US" && (
              <>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl md:max-w-2xl lg:max-w-5xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {aboutUsUS.heading}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">{aboutUsUS.text}</p>
                  </div>
                  <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {aboutUsUS.people.map((person) => (
                      <li key={person.name}>
                        <img
                          className="aspect-[3/2] w-full rounded-2xl object-cover"
                          src={person.imageUrl}
                          alt=""
                        />
                        <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                          {person.name}
                        </h3>
                        <p className="text-base leading-7 text-gray-600">{person.role}</p>
                        <ul role="list" className="mt-6 flex gap-x-6">
                          <li>
                            <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">X</span>
                              <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href={person.linkedinUrl}
                              className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">LinkedIn</span>
                              <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage
