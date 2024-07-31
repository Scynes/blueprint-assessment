import { HeroForm } from '@/components/hero/hero-form';

import Image from 'next/image';

/**
 * The primary hero component that wraps subcomponents related to the Hero section layout.
 */
export const Hero = () => {
    return (
        <section className={ 'relative h-full bg-blue-400' }>
            <div className={ `transition-all sm:slant-section clip absolute px-12 py-24 h-full max-w-[38rem] w-full z-10 text-white bg-gradient-to-tr from-sky-900 via-sky-700 to-yellow-300` }>
                <Image src="/images/logo.png" alt="Logo" width={ 225 } height={ 225 } className={ 'mb-7' }/>
                <div className={ 'mb-4' }>
                    <p className={ 'text-4xl font-extrabold' }>STAY IN TOUCH</p>
                    <p className={ 'text-4xl font-extrabold' }>WITH SAMANTHA</p>
                </div>
                <HeroForm />
            </div>
            <Image src="/images/hero.png" alt="Hero" fill className='object-cover' />
        </section>
    );
}