import { ERROR_API } from "../../store/actionType";
const API_URL = 'https://gateway.marvel.com:443/v1/public/characters';
const API_KEY = 'af6fe4504130de33d24b21dd68baa994';

export const getError = () => ({ type: ERROR_API })

export async function connect(URL) {
    return await fetch(`${API_URL}?apikey=${API_KEY}${URL}`)
        .then(response => {
            if (!response.ok) throw Error()
            return response
        })
        .then(response => response.json())
        .then(result => {
            return result.data.results
        })
        .catch(() => getError())

}
