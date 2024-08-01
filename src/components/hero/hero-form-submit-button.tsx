'use client';

import { useFormStatus } from 'react-dom';
import { Spinner } from '@/components/spinner';
import { motion } from 'framer-motion';
import { INPUT_TRANSITION } from '@/animations/form-animations';

/**
 * HeroFormSubmitButton is a button component that is used to submit the HeroForm. I created
 * a separate component specifically for this button so we can use the {#useFormStatus} hook
 * which cannot be used directly in it's containing form.
 * 
 * The hook is useful for detecting the pending state of a form submission and conditionlly rendering
 * certain things (such as the spinner) for status feedback.
 */
export const HeroFormSubmitButton = ( { isDisabled }: { isDisabled: boolean } ) => {

    const { pending } = useFormStatus();

    return (
        <motion.button variants={ INPUT_TRANSITION } type={ 'submit' } className={ `transition-all flex justify-center text-black items-center ${ pending || isDisabled ? 'bg-slate-300' : 'bg-blue-400' } ${ !pending && !isDisabled && 'hover:bg-blue-300' } p-2 h-10 rounded-full` } disabled={ pending || isDisabled }>
            { pending ? <Spinner /> : <span className={ 'font-medium' }>{ isDisabled ? 'THANK YOU' : 'SIGN UP' }</span> }
        </motion.button>
    );
}