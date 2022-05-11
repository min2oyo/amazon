import './Product.css';
import { useStateValue } from './StateProvider';

export default function Product({ id, title, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating
      }
    });
  };

  console.log("장바구니 확인: ", basket);


  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
          <small>가격</small>
          <strong>{price}</strong>
          <small>원</small>
        </p>
        <div className='product_rating'>
          {
            Array(rating) // 배열이 rating개 들어감
              .fill() // rating개 만큼 채움. [undefined, undefined]
              .map(() => (  // map을 한 것으로 채움
                <p>★</p>
              ))
          }
        </div>
      </div>
      <img src={image} alt='#' />
      <button onClick={addToBasket}>장바구니 담기</button>
    </div>
  );
}