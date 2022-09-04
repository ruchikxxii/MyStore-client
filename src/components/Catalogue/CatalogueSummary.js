import classes from './CatalogueSummary.module.css'

const CatalogueSummary = (props)=>{
    return (
        <section className={classes.summary}>
            <h2>
                Hello {props.username}, Welcome to MyStore
            </h2>
            <p>
                Choose Your Styles from our broad catalogue to meet your fashion needs.
            </p>
            <p>
                Our entire catalogue is sourced directly from the factories 
                to make you get the best value for your money.
            </p>
        </section>
    );
}

export default CatalogueSummary;