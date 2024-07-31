interface Properties {
    // An optional amount, defaults to 'Other' if not specified.
    amount?: number;
}

/**
 * A donate button is used for preconfiguring any 'callback' that would be implemented to open
 * a payment modal prepopulated with the amount specified. Useful for auto focusing in that edge case.
 * 
 * @param param0 
 * @returns 
 */
export const DonateButton = ( { amount }: Properties ) => {
    return (
        <button className={ 'transition-all text-white bg-sky-900 border-2 border-sky-300 hover:border-black hover:text-black hover:bg-yellow-500 px-12 h-14 active:scale-95 active:bg-yellow-300' }>
            <div className={ 'm-auto relative max-w-fit' }>
                { amount ? <span className={ 'dollar text-3xl font-extrabold ml-[2px]' }>{ amount }</span> : <span className={ 'text-3xl font-extrabold' }>Other</span> }
            </div>
        </button>
    );
}