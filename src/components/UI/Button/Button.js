import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
    <form action={props.link}>
        <button 
            className={classes.Button}
            >{props.children}</button>
    </form>
);

export default button;