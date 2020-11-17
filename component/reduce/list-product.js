const inState = {
    data: [],
    loading: true
}
const listProduct = (state = inState, action) => {

    switch (action.type) {
        case "LOAD" : {
            return {data: action.payload, loading: false}
        }
        case "ADD" : {
            return {data: [...state.data, action.payload]}
        }
        default: {
            return state
        }
    }
}
export default listProduct;