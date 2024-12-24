import { useEffect, useState } from "react";
import { MENU_API } from "../Utils";
import { useParams } from "react-router-dom";
const RestroMenu = ()=>{
    let {resId} = useParams();
    const[menuItem, setMenuItem] = useState([]);


    useEffect(()=>{
        fetchRestroMenu();
    },[])

    async function fetchRestroMenu(){
        try{
            let data = await fetch(MENU_API+resId);
            let jsonData = await data.json();
            console.log(jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
            let menuLst = jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
            setMenuItem(menuLst);
            console.log(menuItem);
        }catch(e){
            console.log(e);
        }
        
    }
    if(menuItem=== 0){
        return <>no data found</>;
    }

    return(
        <div>
            <h1>Restro Name</h1>
            <h2>Menu items</h2>
            <ul>
                {menuItem.map((item)=>{
                    <li>{item.card.info.name} Rs. {item.card.info.price / 100}</li>
                })}
            </ul>
        </div>
    );
}

export default RestroMenu;