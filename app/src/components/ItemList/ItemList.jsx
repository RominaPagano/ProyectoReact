
import Item from "../Item/Item"


const ItemList = ({items}) => {
      

    return (
        
        <>
            {items.map((prod) => <Item key= {prod.id}
                                    name= {prod.name}
                                    price={prod.price}
                                    img=  {prod.img} />)}     
        </>
    )
}

export default ItemList