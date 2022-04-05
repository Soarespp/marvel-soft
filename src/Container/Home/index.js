import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionsCharacters from '../../store/actions/character/index';
import { Link } from "react-router-dom";

import Header from '../../Components/Header/index';


const Home = (props) => {
    const { characters } = props;
    return (
        <div>
            <Header />
            {characters.length &&
                characters
                    // .filter(char1 => char1.name.match(regex))
                    .map((char) => (
                        <div>
                            {char.name} -
                            <Link
                                to={`/character/${char.id}`}
                                key={char.id}
                            >
                                <button>Editar Form</button>
                            </Link>
                        </div>
                    ))}
        </div >
    );
}

function mapStateToProps(state) {
    return {
        characters: state.dados.characters,
    };
};

const mapDispatchToProp = (dispatch) => bindActionCreators(actionsCharacters, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Home);