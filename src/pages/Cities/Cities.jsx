function Cities() {

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

  return (
    <>
      <div className="container d-flex gap-2 py-2">
        <input className="container " type="text" value="Type here" />
        <button name="search">Search</button>
      </div>
      <section className='container d-flex flex-wrap gap-5 justify-content-between'>
        {Cities.map((City) => {
          return (
            <>
              <article className='bg-secondary rounded'>
                <img src={City.image} width="200" height="150" alt="" />
                <h2 className='text-center text-white py-3'>{City.name}</h2>
              </article>
            </>
          )
        })}
      </section>
    </>
  )
}

export default Cities