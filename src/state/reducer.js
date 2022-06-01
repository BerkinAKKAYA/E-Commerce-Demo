function reducer(state, action) {
	console.log(action.type);
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item]
			}

		case "REMOVE_FROM_BASKET":
			const basket = state.basket;
			const index = basket.findIndex(x => x === action.item);
			if (index !== -1) {
				basket.splice(index, 1);
			}
			return { ...state, basket }

		case "SET_USER":
			return { ...state, user: action.user }

		default:
			break;
	}
}

export default reducer;