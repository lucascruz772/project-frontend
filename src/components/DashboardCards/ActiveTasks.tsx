const ActiveTasksCard = () => {
    return (
        <div className="justify-center bg-gradient-to-b from-[#1E2A44] to-[#2C2E3E] rounded-lg p-4 md:p-6 shadow-md h-full">
            <div className="flex flex-col items-center">
                {/* Título */}
                <h2 className="text-white text-lg md:text-xl font-bold mb-1 md:mb-2">
                    Active Tasks
                </h2>

                {/* Número Principal */}
                <div className="text-white text-2xl md:text-4xl font-bold mb-1 md:mb-2">
                    69
                </div>

                {/* Rótulo */}
                <div className="text-gray-400 text-xs md:text-sm mb-2 md:mb-4">
                    Active Projects
                </div>

                {/* Barra de Progresso */}
                <div className="w-full bg-gray-700 rounded-full h-1.5 md:h-2.5 mb-1 md:mb-2">
                    <div
                        className="bg-gradient-to-r from-[#FF6F61] to-[#FF9A44] h-1.5 md:h-2.5 rounded-full"
                        style={{ width: '72%' }}
                    ></div>
                </div>

                {/* Informações Adicionais */}
                <div className="flex justify-between w-full text-gray-400 text-xs md:text-sm">
                    <span>43 Pending</span>
                    <span>72%</span>
                </div>
            </div>
        </div>
    );
};

export default ActiveTasksCard;