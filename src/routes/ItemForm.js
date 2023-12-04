import { useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom'

function ItemForm({ list, handleSubmitItem}) {
  const {id} = useParams()??null;
  let currentProduct =  null;
  if (id){
    currentProduct = list.find((item) => item.id === id)
  }
  
  const [item, setItem] = useState(currentProduct??{
    name: 'name',
    quantity: 1,
    price: 1
  });
  const navigate = useNavigate();

  const handleName = (e) => {
    const form = {...item, name: e.target.value};
    setItem(form);
  }
  const handleQuantity = (e) => {
    const form = {...item, quantity: e.target.value};
    setItem(form);
  }
  const handlePrice = (e) => {
    const form = {...item, price: e.target.value};
    setItem(form);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitItem(item);
    navigate('/view');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='Product name' onChange={handleName} value={item.name}/>
        <input type='text' name='quantity' placeholder='Quantity' onChange={handleQuantity} value={item.quantity}/>
        <input type='text' name='price' placeholder='Price' onChange={handlePrice} value={item.price}/>
        <button>{currentProduct ? 'Edit' : 'Add'}</button>
        <button onClick={() => {id ? navigate(`/view/${id}`): navigate('/view')}}> 
                Go Back
        </button>
      </form>
    </div>
  )
}

export default ItemForm