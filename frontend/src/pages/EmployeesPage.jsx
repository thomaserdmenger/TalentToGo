import Footer from "../components/Footer.jsx"
import Hero from "../components/Hero"
import { employeesDataDE, employeesDataES } from "../data/employeesData.js"
import { homeDataHeroDE, homeDataHeroES } from "../data/homeData.js"
import { navigationDE, navigationES } from "../data/navigation.js"

const EmployeesPage = () => {
  return (
    <>
      <header>
        <Hero
          homeDataHeroDE={homeDataHeroDE}
          homeDataHeroES={homeDataHeroES}
          navigationDE={navigationDE}
          navigationES={navigationES}
          employeesDataDE={employeesDataDE}
          employeesDataES={employeesDataES}
        />
      </header>
      <main></main>
      <Footer />
    </>
  )
}

export default EmployeesPage
