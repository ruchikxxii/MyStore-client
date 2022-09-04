import classes from './AvailableCatalogue.module.css'
import {useEffect,useState} from 'react'
import Card from '../UI/Card';
import Product from './Product/Product';

const AvailableCatalogue = (props)=>{
    const [Catalogue,setCatalogue] = useState([]);
    const [FilteredCatalgue,setFilteredCatalogue] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(data => {return data.json()})
        .then(CatalogueData => {
            setCatalogue(CatalogueData)
            setFilteredCatalogue(CatalogueData)
        })
    },[])

    useEffect(()=>{
        if(props.query.trim() !== ""){
            console.log(props.query)
            setFilteredCatalogue(Cata => {
                return Cata.filter(product=>{
                    return product.title.toLowerCase().includes(props.query.toLowerCase())
                })
            })
        }
        else{
            setFilteredCatalogue(Catalogue)
        }
    },[props.query])

    const productClickHandler = (id) => {
        const productIndex = Catalogue.findIndex((product)=>product.id===id)
        props.setProduct(Catalogue[productIndex])
        props.productToggle();
    }

     const CatalogueList = FilteredCatalgue.map(product => {
        return (<Product name={product.title} img={product.image} price={product.price} id={product.id} key={product.id} onClick={productClickHandler} productToggle={props.productToggle}/>);
     })

     return (
        <section className={classes.meals}>
            <Card>
                <ul>{CatalogueList}</ul>
            </Card>
        </section>
     );

}

export default AvailableCatalogue;