
import {NavBar} from './navBar';
import {Banner} from './banner';

export function Contact() {
    return (
    <article class="middleBlock">
        <NavBar />
            <img class="corner profileImage" src="images/profile_pic.jpg" alt="Robert Wyatt smiling" />
            <div class="midContainer">
                <h1>Contact me </h1>
                <p> 
                    Phone: 310-625-5422
                </p>
                <p> 
                    Email: robertwyatt061@gmail.com
                </p>
            </div>
            <Banner />
    </article>


);
}

