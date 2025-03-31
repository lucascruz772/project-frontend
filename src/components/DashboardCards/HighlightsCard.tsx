
import { Card, CardContent } from '../ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';


export default function HighlightsCard() {
    return (
        <Card className="order-4 bg-[#1e1e2d] rounded-xl p-4 md:p-8 min-h-48 md:min-h-64 h-full">
            <CardContent className="p-0 flex flex-col h-full">
                <div className="font-semibold text-white text-lg md:text-xl tracking-tight leading-tight">
                    Highlights
                </div>
                <div className="mt-2 md:mt-4 flex flex-col gap-2 md:gap-4">
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-[#7e8299] text-xs md:text-sm">
                            Avg. Client Rating
                        </span>
                        <div className="flex items-center gap-0.5 md:gap-1">
                            <FontAwesomeIcon icon={faArrowUp} className="text-green-500 text-xs md:text-sm" />
                            <span className="font-semibold text-white text-xs md:text-sm">
                                7.8/10
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-[#7e8299] text-xs md:text-sm">
                            Avg. Quotes
                        </span>
                        <div className="flex items-center gap-0.5 md:gap-1">
                            <FontAwesomeIcon icon={faArrowDown} className="text-red-500 text-xs md:text-sm" />
                            <span className="font-semibold text-white text-xs md:text-sm">
                                1,730
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-[#7e8299] text-xs md:text-sm">
                            Avg. Agent Earnings
                        </span>
                        <div className="flex items-center gap-0.5 md:gap-1">
                            <FontAwesomeIcon icon={faArrowUp} className="text-green-500 text-xs md:text-sm" />
                            <span className="font-semibold text-white text-xs md:text-sm">
                                $2,309
                            </span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}