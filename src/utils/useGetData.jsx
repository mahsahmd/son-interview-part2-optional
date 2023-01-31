import { useEffect, useState } from 'react'

const useGetData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                else {
                    setError('failed to fetch data')
                }
            }).then((data) => {
                setData(data?.products)
                setLoading(false)
            }).catch(err => {
                console.error(err);
                setError('failed to fetch data');
            })
    }, [])
    return { data, loading, error }
}

export default useGetData