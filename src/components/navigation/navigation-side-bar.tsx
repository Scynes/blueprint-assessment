'use client';

import Image from 'next/image';
import { useState } from 'react';

export const NavigationSideBar = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    /**
     * A handle mthod for toggling the state of the side bar
     */
    const toggleSideBar = () => setIsOpen(!isOpen);

    return (
        <>
            <div onClick={ toggleSideBar }>
                <Image src={ `/icons/${ isOpen ? 'close.svg' : 'hamburger.svg' }` } width={ 24 } height={ 24 } alt='menu button'/>
            </div>
        </>
    );
}