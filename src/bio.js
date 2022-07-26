import './citeStyles.css';

import {NavBar} from './navBar';
import {Banner} from './banner';


export function Bio(){
    return(
        <article class="middleBlock">
            <NavBar />
                <img class="corner profileImage" src="images/profile_pic.jpg" alt="Robert Wyatt smiling" />
            <div class="topScreen">
                <h1>My Bio</h1>
                <p> 
                    &nbsp; &nbsp; &nbsp; I am an entry level software engineer with a bachelors degree in computer science from the University of California Riverside. I am 
                    currently looking for work.
                </p>
                <p> 
                    &nbsp; &nbsp; &nbsp; I live in Buena Park, CA and would perfer to work within an hour from my location.
                    I am looking for companies that offer opportunities for growth. I am also looking for companies that share my values of peace, diversity, and inclusion.
                </p>
                <p>
                    &nbsp; &nbsp; &nbsp; I have been programming for more than four years now. My first year of coding was done at El Camino College, 
                    where I completed breath classes and got my first taste of the process of making code. Now I have a habbit of coding every day.
                </p>
                <p>
                    &nbsp; &nbsp; &nbsp; I am always learning new things. Most recently I taught myself how to make this React website.
                </p>
            </div>
            <Banner />
        </article>
    );

}