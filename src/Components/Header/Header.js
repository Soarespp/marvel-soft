import React from 'react';

//redux
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as characterActions from '../../store/actions/character/index';

//Style's
import imgLogo from '../../img/Marvel_Logo.png';
import { HeaderStyle, Logo } from './header.style';
import { ImgDefault } from '../imgComponent/style';

const Header = ({ filter, getDataFiltered, seacher }) => {
    return (
        <HeaderStyle >
            <Logo>
                <ImgDefault src={imgLogo} alt={imgLogo} height='30px' width='100%' maxWidth='150px' />
                {seacher ? <input placeholder="Search charaters"
                    value={filter}
                    style={{ width: '100%' }}
                    name='shearch'
                    type="text"
                    data-testid="search-element"
                    onChange={e => {
                        getDataFiltered(e.target.value)
                    }}
                /> : null}
            </Logo>
        </HeaderStyle>
    );
}

const mapDispatchToProp = (dispatch) => bindActionCreators(characterActions, dispatch)

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Header);