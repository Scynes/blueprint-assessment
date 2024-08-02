import { Tweet } from 'react-tweet';

/**
 * A simple Tweets container component that renders a list of tweets using the react-tweet 
 * library.
 * 
 * @returns 
 */
export const Tweets = () => {

    const TWEET_IDS: string[] = [ 
        '1777310448624205854',
        '1611097476328562689',
        '1703175702491562239',
        '1816436341703397765',
        '1818657054426366313',
        '1818720032794333251',
        '1817689513587560858'
    ];

    return (
        <div className={ 'p-4 sm:p-12 text-2xl sm:text-3xl font-extrabold text-white' }>
            <div className={ 'p-4 bg-gradient-to-r from-sky-900 to-sky-500' }>
                <h1>{ `WHAT'S BEING SAID?` }</h1>
            </div>
            <div className={ 'flex gap-6 overflow-x-scroll' }>
                { TWEET_IDS.map((id: string) => (
                    <div key={ id } className={ 'w-[300px]' }>
                        <Tweet id={ id } />
                    </div>
                )) }
            </div>
        </div>
    );
}