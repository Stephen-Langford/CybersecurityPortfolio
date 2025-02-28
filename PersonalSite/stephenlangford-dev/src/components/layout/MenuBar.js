import React from 'react';
import DateDisplay from '../common/DateDisplay';
import MenuButton from '@/components/ui/MenuButton';

const MenuBar = () => {
    return (
        <div className="p-0.5 shadow-sm block bg-menu-gray bottom-0 left-0 right-0 border-t border-t-menu-top border-b border-b-menu-bottom fixed z-50 select-none ">
            <MenuButton buttonText="Start" buttonImageSrc="/icons/windows-4.png" />
            <DateDisplay />
        </div>
    );
};

export default MenuBar;
