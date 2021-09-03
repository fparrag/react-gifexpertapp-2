import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [Categoria, setCategoria] = useState([]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategoria} />
            <ol>
                {
                    Categoria.map(cat => <GifGrid key={cat} Categoria={cat} />)
                }
            </ol>
        </>
    );
};

export default GifExpertApp;