import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import database from "../api";

export default function Cards() {
    const [cards, setCards] = useState(database.data);

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    className="hover:shadow-lg transition-transform transform hover:-translate-y-1 p-4"
                >
                    <CardHeader className="p-0 ml-3">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-lg font-normal text-left mt-1">{card.title}</CardTitle>
                            <i className={`${card.iconClass} text-zinc-700 text-lg`}></i>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0 text-left ml-3 mt-3">
                        <p className="text-3xl font-bold">{card.count}</p>
                    </CardContent>
                    <CardDescription className="text-sm text-gray-600 p-0 text-left ml-3 mt-1 mb-1">
                        {card.description}
                    </CardDescription>
                </Card>
            ))}
        </section>
    );
}
