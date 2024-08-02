import Link from 'next/link';
import { Button } from '../button';
import { IconButton } from '../icon-button';

export const NavigationBarCTAGroup = () => {
    return (
        <div className={ 'hidden sm:flex gap-6 items-center justify-center' }>
            <Link href={ '/#about' }>
                <Button className={ 'bg-yellow-400 text-black rounded-full h-8 hover:bg-yellow-300 font active:scale-90 font-bold text-sm' }>
                    <span>VOLUNTEER</span>
                </Button>
            </Link>
            <Link href={ '/#donate' }>
                <Button className={ 'bg-red-600 text-white rounded-full h-8 hover:bg-red-500 active:scale-90 font-bold text-sm' }>
                    <span>DONATE</span>
                </Button>
            </Link>
            <div className={ 'flex gap-2' }>
                <IconButton iconPath={ '/icons/facebook.svg' } className={ 'size-8' } />
                <IconButton iconPath={ '/icons/x.svg' } className={ 'size-8' } />
                <IconButton iconPath={ '/icons/instagram.svg' } className={ 'size-8' } />
            </div>
        </div>
    );
}