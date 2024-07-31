import Image from 'next/image';

export const Hero = () => {
    return (
        <section className={ 'relative h-full bg-blue-400' }>
            <div className={ `slant-section absolute px-12 py-24 h-full max-w-[38rem] w-full z-10 bg-gradient-to-tr from-sky-900 via-sky-700 to-yellow-500` }>
                <Image src="/images/logo.png" alt="Logo" width={ 225 } height={ 225 } />
            </div>
            <Image src="/images/hero.png" alt="Hero" fill className='object-cover' />
        </section>
    );
}