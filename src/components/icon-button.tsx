import Image from 'next/image';

interface Properties {
    // The path to the icon image.
    iconPath: string;
    // Optional additional classes to apply to the button.
    className?: string;
}

export const IconButton = ( { iconPath, className }: Properties ) => {
    return (
        <button className={ `transition-all active:scale-95 hover:bg-blue-500 rounded-full p-[5px] border border-white ${ className }` }>
            <div className={ 'relative h-full w-full' }>
                <Image src={ iconPath } alt="Icon" fill />
            </div>
        </button>
    )
}