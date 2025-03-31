import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

// Dados dos avatares para o cartão "Professionals"
const heroes = [
    { initial: "A", color: "#e8c444", image: null },
    { initial: null, color: null, image: "/michael-eberon-pic.png" },
    { initial: "S", color: "#4fc9da", image: null },
    { initial: null, color: null, image: "/melody-macy-pic.png" },
    { initial: "P", color: "#f06445", image: null },
    { initial: null, color: null, image: "/barry-walter-pic.png" },
    { initial: "+42", color: "#272a34", image: null, isCount: true },
];

export default function ProfessionalsCard() {
    return (
        <Card className="order-2 min-h-48 md:min-h-64 bg-[#1e1e2d] rounded-xl p-4 md:p-7 h-full">
            <CardContent className="p-0 flex flex-col h-full">
                <div className="font-semibold text-white text-3xl md:text-5xl tracking-tight leading-tight">
                    357
                </div>
                <div className="mt-1 font-medium text-gray-400 text-xs md:text-sm">
                    Professionals
                </div>
                <div className="mt-auto">
                    <div className="!font-bold text-gray-300 text-xs md:text-sm mb-1 md:mb-2">
                        Today's Heroes
                    </div>
                    <div className="flex">
                        {heroes.map((hero, index) => (
                            <Avatar
                                key={index}
                                className={`w-8 h-8 md:w-[35px] md:h-[35px] ${index > 0 ? "-ml-2 md:-ml-2.5" : ""} border-2 border-solid border-white`}
                                style={{ backgroundColor: hero.color || undefined }}
                            >
                                {hero.image ? (
                                    <AvatarImage src={hero.image} alt="Hero avatar" />
                                ) : (
                                    <AvatarFallback
                                        className={`text-[10px] md:text-[13px] font-semibold ${hero.isCount ? "text-[#323248] text-[9px] md:text-[11.1px]" : "text-white"}`}
                                    >
                                        {hero.initial}
                                    </AvatarFallback>
                                )}
                            </Avatar>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}