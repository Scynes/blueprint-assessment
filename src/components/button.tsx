interface Properties {
    // The children that the button wraps for the trigger event.
    children: React.ReactNode;
    // Optional additional classes to apply to the button.
    className?: string;
}

export const Button = ( { children, className }: Properties ) => {
    return (
        <button className={ `select-none transition-all px-6 py-2 h-8 flex justify-center items-center ${ className }` }>
            { children }
        </button>
    );
}