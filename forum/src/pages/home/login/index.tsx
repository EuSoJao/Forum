import "./style.css";
import { UserIcon } from "hugeicons-react";

export default function login() {
	return (
		<>
			<title>ChatWithIT</title>
			<form className="login">
				<UserIcon size={80} className="user-icon" />
				<h1 id="login__title">Sign-in</h1>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					className="input input__email"
					id="emailInput"
					pattern=".+@provider\.com"
					placeholder="email@provider.com"
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					className="input input__password"
					placeholder="An amazing password"
				/>
				<section className="buttons">
					<button className="button sign__button" type="button">
						Sign-in
					</button>
					<button className="button sign__button" type="button">
						Sign-up
					</button>
				</section>
			</form>
		</>
	);
}
