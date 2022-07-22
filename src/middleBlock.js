import './citeStyles.css';

import {NavBar} from './navBar';
import {Banner} from './banner';


export function MiddleBlock(){
    return(
        <article class="middleBlock">
            <NavBar />
            <Banner />
        </article>
    );

}