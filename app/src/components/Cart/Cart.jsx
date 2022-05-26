import { useCartContext } from "../../Context/CartContext"
import "./Cart.css"
import { FiChevronDown,FiChevronUp } from "react-icons/fi";
import { ItemCount } from "../ItemCount/ItemCount";




export const Cart = () => {
  const{ cartList, deleteCart, totalPrice, removeItem, totalQty} = useCartContext()
  
  
  return (
    <>   
      <section className="mt-5">
        <div className="container">
          <div className="cart">
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-color">
                  <tr>
                    <th scope="col" className="text-white">Producto</th>
                    <th scope="col" className="text-white">Precio</th>
                    <th scope="col" className="text-white">Cantidad</th>
                    <th scope="col" className="text-white">Total</th>
                    
                  </tr>
                </thead>

                {cartList.map(product =>
                  <tbody>
                    <tr>
                      <td>
                        <div className="main">
                          <div>
                            <img src={product.img} alt="" width={145}/>
                              <div className="des">
                                <h5>{product.name}</h5>
                              </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h5>${product.price}</h5>
                      </td>
                      <td>
                        <div className="counter">
                          <h5>{product.quantity}</h5>
                          
                          {/*
                          <i className="fas fa-angle-down"><FiChevronDown/></i>
                          <input type="text" className="input-number" value={product.quantity} min={1} max={product.stock}/>
                          <i className="fas fa-angle-up" ><FiChevronUp/></i>
                          */}

                        </div>
                      </td>
                      <td>
                          <h5>${product.quantity*product.price} <button className="btn"onClick={()=>removeItem(product.id)}>x</button></h5>
                      </td>
                      
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
           </div>
         </div>
         <button onClick={deleteCart} className="deleteCart" >Vaciar Carrito</button> 
      </section>

       <div className="col-lg-4 offset-lg-4">
         <div className="checkout">
           <ul>
             <li className="cart-total">Total ${totalPrice()!== 0 && totalPrice()}</li>
           </ul>
           <a href="#" className="proceed-btn" >Comprar</a>
         </div>
       </div>
    </>
  )


}

  


                      

                                                      


                        

             
       


                  
