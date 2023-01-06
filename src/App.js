import React, {useState, useEffect} from 'react'
import axios from 'axios';

const api = "https://fakestoreapi.com/products";

const App = () => {
  const [num, setNum] = useState(1)
  const [title, setTitle] = useState([])
  const [image, setImage] = useState([])
  const [desc, setDesc] = useState([])

  async function getStore (){
    const res = await axios.get(`${api}/${num}`)
    setTitle(res.data.title)
    setImage(res.data.image)
    setDesc(res.data.description)
  } 
  getStore()
  
  return (
    <>
    <h1>Our Shop</h1>
      <div className="app">
       <select value={num} onChange={ (e)=> {setNum(e.target.value)}}>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
         <option value="6">6</option>
         <option value="7">7</option>
         <option value="8">8</option>
         <option value="9">9</option>
         <option value="10">10</option>
         <option value="11">11</option>
         <option value="12">12</option>
         <option value="13">13</option>
         <option value="14">14</option>      
       </select>
       <h1>Product {num} Listed Here is : <br /> <span>{title}</span> </h1>
       <div className="product">
         <h2>{title}</h2>
         <img src={image} alt="" />
         <p>{desc}</p>
       </div>
      </div>
    </>
  )
}

export default App;
