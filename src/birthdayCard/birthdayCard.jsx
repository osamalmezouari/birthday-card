import { useState } from "react";
import './birthdayCard.css'

const images = {
    img1: "https://images.pexels.com/photos/32976/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/3875646/pexels-photo-3875646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img3: "https://images.pexels.com/photos/4339473/pexels-photo-4339473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img4: "https://images.pexels.com/photos/756484/pexels-photo-756484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img5: "https://images.pexels.com/photos/8572143/pexels-photo-8572143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
}

const usersArray = [
    {
        name: "john Yates",
        born: 1966,
        img: images.img1
    },
    {
        name: "Hester Hogan",
        born: 1993,
        img: images.img2
    },
    {
        name: "Lara Little",
        born: 1996,
        img: images.img3
    },
    {
        name: "Sean walsh",
        born: 1950,
        img: images.img4
    },
    {
        name: "flan Gardner",
        born: 1990,
        img: images.img5
    }
]

const date = new Date
const currentYear = date.getFullYear()

const BirthdayCard = () => {
    const [persons, setPersons] = useState(usersArray)
    const handlerClick = () => {
        setPersons([])
    }
    return (
        <div className="section">
            <h1 className="title"> {persons.length} Today birthday</h1>
            {persons.map((person, index) => {
                const { name, born, img } = person
                return (
                    <div key={index} className="article" >
                        <div className="image" style={{
                            backgroundImage: `url(${img})`
                        }}></div>
                        <h6>{name}</h6>
                        <p>{currentYear - born}</p>
                    </div>
                )
            })}
            <button className="clearAll" onClick={() => handlerClick()}>Clear All</button>
        </div>
    )
}

export default BirthdayCard