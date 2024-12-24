import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import { Link } from "react-router-dom";
import { FETCH_DATA_API } from "../Utils";
function Body(){
    const [resList, setResList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const[fiterName , setFiterName] = useState("");
    async function fetchData(){
        try{
            let jsonData = await fetch(FETCH_DATA_API);
            let data = await jsonData.json();
            console.log(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            setResList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        }catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])


    function filterData(){
        let list = resList.filter((res)=>{
            return res.info.name.toLowerCase().includes(fiterName.toLowerCase());
        })
        setFilteredList(list);
    }

    return (
        <div>
            <input type="text" value={fiterName} onChange={(e)=>{
                setFiterName(e.target.value);
            }}/>
            <button onClick={filterData}>Seach Restaurants</button>
       
            <div className="res-container">

                {filteredList.map((restaurant)=>(
                   <Link key={restaurant.info.id} to={"/restromenu/"+restaurant.info.id}> <RestroCard  restro = {restaurant}/> </Link>
                ))}
            </div>
        </div>
    );
}

export default Body;