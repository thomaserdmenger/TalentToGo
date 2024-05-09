import Hero from "../components/Hero"
import { homeDataDE, homeDataUS } from "../data/homeData.js"
import { navigationDE, navigationUS } from "../data/navigation.js"

const HomePage = () => {
  return (
    <>
      <header>
        <Hero data={homeDataDE} navigationDE={navigationDE} navigationUS={navigationUS} />
      </header>
    </>
  )
}

export default HomePage
