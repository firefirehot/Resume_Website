import './navBar.css';

export function NavBar(){
    return(
        <aside>
        <ol>
            <li><a href="/bio">Bio</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/classes">Classes</a></li>
            <li><a href="projects">Projects</a></li>
        </ol>
        </aside>

    );
}