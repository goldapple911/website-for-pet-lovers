import React from 'react'

export default function CategoryNav({ toggleCategory }) {
    return (
        <div className="row">
            <button onClick={toggleCategory} className="category-nav-btn col-sm-2 col-4" value="Dog">Dog</button>
            <button onClick={toggleCategory} className="category-nav-btn col-sm-2 col-4" value="Cat">Cat</button>
            <button onClick={toggleCategory} className="category-nav-btn col-sm-2 col-4" value="Small Mammal">Small Mammal</button>
            <button onClick={toggleCategory} className="category-nav-btn col-sm-2 col-4" value="Bird">Bird</button>
            <button onClick={toggleCategory} className="category-nav-btn col-sm-2 col-4" value="Reptile">Reptile</button>
            <button onClick={toggleCategory} className="category-nav-btn col-sm-2 col-4" value="Aquatic">Aquatic</button>
        </div>
    )
}
