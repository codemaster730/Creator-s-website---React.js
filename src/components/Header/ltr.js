import React from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa"
import { connect } from 'react-redux'
import { changeLanguage } from '../../action'

const logo = "assets/img/jomhory.png";
const path = "assets/img/path.png";
const britain = "assets/img/gb.png";
const arabic = "assets/img/ab.png";

class LTR extends React.Component {
    constructor() {
        super();

        this.state = {
            dropdownVisible: false
        }
    }

    handleDropDown() {
        const visible = this.state.dropdownVisible;
        this.setState({
            dropdownVisible: !visible
        })
    }

    onClickDropDownItem(param) {
        this.props.changeLanguage(param)
    }

    render() {
        const { dropdownVisible } = this.state;
        const { language } = this.props;

        return (
            <div className="header">
                <div className="logo">
                    <span className="helper"></span>
                    <img alt="logo" src={logo} />
                </div>
                <div className="navbar">
                    
                    <div className="nav-search">
                        <FaSearch />
                    </div>
                    <div className="nav-icons">
                        <div className="nav-lang" onClick={() => this.handleDropDown()}>
                            <div className="angle-down"><FaAngleDown /></div>
                            <div className="icon-multilang">{language}</div>
                            <div className="lang-flag"><img alt="flag" src={language == "Arabic" ? arabic : britain} /></div>
                            <div className={dropdownVisible ? "dropdown" : "dropdown-invisible"}>
                                <div className="dropdown-item" onClick={() => this.onClickDropDownItem("Arabic")}><span style={{"width":"20px"}}></span><span className="icon-multilang">Arabic</span><span className="lang-flag"><img alt="flag" src={arabic} /></span></div>
                                <div className="dropdown-item" onClick={() => this.onClickDropDownItem("English")}><span style={{"width":"20px"}}></span><span className="icon-multilang">English</span><span className="lang-flag"><img alt="flag" src={britain} /></span></div>
                            </div>
                        </div>
                        <div className="signup">Sign Up</div>
                        <div className="signin">Sign In</div>
                    </div>
                    <div className="path">
                        <img alt="path" src={path} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    language: state.multilang.language
})

const mapDispatchToProps = dispatch => ({
    changeLanguage: param => {
        dispatch(changeLanguage(param));
    }
})

export default connect( mapStateToProps, mapDispatchToProps)(LTR);