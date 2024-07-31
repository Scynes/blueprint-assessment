import Image from 'next/image';
import { NavigationBarCTAGroup } from './navigation-bar-cta-group';

export const NavigationBar = () => {
    return (
        <nav className={ 'relative z-20 flex justify-between bg-gradient-to-r from-sky-900 to-sky-500 px-12 py-4 shadow-[rgba(0,0,15,0.5)_0_3px_4px_0px]' }>
            <Image src="/images/logo.png" alt="Logo" width={ 100 } height={ 80 } />
            <NavigationBarCTAGroup />
        </nav>
    );
}