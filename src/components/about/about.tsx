import Image from 'next/image';

export const About = () => {
    return (
        <section className={ 'transition-all px-8 sm:px-12' }>
            <div className={ 'grid grid-rows-4 lg:gap-10 lg:grid-cols-2 lg:grid-rows-2 transition-all md:px-24' }>
                <div className={ 'relative w-full min-h-96' }>
                    <h1 className={ 'text-2xl font-extrabold mb-3' }>MEET SAMANTHA</h1>
                    <Image src={'/images/meet-photo.png'} alt={'about image'} className={ 'object-cover' } fill />
                    <div className={ 'transition-all absolute bottom-0 lg:bottom-[35%] lg:left-[90%] lg:max-w-96 w-full p-4 bg-gradient-to-r from-sky-900/85 via-sky-700/85 via-70% to-yellow-500/85' }>
                        <p className={ 'text-white' }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, consequatur.</p>
                    </div>
                </div>
                <div className='hidden lg:block' />
                <div className={ 'flex flex-col justify-center text-center lg:text-left' }>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas repellat doloremque ipsum sit ex, debitis quasi provident, porro sint saepe molestiae perspiciatis aliquid distinctio, commodi illo quae incidunt cupiditate?</p>
                    <p className={ 'mt-6' }>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolores atque saepe aspernatur modi. Qui perferendis repellat iure hic delectus non nemo.</p>
                </div>
                <div className={ 'relative' }>
                    <Image src={'/images/about-photo.jpg'} alt={'about image'} fill className={ 'object-cover' }/>
                </div>
            </div>
        </section>
    );
}