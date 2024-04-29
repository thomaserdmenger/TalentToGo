import Hero from "../components/Hero"
import { homeData } from "../data/homeData.js"
import { navigation } from "../data/navigation.js"

const HomePage = () => {
  return (
    <header>
      <Hero data={homeData} navigation={navigation} />
    </header>
  )
}

export default HomePage
