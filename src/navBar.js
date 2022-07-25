import './citeStyles.css';

export function NavBar(){
    return(

            <div class="imageWideBar centered">
                <nav role="navigation">
                    <ul>
                        <a href="/bio" ><li class="nav">Bio</li></a>
                        <a href="/contact" ><li class="nav">Contact</li></a>
                        <a href="/classes" ><li class="nav">Classes</li></a>
                        <a href="/projects"><li class="nav lastListItem">Projects</li></a>
                    </ul>
                </nav>
            </div>


    );
}