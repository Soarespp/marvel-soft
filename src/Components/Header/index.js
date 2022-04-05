import React from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as characterActions from '../../store/actions/character/index';

const Header = (props) => {
    const { filter, getDataFiltered } = props;

    return (
        <div >
            <input placeholder="Pesquisa produtos"
                value={filter}
                onChange={e => {
                    getDataFiltered(e.target.value)
                }}
            />
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