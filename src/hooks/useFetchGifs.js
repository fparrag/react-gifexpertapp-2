import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGif";


export const useFetchGifs = (cat) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(cat)
            .then(imgs => 
                setstate({
                    data: imgs,
                    loading: false
                })
            )
    }, [cat])
    
    return state;
}
