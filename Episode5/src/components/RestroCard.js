function RestroCard({restro}){
    let {info} = restro;
    const IMGURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    return(
        <div className="restro-card">
            <img alt="restro-logo" className="res-logo" src={IMGURL+info.cloudinaryImageId}/>
            <h2>{info.name}</h2>
            <p>{info.avgRating} Rating {info.sla.slaString}</p>
            <h4>{info.cuisines.join(', ')}</h4>
            <h4>{info.locality}</h4>
        </div>  
    )
}

export default RestroCard;