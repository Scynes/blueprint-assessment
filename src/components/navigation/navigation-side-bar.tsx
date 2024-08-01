'use client';

import Image from 'next/image';
import { useState } from 'react';

export const NavigationSideBar = () => {

    // The open state of the side bar.
    const [ isOpen, setIsOpen ] = useState(false);

    // Handles toggling the side bar open state.
    const toggleSideBar = () => setIsOpen(!isOpen);

    return (
        <>
            <div onClick={ toggleSideBar } className={ 'transition-all active:scale-90 cursor-pointer' }>
                <Image src={ `/icons/${ isOpen ? 'close.svg' : 'hamburger.svg' }` } width={ 24 } height={ 24 } alt='menu button'/>
            </div>
            <div className={ `absolute bg-sky-700 top-0 left-0 ${ isOpen ? 'translate-x-0' : '-translate-x-full' } z-20 transition-all w-3/4 h-dvh bg-red-300` }>
                <div className={ 'px-12 py-4 shadow-[rgba(0,0,15,0.5)_0_3px_4px_0px]' }>
                    <Image src="/images/logo.png" alt="Logo" width={ 100 } height={ 80 } />
                </div>
            </div>
        </>
    );
}