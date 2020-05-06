import React from 'react'

 const GameSection = () => {
        return (
            <section className="featured-game">
            <div className="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="feature-box">
                                <div className="feature-box-inner">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-feature">
                                                <div className="icon one">
                                                    <img src="images/st1.png" alt=""/>
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">
                                                        Lotoreya
                                                    </h4>
                                                    <a href="#" className="link">read more <i className="fas fa-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-feature">
                                                <div className="icon two">
                                                    <img src="images/icon1.png" alt=""/>
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">
                                                        Games
                                                    </h4>
                                                    <a href="#" className="link">read more <i className="fas fa-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-feature">
                                                <div className="icon three">
                                                    <img src="images/st1.png" alt=""/>
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">
                                                            Shoppings
                                                    </h4>
                                                    <a href="#" className="link">read more <i className="fas fa-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
}

export default GameSection
