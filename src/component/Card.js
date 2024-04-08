import { useState } from "react";


function Card( { id, name, info, image, price, removeTour} ){

    const [ readmore , setReadmore ] = useState(false);
    
    const Description = readmore ? info : `${info.substring( 0 , 200 )}....`;
    
     
    function readMoreHandler(){
    setReadmore(!readmore);
    }

    return(
        <div className="card" > 
            
            <img src={image} alt="" className="image" />

            <div className="tourInfo" >
                <div className="tourDetail" >
                    <p className="tour_price" >₹ {price}</p>
                    <p className="tour_name" >{name}</p>
                </div>
                <div className="description" >
                    {Description}
                    <span className="readMore" onClick={readMoreHandler}>
                        {readmore ? `show less` : `Read more`}
                    </span>
                </div>
 
            </div>

            <button className="btn_red" onClick={() => removeTour(id)} >
                Not Interested
            </button>

        </div>
    );

}

export default Card;