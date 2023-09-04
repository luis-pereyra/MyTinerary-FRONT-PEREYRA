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
  }
]

const Carousel = () => {
  let [counter, setCounter] = useState(0)

  const prev = () => {
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
    <div className='carousel'>
      <button onClick={prev}>{'<'}</button>
      {Cities.length > 0 ? (<img className='carousel-img' src={Cities[counter].image} alt="" />)
        : (<h2>Cargando..</h2>)}
      <button onClick={next}>{'>'}</button>
    </div>
  )
}

export default Carousel