'use client';

import { HeroFormSubmitButton } from '@/components/hero/hero-form-submit-button';
import { submitHeroForm } from '@/actions/submit-hero-form';
import { motion } from 'framer-motion';
import { INPUT_TRANSITION, INPUT_TRANSITION_CONTAINER } from '@/animations/form-animations';
import { useFormState } from 'react-dom';
import { useEffect, useState } from 'react';
import { Modal } from 'react-responsive-modal';

import 'react-responsive-modal/styles.css';

/**
 * The form component related to the Hero section layout. This form is used for collecting
 * user contact information interested in staying in touch with Samantha.
 */
export const HeroForm = () => {

    const [ state, action ] = useFormState(submitHeroForm, { success: false });

    const [ modalOpen, setModalOpen ] = useState<boolean>(false);

    // Toggles the modal state.
    const toggleModal = () => setModalOpen(!modalOpen);

    useEffect(() => {

        if (state.success) {
            toggleModal();
        }

    }, [ state.success ]);

    return (
        <div className={ 'max-w-[24rem] w-full text-black' }>
            <motion.form variants={ INPUT_TRANSITION_CONTAINER } initial={ 'hidden' } animate={ 'show' } action={ action } className={ 'flex flex-col gap-4' }>
                <motion.input variants={ INPUT_TRANSITION } type={ 'email' } name={ 'email' } className={ 'flex-1 p-2 bg-blue-500 border-2 placeholder-white' } placeholder={ 'Email' } disabled={ state.success } />
                <div className={ 'flex gap-4 w-full' }>
                    <motion.input variants={ INPUT_TRANSITION } type={ 'text' } name={ 'phone' } className={ 'w-full p-2 bg-blue-500 border-2 placeholder-white' } placeholder={ 'Phone' } disabled={ state.success } />
                    <motion.input variants={ INPUT_TRANSITION } type={ 'text' } name={ 'zip' } className={ 'w-full p-2 bg-blue-500 border-2 placeholder-white' } placeholder={ 'Zip' } disabled={ state.success } />
                </div>
                <HeroFormSubmitButton isDisabled={ state.success }/>
            </motion.form>
            <Modal open={ modalOpen } onClose={ toggleModal }>
                <div>hello</div>
            </Modal>
        </div>
    );
}
