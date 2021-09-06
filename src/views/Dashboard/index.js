import React from 'react';
import './rtl.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { FaStar } from "react-icons/fa"

const carousel1 = "assets/img/carousel1.png";
const carousel2 = "assets/img/carousel2.png";
const video = "assets/img/video.png";
const creators = "assets/img/creators.png";
const camera = "assets/img/camera.png";
const comic = "assets/img/comic.png";
const podcast = "assets/img/podcast.png";
const cinema = "assets/img/cinema.png";
const crafts = "assets/img/crafts.png";
const music = "assets/img/music.png";
const drawing = "assets/img/drawing.png";
const console = "assets/img/console.png";
const atom = "assets/img/atom.png";
const party = "assets/img/party.png";
const outline = "assets/img/outline.png";
const animation = "assets/img/animation.png";
const photo = "assets/img/photo.png";
const book = "assets/img/book.png";
const surface = "assets/img/surface.png";

const creator1 = "assets/img/creator1.png";
const creator2 = "assets/img/creator2.png";
const creator3 = "assets/img/creator3.png";
const creator4 = "assets/img/creator4.png";
const creator5 = "assets/img/creator5.png";
const creator6 = "assets/img/creator6.png";
const creator7 = "assets/img/creator7.png";
const creator8 = "assets/img/creator8.png";
const creator9 = "assets/img/creator9.png";
const creator10 = "assets/img/creator10.png";

const dot_big = "assets/img/dot_big.png";
const dot_small = "assets/img/dot_small.png";


class Dashboard extends React.Component {
    constructor() {
        super();

        this.state = {
            creator1_tip: false,
            creator2_tip: false,
            creator3_tip: false,
            creator4_tip: false,
            creator5_tip: false,
            creator6_tip: false,
            creator7_tip: false,
            creator8_tip: false,
            creator9_tip: false,
            creator10_tip: false,
            creator11_tip: false,
        }
    }

    creatorHandleClick(param) {
        const creator1 = this.state.creator1_tip
        const creator2 = this.state.creator2_tip
        const creator3 = this.state.creator3_tip
        const creator4 = this.state.creator4_tip
        const creator5 = this.state.creator5_tip
        const creator6 = this.state.creator6_tip
        const creator7 = this.state.creator7_tip
        const creator8 = this.state.creator8_tip
        const creator9 = this.state.creator9_tip
        const creator10 = this.state.creator10_tip
        const creator11 = this.state.creator11_tip

        if(param === 1) {
            this.setState({creator1_tip : !creator1})
        }
        if(param === 2) {
            this.setState({creator2_tip : !creator2})
        }
        if(param === 3) {
            this.setState({creator3_tip : !creator3})
        }
        if(param === 4) {
            this.setState({creator4_tip : !creator4})
        }
        if(param === 5) {
            this.setState({creator5_tip : !creator5})
        }
        if(param === 6) {
            this.setState({creator6_tip : !creator6})
        }
        if(param === 7) {
            this.setState({creator7_tip : !creator7})
        }
        if(param === 8) {
            this.setState({creator8_tip : !creator8})
        }
        if(param === 9) {
            this.setState({creator9_tip : !creator9})
        }
        if(param === 10) {
            this.setState({creator10_tip : !creator10})
        }
        if(param === 11) {
            this.setState({creator11_tip : !creator11})
        }
    }
    
    render() {
        const { language } = this.props;
        const { creator1_tip, creator2_tip, creator3_tip, creator4_tip, creator5_tip, creator6_tip, creator7_tip, creator8_tip, creator9_tip, creator10_tip, creator11_tip } = this.state;
        
        return (
            <div className="dashboard-container">
                <Carousel autoPlay={true} infiniteLoop={true} transitionTime={1000} showThumbs={false}>
                    <div>
                        <img alt="carousel1" src={carousel1} />
                        <div className="caption">
                            <h1>Are you a creator looking to monetize your stuffs?</h1>
                            <p>Promote your stuffs, Build a resonating fan base. Get paid</p>
                            <button className="btn">Let's promote</button>
                        </div>
                    </div>
                    <div>
                        <img alt="carousel2" src={carousel2} />
                        <div className="caption">
                            <h1>Are you a Fan?</h1>
                            <p>Browse wide range of creator and get their exclusive work.</p>
                            <button className="btn">Explore Creators</button>   
                        </div>
                    </div>
                </Carousel>
                <Row className="video">
                    <Col className="video-left" lg={6} md={12}>
                        <img className="video-image" alt="video" src={video} />
                    </Col>
                    <Col className="video-right" lg={6} md={12}>
                        <div className={language === 'Arabic' ? "video-title text-right" : "video-title text-left"}>Building a Resonating fan base and monetize your stuffs.</div>
                        <div className={language === 'Arabic' ? "video-description text-right" : "video-description text-left"}>Lorem ipsum knows the importance of relying on qualified professionals for every health service. When we need a nurse for our needs and those of our loved ones, we want to rely on trusted staff.</div>
                        <div className={language === 'Arabic' ? "video-btn-group text-right" : "video-btn-group-left text-left"}>
                            <button className="btn">Watch Video</button>
                            <button className="btn active">About Us</button>
                        </div>
                    </Col>
                </Row>
                <div style={{backgroundImage: `url(${"assets/img/creators_back.png"})`, position: 'relative'}}>
                    <Row className="follow">
                        <Col lg={6} md={12}>
                            <div className={language === 'Arabic' ? "video-title text-right" : "video-title text-left"}>Follow your favorite creator get exclusive content </div>
                            <div className={language === 'Arabic' ? "video-description text-right" : "video-description text-left"}>Lorem ipsum knows the importance of relying on qualified professionals for every health service. When we need a nurse for our needs and those of our loved ones, we want to rely on trusted staff.</div>
                            <div className={language === 'Arabic' ? "video-btn-group text-right" : "video-btn-group-left text-left"}>                                
                                <button className="btn active">Find Creators</button>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <img className="creators-image" alt="creators" src={creators} />
                        </Col>
                    </Row>
                    <div className="symbol1 symbol">
                        <img alt="symbol" src="assets/img/symbol.png" />
                    </div>
                    <div className="symbol2 symbol">
                        <img alt="symbol" src="assets/img/symbol.png" />
                    </div>
                    <div className="symbol3 symbol">
                        <img alt="symbol" src="assets/img/symbol.png" />
                    </div>
                </div>
                <div className="categories">
                    <div className="category-title">Are you creator of any of these categories</div>
                    <div className="category-sub-title">Lorem ipsu Promote your stuffs, Build a resonating fan base. Get paid</div>
                    <div className="category-items">
                        <div className="category-item">
                            <div className="category-item-image">
                                <span className="helper"></span>
                                <img alt="camera" src={camera} />
                            </div>
                            <div className="category-item-title">Video & Films</div>
                        </div>

                        <div className="category-item">
                            <div className="category-item-image">
                                <span className="helper"></span>
                                <img alt="category-item" src={comic} />
                            </div>
                            <div className="category-item-title">Comics</div>
                        </div>

                        <div className="category-item">
                            <div className="category-item-image"><span className="helper"></span><img alt="category-item" src={podcast} /></div>
                            <div className="category-item-title">Podcast</div>
                        </div>

                        <div className="category-item">
                            <div className="category-item-image"><span className="helper"></span><img alt="category-item" src={cinema} /></div>
                            <div className="category-item-title">Comedy</div>
                        </div>

                        <div className="category-item">
                            <div className="category-item-image"><span className="helper"></span><img alt="category-item" src={crafts} /></div>
                            <div className="category-item-title">Crafts & DIY</div>
                        </div>

                        <div className="category-item">
                            <div className="category-item-image"><span className="helper"></span><img alt="category-item" src={music} /></div>
                            <div className="category-item-title">Music</div>
                        </div>

                        <div className="category-item">
                            <div className="category-item-image"><span className="helper"></span><img alt="category-item" src={drawing} /></div>
                            <div className="category-item-title">Drawing & Painting</div>
                        </div>

                        <div className="category-item">
                            <div className="category-item-image"><span className="helper"></span><img alt="category-item" src={console} /></div>
                            <div className="category-item-title">Games</div>
                        </div>

                        <div className="category-item">
                            <div className="category-item-image"><span className="helper"></span><img alt="category-item" src={atom} /></div>
                            <div className="category-item-title">Science</div>
                        </div>

                        <div className="category-item">
                            <div className="category-item-image"><span className="helper"></span><img alt="category-item" src={party} /></div>
                            <div className="category-item-title">Dance & Theater</div>
                        </div>

                        <div className="category-item">
                            <div className="category-item-image"><span className="helper"></span><img alt="category-item" src={outline} /></div>
                            <div className="category-item-title">Writing</div>
                        </div>

                        <div className="category-item">
                            <div className="category-item-image"><span className="helper"></span><img alt="category-item" src={animation} /></div>
                            <div className="category-item-title">Animation</div>
                        </div>

                        <div className="category-item">
                            <div className="category-item-image"><span className="helper"></span><img alt="category-item" src={photo} /></div>
                            <div className="category-item-title">Photography</div>
                        </div>

                        <div className="category-item">
                            <div className="category-item-image"><span className="helper"></span><img alt="category-item" src={book} /></div>
                            <div className="category-item-title">Education</div>
                        </div>

                        <div className="category-item">
                            <div className="category-item-image"><span className="helper"></span><img alt="category-item" src={surface} /></div>
                            <div className="category-item-title">Software</div>
                        </div>
                    </div>
                    
                </div>
                <div style={{'backgroundColor': '#FAF9FF', 'position': 'relative'}}>
                    <div className="creators">
                        <div className="creators-title">Some of our over <span className="purple">50,000</span> creators</div>
                        <div className="creators-sub-title">Thousands of Jomhory who found creators by connecting their social profiles to Jomhory </div>
                        <button className="btn">Become of Jomhory</button>
                        <div className="dots">
                            <div className="dot">
                                <img alt="dot" src={dot_small} />
                            </div>
                            <div className="dot">
                                <img alt="dot" src={dot_big} />
                            </div>
                            <div className="dot">
                                <img alt="dot" src={dot_small} />
                            </div>
                        </div>
                    </div>
                    <div className="creator1 creator">
                        <img alt="creator1" src={creator1} onClick={() => this.creatorHandleClick(1)} />
                        {
                            creator1_tip ? <div className="creator1-tip">
                                <div className="tip-title">
                                    <div>Name here</div>
                                    <div><span><FaStar /></span> 5.0</div>
                                </div>
                                <div>
                                    Thousands of the jomhory who found creators by connecting their social profiles to Jamhory
                                </div>
                            </div> : null
                        }
                    </div>
                    <div className="creator2 creator">
                        <img alt="creator2" src={creator2} onClick={() => this.creatorHandleClick(2)} />
                        {
                            creator2_tip ? <div className="creator1-tip">
                                <div className="tip-title">
                                    <div>Name here</div>
                                    <div><span><FaStar /></span> 5.0</div>
                                </div>
                                <div>
                                    Thousands of the jomhory who found creators by connecting their social profiles to Jamhory
                                </div>
                            </div> : null
                        }
                    </div>
                    <div className="creator3 creator">
                        <img alt="creator3" src={creator8} onClick={() => this.creatorHandleClick(3)} />
                        {
                            creator3_tip ? <div className="creator1-tip">
                                <div className="tip-title">
                                    <div>Name here</div>
                                    <div><span><FaStar /></span> 5.0</div>
                                </div>
                                <div>
                                    Thousands of the jomhory who found creators by connecting their social profiles to Jamhory
                                </div>
                            </div> : null
                        }
                    </div>
                    <div className="creator4 creator">
                        <img alt="creator4" src={creator3} onClick={() => this.creatorHandleClick(4)} />
                        {
                            creator4_tip ? <div className="creator1-tip">
                                <div className="tip-title">
                                    <div>Name here</div>
                                    <div><span><FaStar /></span> 5.0</div>
                                </div>
                                <div>
                                    Thousands of the jomhory who found creators by connecting their social profiles to Jamhory
                                </div>
                            </div> : null
                        }
                    </div>
                    <div className="creator5 creator">
                        <img alt="creator5" src={creator4} onClick={() => this.creatorHandleClick(5)} />
                        {
                            creator5_tip ? <div className="creator1-tip">
                                <div className="tip-title">
                                    <div>Name here</div>
                                    <div><span><FaStar /></span> 5.0</div>
                                </div>
                                <div>
                                    Thousands of the jomhory who found creators by connecting their social profiles to Jamhory
                                </div>
                            </div> : null
                        }
                    </div>
                    <div className="creator6 creator">
                        <img alt="creator6" src={creator5} onClick={() => this.creatorHandleClick(6)} />
                        {
                            creator6_tip ? <div className="creator1-tip">
                                <div className="tip-title">
                                    <div>Name here</div>
                                    <div><span><FaStar /></span> 5.0</div>
                                </div>
                                <div>
                                    Thousands of the jomhory who found creators by connecting their social profiles to Jamhory
                                </div>
                            </div> : null
                        }
                    </div>
                    <div className="creator7 creator">
                        <img alt="creator7" src={creator6} onClick={() => this.creatorHandleClick(7)} />
                        {
                            creator7_tip ? <div className="creator1-tip">
                                <div className="tip-title">
                                    <div>Name here</div>
                                    <div><span><FaStar /></span> 5.0</div>
                                </div>
                                <div>
                                    Thousands of the jomhory who found creators by connecting their social profiles to Jamhory
                                </div>
                            </div> : null
                        }
                    </div>
                    <div className="creator8 creator">
                        <img alt="creator8" src={creator7} onClick={() => this.creatorHandleClick(8)} />
                        {
                            creator8_tip ? <div className="creator1-tip">
                                <div className="tip-title">
                                    <div>Name here</div>
                                    <div><span><FaStar /></span> 5.0</div>
                                </div>
                                <div>
                                    Thousands of the jomhory who found creators by connecting their social profiles to Jamhory
                                </div>
                            </div> : null
                        }
                    </div>
                    <div className="creator9 creator">
                        <img alt="creator9" src={creator8} onClick={() => this.creatorHandleClick(9)} />
                        {
                            creator9_tip ? <div className="creator1-tip">
                                <div className="tip-title">
                                    <div>Name here</div>
                                    <div><span><FaStar /></span> 5.0</div>
                                </div>
                                <div>
                                    Thousands of the jomhory who found creators by connecting their social profiles to Jamhory
                                </div>
                            </div> : null
                        }
                    </div>
                    <div className="creator10 creator">
                        <img alt="creator10" src={creator9} onClick={() => this.creatorHandleClick(10)} />
                        {
                            creator10_tip ? <div className="creator1-tip">
                                <div className="tip-title">
                                    <div>Name here</div>
                                    <div><span><FaStar /></span> 5.0</div>
                                </div>
                                <div>
                                    Thousands of the jomhory who found creators by connecting their social profiles to Jamhory
                                </div>
                            </div> : null
                        }
                    </div>
                    <div className="creator11 creator">
                        <img alt="creator11" src={creator10} onClick={() => this.creatorHandleClick(11)} />
                        {
                            creator11_tip ? <div className="creator11-tip">
                                <div className="tip-title">
                                    <div>Name here</div>
                                    <div><span><FaStar /></span> 5.0</div>
                                </div>
                                <div>
                                    Thousands of the jomhory who found creators by connecting their social profiles to Jamhory
                                </div>
                            </div> : null
                        }
                    </div>
                    <div className="symbol4 symbol">
                        <img alt="symbol" src="assets/img/symbol.png" />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    language: state.multilang.language
})

export default connect( mapStateToProps)(Dashboard);