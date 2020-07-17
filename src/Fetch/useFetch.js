
//old version for get request
/*
import { useState, useEffect } from "react";
function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
    }
    useEffect(() => {
        fetchUrl();
    }, []);
    return [data, loading];
}
export { useFetch };
*/

export const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? { 'Content-Type': 'application/json' } : {}
    }).then(response => {

        if (response.status >= 400) {
            // !response.ok
           return response.json().then(errResData => {
                const error = new Error('Something went wrong!');
                error.data = errResData;
                throw error;
            });
        }

        return response.json();
    });
};