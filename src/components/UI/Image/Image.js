import React from 'react';
import classes from './Image.module.css';

const image = (props) => (
    <img
        className={classes.Image}
        src={props.source}
        alt={props.text} />
);

export default image;