import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function ContactUI({ contacts }) {
    const colors = ["bg-purple-600", "bg-blue-600", "bg-green-600", "bg-yellow-600"];

    const getInitials = (name) => {
        const nameParts = name.split(" ");
        const initials = nameParts.map((part) => part[0]).join("");
        return initials;
    };

    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const getTypeClass = (type) => {
        switch (type) {
            case "media":
                return "bg-red-100 font-bold text-red-700";
            case "partners":
                return "bg-blue-100 font-bold text-blue-700";
            case "beta":
                return "bg-orange-100 font-bold text-orange-700";
            default:
                return "bg-gray-100 font-bold text-gray-700";
        }
    };

    const getStatusClass = (status) => {
        switch (status) {
            case "contacted":
                return "bg-blue-50 font-bold text-blue-700";
            case "meeting scheduled":
                return "bg-purple-100 font-bold text-purple-700";
            case "onboarded":
                return "bg-green-100 font-bold text-green-700";
            default:
                return "bg-gray-100 font-bold text-gray-700";
        }
    };

    return (
        <section className="contact-ui p-4 ">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Contact</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {contacts.map((contact) => (
                        <TableRow key={contact.id}  className="hover:bg-gray-200 transition-colors">
                            <TableCell>
                                <div className="flex items-center">
                                    <div
                                        className={`w-6 h-6 flex items-center justify-center rounded-full ${getRandomColor()}`}
                                    >
                                        <span className="text-white font-medium text-xs">
                                            {getInitials(contact.name)}
                                        </span>
                                    </div>
                                    <span className="ml-2">{contact.name}</span>
                                </div>
                            </TableCell>
                            <TableCell>{contact.email}</TableCell>
                            <TableCell>{contact.company}</TableCell>
                            <TableCell>
                                <span
                                    className={`px-2 py-1 rounded-full ${getTypeClass(
                                        contact.type
                                    )}`}
                                >
                                    {contact.type}
                                </span>
                            </TableCell>
                            <TableCell>
                                <span
                                    className={`px-2 py-1 rounded-full ${getStatusClass(
                                        contact.status
                                    )}`}
                                >
                                    {contact.status}
                                </span>
                            </TableCell>
                            <TableCell>{contact.lastContact}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </section>
    );
}