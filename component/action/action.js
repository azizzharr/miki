import Service from "./../service/service";

const service = new Service()

const loadProduct = (data) => {
    return {
        type: 'LOAD',
        payload: data
    }
}

const getProduct = (dispatch) => () => {
    service.getProducts().then((data) => {
        console.log(data)
        dispatch(loadProduct(data.results))
    })
}
export {getProduct }