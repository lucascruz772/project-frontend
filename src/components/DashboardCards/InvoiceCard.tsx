import { Card, CardContent } from "../ui/card"; // Supondo um componente Card genérico
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";

// Placeholder para a ilustração (substitua por uma imagem ou SVG apropriada)
const IllustrationPlaceholder = () => (
    <div className="flex justify-center items-center h-32 w-32 bg-gray-700 rounded-full mx-auto">
        <FontAwesomeIcon icon={faFileInvoice} size="3x" className="text-gray-400" />
    </div>
);

export default function CardInvoiceManager() {
    return (
        <Card className="bg-gray-900 rounded-xl p-7 h-180 w-[133] justify-center md:p-7 min-h-48 md:min-h-64">
            <CardContent className="flex flex-col items-center text-center">
                {/* Título Promocional */}
                <h2 className="text-gray-300 text-xl mb-4 md:mb-4">
                    Have you tried new <span className="font-bold">Invoice Manager</span>?
                </h2>

                {/* Ilustração Placeholder */}
                <IllustrationPlaceholder />

                {/* Botões de Ação */}
                <div className="flex gap-4 mt-6 md:flex-row md:gap-4 md:mt-6">
                    <button className="bg-cyan-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-md hover:bg-cyan-600 transition-colors duration-200 text-xs md:text-sm">
                        Try Now
                    </button>
                    <button className="bg-gray-700 text-gray-300 px-3 md:px-4 py-1 md:py-2 rounded-md hover:bg-gray-600 transition-colors duration-200 text-xs md:text-sm">
                        Learn More
                    </button>
                </div>
            </CardContent>
        </Card>
    );
}