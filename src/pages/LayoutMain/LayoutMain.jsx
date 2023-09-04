import NavbarMain from "../../components/Navbar/NavbarMain"
import Footer from "../../components/Footer/Footer"

const LayoutMain = (props) => {
  return (
    <div className='app-layout'>
      <header className='container app-header'>
        <NavbarMain />
      </header>
      {/*<main className='app-main'>*/}
        {props.children}
      {/*</main>*/}
      <Footer />
    </div>
  )
}

export default LayoutMain