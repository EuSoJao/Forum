import React from "react";
import "./style.css";
import CustomInput from "@/components/common/input";
import { Icon } from '@iconify/react';

export default function Login() {
	return (
		<>
			<title>ChatWithIT</title>
			<form className="login">
				<Icon icon="hugeicons:user" width="80" height="80"/>
				<h1 id="login__title">Sign-in</h1>
				<label htmlFor="email">Email</label>
				<CustomInput
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
				<input type="checkbox"/>
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