import { useEffect, useState } from 'react'

const useClickOutside = (ref) => {
    const [isClickedOutside, setIsClickedOutside] = useState(false);
    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsClickedOutside(true);
            } else {
                setIsClickedOutside(false);
            }

        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref])

    return isClickedOutside;
}

export default useClickOutside