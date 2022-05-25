

const Item = ({item}) => {
    return(
        <div className="card" style={{width: "18rem",height: "18.75rem", margin: ".5rem"}}>
            <img src={item.image} style={{height: "9.375em"}} className="card-img-top" alt={item.name} />
            <div className="card-body">
                <p className="card-text">{item.name}</p>
                <p className="card-text">{item.cost}</p>
            </div>    
        </div>
    );
}

export default Item;