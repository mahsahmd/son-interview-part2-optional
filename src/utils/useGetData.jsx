import { useEffect, useState } from 'react'

const useGetData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                else {
                    throw new Error('Request failed')
                }
            }).then((data) => {
                setData(data?.products)
                setLoading(false)
            }).catch(err => console.error(err))
    }, [])
    return { data, loading }
}

export default useGetData