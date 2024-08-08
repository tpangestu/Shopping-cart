import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  // eslint-disable-next-line no-unused-vars
  const [product, setProduct] = useState([
    {
      url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
      name: 'TRQ White Shoes',
      seller: 'AMZ Seller Ghz',
      price: 300000
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      seller: 'Watch Ltd Siyana',
      price: 2000000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AMD Laptop 8GB RAM',
      seller: 'Jaya Laptops',
      price: 5000000
    },
    {
      url: 'data:image/jpeg;base64,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',
      name: 'Kaos Item',
      category: 'Kaos',
      price: 120000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0CshlwI6uDEnz_Mw0QUZ_e21RGmYzDztLqQ&s',
      name: 'Meja Belajar',
      seller: 'Mebel Depok',
      price: 700000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
      name: 'cangkir Merah',
      seller: 'Perabot',
      price: 20000
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;
