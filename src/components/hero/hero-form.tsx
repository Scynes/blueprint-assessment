'use client';

import { HeroFormSubmitButton } from '@/components/hero/hero-form-submit-button';
import { submitHeroForm } from '@/actions/submit-hero-form';
import { motion } from 'framer-motion';
import { INPUT_TRANSITION, INPUT_TRANSITION_CONTAINER } from '@/animations/form-animations';

/**
 * The form component related to the Hero section layout. This form is used for collecting
 * user contact information interested in staying in touch with Samantha.
 */
export const HeroForm = () => {

    return (
        <div className={ 'max-w-[24rem] w-full text-black' }>
            <motion.form variants={ INPUT_TRANSITION_CONTAINER } initial={ 'hidden' } animate={ 'show' } action={ submitHeroForm } className={ 'flex flex-col gap-4' }>
                <motion.input variants={ INPUT_TRANSITION } type={ 'email' } name={ 'email' } className={ 'flex-1 p-2 bg-blue-500 border-2 placeholder-white' } placeholder={ 'Email' } />
                <div className={ 'flex gap-4 w-full' }>
                    <motion.input variants={ INPUT_TRANSITION } type={ 'text' } name={ 'phone' } className={ 'w-full p-2 bg-blue-500 border-2 placeholder-white' } placeholder={ 'Phone' } />
                    <motion.input variants={ INPUT_TRANSITION } type={ 'text' } name={ 'zip' } className={ 'w-full p-2 bg-blue-500 border-2 placeholder-white' } placeholder={ 'Zip' } />
                </div>
                <HeroFormSubmitButton />
            </motion.form>
        </div>
    );
}
