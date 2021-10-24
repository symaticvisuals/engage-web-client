import React from "react";

import Footer from "./../sections/footer/footer";
import Header from "./../sections/header/header";
import Mentors from "./Mentors";
import Intro from "./Intro";
import Tracks from "./Tracks";

const Home = () => {
	return (
		<div>
			<Header />
			<Intro />
			<Tracks />
			<Footer />
		</div>
	);
};

export default Home;
