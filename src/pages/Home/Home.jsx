import Carousel from '../../components/Carousel/Carousel'
import CityCard from '../../components/CityCard/CityCard'
import LayoutMain from '../LayoutMain/LayoutMain'

const Home = () => {
  const Cities = [
    {
      _id: 1,
      name: "Buenos Aires",
      image: "",
      description: "",
      category: "",
      price: 0.0,
    },
    {
      _id: 2,
      name: "Paris",
      image: "",
      description: "",
      category: "",
      price: 0.0,
    }
  ]

  return (
    <LayoutMain>
      <main className='flex-grow-1 d-flex flex-column'>
        <section className='home-hero'>
          <h2 className='home-hero-title'>
            Acá va el Hero
          </h2>
        </section>
        <section className='home-carousel'>
          <Carousel />
        </section>
      </main>
    </LayoutMain>
  )
}

export default Home

        {/*<section className="container d-flex flex-wrap gap-5 justify-content-between">
          <h2 className='text-center w-100 text-primary'>Cities</h2>
        {Cities.map((city) => (<CityCard City={city} />))}
        </section>*/}
