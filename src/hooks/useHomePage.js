import { useState, useRef, useEffect } from "react";
import { useObserver } from "./useObserver";
import { getCharactersPage } from '../api/characterApi';


export function useHomePage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const lastItemRef = useRef(null);

    const callbackFunction = (entries) => {
        const [entry] = entries;
        if(entry.isIntersecting) {
            setCurrentPage(currentPage + 1);
        }
    }

    const options = {
        root: null,
        threshold: 1,
        rootMargin: "0px",
    }

    useEffect(() => {
        setIsLoading(true)
        getCharactersPage(currentPage).then(page => {
            setCharacters([...characters, ...page.items]);
            setIsLoading(false);
        })
    }, [currentPage])

    useObserver(callbackFunction, options, lastItemRef, characters)

    return {
        characters,
        lastItemRef,
        isLoading
    }
}