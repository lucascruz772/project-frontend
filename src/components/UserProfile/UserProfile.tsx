import React from 'react';

interface UserProfileProps {
    name: string;
    title: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({ name, title }) => {
    return (
        <div className="flex items-center text-[#b5b5c3] py-2 sm:py-2.5 md:py-3">
            <img
                src="src\assets\user-profile.png" // Substitua pelo caminho real da imagem
                alt="User Profile"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full mr-2 sm:mr-3"
            />
            <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-semibold">{name}</span>
                <span className="text-[10px] sm:text-xs text-gray-400">{title}</span>
            </div>
        </div>
    );
};