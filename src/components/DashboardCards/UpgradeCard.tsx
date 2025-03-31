import { faCloud, faHouse } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from '../ui/card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UpgradeCard() {
    return (
        <Card className="p-3 md:p-5 rounded-xl overflow-hidden bg-[#47bdf1] min-h-48 md:min-h-64 h-full">
            <CardContent className="p-0 h-full grid grid-cols-1 md:grid-cols-2">
                <div className="p-4 md:p-7 flex flex-col">
                    <div className="text-gray-300 text-xs md:text-sm font-bold">
                        Get best offer
                    </div>
                    <div className="text-lg md:text-2xl text-white font-bold">
                        Upgrade Your Plan
                    </div>
                    <div className="gap-1 md:gap-2 mt-1 md:mt-2 text-gray-300 text-xs md:text-sm">
                        Flat cartoony and illustrations with vivid unblended purple hair lady
                    </div>
                    <div className="flex gap-2 md:gap-4 mt-2 md:mt-4">
                        <div className="flex items-center gap-1 md:gap-2">
                            <FontAwesomeIcon icon={faCloud} className="text-white text-base md:text-lg" />
                            <div className="flex flex-col">
                                <div className="text-xs md:text-sm text-gray-500">Projects</div>
                                <div className="text-white font-bold text-xs md:text-sm">Up to 500</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 md:gap-2">
                            <FontAwesomeIcon icon={faHouse} className="text-white text-base md:text-lg" />
                            <div className="flex flex-col">
                                <div className="text-xs md:text-sm text-gray-500">Tasks</div>
                                <div className="text-white font-bold text-xs md:text-sm">Unlimited</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-2 md:mt-4">
                        <button className="bg-[#f97316] text-white text-xs md:text-sm font-bold px-3 md:px-4 py-1 md:py-2 rounded-md hover:bg-[#e55f00]">
                            Upgrade Plan
                        </button>
                        <button className="bg-[#47bdf1] px-3 md:px-4 text-white text-xs md:text-sm rounded-md font-bold hover:text-gray-200">
                            Read Guides
                        </button>
                    </div>
                </div>
                <div className="px-6 md:px-10 p-4 md:p-8 flex items-end">
                    <img
                        src="src\assets\Upgrade.jpg" // Substitua pelo caminho real da imagem
                        alt="9 Degree Illustration"
                        className="w-full h-40 md:h-48 object-cover"
                    />
                </div>
            </CardContent>
        </Card>
    );
}