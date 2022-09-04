import './App.css';
import {useEffect,useState} from 'react'
import {useLocation} from 'react-router-dom'
import Header from './components/Layout/Header';
import Catalogue from './components/Catalogue/Catalogue';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Order from './components/Cart/Order';
import ProductModal from './components/ProductModal/ProductModal';

function App(props) {

  const [username,setUsername] = useState('User')
  const [cartVisible,setCartVisible] = useState(false)
  const [query,setQuery] = useState("")
  const [orderVisible,setOrderVisible] = useState(false)
  const [product,setProduct] = useState([]);
  const [productVisible,setProductVisible] = useState(false)

  const id = new URLSearchParams(window.location.search).get('id')

  useEffect(()=>{
    fetch(`/profile?id=${id}`)
    .then(data=>{
      return data.json()
    })
    .then(profile => {
      setUsername(profile.username)
    })
  },[])

  const onCartToggle = () => {
    setCartVisible((state)=>{
      return (!state);
    })
  }

  const onOrderToggle = () => {
    setOrderVisible((state)=>{
      return(!state)
    })
  }

  const Searchfn = (q)=>{
    setQuery(q)
  }

  const onSetProduct = (product) => {
    setProduct(product)
  }

  const onProductToggle = () => {
    setProductVisible((state) => {
      return (!state)
    })
  }

  return (
    <CartProvider>
      {productVisible && <ProductModal rating={product.rating.rate} img={product.image} description={product.description} title={product.title} productToggle={onProductToggle}/>}
      {orderVisible && <Order orderToggle={onOrderToggle}/>}
      {cartVisible && <Cart cartToggle={onCartToggle} orderToggle={onOrderToggle}/>}
      <Header cartToggle={onCartToggle} Searchfn={Searchfn} />
      <Catalogue query={query} username={username} setProduct={onSetProduct} productToggle={onProductToggle}/>
    </CartProvider>
  );
}

export default App;
