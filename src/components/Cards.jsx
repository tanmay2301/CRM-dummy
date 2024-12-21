import React, { useState } from "react"
import database from "../api"

export default function Cards() {
    const [cards, setCards] = useState(database.data)

    return (
        <section>
            {cards.map(card => (
                <div className="card" key={card.id}>
                    <i className={card.iconClass}></i>
                    <h3>{card.title}</h3>
                    <h1>{card.count}</h1>
                    <h5>{card.description}</h5>
                </div>
            ))}
        </section>
    )
}