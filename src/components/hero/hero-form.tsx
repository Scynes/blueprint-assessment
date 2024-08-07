'use client';

import { HeroFormSubmitButton } from '@/components/hero/hero-form-submit-button';
import { submitHeroForm } from '@/actions/submit-hero-form';
import { motion } from 'framer-motion';
import { INPUT_TRANSITION, INPUT_TRANSITION_CONTAINER } from '@/animations/form-animations';
import { useFormState } from 'react-dom';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { CONTACT_SCHEMA } from '@/utils/zod/contact-schema';
import Link from 'next/link';

/**
 * The form component related to the Hero section layout. This form is used for collecting
 * user contact information interested in staying in touch with Samantha.
 */
export const HeroForm = () => {

    const [ state, action ] = useFormState(submitHeroForm, null);

    const [ form, fields ] = useForm({
    
        // Reuse the validation logic on the client
        onValidate({ formData }) {
            return parseWithZod(formData, { schema: CONTACT_SCHEMA });
        },

        shouldValidate: 'onBlur',
        shouldRevalidate: 'onInput',
    });

    return (
        <div className={ 'max-w-[24rem] w-full text-black' }>
            <motion.form variants={ INPUT_TRANSITION_CONTAINER } initial={ 'hidden' } animate={ 'show' } id={ form.id } onSubmit={ form.onSubmit } action={ action } className={ 'flex flex-col gap-4' }>
                <motion.input variants={ INPUT_TRANSITION } type={ 'email' } name={ fields.email.name } key={ fields.email.key } defaultValue={ fields.email.initialValue } className={ `flex-1 p-2 bg-blue-500 border-2 ${ fields.email.errors && 'border-red-700 text-red-700' } placeholder-white` } placeholder={ 'Email' } disabled={ state?.success } />
                <div className={ 'flex gap-4 w-full' }>
                    <motion.input variants={ INPUT_TRANSITION } type={ 'text' } name={ fields.phone.name } key={ fields.phone.key } defaultValue={ fields.phone.initialValue } className={ `w-full p-2 bg-blue-500 border-2 ${ fields.phone.errors && 'border-red-700 text-red-700' } placeholder-white` } placeholder={ 'Phone' } disabled={ state?.success } />
                    <motion.input variants={ INPUT_TRANSITION } type={ 'text' } name={ fields.zip.name } key={ fields.zip.key } defaultValue={ fields.phone.initialValue } className={ `w-full p-2 bg-blue-500 border-2 ${ fields.zip.errors && 'border-red-700 text-red-700' } placeholder-white` } placeholder={ 'Zip' } disabled={ state?.success } />
                </div>
                <HeroFormSubmitButton isDisabled={ state?.success }/>
            </motion.form>
            <Link href={ '/contacts' }>
                <p className={ 'transition-all text-white text-md text-center mt-4 hover:text-sky-200 active:scale-95' }>Click here to view contact submissions rendered from the database.</p>
            </Link>        
        </div>
    );
}
