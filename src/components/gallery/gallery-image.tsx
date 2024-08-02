import Image from 'next/image';

/**
 * A wrapper component for rendering an image within the gallery slide.
 * 
 * @param src - The source of the image to be rendered.
 * @param alt - The alt text for the image.
 */
export const GalleryImage = ( { src, alt }: { src: string, alt: string } ) => {
    return (
        <div className={ 'embla-slide justify-center items-center h-full' }>
            <Image priority src={ src } alt={ alt } fill sizes={ '100%' } className={ 'object-cover' }/>
        </div>
    );
}