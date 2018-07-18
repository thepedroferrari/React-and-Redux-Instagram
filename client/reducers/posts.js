// a reducer takes in two things:
// 1. The action (what happens)

// 2. a copy of the current state.

function posts(state = [], action) {
	switch (action.type) {
		case 'INCREMENT_LIKES':
			const i = action.index;
			return [
				...state.slice(0, i), // before the one were updating
				{ ...state[i], likes: state[i].likes + 1 }, // the one were updating
				...state.slice(i + 1) // after the one were updating
			];
		default:
			return state;
	}
}

export default posts;
