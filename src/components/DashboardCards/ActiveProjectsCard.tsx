import { Card, CardContent } from '../ui/card';


export default function ActiveProjectsCard() {
    return (
        <Card className="order-1 w-full h-48 md:h-64 bg-[#080655] rounded-xl p-4 md:p-7">
            <CardContent className="p-0 flex flex-col h-full">
                <div className="font-semibold text-white text-3xl md:text-5xl tracking-tight leading-tight">
                    69
                </div>
                <div className="mt-1 font-medium text-gray-400 text-xs md:text-sm">
                    Active Projects
                </div>
                <div className="mt-auto flex flex-col">
                    <div className="flex justify-between mb-1 md:mb-2">
                        <span className="font-semibold text-gray-400 text-xs md:text-sm">
                            43 Pending
                        </span>
                        <span className="font-semibold text-white text-xs md:text-sm">
                            72%
                        </span>
                    </div>
                    <div className="h-1 md:h-2 bg-gray-700/20 rounded-full overflow-hidden">
                        <div className="w-[72%] h-full bg-[#f06445] rounded-full" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}