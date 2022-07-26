
import {NavBar} from './navBar';
import {Banner} from './banner';

export function Contact() {
    return (
    <article class="middleBlock">
        <NavBar />
            <img class="corner profileImage" src="images/profile_pic.jpg" alt="Robert Wyatt smiling" />
            <div class="midContainer">
                <h1>Contact me </h1>
                <h2> 
                    Phone:
                </h2>
                <h2> 
                    310-625-5422
                </h2>
                <div class="smallLineSpace"></div>
                <h2> 
                    Email:
                </h2>
                <h2> 
                robertwyatt061@gmail.com
                </h2>
            </div>
            <Banner />
    </article>


);
}

