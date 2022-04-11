//react
import React, { useEffect, useState } from 'react';
//redux
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionsCharacters from '../../store/actions/character/index';
//Stylles
import { ImgDefault } from '../../Components/imgComponent/style';
import { HomeStyle, HomeContainer, CardList, Loading, Button } from './Home.style';
//Imports
import { Link } from "react-router-dom";
import Header from '../../Components/Header/index';
import { SyncOutlined } from '@ant-design/icons'
import { Space } from 'antd';


const Home = ({ characters, pageCount, getData, loading }) => {
    const [localCharacters, setLocalCharacters] = useState([]);


    const renderListCharacters = () => {
        return localCharacters.length &&
            localCharacters
                .sort((a, b) => { return a.name - b.name })
                .map((char) => (
                    <Link
                        to={`/character/${char.id}`}
                        key={char.id}
                    >
                        <CardList>
                            <p>{char.name}</p>
                            <ImgDefault width='90%' height='200px' src={`${char.thumbnail.path}.${char.thumbnail.extension}`} />
                        </CardList>
                    </Link>
                ))
    }

    useEffect(() => {
        setLocalCharacters(characters)
    }, [characters])
    return (
        <div>
            <Header seacher={true} />
            {loading ?
                <Loading>
                    <Space >
                        <SyncOutlined spin style={{ fontSize: '56px', marginTop: '50px' }} />
                    </Space>
                </Loading> :
                <HomeStyle>
                    <HomeContainer>
                        {renderListCharacters()}
                    </HomeContainer>
                    <Button>
                        <button onClick={() => { getData(pageCount) }}>Load more</button>
                    </Button>
                </HomeStyle>
            }
        </div >
    );
}

const mapStateToProps = (state) => {
    return {
        characters: state.dados.characters,
        pageCount: state.dados.pageCount,
        loading: state.dados.loading,
    };
};

const mapDispatchToProp = (dispatch) => bindActionCreators(actionsCharacters, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Home);