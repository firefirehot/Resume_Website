import './navBar.css';

export function NavBar(){
    return(
        <nav role="navigation">
            <ol>
                <a href="/bio"><li>Bio</li></a>
                <a href="/contact"><li>Contact</li></a>
                <a href="/classes"><li>Classes</li></a>
                <a href="/projects"><li>Projects</li></a>
            </ol>
        </nav>

    );
}