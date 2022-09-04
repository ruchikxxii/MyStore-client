import React from 'react'
import AvailableCatalogue from './AvailableCatalogue';
import CatalogueSummary from './CatalogueSummary';


const Catalogue = (props) => {
    return (
        <React.Fragment>
            <CatalogueSummary username={props.username}/>
            <AvailableCatalogue query={props.query} setProduct={props.setProduct} productToggle={props.productToggle}/>
        </React.Fragment>
    );
}

export default Catalogue;