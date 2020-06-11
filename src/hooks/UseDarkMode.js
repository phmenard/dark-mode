import {UseLocalStorage} from "./UseLocalStorage";
import {useEffect} from "react";

export const useDarkMode = (key, initialValue) => {
    const [someValue, setSomeValue] = UseLocalStorage(key, initialValue);
    
    // find the body element
    const body = document.getElementsByTagName("body");

    // set the dark-mode class 
    useEffect(() => { 
           someValue ? body[0].classList.add("dark-mode") : body[0].classList.remove("dark-mode");

    }, [someValue]);

    return [someValue, setSomeValue];


}

export default useDarkMode;