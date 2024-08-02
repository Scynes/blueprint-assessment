'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

export const Gallery = () => {

    // Embla hook that initializes the carousel and sets the autoplay delay to 2000ms.
    // The ref identifies the element that the carousel will be attached to.
    const [ emblaRef ] = useEmblaCarousel({ loop: true }, [ Autoplay({ delay: 2000 }) ]);

    return (
        <section id={ 'gallery' } className={ 'px-12 pb-16' }>
            <div ref={ emblaRef } className={ 'embla-viewport h-56 border' }>
                <div className={ 'h-full embla-container' }>
                    <div className={ 'embla-slide justify-center items-center h-full' }>Hello 1</div>
                    <div className={ 'embla-slide justify-center items-center h-full' }>Hello 2</div>
                </div>
            </div>
        </section>
    );
}