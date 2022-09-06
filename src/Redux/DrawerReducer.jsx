const initialDrawerState = {
	
	title: "Notes",
	
};

export const drawerReducer = (state = initialDrawerState, action) => {
	console.log(action)
	switch (action.type) {
		case 'SET_Title_as_Reminder':
			return {
				...state,
				title : "Reminder"
			};
            case 'SET_Title_as_Archive':
			return {
				...state,
				title : "Archive"
			};
            case 'SET_Title_as_Trash':
			return {
				...state,
				title : "Trash"
			};
            case 'SET_Title_as_Notes':
                return {
                    ...state,
                    title : "Notes"
                };

		default:
			return state;
	}
};