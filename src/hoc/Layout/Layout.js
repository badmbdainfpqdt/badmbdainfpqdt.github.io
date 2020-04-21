import React from 'react';
import Aux from '../NoDiv';
import Header from '../../components/UI/Header/Header';
import Main from '../../components/Main/Main';
import classes from './Layout.module.css';

const layout = () => (
    <Aux>
        <Header />
        <main className={classes.Main}><Main /></main>
        <footer 
            className={classes.Footer} >
                <h2>1º Ten Mauro</h2>
                <h4>Gestor de Sistemas</h4>
            </footer>
    </Aux>
    );

export default layout;