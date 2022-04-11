//react
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionsCharacters from '../../store/actions/character/index';


//stylles
import { ImgDefault } from '../../Components/imgComponent/style';
import { DetailContainer, ContainerImg } from './DetailCharacter.style';

//Imports
import Header from '../../Components/Header/index';
import { Form, Input, Button, Row, List } from 'antd';

const initChar = {
    id: 0,
    name: '',
    series: { items: [] }
}

const DetailCharacter = ({ characters, changeCharacter, history }) => {
    const [charLocal, setCharLocal] = useState(initChar);
    var params = useParams();

    useEffect(() => {
        if (parseInt(params.idCharacter) !== -1) {
            const characterEdit = characters.find(comp => comp.id === parseInt(params.idCharacter)) || initChar;
            setCharLocal(characterEdit);
        }
    }, [characters, params.idCharacter])

    const handleSubmit = (data) => {
        changeCharacter(data)
        alert('salvo com sucesso')
        history.push('/')
    }

    return (
        <div>
            <Header seacher={false} />
            <DetailContainer>
                <ContainerImg>
                    {(charLocal.thumbnail) ?
                        <ImgDefault width='100%' height='100%' src={`${charLocal.thumbnail.path}.${charLocal.thumbnail.extension}`} />
                        : null}
                </ContainerImg>
                <Form >
                    <Row>
                        <Form.Item label="Name">
                            <Input
                                name="name"
                                placeholder="Name"
                                testID="name"
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
            </DetailContainer>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        characters: state.dados.characters,
    };
}

const mapDispatchToProp = (dispatch) => bindActionCreators(actionsCharacters, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(DetailCharacter);

