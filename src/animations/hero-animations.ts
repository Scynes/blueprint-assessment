export const HERO_ANIMATION_CONTAINER = {
    hidden: { opacity: 0, x: -35 },

    show: { 
        opacity: 1,
        x: 0,
        delay: 0.5,
        transition: { 
            staggerChildren: 0.15
        }
    }
}

export const HERO_TEXT_ANIMATION = {
    hidden: { opacity: 0, x: 35 },
    show: { opacity: 1, x: 0 },
};
