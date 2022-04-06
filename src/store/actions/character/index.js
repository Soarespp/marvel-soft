import { GET_DADOS, SET_FILTER, UPDATE_CHAR, GET_DADOS_FILTER } from "../../actionType";
const API_URL = 'https://gateway.marvel.com:443/v1/public/characters';
const API_KEY = 'af6fe4504130de33d24b21dd68baa994';

export async function getData(pageCount) {
    const result = await fetch(`${API_URL}?apikey=${API_KEY}&limit=${30}&offset=${pageCount}`)
        .then(response => {
            if (!response.ok) throw Error()
            return response
        })
        .then(response => response.json())
        .then(result => {
            return result.data.results
        })
        .catch(err => {
            // trata se alguma das promises falhar
            console.error('Failed retrieving information', err);
        });
    return {
        type: GET_DADOS,
        payload: result
    }
}

export async function getDataFiltered(filter) {
    const setFilter = filter ? `&nameStartsWith=${filter}` : ''

    const result = await fetch(`${API_URL}?apikey=${API_KEY}${setFilter}`)
        .then(response => {
            if (!response.ok) throw Error()
            return response
        })
        .then(response => response.json())
        .then(result => {
            return result.data.results
        })
        .catch(err => {
            // trata se alguma das promises falhar
            console.error('Failed retrieving information', err);
        });

    return {
        type: GET_DADOS_FILTER,
        payload: result
    }
}

export function setFilter(newFilter) {
    return {
        type: SET_FILTER,
        payload: newFilter
    }
}

export function changeCharacter(newCharacter) {
    return {
        type: UPDATE_CHAR,
        payload: newCharacter
    }
}