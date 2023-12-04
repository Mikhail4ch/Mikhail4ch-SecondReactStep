import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnotherComponent from "./components/AnotherComponent";
import { dummyData } from "./data/data";
import ItemForm from "./routes/ItemForm";
import Header from "./routes/Header";
import Item from "./routes/Item";
import View from "./routes/View";
import ErrorPage from './routes/ErrorPage'
import { v4 as uuid } from 'uuid'


function App() {
  const [list, setList] = useState(dummyData)

  const handleSubmitItem = (item) => {

    const newItem =  {
        id: item.id ? item.id : uuid(),
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        discount: item.discount,
    }
    if (item.id) {
      const i = list.findIndex((searchItem) => searchItem.id === item.id)
      const newList = [...list];
      newList[i] = newItem;
      setList(newList)
    } else {
      const newList = [...list, newItem];
      setList(newList)
    }
}
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/another" element={<AnotherComponent />} />
        <Route path="/view" element={<View list={list} />} />
        <Route path="/view/:id" element={<Item list={list} handleSubmitItem={handleSubmitItem}/>} />
        <Route path="/add" element={<ItemForm list={list} handleSubmitItem={handleSubmitItem}/>} />
        <Route path="/edit/:id" element={<ItemForm list={list} handleSubmitItem={handleSubmitItem}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
