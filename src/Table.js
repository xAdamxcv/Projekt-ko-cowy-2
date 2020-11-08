import React from 'react';

const Table = ({ products }) => {
    return (
        <ul>
            {products.map(el => (
                <li className="table"><p className="tableP">Produkt: {el.name}</p> kod: {el.kod}, nakretka: {el.nakretka}, pojemnosc: {el.pojemnosc}, karton: {el.karton}</li>
            ))}
        </ul>
    )
}

export default Table;
