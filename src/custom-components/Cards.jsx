import React, { useState } from "react"
import database from "../api"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export default function Cards() {
    const [cards, setCards] = useState(database.data)

    return (
        <section>
            {cards.map(card => (
                <Card className = "hover:-translate-y-1 hover:shadow-lg transition-transform">
                    <CardHeader className = "h-[140 px] w-[278px]">
                        <div className="flex items-center">
                            <CardTitle className="w-[200px] text-2xl"> {card.title}</CardTitle>
                            <div className="flex items-center pl-[20px] text-zinc-700">
                                <i className={card.iconClass}></i>
                            </div>
                        </div>
                    <CardDescription className="pt-[5px]"><p className="text-xs font-normal">{card.description}</p></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">{card.count}</p>
                    </CardContent>
                </Card>
              
                
            ))}
        </section>
    )
}