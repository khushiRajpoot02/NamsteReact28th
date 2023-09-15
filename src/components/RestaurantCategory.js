import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex}) => {
 // giving control of this component to its parent
 // basically here RestaurantCategory state variables are changed by the RestaurentMenu component(parent component)
  const handleClick = () => {
   setShowIndex();
  };

  return (
    <div>
      <div
        className="cursor-pointer w-6/12 mx-auto my-4 bg-white shadow-lg p-4"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
