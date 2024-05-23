import Data from '../data.json'
import '../App.css';
const Shop = () => {
    return (

        <div><h1 className='header'>Our plants</h1>      
         
       {Data.map((Plant)=>(
                <figure className="wrap">
                <img src={Plant.imageUrl} alt='no plant'/>
                <figcaption>  <h3 className='header'>{Plant.name}</h3></figcaption>
                <figcaption> <h5 className='header'>£{Plant.price.toFixed(2)}</h5> </figcaption>
                <input type='button' value='Add to cart' disabled/>
                </figure >
            ))}
     
        </div>
    );
}
 
export default Shop

