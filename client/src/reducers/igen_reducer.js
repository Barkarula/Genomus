export default function(state={},action){
    switch(action.type){
        case 'GET_IGEN':
            return {...state,igen:action.payload}
        case 'UPDATE_IGEN':
            return {
                ...state,
                updateIgen:action.payload.success,
                igen:action.payload.doc
            }
        default:
            return state;
    }
}