import { useEffect, useState } from "react";

export const useMediaQuery = (query) => {
    const getMatches = (query) => {
        return window.matchMedia(query).matches;
    }
    const [matches, setMatches] = useState(getMatches(query));

    function handleChange() {
        setMatches(getMatches(query));
    }

    useEffect(() => {
        const matchQueryList = window.matchMedia(query);

        handleChange();

        matchQueryList.addEventListener("change", handleChange);
        return () => {
            matchQueryList.removeEventListener("change", handleChange);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return matches;
};