import { useEffect } from "react";

function useAsync(asyncFunc, onSuccess) {
    useEffect(() => {
        let isMounted = true;
        asyncFunc()
            .then((data) => {
                if (isMounted) onSuccess(data);
            });
        
        return () => {
            isMounted = false;
        };
    }, [asyncFunc, onSuccess]);
}

export default useAsync;
