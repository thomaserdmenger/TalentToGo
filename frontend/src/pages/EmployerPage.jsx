import Hero from "../components/Hero"
import { employerData } from "../data/employerData.js"
import { navigation } from "../data/navigation.js"

const EmployerPage = () => {
  return (
    <>
      <header>
        <Hero data={employerData} navigation={navigation} />
      </header>
    </>
  )
}

export default EmployerPage
