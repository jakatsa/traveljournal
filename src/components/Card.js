



export default function Card(props){
    return (
        <>
  

    <div className="wrapper"  >



        <div className="imgContainer"  >
            <img src={props.imageUrl} alt={props.title} />
        </div>


            <div className="Container" >
            <p>{props.location}</p>
            <h3>{props.title}</h3>

            <div  className="dates" > 

                <h4>{props.startDate}</h4>
                <div> <h4>--</h4> </div>
                <h4>{props.endDate}</h4>
            </div>
           
            <p className="description" >{props.description}</p>
           

            </div>
        
    </div>
    <hr className="card__line"/>
    </>
    )



}
