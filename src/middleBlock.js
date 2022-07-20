import './middleBlock.css';

import {NavBar} from './navBar'
import {Resume} from './resume'


export function MiddleBlock(){
    return(
        <article class="middleBlock">
            <NavBar />
            <Resume />
        </article>
    );

}