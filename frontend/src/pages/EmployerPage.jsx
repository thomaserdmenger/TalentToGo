import Hero from "../components/Hero"
import { employerData } from "../data/employerData.js"
import { navigationDE } from "../data/navigation.js"

const EmployerPage = () => {
  return (
    <>
      <header>
        <Hero data={employerData} navigationDE={navigationDE} />
      </header>
    </>
  )
}

export default EmployerPage
