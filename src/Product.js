import './Product.css';

export default function Product({ id, title, image, price, rating }) {
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
      {/* <img src='http://en.pimg.jp/024/292/158/1/24292158.jpg' alt='#' /> */}
      <button>장바구니 담기</button>
    </div>
  );
}