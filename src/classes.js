import './citeStyles.css';

import {NavBar} from './navBar';
import {Banner} from './banner';


export function Classes(){
    return(
        <article class="middleBlock">
            <NavBar />
                <img class="corner profileImage" src="images/profile_pic.jpg" alt="Robert Wyatt smiling" />
            <div class="topScreen">
                <h1>My Classes</h1>
                <h3>Introduction to Software Engineering</h3>
                <p class="small">
                    An introduction to software engineeringing in the industry. Class focused on industry standards. Database website final project.
                </p>

                <h3>Data Structures and Algorithms</h3>
                <p class="small">
                    A deep dive into common data structures and algorithms.
                </p>

                <h3>Database Management Systems</h3>
                <p class="small">
                    A class teaching formal languages, parsing, and mySQL.
                </p>

                <h3>Advanced Programming in C++</h3>
                <p class="small">
                    A class focused on advance C++ concepts.
                </p>

            </div>
            <Banner />
        </article>
    );

}