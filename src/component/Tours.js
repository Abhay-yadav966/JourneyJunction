import Card from "./Card";


function Tours({ttours , removeTour}){
    // developing started
    return(
        <div className="container" >
            <div className="title_contain" >
                <h1 className="title" >Journey Junction</h1>
            </div>
            <div className="cards" >
                {
                    ttours.map( ( tour ) => {
                        return(
                            <Card {...tour} removeTour = {removeTour} ></Card>
                        );
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;