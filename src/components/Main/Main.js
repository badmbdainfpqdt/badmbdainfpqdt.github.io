import React from 'react';
import Image from '../UI/Image/Image';
import Aux from '../../hoc/NoDiv';
import Button from '../UI/Button/Button';
import bgimage from '../../assets/images/fundo.png';


const main = () => {
    return(
        <Aux>
            <Image 
                source={bgimage}
                text="Base Administrativa" />
                <Button 
                    link="http://10.2.75.200"
                    >SRAET</Button>
        </Aux>
    )
};

export default main;