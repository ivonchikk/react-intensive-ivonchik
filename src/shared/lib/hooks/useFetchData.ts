import { useState, useCallback } from 'react';

export const useFetchData = <T = unknown>() => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async (url: string) => {
        setLoading(true);

        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        } catch (err: any) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }, [])

    return { data, loading, error, fetchData };
};