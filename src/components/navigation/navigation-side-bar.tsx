'use client';

import Image from 'next/image';
import { useState } from 'react';
import { IconButton } from '../icon-button';
import { Button } from '../button';
import Link from 'next/link';

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
            <div className={ `flex flex-col absolute bg-sky-700 top-0 left-0 ${ isOpen ? 'translate-x-0' : '-translate-x-full' } z-20 transition-all w-3/4 h-dvh` }>
                <div className={ 'px-12 py-4 shadow-[rgba(0,0,15,0.5)_0_3px_4px_0px]' }>
                    <Image src="/images/logo.png" alt="Logo" width={ 100 } height={ 80 } />
                </div>
                <div className={ 'h-full px-8 pt-8 pb-8 flex flex-col gap-4 items-center' }>
                    <Button className={ 'bg-yellow-400 w-full h-10 text-black rounded-full hover:bg-yellow-300 font active:scale-90 font-bold text-sm' }>
                        <span>VOLUNTEER</span>
                    </Button>
                    <Link href={'/#donate'} className={ 'w-full' }>
                        <Button className={ 'bg-red-600 w-full h-10 text-white rounded-full hover:bg-red-500 active:scale-90 font-bold text-sm' }>
                            <span>DONATE</span>
                        </Button>
                    </Link>
                    <div className={ 'flex gap-4 mt-auto px-12' }>
                        <IconButton iconPath={ '/icons/facebook.svg' } className={ 'size-8' } />
                        <IconButton iconPath={ '/icons/x.svg' } className={ 'size-8' } />
                        <IconButton iconPath={ '/icons/instagram.svg' } className={ 'size-8' } />
                    </div>
                </div>
            </div>
        </>
    );
}