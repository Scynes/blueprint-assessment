import { Button } from '../button';
import { IconButton } from '../icon-button';

export const NavigationBarCTAGroup = () => {
    return (
        <div className={ 'hidden sm:flex gap-4 items-center justify-center' }>
            <Button className={ 'bg-yellow-400 text-black rounded-full hover:bg-yellow-300 font active:scale-90 font-bold text-sm' }>
                <span>VOLUNTEER</span>
            </Button>
            <Button className={ 'bg-red-600 text-white rounded-full hover:bg-red-500 active:scale-90 font-bold text-sm' }>
                <a href='#donate'>DONATE</a>
            </Button>
            <div className={ 'flex gap-2' }>
                <IconButton iconPath={ '/icons/facebook.svg' } className={ 'size-8' } />
                <IconButton iconPath={ '/icons/x.svg' } className={ 'size-8' } />
                <IconButton iconPath={ '/icons/instagram.svg' } className={ 'size-8' } />
            </div>
        </div>
    );
}