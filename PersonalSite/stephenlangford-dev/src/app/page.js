import React from 'react';
import Desktop from '@/components/layout/Desktop';
import MenuBar from '@/components/layout/MenuBar';

export default function Home() {
    return (
        <>
            <div className="leading-normal tracking-tight text-s">
                <Desktop />
                <MenuBar />
            </div>
        </>
    );
}
