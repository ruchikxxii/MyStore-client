import classes from './Search.module.css'
import { useRef } from 'react';

const Search = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
        props.Searchfn(inputRef.current.value)
        inputRef.current.value = "";
    }

    const inputRef = useRef()

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <input type="text" className={classes.input} placeholder="Search Here!" ref={inputRef}/>
        </form>
    );
}

export default Search