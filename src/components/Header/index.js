import React from "react";
import RTL from './rtl'
import LTR from './ltr'
import { connect } from 'react-redux'

class Header extends React.Component {
    render() {
        const language = this.props.language;
        return (
            language === 'Arabic' ? <RTL /> : <LTR />
        );
    }
}

const mapStateToProps = state => ({
    language: state.multilang.language
})

export default connect( mapStateToProps)(Header);
