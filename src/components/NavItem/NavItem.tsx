import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../Icons';

interface NavItemProps {
    name: string;
    icon: string;
    subItems: { name: string; icon: string }[];
    isExpanded: boolean;
    isCollapsed?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ name, icon, subItems, isExpanded: initialExpanded, isCollapsed }) => {
    const [isExpanded, setIsExpanded] = useState(initialExpanded);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 my-0.5 flex flex-col cursor-pointer hover:bg-[#2d2e3e] transition-colors duration-300 ${isCollapsed ? 'justify-center' : ''}`}>
            {/* Cabeçalho do Item */}
            <div
                className={`flex items-center w-full ${isExpanded ? 'bg-[#00c5dc] text-white' : 'text-[#b5b5c3]'}`}
                onClick={toggleExpand}
            >
                <FontAwesomeIcon icon={icons[icon]} className={`mr-0 sm:mr-${isCollapsed ? '0' : '2 sm:3'} ${isExpanded ? 'text-white' : 'text-[#7e8299]'}`} />
                <span className={`text-xs sm:text-sm ${isCollapsed ? 'hidden' : ''}`}>{name}</span>
                {subItems.length > 0 && (
                    <FontAwesomeIcon
                        icon={isExpanded ? icons['chevron-down'] : icons['chevron-right']}
                        className={`ml-auto ${isExpanded ? 'text-white' : 'text-[#7e8299]'} ${isCollapsed ? 'hidden' : ''}`}
                    />
                )}
            </div>

            {/* Submenu */}
            {isExpanded && subItems.length > 0 && !isCollapsed && (
                <div className="ml-4 sm:ml-5 mt-1 sm:mt-1.5 flex flex-col">
                    {subItems.map((subItem, index) => (
                        subItem.name && (
                            <div
                                key={index}
                                className="px-3 sm:px-4 py-1 sm:py-1.5 text-[#b5b5c3] text-[10px] sm:text-xs hover:bg-[#00c5dc] hover:text-white rounded transition-colors duration-300"
                            >
                                {subItem.name}
                            </div>
                        )
                    ))}
                </div>
            )}
        </div>
    );
};