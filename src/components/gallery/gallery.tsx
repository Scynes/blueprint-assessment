'use client';

import { GalleryImage } from './gallery-image';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

export const Gallery = () => {

    // Embla hook that initializes the carousel and sets the autoplay delay to 2000ms.
    // The ref identifies the element that the carousel will be attached to.
    const [ emblaRef ] = useEmblaCarousel({ loop: true }, [ Autoplay({ delay: 2000 }) ]);

    const IMAGES = [
        'voter-table.jpg',
        'voter-booth.jpg',
        'voter-count.jpg',
        'voter-voted.jpg',
        'hero.png'
    ]

    return (
        <section id={ 'gallery' } className={ 'px-4 sm:px-12 pb-10 sm:pb-16' }>
            <div ref={ emblaRef } className={ 'embla-viewport h-72 border' }>
                <div className={ 'h-full embla-container' }>
                    { IMAGES.map( ( image, index ) => (
                        <GalleryImage key={ index } src={ `/images/${ image }` } alt={ `Gallery image ${ index }` } />
                    )) }
                </div>
            </div>
        </section>
    );
}