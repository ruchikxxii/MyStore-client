import React from "react";
import ShopImage from "../../assets/backdrop.jpg"
import Search from "../UI/Search";
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    const Searchfn = (query) => {
        props.Searchfn(query)
    }
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>MyStore</h1>
                <Search Searchfn={Searchfn}/>
                <HeaderCartButton cartToggle={props.cartToggle}/>
            </header>
            <div className={classes['main-image']}>
                <img src={ShopImage} />
            </div>
        </React.Fragment>
    );
}

export default Header