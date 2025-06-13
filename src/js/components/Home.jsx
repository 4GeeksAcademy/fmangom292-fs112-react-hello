import React from "react";
import Card from "./Card.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const description = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.";

	return (
		<>
			<Navbar />
			<div className="container">
				<div className="row mb-3">
					<Jumbotron />
				</div>
				<div className="row g-1">
					<div className="col-3">
						<Card title="Título" description={description} />
					</div>
					<div className="col-3">
						<Card title="Título" description={description} />
					</div>
					<div className="col-3">
						<Card title="Título" description={description} />
					</div>
					<div className="col-3">
						<Card title="Título" description={description} />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;