import { About } from '@/components/about/about';
import { DonateContainer } from '@/components/donate/donate-container';
import { Hero } from '@/components/hero/hero'

export default () => {
    return (
        <div className={ 'h-full bg-red-200' }>
            <Hero />
            <DonateContainer />
            <About />
        </div>
    );
}