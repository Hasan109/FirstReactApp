import React  from 'react'

const Header = () => {
    
        return (
            <header className="header">
        <div className="mainmenu-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">                 
						<nav className="navbar navbar-expand-lg navbar-light">
								<img  src="assets/images/elprize-logo.png" alt=""/>
							<div className="collapse navbar-collapse fixed-height" id="main_menu">
								<ul className="navbar-nav ml-auto">
									<li className="nav-item dropdown">
										<a className="nav-link active" href="index.html"  role="button"  aria-haspopup="true"
											aria-expanded="false">
											Home
										<div className="mr-hover-effect"></div>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="play.html">Games
												<div className="mr-hover-effect"></div></a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="lottery.html">Lottery
												<div className="mr-hover-effect"></div></a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="tournaments.html">Shoppings
												<div className="mr-hover-effect"></div></a>
									</li>
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true"
											aria-expanded="false">
											Documentation
											<div className="mr-hover-effect"></div>
										</a>
									</li>
									<li className="nav-item">
											<a className="nav-link" href="contact.html">Contact
													<div className="mr-hover-effect"></div></a>
										</li>
								</ul>
								<a href="#" className="mybtn1"  data-toggle="modal" data-target="#signin"> Join us</a>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
        </header>
             
        )
    }


export default Header;
