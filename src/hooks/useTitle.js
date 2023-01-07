import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Robin's Law Desk`;
    }, [title])
};

export default useTitle;