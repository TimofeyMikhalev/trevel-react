import React from 'react'
import city1 from '../../assets/city1.jpg'
import city2 from '../../assets/city2.jpg'
import city3 from '../../assets/city3.jpg'
import city4 from '../../assets/city4.jpg'
import Cards from '../Cards/Cards'

const cityCard = [
    { 
      city: "Стамбул",
      mouth: "март",
      price: 110000,
      img: city1,
      transport: 'на автобусе',
      people: 10
    }, 
    {
      city: "Тбилиси",
      mouth: "апрель",
      price: 83000,
      img: city2,
      transport: 'на самолете',
    }, 
    { 
      city: "Дубай",
      mouth: "июнь",
      price: 220000,
      img: city3,
      transport: 'на самолете',
    }, 
    {
      city: "Пхукет",
      mouth: "сентябрь",
      price: 135000,
      img: city4,
      transport: 'самолет + паром',

    }, 
]
  

function City() {

    return (
    <>
        {cityCard.map(item => {
            return (
                <Cards 
                city={item.city}
                mouth={item.mouth}
                price={item.price}
                transport={item.transport}
                people={item.people}
                img={item.img}
            />
            )
        })}
    </>
    )
}

export default City