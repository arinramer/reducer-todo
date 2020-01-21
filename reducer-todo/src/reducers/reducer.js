export const initialState = {
	items: [
	{
        item: 'Todo item',
        completed: false,
        id: 123456798
	}]
}


export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            const obj = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return {
                items: [...state.items, obj]
            }
        case "TOGGLE_COMPLETED": {
            const toggletodos = [...state.items]
            toggletodos.map(item => {
                if(item.id === action.payload) {
                    item.completed = !item.completed
                }
            })
            return {
                ...state,
                items: toggletodos
            }
        }
        case "CLEAR_COMPLETED": {
            const filtered = state.items.filter(item => {
                if(item.completed === true) {
                    return null;
                } else {
                    return item;
                }
            })
            return {
                ...state,
                items: filtered
            }
        }
        default:
            return state;
    }
}