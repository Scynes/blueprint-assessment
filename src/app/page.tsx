import { About } from '@/components/about/about';
import { DonateContainer } from '@/components/donate/donate-container';
import { Footer } from '@/components/footer/footer';
import { Gallery } from '@/components/gallery/gallery';
import { Hero } from '@/components/hero/hero'
import { Tweets } from '@/components/tweet/tweets';

export default function Home () {
    return (
        <div className={ 'h-full' }>
            <Hero />
            <DonateContainer />
            <Gallery />
            <About />
            <Tweets />
            <Footer />
        </div>
    );
}