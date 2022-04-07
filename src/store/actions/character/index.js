import { GET_DADOS, SET_FILTER, UPDATE_CHAR, GET_DADOS_FILTER } from "../../actionType";
import { connect } from "../../../service/api";

export async function getData(pageCount) {
    const result = connect(`&limit=${30}&offset=${pageCount}`)
    return {
        type: GET_DADOS,
        payload: result
    }
}

export async function getDataFiltered(filter) {
    const setFilter = filter ? `&nameStartsWith=${filter}` : ''
    const result = connect(setFilter)
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