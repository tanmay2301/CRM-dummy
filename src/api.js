const database = {
    data: [
        { id: 1, title: "Total Contacts", count: 245, description: "+4 from last week", iconClass: "fa-solid fa-user-group" },
        { id: 2, title: "Media Contacts", count: 54, description: "12 pending outreach", iconClass: "fa-solid fa-note-sticky" },
        { id: 3, title: "Beta Users", count: 127, description: "89 active users", iconClass: "fa-solid fa-user-check" },
        { id: 4, title: "Response Rate", count: "32%", description: "+2% from last month", iconClass: "fa-regular fa-message" }
    ],
    contacts: [
        {
            name: "Sarah Wilson",
            email: "sarah@techcrunch.com",
            company: "TechCrunch",
            type: "media",
            status: "contacted",
            lastContact: "3/20/2024",
        },
        {
            name: "Michael Chen",
            email: "mchen@startup.co",
            company: "StartupCo",
            type: "partners",
            status: "meeting scheduled",
            lastContact: "3/19/2024",
        },
        {
            name: "Emma Davis",
            email: "emma.d@gmail.com",
            company: "Freelance",
            type: "beta",
            status: "onboarded",
            lastContact: "3/18/2024",
        },
    ],
}

export default database