
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';


// Dados para os avatares do cartão "9 Degree"
const teamAvatars = [
    { image: "/avatar1.jpg" },
    { image: "/avatar2.jpg" },
    { initial: "+5", color: "#565674" },
];

export default function NineDegreeCard() {
    return (
        <Card className="bg-[#1e1e2d] rounded-xl overflow-hidden p-6 md:p-6 md:min-h-64">
            <CardContent className="p-0 flex">
                {/* Parte Esquerda: Imagem */}
                <div className="w-1/2 h-64 px-3 md:px-3 md:w-1/2">
                    <img
                        src="src\assets\Degree.jpeg" // Substitua pelo caminho real da imagem
                        alt="9 Degree Illustration"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Parte Direita: Conteúdo */}
                <div className="w-1/2 md:w-1/2 p-7 flex flex-col">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm md:text-sm">Featured</span>
                        <span className="bg-blue-500 text-white text-xs md:text-xs md:px-2 py-0.5 md:py-1 font-semibold px-2 rounded-full">
                            In Process
                        </span>
                    </div>
                    <div className="font-semibold text-white text-xl md:text-xl tracking-tight leading-tight mt-1 md:mt-2">
                        9 Degree
                    </div>
                    <div className="flex items-center gap-1 md:gap-2 mt-1 md:mt-2">
                        <Avatar className="w-6 h-6 md:h-8 md:w-8">
                            <AvatarImage src="" alt="Robert Fox" />
                            <AvatarFallback className="text-[10px] md:text-xs">RF</AvatarFallback>
                        </Avatar>
                        <span className="text-gray-400 text-sm md:text-sm">Robert Fox</span>
                        <div className="flex items-center gap-0.5 md:gap-1">
                            <span className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon icon={faDollarSign} className="text-white text-[8px] md:text-xs" />
                            </span>
                            <span className="text-white text-xs md:text-sm font-semibold">$64,800</span>
                        </div>
                    </div>
                    <div className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2">
                        Flat cartoony illustrations with vivid unblended colors and asymmetrical beautiful purple hair lady
                    </div>
                    <div className="flex justify-between items-center text-gray-400 text-xs md:text-sm mt-1 md:mt-2">
                        <span>Feb 6, 2021</span>
                        <span>$284,900</span>
                    </div>
                    <div className="flex justify-between items-center mt-2 md:mt-4">
                        <div className="flex">
                            {teamAvatars.map((avatar, index) => (
                                <Avatar
                                    key={index}
                                    className={`w-6 h-6 md:w-8 md:h-8 ${index > 0 ? "-ml-1 md:-ml-2" : ""} border-2 border-solid border-white`}
                                    style={{ backgroundColor: avatar.color || undefined }}
                                >
                                    {avatar.image ? (
                                        <AvatarImage src={avatar.image} alt="Team member" />
                                    ) : (
                                        <AvatarFallback className="text-[10px] md:text-xs text-white">
                                            {avatar.initial}
                                        </AvatarFallback>
                                    )}
                                </Avatar>
                            ))}
                        </div>
                        <button className="text-[#00c5dc] text-xs md:text-sm hover:underline">
                            View Project
                        </button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}