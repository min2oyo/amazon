import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import './Header.css';
import { useStateValue } from './StateProvider';

export default function Header() {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to={"/"}>
        <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon-logo' />
      </Link>
      <div className='header_search'>
        <input className='header_searchInput' type='text' />
        <SearchIcon className='header_searchIcon' />
      </div>
      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionLineOne'>안녕하세요!</span>
          <span className='header_optionLineTwo'>로그인하기!</span>
        </div>
        <div className='header_option'>
          <span className='header_optionLineOne'>돌아가기</span>
          <span className='header_optionLineTwo'>주문내역</span>
        </div>
        <div className='header_option'>
          <span className='header_optionLineOne'>반가워요</span>
          <span className='header_optionLineTwo'>구독과 좋아요</span>
        </div>
      </div>
      <Link to={"/Checkout"}>
        <div className='header_optionBasket'>
          <ShoppingBasket />
          <span className='header_optionLineTwo_header_basketCount'>
            {basket?.length}
            {/* ?: optional 체인(?): basket값이 null, undefined 일때 한번 더 검증해서 오류시 undefined로 반환함 */}
          </span>
        </div>
      </Link>
    </div>
  );
}