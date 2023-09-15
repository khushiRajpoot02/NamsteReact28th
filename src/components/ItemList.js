import { CDN_URL } from "../utils/constaints";
import { addItem } from "../Redux/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({items})=>{
    const dispatch = useDispatch();
    const handleAddItems = (item)=>{
      dispatch(addItem(item));
    }
    return(
        <div>
        {items.map((item)=>(
          <div
          className="p-2 m-2 border-b-2 text-left flex justify-between"
          key = {item.card.info.id}
          >
          <div className="w-9/12 ">
          <div className="py-2 ">
          <span className="">{item?.card?.info?.name}</span><br></br>
          <span className="">-₹{item?.card?.info?.price/100}</span>
          </div>
          <p className="text-xs text-zinc-400">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12">
          <div className="absolute">
          <button className="p-2 mx-2 rounded-lg shadow-lg bg-white text-black"
          onClick={()=>handleAddItems(item)}
          >Add+
          </button>
          </div>
          <img className="rounded-md"src={CDN_URL + item?.card?.info?.imageId}/>
          </div>
          </div>
        ))}
        </div>
    )
}
export default ItemList;