'use client';

import { HERO_ANIMATION_CONTAINER, HERO_TEXT_ANIMATION } from '@/animations/hero-animations';
import { HeroForm } from '@/components/hero/hero-form';
import { motion } from 'framer-motion';

import Image from 'next/image';

/**
 * The primary hero component that wraps subcomponents related to the Hero section layout.
 */
export const Hero = () => {
    return (
        <section className={ 'relative h-full bg-blue-400' }>
            <div className={ `flex flex-col justify-center transition-all sm:slant-section clip absolute sm:px-12 sm:py-24 h-full max-w-[38rem] w-full z-10 text-white bg-gradient-to-tr from-sky-900 via-sky-700 to-yellow-300` }>
                <div className={ 'relative flex-1 sm:hidden' }>
                    <Image src="/images/hero.png" alt="Hero" fill sizes={ '100%' } className='object-cover' />
                </div>
                <motion.div variants={ HERO_ANIMATION_CONTAINER } initial={ 'hidden' } animate={ 'show' } className={ 'p-12 sm:p-0' }>
                    <Image src="/images/logo.png" alt="Logo" width={ 225 } height={ 225 } className={ 'mb-7' }/>
                    <div className={ 'mb-4' }>
                        <motion.p variants={ HERO_TEXT_ANIMATION } className={ 'text-4xl sm:text-5xl font-extrabold' }>STAY IN TOUCH</motion.p>
                        <motion.p variants={ HERO_TEXT_ANIMATION } className={ 'text-4xl sm:text-5xl font-extrabold' }>WITH SAMANTHA</motion.p>
                    </div>
                    <HeroForm />
                </motion.div>
            </div>
            <Image src="/images/hero.png" alt="Hero" fill sizes={ '100%' } className='object-cover' />
        </section>
    );
}