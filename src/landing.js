import './citeStyles.css';

import {NavBar} from './navBar';
import {Banner} from './banner';


export function Landing(){
    return(
        <article class="middleBlock">
            <NavBar />
            <div class="midContainer">
                <h2>Robert Wyatt</h2>
                <h1>Software engineer</h1>
            </div>
            <Banner />
        </article>
    );

}