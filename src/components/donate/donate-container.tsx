import { DonateButton } from './donate-button';

/**
 * DonateContainer is a wrapper component for holding donation related functionality. 
 * 
 * @returns 
 */
export const DonateContainer = () => {
    return (
        <section id={ 'donate' } className={ 'transition-all px-2 pt-4 pb-10 sm:px-12 sm:py-16 flex flex-1 justify-center items-center' }>
            <div className={ 'flex flex-col items-center px-12 py-12 bg-gradient-to-tr from-sky-900 via-sky-700 to-teal-700 flex-1' }>
                <h1 className={ 'transition-all text-2xl sm:text-3xl md:text-4xl text-white text-center font-extrabold' }>{ `DONATE TO SUPPORT SAMANTHA'S CAMPAIGN` }</h1>
                <div className={ 'flex gap-4 max-w-screen-md w-full flex-wrap mt-8' }>
                    <div className={ 'flex flex-col flex-1 gap-4 min-w-60' }>
                        <DonateButton amount={ 25 } />
                        <DonateButton amount={ 50 } />
                    </div>
                    <div className={ 'flex flex-col flex-1 gap-4 min-w-60' }>
                        <DonateButton amount={ 100 } />
                        <DonateButton />
                    </div>
                </div>
            </div>
        </section>
    );
}