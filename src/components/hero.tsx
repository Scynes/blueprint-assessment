import Image from 'next/image';

export const Hero = () => {
    return (
        <section className={ 'relative h-full bg-blue-400' }>
            <Image src="/images/hero.png" alt="Hero" fill className='object-cover' />
        </section>
    );
}