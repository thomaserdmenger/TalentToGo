import Footer from "../components/Footer.jsx"
import Hero from "../components/Hero"
import { employerDataDE, employerDataUS } from "../data/employerData.js"
import { homeDataHeroDE, homeDataHeroUS } from "../data/homeData.js"
import { navigationDE, navigationUS } from "../data/navigation.js"

const EmployerPage = () => {
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
      <main></main>
      <Footer />
    </>
  )
}

export default EmployerPage
