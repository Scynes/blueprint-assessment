import Image from 'next/image'

export const Footer = () => {
    return (
        <section className={ 'p-12 bg-sky-900' }>
            <footer className={ 'flex flex-col sm:flex-row justify-between gap-6 sm:items-center min-h-40' }>
                <Image src={ '/images/logo.png' } alt={ 'Samantha Hall for Senate' } width={ 100 } height={ 100 } />
                <div className={ 'text-white flex flex-col gap-4' }>
                    <div className={ 'px-6 py-2 border-2' }>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <p className={ 'self-end' }>
                        <a href="#" className={ 'underline' }>Privacy Policy</a>  
                        <span className={ 'ml-4' }>©2024</span>
                    </p>
                </div>
            </footer>
        </section>
    )
}