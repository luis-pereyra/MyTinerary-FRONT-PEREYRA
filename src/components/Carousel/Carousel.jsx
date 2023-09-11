import './Carousel.css'
import { useState, useEffect } from 'react'

const Cities = [
  {
    _id: 1,
    name: "Buenos Aires",
    image: "BuenosAires.jpg",
    description: "",
    category: "",
    price: 0.0,
  },
  {
    _id: 2,
    name: "Paris",
    image: "Paris.jpg",
    description: "",
    category: "",
    price: 0.0,
  },
  {
    _id: 3,
    name: "Africa",
    image: "Africa.jpg",
    description: "",
    category: "",
    price: 0.0,
  },
  {
    _id: 4,
    name: "Dubai",
    image: "Dubai.jpg",
    description: "",
    category: "",
    price: 0.0,
  },
  {
    _id: 5,
    name: "London",
    image: "London.jpg",
    description: "",
    category: "",
    price: 0.0,
  },
  {
    _id: 6,
    name: "Machu Pichu",
    image: "MachuPichu.jpg",
    description: "",
    category: "",
    price: 0.0,
  },
  {
    _id: 7,
    name: "New York",
    image: "NewYork.jpg",
    description: "",
    category: "",
    price: 0.0,
  },
  {
    _id: 8,
    name: "Rome",
    image: "Rome.jpg",
    description: "",
    category: "",
    price: 0.0,
  },
  {
    _id: 9,
    name: "Spain",
    image: "Spain.jpg",
    description: "",
    category: "",
    price: 0.0,
  },
  {
    _id: 10,
    name: "Tokio",
    image: "Tokio.jpg",
    description: "",
    category: "",
    price: 0.0,
  }
]

const Carousel = () => {
  let [counter, setCounter] = useState(0)

  const prev = () => {
    console.log(counter)
    if (counter == 0) {
      setCounter(Cities.length - 1)
    } else {
      setCounter(counter - 1)
    }
  }

  useEffect(() => {
    // Este se ejecuta solo cuando monta el componente.
  }, [])

  useEffect(() => {
    // Este se ejecuta cuando cambia counter.
  }, [counter])

  const next = () => {
    if (counter == Cities.length - 1) {
      setCounter(0)
    } else {
      setCounter(counter + 1)
    }
  }

  return (
    <>
    <section className='container d-flex flex-wrap gap-5 justify-content-between'>
      <h2 className='text-center w-100 text-primary'>Popular MyTineraries</h2>
      <button onClick={prev}>{'<'}</button>
      <article className='bg-secondary rounded'>
        <img src={Cities[counter % Cities.length].image} width="200" height="150" alt="" />
        <h2 className='text-center text-white py-3'>{Cities[counter % Cities.length].name}</h2>
      </article>
      <article className='bg-secondary rounded'>
        <img src={Cities[(counter+1) % Cities.length].image} width="200" height="150" alt="" />
        <h2 className='text-center text-white py-3'>{Cities[(counter+1) % Cities.length].name}</h2>
      </article>
      <article className='bg-secondary rounded'>
        <img src={Cities[(counter+2) % Cities.length].image} width="200" height="150" alt="" />
        <h2 className='text-center text-white py-3'>{Cities[(counter+2) % Cities.length].name}</h2>
      </article>
      <article className='bg-secondary rounded'>
        <img src={Cities[(counter+3) % Cities.length].image} width="200" height="150" alt="" />
        <h2 className='text-center text-white py-3'>{Cities[(counter+3) % Cities.length].name}</h2>
      </article>
      <button onClick={next}>{'>'}</button>
    {/*<div className='carousel'>
      <button onClick={prev}>{'<'}</button>
      {Cities.length > 0 ? (
        <img className='carousel-img' src={Cities[counter].image} alt="" />
        )
        : (<h2>Cargando...</h2>)}
      <button onClick={next}>{'>'}</button>
      </div>*/}
    </section>
    </>
  )
}

export default Carousel