import EmailForm from "../../Components/EmailForm";

function Contact() {
	return (
		<>
			<h2>Contact</h2>

			<h3>Information</h3>
			<label>E-mail</label>
			<address>yeran1225@gmail.com</address>
			<label>Address</label>
			<address>서울특별시 구로구, 대한민국</address>
			<label>Phone</label>
			<p>
				<a href="tel:+821089020330">+82 10-8902-0330</a>
			</p>

			<h3>Send Email to Vanessa</h3>
			<EmailForm />
		</>
	);
}

export default Contact;
