import { HeroFormSubmitButton } from '@/components/hero/hero-form-submit-button';
import { submitHeroForm } from '@/actions/submit-hero-form';

/**
 * The form component related to the Hero section layout. This form is used for collecting
 * user contact information interested in staying in touch with Samantha.
 */
export const HeroForm = () => {

    return (
        <div className={ 'max-w-80 w-full text-black' }>
            <form action={ submitHeroForm } className={ 'flex flex-col gap-4' }>
                <input type={ 'email' } name={ 'email' } className={ 'flex-1 p-2 bg-blue-500 border-2 placeholder-white' } placeholder={ 'Email' } />
                <div className={ 'flex gap-4 w-full' }>
                    <input type={ 'text' } name={ 'phone' } className={ 'w-full p-2 bg-blue-500 border-2 placeholder-white' } placeholder={ 'Phone' } />
                    <input type={ 'text' } name={ 'zip' } className={ 'w-full p-2 bg-blue-500 border-2 placeholder-white' } placeholder={ 'Zip' } />
                </div>
                <HeroFormSubmitButton />
            </form>
        </div>
    );
}
