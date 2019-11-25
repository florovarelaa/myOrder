function reducer (state, action) {
	switch (action.type) {
		case "SET_TECHNOLOGY":
			return {
                ...state,
                tech: action.tech
            };
		case "is_clicked":
			return; //return new state
		default:
		    return state;
	}
}

export default reducer;