import { Card, CardContent } from '../ui/card';

// Dados para o cartão "What's up Today"
const events = [
    {
        time: "10:20 - 11:00 AM",
        title: "9 Degree Project Estimation Meeting",
        lead: "Lead by Peter Marcus",
        color: "#00c5dc", // Azul
    },
    {
        time: "16:30 - 17:00 PM",
        title: "Dashboard UI/UX Design Review",
        lead: "Lead by Bob",
        color: "#f1c40f", // Amarelo
    },
    {
        time: "12:00 - 13:40 AM",
        title: "Marketing Campaign Discussion",
        lead: "Lead by Mark Morris",
        color: "#2ecc71", // Verde
    },
];

// Dados do calendário
const calendarDays = [
    { day: "Fr", date: "20" },
    { day: "Sa", date: "21" },
    { day: "Su", date: "22", highlighted: true },
    { day: "Tu", date: "23" },
    { day: "Tu", date: "24" },
    { day: "We", date: "25" },
    { day: "Th", date: "26" },
    { day: "Fr", date: "27" },
    { day: "Sa", date: "28" },
    { day: "Su", date: "29" },
    { day: "Mo", date: "30" },
];

export default function WhatsUpTodayCard() {
    return (
        <Card className="bg-[#1e1e2d] rounded-xl p-7 h-132">
            <CardContent className="p-0 flex flex-col h-full">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <div className="font-semibold text-white text-xl tracking-tight leading-tight">
                            What's up Today
                        </div>
                        <div className="text-gray-400 text-sm">
                            Total 424,567 delivers
                        </div>
                    </div>
                    <button className="text-gray-400 text-sm hover:text-white">
                        Report Center
                    </button>
                </div>
                <div className="mt-4 flex gap-2 overflow-x-auto pb-12">
                    {calendarDays.map((day, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center w-full text-gray-400 text-sm group transition-colors duration-300 hover:text-orange-500 ${day.highlighted ? "text-orange-500" : ""}`}
                        >
                            <span>{day.day}</span>
                            <span
                                className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:border group-hover:border-orange-500 ${day.highlighted ? "bg-orange-500 text-white border border-orange-500" : ""}`}
                            >
                                {day.date}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex flex-col pr-12">
                    {events.map((event, index) => (
                        <div key={index} className="flex justify-between items-center py-5">
                            <div className="flex items-start gap-2">
                                <div
                                    className="w-1 h-20 rounded-full"
                                    style={{ backgroundColor: event.color }}
                                />
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-400 text-xl">
                                        {event.time}
                                    </span>
                                    <span className="font-semibold text-white text-lg">
                                        {event.title}
                                    </span>
                                    <span className="text-gray-400 text-lg">
                                        {event.lead}
                                    </span>
                                </div>
                            </div>
                            <button className="text-gray-400 text-sm hover:text-white">
                                View
                            </button>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}