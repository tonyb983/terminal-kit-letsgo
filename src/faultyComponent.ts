import RNG from './utility/rng';

const clamp = (n: number) => {
    if(n <= 0) return 0;
    if(n >= 1) return 1;
    return n;
}

export const faulty = (percent:number = 0.2) => {
    const clamped = 1 - clamp(percent);
    console.log('clamped is ' + clamped);
    Array().fill(0, 0, 5).forEach((i) => {
        console.log('flip ' + i);
        if(RNG.get().bool(clamped)){ throw Error("OOPSY POOPSY")};
    })

    console.log("The sweet smell of success ;)");
}

export default faulty;