import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../Icons';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#0F1014] sm:p-4 md:p-5 ms-2 sm:ms-5 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
      {/* Título e Subtítulo */}
      <div className="flex flex-col">
        <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold">Projects Dashboard</h1>
        <span className="text-gray-400 text-[10px] sm:text-xs md:text-sm">Home - Dashboards</span>
      </div>

      {/* Campo de Busca e Ícones (agrupados e alinhados à direita) */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        {/* Campo de Busca */}
        <div className="relative flex items-center w-full sm:w-auto">
          <FontAwesomeIcon icon={icons['search']} className="absolute left-2 sm:left-3 text-gray-400 text-sm sm:text-base" />
          <input
            type="text"
            placeholder="Search..."
            className="sm:pl-10 pr-2 sm:pr-4 py-1 sm:py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm w-full sm:w-48 md:w-64"
          />
        </div>

        {/* Ícones */}
        <div className="flex items-center gap-2 pr-5 sm:gap-3 md:gap-4">
          <FontAwesomeIcon icon={icons['th']} className="text-gray-400 text-base sm:text-lg md:text-xl" />
          <FontAwesomeIcon icon={icons['moon']} className="text-gray-400 text-base sm:text-lg md:text-xl" />
          <FontAwesomeIcon icon={icons['message']} className="text-gray-400 text-base sm:text-lg md:text-xl" />
          <div className="relative">
            <FontAwesomeIcon icon={icons['bell']} className="text-gray-400 text-base sm:text-lg md:text-xl" />
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-[8px] sm:text-xs rounded-full w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">3</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;