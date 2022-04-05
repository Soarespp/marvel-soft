import React from 'react';
import './index.css';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as characterActions from '../../store/actions/character/index';
import imgLogo from '../../img/Marvel_Logo.png';

const Header = (props) => {
    const { filter, getDataFiltered, seacher } = props;

    return (
        <div className='Header'>
            <img src={imgLogo} style={{ height: '80px', width: '200px' }} />
            {seacher ? <input placeholder="Pesquisa produtos"
                value={filter}
                onChange={e => {
                    getDataFiltered(e.target.value)
                }}
            /> : null}

        </div>
    );
}

const mapDispatchToProp = (dispatch) => bindActionCreators(characterActions, dispatch)

function mapStateToProps(state) {
    return {
        filter: state.filter
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Header);