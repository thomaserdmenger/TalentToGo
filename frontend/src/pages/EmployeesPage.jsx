import Footer from "../components/Footer.jsx"
import Hero from "../components/Hero"
import { employeesData } from "../data/employeesData.js"
import { homeDataHeroDE, homeDataHeroUS } from "../data/homeData.js"
import { navigationDE, navigationUS } from "../data/navigation.js"

const EmployeesPage = () => {
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
      <main></main>
      <Footer />
    </>
  )
}

export default EmployeesPage
