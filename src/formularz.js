import React, { useState } from 'react';

const Form = ({ addProduct }) => {
    const [name, setName] = useState({name: ""});
    const [kod, setkod] = useState({kod: ""});
    const [nakretka, setNakretka] = useState("");
    const [pojemnosc, setPojemnosc] = useState("");
    const [karton, setKarton] = useState("");

    const handleChange = (e) => {
      setName(e.target.value);
    };
    const handleChangeI = (e) => {
        setkod(e.target.value);
    };
    const handleNakretkaChange = (e) => {
      setNakretka(e.target.value);
    };
    const handlePojemnoscChange = (e) => {
      setPojemnosc(e.target.value);
    };
    const handleKartonChange = (e) => {
      setKarton(e.target.value);
    };
      
   
    const handleSubmit = (e) => {
      e.preventDefault();
      addProduct({name,kod,nakretka,pojemnosc,karton})
      
    };
    
   
    return (
      <>
      <form onSubmit={handleSubmit}>
        <label>Wiadomość:
          <textarea  onChange={handleChange}/>
        
           <input onChange={handleChangeI}></input>
        
          <select value={nakretka} onChange={handleNakretkaChange}>
            <option value="biała">biała</option>
            <option value="czerwona">czerwona</option>
            <option value="niebieska">niebiesk</option>
          </select>

          <select value={pojemnosc} onChange={handlePojemnoscChange}>
            <option value="150">150</option>
            <option value="250">250</option>
            <option value="500">500</option>
          </select>

          <select value={karton} onChange={handleKartonChange}>
            <option value="mały">mały</option>
            <option value="sredni">sredni</option>
            <option value="duzy">duzy</option>
          </select>



        <input type="submit" value="Wyślij"  />
        </label>
      </form>

        </>
    );
  };

export default Form