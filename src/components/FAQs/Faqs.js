import React from "react";
import "./Faqs.css";
import left from "../../images/left.png";
import right from "../../images/right.png";
function Faqs() {
	return (
		<div className='faqs__main' id='contact'>
			<div className='faqs__heading'>
				<img src={left} alt='' />
				<h1>Frequently Asked Questions</h1>
				<img src={right} alt='' />
			</div>
			<div class='faqs'>
				<details class='faq'>
					<summary class='ques'>Who can participate in the hackathon?</summary>
					<p class='ans'>
						Anyone who wants to develop their skills or want to gain experience
						and are passionate can participate in the hackathon.
					</p>
				</details>
				<details class='faq'>
					<summary class='ques'>
						What types of projects can hackathon teams work on?
					</summary>
					<p class='ans'>
						Hackathons teams can work on any type of projects ranging from web
						apps, mobile apps to algorithms. Use the sponsor technology in the
						best of ways. Top performers will get cash rewards and goodies(wil
						be announced soon).
					</p>
				</details>
				<details class='faq'>
					<summary class='ques'>
						What can be the team size? How do I form a hackathon team?
					</summary>
					<p class='ans'>
						A team can consist of 1-4 members. You can form a team before the
						beginning of the hackathon. Your team can include your peers and
						friends.
					</p>
				</details>
				<details class='faq'>
					<summary class='ques'>
						Are any prerequisites required to join this hackathon?
					</summary>
					<p class='ans'>
						A good grasp on programming is appreciated, if you have basic
						knowledge of programming then also you are good to go. With that,
						come up with open brains and brilliant ideas.
					</p>
				</details>
				<details class='faq'>
					<summary class='ques'>
						Will there be any support from mentors throughout the hackathon?
					</summary>
					<p class='ans'>
						Yes, you will have guidance from mentors throughout the session.
					</p>
				</details>
				<details class='faq'>
					<summary class='ques'>Can I form a cross university team?</summary>
					<p class='ans'>Yes, you can.</p>
				</details>
				<details class='faq'>
					<summary class='ques'>Are the teams gender sensitive?</summary>
					<p class='ans'>No, teams are not gender sensitive.</p>
				</details>
				<details class='faq'>
					<summary class='ques'>Can two teams have the same idea?</summary>
					<p class='ans'>
						Yes, two teams can have the same idea. How you present your work,
						what you have analysed etc depends while making a project, and will
						also be considered.
					</p>
				</details>
			</div>
		</div>
	);
}

export default Faqs;
