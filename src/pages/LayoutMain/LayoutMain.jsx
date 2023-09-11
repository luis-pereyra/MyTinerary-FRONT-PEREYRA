import NavbarMain from "../../components/Navbar/NavbarMain"
import Footer from "../../components/Footer/Footer"
import { Outlet } from "react-router-dom"

const LayoutMain = () => {
  return (
    <div className='app-layout'>
      <NavbarMain />
      <main className='app-main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default LayoutMain
