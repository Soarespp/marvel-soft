import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionsCharacters from '../../store/actions/character/index';
import { useParams } from "react-router-dom";
import Header from '../../Components/Header/index';
import './index.css';
import { ImgDefault } from '../../Components/imgComponent/style';

import { Form, Input, Button, Row, List } from 'antd';

const initChar = {
    id: 0,
    name: '',
    series: { items: [] }
}

const DetailCharacter = (props) => {
    const { characters, changeCharacter, history } = props;
    const [charLocal, setCharLocal] = useState(initChar);
    var params = useParams();

    useEffect(() => {
        if (parseInt(params.idCharacter) !== -1) {
            const characterEdit = characters.find(comp => comp.id === parseInt(params.idCharacter)) || initChar;
            setCharLocal(characterEdit);
        }
    }, [characters, params.idCharacter])

    function handleSubmit(data) {
        changeCharacter(data)
        alert('salvo com sucesso')
        history.push('/')
    }

    return (
        <div className='DetailCharacter'>
            <Header seacher={false} />
            <div className='Container-Data'>
                <div style={{ backgroundColor: 'red', width: '100%', height: '100%', minWidth: '200px', minHeight: '300px' }}>
                    {(charLocal.thumbnail) ?
                        <ImgDefault width='100%' height='100%' src={`${charLocal.thumbnail.path}.${charLocal.thumbnail.extension}`} />
                        : null}
                </div>
                <Form >
                    <Row>
                        <Form.Item label="Name">
                            <Input
                                name="name"
                                testID='editName'
                                placeholder="Name"
                                value={charLocal.name}
                                onChange={({ target: { name, value } }) => setCharLocal((local) => ({ ...local, [name]: value }))}
                                size="large"
                            />
                        </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item label="Descrição">
                            <Input
                                name="description"
                                placeholder="description"
                                value={charLocal.description}
                                onChange={({ target: { name, value } }) => setCharLocal((local) => ({ ...local, [name]: value }))}
                                size="large"
                            />
                        </Form.Item>
                    </Row>
                    <Row>
                        <List
                            size="small"
                            header={<div>Series</div>}
                            bordered
                            dataSource={charLocal.series.items}
                            renderItem={item => <List.Item>{item.name}</List.Item>}
                        />
                    </Row>
                    <Form.Item>
                        <Button
                            name="save"
                            type="primary"
                            onClick={() => handleSubmit(charLocal)}
                        >
                            Save
                        </Button>
                        <Button
                            name="cancel"
                            type="outline"
                            testID="button"
                            onClick={() => history.push('/')}
                        >
                            Cancel
                        </Button>
                    </Form.Item>
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

