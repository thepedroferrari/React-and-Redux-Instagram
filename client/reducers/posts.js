// a reducer takes in two things:
// 1. The action (what happens)

// 2. a copy of the current state.

function posts(state = [], action) {
	console.log(state, action);
	return state;
}

export default posts;
