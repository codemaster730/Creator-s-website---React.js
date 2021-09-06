import React from 'react';
import './rtl.css'
import { Row, Col } from 'react-bootstrap'
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { connect } from 'react-redux'

const logo = "assets/img/jomhory.png";
const star = "assets/img/star.png";
const scroll = "assets/img/scroll.png";

class Footer extends React.Component {
    constructor() {
        super();
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        const {language} = this.props;
        
        return (
            <div className="footer">
                <div className="footer-navbar">
                    <Row>
                        <Col lg={3} md={4} sm={12}>
                            <div className={language === 'Arabic' ? "footer-nav-title text-right" : "footer-nav-title text-left"} >Contact</div>
                            <div className={language === 'Arabic' ?"footer-nav-link text-right" : "footer-nav-link text-left"}>Help center & FAQs</div>
                            <div  className={language === 'Arabic' ?"footer-nav-link text-right" : "footer-nav-link text-left"}>Developer Documentation</div>
                            <div  className={language === 'Arabic' ?"footer-nav-link text-right" : "footer-nav-link text-left"}>Creator Blog</div>
                            <div  className={language === 'Arabic' ?"footer-nav-link text-right" : "footer-nav-link text-left"}>Creator Blog</div>
                            <div  className={language === 'Arabic' ?"footer-nav-link text-right" : "footer-nav-link text-left"}>Creator Guides</div>
                            <div  className={language === 'Arabic' ?"footer-nav-link text-right" : "footer-nav-link text-left"}>Community Guidelines</div>
                        </Col>
                        <Col lg={6} md={4} sm={12} className={language === 'Arabic' ? "footer-logo-container-right" : "footer-logo-container-left"}>
                            <div className="footer-logo">
                                <img alt="footer-logo" src={logo} />
                            </div>
                            <div>
                                <button className="btn enroll-btn"><span><img alt="start" src={star} /></span> Enroll as talent</button>
                            </div>
                            <div>
                                <div className={language === 'Arabic' ? 'social-btn-group-right' : 'social-btn-group-left'}>
                                    <div className="social-btn">
                                        <FaTwitter />
                                    </div>
                                    <div className="social-btn">
                                        <FaFacebookF />
                                    </div>
                                    <div className="social-btn">
                                        <FaInstagram />
                                    </div>
                                </div>  
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={12}>
                            <div className={language === 'Arabic' ? "footer-nav-title text-right" : "footer-nav-title text-left"}>Company</div>
                            <div  className={language === 'Arabic' ?"footer-nav-link text-right" : "footer-nav-link text-left"}>About</div>
                            <div  className={language === 'Arabic' ?"footer-nav-link text-right" : "footer-nav-link text-left"}>Careers</div>
                            <div  className={language === 'Arabic' ?"footer-nav-link text-right" : "footer-nav-link text-left"}>Create On Jomhory</div>
                            <div  className={language === 'Arabic' ?"footer-nav-link text-right" : "footer-nav-link text-left"}>Brand</div>
                            <div  className={language === 'Arabic' ?"footer-nav-link text-right" : "footer-nav-link text-left"}>Press</div>
                            <div  className={language === 'Arabic' ?"footer-nav-link text-right" : "footer-nav-link text-left"}>Partners</div>
                            <div  className={language === 'Arabic' ?"footer-nav-link text-right" : "footer-nav-link text-left"}>Sitemap</div>
                        </Col>
                    </Row>
                </div>
                <Row className="author-bar">
                    <div className="author">Copyrights 2020 Jomhory All right Reserved</div>
                </Row>
                <div className={language === 'Arabic' ? "scrollTop-left" : "scrollTop-right"} onClick={() => this.scrollToTop()}>
                    <img src={scroll} />
                </div>
                <div className="symbol5 symbol">
                    <img alt="symbol" src="assets/img/symbol.png" />
                </div>
                <div className="symbol6 symbol">
                    <img alt="symbol" src="assets/img/symbol.png" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    language: state.multilang.language
})

export default connect( mapStateToProps)(Footer);