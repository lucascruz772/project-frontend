import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavItem } from '../NavItem/NavItem';
import { UserProfile } from '../UserProfile/UserProfile';
import { icons } from '../Icons';
import React from 'react';

// Arrays definidos anteriormente
const mainMenuItems = [
    {
        name: 'Dashboards',
        icon: 'tachometer-alt',
        subItems: [
            { name: 'Default', icon: '' },
            { name: 'Projects', icon: '' },
            { name: 'eCommerce', icon: '' },
            { name: 'Marketing', icon: '' },
            { name: 'Social', icon: '' },
            { name: 'Bidding', icon: '' },
            { name: 'Online Courses', icon: '' },
            { name: 'Logistics', icon: '' },
            { name: 'Landing', icon: '' },
        ],
        isExpanded: false
    },
    { name: 'Layout Options', icon: 'th', subItems: [{ name: '', icon: '' }], isExpanded: false },
];

const pagesItems = [
    { name: 'Corporate', icon: 'building', subItems: [{ name: '', icon: '' }], isExpanded: false },
    { name: 'User Profile', icon: 'user-circle', subItems: [{ name: '', icon: '' }], isExpanded: false },
    { name: 'Social', icon: 'globe', subItems: [{ name: '', icon: '' }], isExpanded: false },
    { name: 'Blog', icon: 'pen', subItems: [{ name: '', icon: '' }], isExpanded: false },
    { name: 'Careers', icon: 'briefcase', subItems: [{ name: '', icon: '' }], isExpanded: false },
    { name: 'Account', icon: 'user', subItems: [{ name: '', icon: '' }], isExpanded: false },
    { name: 'Authentication', icon: 'lock', subItems: [{ name: '', icon: '' }], isExpanded: false },
    { name: 'Utilities', icon: 'cog', subItems: [{ name: '', icon: '' }], isExpanded: false },
];

const appsItems = [
    { name: 'Projects', icon: 'rocket', subItems: [{ name: '', icon: '' }], isExpanded: false },
    { name: 'eCommerce', icon: 'shopping-cart', subItems: [{ name: '', icon: '' }], isExpanded: false },
    { name: 'Contacts', icon: 'address-book', subItems: [{ name: '', icon: '' }], isExpanded: false },
    { name: 'Support Center', icon: 'life-ring', subItems: [{ name: '', icon: '' }], isExpanded: false },
    { name: 'User Management', icon: 'users', subItems: [{ name: '', icon: '' }], isExpanded: false },
];

const Sidebar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const toggleSidebar = () => setIsCollapsed(!isCollapsed);

    return (
        <div className={` bg-[#1e1e2d] text-[#b5b5c3] h-screen fixed top-0 left-0 flex flex-col sm:p-4 md:p-5 transition-all duration-300 z-50`}>
            {/* Botão de Toggle (visível apenas em telas pequenas) */}
            <button onClick={toggleSidebar} className="text-gray-400 mb-4 sm:hidden">
                <FontAwesomeIcon icon={isCollapsed ? icons['chevron-right'] : icons['chevron-left']} />
            </button>

            {/* Logo */}
            <div className="mb-4 sm:mb-5 md:mb-6 px-3 sm:px-4 md:px-5">
                <img
                    src="src\assets\header\logo.png"
                    alt="Logo"
                    className={`w-10 sm:w-${isCollapsed ? '10' : '20 sm:24 md:[100px]'} h-auto mx-auto`}
                />
            </div>

            {/* Seletor de Projeto */}
            <div className={`flex items-center px-3 sm:px-4 md:px-5 mb-4 sm:mb-5 md:mb-6 gap-2 ${isCollapsed ? 'justify-center' : ''}`}>
                <select className={`flex-1 bg-[#2d2e3e] border border-[#3f404f] text-[#b5b5c3] text-xs sm:text-sm rounded px-2 py-1.5 sm:py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isCollapsed ? 'hidden' : ''}`}>
                    <option>Select Project</option>
                </select>
                <button className="bg-[#00c5dc] text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1.5 sm:py-2 rounded hover:bg-[#00b0c3]">
                    +
                </button>
            </div>

            {/* Navegação - Main Menu */}
            <nav className="flex flex-col gap-0.5 sm:gap-1 mb-4 sm:mb-5 md:mb-6">
                {mainMenuItems.map((item) => (
                    <NavItem key={item.name} {...item} isCollapsed={isCollapsed} />
                ))}
            </nav>

            {/* Título da Seção - Pages */}
            <div className={`mt-4 sm:mt-5 md:mt-6 px-3 sm:px-4 md:px-5 font-bold text-[#7e8299] uppercase text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-2.5 md:mb-3 ${isCollapsed ? 'hidden' : ''}`}>
                PAGES
            </div>
            <nav className="flex flex-col gap-0.5 sm:gap-1 mb-4 sm:mb-5 md:mb-6">
                {pagesItems.map((item) => (
                    <NavItem key={item.name} {...item} isCollapsed={isCollapsed} />
                ))}
            </nav>

            {/* Título da Seção - Apps */}
            <div className={`mt-4 sm:mt-5 md:mt-6 px-3 sm:px-4 md:px-5 font-bold text-[#7e8299] uppercase text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-2.5 md:mb-3 ${isCollapsed ? 'hidden' : ''}`}>
                APPS
            </div>
            <nav className="flex flex-col gap-0.5 sm:gap-1 mb-4 sm:mb-5 md:mb-6">
                {appsItems.map((item) => (
                    <NavItem key={item.name} {...item} isCollapsed={isCollapsed} />
                ))}
            </nav>

            {/* Perfil do Usuário */}
            <div className={`mt-auto px-3 sm:px-4 md:px-5 ${isCollapsed ? 'hidden' : ''}`}>
                <UserProfile name="Paul Melone" title="Python Dev" />
            </div>
        </div>
    );
};

export default Sidebar;