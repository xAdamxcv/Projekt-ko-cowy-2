import './App.css';
import React, {useState} from 'react';
import From from './formularz';
import NameForm from './formularz';
import Table from './Table';
import Find from './Find';
//import FormExample from './formularz';

let App = () => {
const [state, setState] = useState([]);
const [filter, setFilter] = useState('');

const handleAddProduct = product => {
    setState(prev => [
        ...prev,
        product
    ])
}

const handleOnSearch = e => {
    e.preventDefault();
    const value = e.target.search.value;
    setFilter(value)
    
}
console.log(state)

const getProducts = () => filter.length > 0 ? state.filter(el => el.name === filter) : state


return (
<>
    <From addProduct={handleAddProduct} />
    <Find onSearch={handleOnSearch} />
    <Table products={getProducts()} />
</>
)
}

export default App;
