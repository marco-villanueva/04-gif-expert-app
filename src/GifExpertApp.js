import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['GIF']);

    return (
        <div>
            <h1>Buscador de Gifs </h1>
            <h2>Escribe la palabra o categoría y disfruta:</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            <ol>
                { categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}/>
                    ))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp
