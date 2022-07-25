
export function Banner(){
    return(
        <>
        <div class="midContainer">
            <h1>Robert Wyatt</h1>
            <p>Software engineer</p>
        </div>
            <img alt="the university of california riverside"
                srcset= "images/ucrImageWholeFaded600w.jpg 600w, 
                    images/ucrImageWholeFaded.jpg 1200w, "
	 
	 sizes = "(max-width:1200px) 600px,
			        1200px"
            
            
            />
           
       </>
    );

}

