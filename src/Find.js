import React from 'react';

const Find = ({ onSearch }) => (
    <form onSubmit={onSearch}>
        <input name="search" />
        <button type="submit">Szukaj</button>
    </form>
)

export default Find;