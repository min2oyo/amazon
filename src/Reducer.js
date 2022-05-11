// 장바구니 담기와 같은 행동을 데이터 레이어로 디스패치(전송?) 해 줌

export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;