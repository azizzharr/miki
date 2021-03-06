class Service {
    BASE_URL = 'https://swapi.dev/api'

    getProducts = () => {
        return fetch(`${this.BASE_URL}/people/`).then((res) => res.json())
    }
}
export default Service;