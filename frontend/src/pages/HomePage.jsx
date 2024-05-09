import Hero from "../components/Hero"
import { homeDataHeroDE, homeDataHeroUS } from "../data/homeData.js"
import { navigationDE, navigationUS } from "../data/navigation.js"

const HomePage = () => {
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
    </>
  )
}

export default HomePage
