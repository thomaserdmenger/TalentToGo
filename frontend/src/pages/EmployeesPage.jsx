import Hero from "../components/Hero"
import { employeesData } from "../data/employeesData.js"
import { navigation } from "../data/navigation.js"

const EmployeesPage = () => {
  return (
    <>
      <header>
        <Hero data={employeesData} navigation={navigation} />
      </header>
    </>
  )
}

export default EmployeesPage
