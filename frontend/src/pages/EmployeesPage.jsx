import Hero from "../components/Hero"
import { employeesData } from "../data/employeesData.js"
import { navigationDE } from "../data/navigation.js"

const EmployeesPage = () => {
  return (
    <>
      <header>
        <Hero data={employeesData} navigationDE={navigationDE} />
      </header>
    </>
  )
}

export default EmployeesPage
