import "./CityCard.css"

const CityCard = (props) => {
  
  return (
    <article className='bg-secondary rounded'>
      <img src={props.City.image} width="300" height="200" />
      <h2 className='text-center text-white py-3'>{props.City.name}</h2>
    </article>
  )
}

export default CityCard