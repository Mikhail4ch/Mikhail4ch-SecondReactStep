import styles from "./Item.module.css"
import {useParams, useNavigate} from 'react-router-dom'

function Item({ list }) {
    const {id} = useParams();
    const product = list.find((item) => item.id === id)
    const navigate = useNavigate();
    
    return (
        <div className={styles.container}>
            <h3>Product ID: ${id}</h3>
            <p>Name: {product.name}</p>
            <p>quantity: {product.quantity}</p>
            <p>Price: {product.price}</p>
            <p>discount: {product.discount}</p>
            <button onClick={() => {
                navigate('/view')
            }}> 
                Go Back
            </button>
            <button onClick={() => {
                navigate(`/edit/${id}`)
            }}>Edit</button>
        </div>

    )
}

export default Item;