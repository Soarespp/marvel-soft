import React, { useRef, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionsCharacters from '../../store/actions/character/index';
import { Form } from '@unform/web';
// import { Scope } from '@unform/core';
import { Link, useParams } from "react-router-dom";
import Input from './Components/Input';

const DetailCharacter = (props) => {
    const { characters, changeCharacter } = props;
    const formRef = useRef(null);
    var params = useParams();

    useEffect(() => {
        console.log('parseInt(params.idCharacter', parseInt(params.idCharacter))
        if (parseInt(params.idCharacter) !== -1) {
            const characterEdit = characters.find(comp => comp.id === parseInt(params.idCharacter)) || {};
            console.log('characterEdit', characterEdit)
            formRef.current.setData(characterEdit)
        }
    }, [characters, params.idCharacter])

    async function handleSubmit(data, { reset }) {
        //Ajusta o form completo para passar os dados completos
        const CharLocal = characters.find(comp => comp.id === parseInt(data.id)) || {};
        CharLocal.name = data.name
        changeCharacter(CharLocal)
        alert('salvo com sucesso')
    }

    return (
        <div className='CadCompromissoForm'>
            <div className='body'>
                <Form onSubmit={handleSubmit} ref={formRef}>
                    id:<Input name="id" />
                    comics:<Input name="comics.collectionURI" />
                    Descrição:<Input name="description" />
                    Eventos:<Input name="events.collectionURI" />
                    Series:<Input name="series.collectionURI" />
                    Stories:<Input name="stories.available" />
                    IMG:<Input name="thumbnail.path" />
                    <button type='submit'> Salvar</button>
                    <Link to={`/`}>
                        <button type='cancel'> Voltar</button>
                    </Link>
                </Form>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        characters: state.dados.characters,
    };
}

const mapDispatchToProp = (dispatch) => bindActionCreators(actionsCharacters, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(DetailCharacter);

