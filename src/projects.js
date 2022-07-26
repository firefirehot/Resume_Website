import './citeStyles.css';

import {NavBar} from './navBar';
import {Banner} from './banner';


export function Projects(){
    return(
        <article class="middleBlock">
            <NavBar />
                <img class="corner profileImage" src="images/profile_pic.jpg" alt="Robert Wyatt smiling" />
            <div class="topScreen">
                <h1>My Projects</h1>
                <h2>Van Emde Boas Tree — <i>School Project</i></h2>
                <p class="small">
                    <ul>
                        <li>Implemented an ordered integer data structure with dictionary functionality that is optimized for runtime speed.</li>
                        <li>Created functions to achieve dictionary functionality. Includes functions to find a number within the set, insert new numbers into the set, 
                            delete numbers from the set, find the highest numberin the set, find the lowest number in the set, find the next number in the set, and find 
                            the previous number in the set.</li>
                        <li>All functions on the set run with log(log(n)) speeds.</li>
                        <li>Wrote, optimized, and tested the data structure using C++.</li>
                        <li>Project completed alone with minimal oversight and no direct instruction.</li>
                    </ul>
                    <b>Link:</b> <a href="https://github.com/firefirehot/vanEmdeBoasTree">https://github.com/firefirehot/vanEmdeBoasTree</a>
                </p>

                <h2>Database Website — <i>School Project</i></h2>
                <p class="small">
                    <ul> 
                        <li>Led a team of four to create a website that searched, edited, and analyzed a database of over 10,000 Kickstarter entries.</li>
                        <li>Created APIs using Python Flask including /add, /delete, /import_file, /analytics, and /analytic_avg_length_ks.</li>
                        <li>Created user interfaces of above paths using HTML, CSS, and JavaScript.</li>
                        <li>Created project testing framework.</li>
                        <li>Led project testing by creating bug reports and assigning bug fixes</li>
                    </ul>
                    <b>Link:</b> <a href="https://github.com/firefirehot/JARSS_Project_Website.git">https://github.com/firefirehot/JARSS_Project_Website.git</a>
                </p>

            </div>
            <Banner />
        </article>
    );

}