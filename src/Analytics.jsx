"use client"
import * as React from "react"
import { useMemo, useState } from "react"
import { Label, Pie, PieChart, Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartContainer } from "@/components/ui/chart"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { TrendingUp } from "lucide-react"
import Header from './custom-components/Header'
import SideBar from './custom-components/SideBar'

const chartConfig = { 
  activeClients: { label: "Active Clients", color: "#FEC20C" },
  newClients: { label: "New Clients", color: "#e83474" },
  revenue: { label: "Revenue Growth", color: "#34A853" },
};

const clientData = [
    { month: "Jan", activeClients: 120, newClients: 25, revenue: 15000 },
    { month: "Feb", activeClients: 135, newClients: 30, revenue: 18000 },
    { month: "Mar", activeClients: 145, newClients: 28, revenue: 21000 },
    { month: "Apr", activeClients: 160, newClients: 35, revenue: 25000 },
    { month: "May", activeClients: 170, newClients: 32, revenue: 27000 },
    { month: "Jun", activeClients: 185, newClients: 40, revenue: 30000 },
]

const retentionData = [
    { category: "High Retention", percentage: 60, fill: "#34A853" },
    { category: "Medium Retention", percentage: 25, fill: "#FBBC05" },
    { category: "Low Retention", percentage: 15, fill: "#EA4335" },
]

function Analytics() {
    const [timeRange, setTimeRange] = useState("90d");

    const filteredData = useMemo(() => {
      return clientData.slice(-3); // Last 3 months
    }, [timeRange]);

    return (
        <div className="analytics-container h-screen overflow-y-auto">
            <Header />
            <SideBar />
            <div className="flex flex-wrap justify-center gap-4 p-4 ml-14">

                <Card className="w-[375px]">
                    <CardHeader>
                        <CardTitle>Client Overview</CardTitle>
                        <CardDescription>Last 6 Months</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="w-full h-full">
                            <BarChart data={clientData}>
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="month" tickMargin={10} axisLine={false} />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <ChartLegend content={<ChartLegendContent />} />
                                <Bar dataKey="activeClients" fill="#FEC20C" radius={4} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>

                <Card className="w-[380px]">
                    <CardHeader>
                        <CardTitle>New Clients</CardTitle>
                        <CardDescription>Last 6 Months</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <AreaChart data={clientData}>
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="month" tickMargin={8} axisLine={false} />
                                <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
                                <Area dataKey="newClients" type="natural" fill="#e83474" stroke="#e83474" stackId="a" />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                </Card>

                <Card className="w-[375px]">
                    <CardHeader>
                        <CardTitle>Client Retention</CardTitle>
                        <CardDescription>Last 6 Months</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
                            <PieChart>
                                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                                <Pie data={retentionData} dataKey="percentage" nameKey="category" innerRadius={60} strokeWidth={5}>
                                    <Label content={({ viewBox }) => {
                                        if (viewBox?.cx && viewBox?.cy) {
                                            return (
                                                <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                                                    <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                                                        100%
                                                    </tspan>
                                                    <tspan x={viewBox.cx} y={viewBox.cy + 24} className="fill-muted-foreground">
                                                        Retention Rate
                                                    </tspan>
                                                </text>
                                            )
                                        }
                                    }} />
                                </Pie>
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                </Card>

                <Card className="w-full max-w-[1150px] mt-4">
                    <CardHeader className="flex items-center gap-2 border-b py-5">
                        <div className="grid flex-1 gap-1">
                            <CardTitle>Revenue & Client Growth Trends</CardTitle>
                            <CardDescription>Last 3 Months</CardDescription>
                        </div>
                        <Select value={timeRange} onValueChange={setTimeRange}>
                            <SelectTrigger className="w-[160px] rounded-lg">
                                <SelectValue placeholder="Last 3 months" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                <SelectItem value="90d">Last 3 months</SelectItem>
                                <SelectItem value="30d">Last 30 days</SelectItem>
                                <SelectItem value="7d">Last 7 days</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="h-[250px] w-full">
                            <AreaChart data={filteredData}>
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="month" tickMargin={8} axisLine={false} />
                                <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
                                <Area dataKey="newClients" type="natural" fill="#e83474" stroke="#e83474" stackId="a" />
                                <Area dataKey="revenue" type="natural" fill="#34A853" stroke="#34A853" stackId="a" />
                                <ChartLegend content={<ChartLegendContent />} />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}

export default Analytics
