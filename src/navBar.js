import './citeStyles.css';

export function NavBar(){
    return(
        <nav role="navigation">
            <ul>
                <a href="/bio"><li>Bio</li></a>
                <a href="/contact"><li>Contact</li></a>
                <a href="/classes"><li>Classes</li></a>
                <a href="/projects"><li class="lastListItem">Projects</li></a>
            </ul>
        </nav>

    );
}