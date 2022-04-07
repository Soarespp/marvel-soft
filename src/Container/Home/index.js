import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionsCharacters from '../../store/actions/character/index';
import { Link } from "react-router-dom";
import './index.css';
import Header from '../../Components/Header/index';
import { ImgDefault } from '../../Components/imgComponent/style';
import { CardList } from './style';


const Home = (props) => {
    const { characters, pageCount, getData } = props;
    const [localCharacters, setLocalCharacters] = useState([]);

    useEffect(() => {
        setLocalCharacters(characters)
    }, [characters])
    return (
        <div>
            <Header seacher={true} />
            <div className='Home'>
                <div className='Container-Data'>
                    {localCharacters.length &&
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
                            ))}
                </div>
                <div style={{ width: '80px', margin: 'auto' }}>
                    <button onClick={() => { getData(pageCount) }}>Load more</button>
                </div>
            </div>
        </div >
    );
}

function mapStateToProps(state) {
    return {
        characters: state.dados.characters,
        pageCount: state.dados.pageCount,
    };
};

const mapDispatchToProp = (dispatch) => bindActionCreators(actionsCharacters, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Home);