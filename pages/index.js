import { useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";

export default function Home() {
	const loginRef = useRef(null);
	const passwordRef = useRef(null);

	const router = useRouter();

	function handleLogin(e) {
		e.preventDefault();

		const login = loginRef.current.value;
		const password = passwordRef.current.value;

		if (!login || !password) return alert("Preencha todos os campos");

		router.push({
			pathname: "/dashboard",
			query: {
				login,
				password,
			},
		});
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<form onSubmit={handleLogin} className={styles.boxLogin}>
				<h1 className={styles.title}>Login</h1>

				<label className={styles.label} htmlFor="login">
					Usuário
				</label>
				<input
					ref={loginRef}
					id="login"
					placeholder="Usuário"
					className={styles.input}
					type="text"
				/>

				<label className={styles.label} htmlFor="password">
					Senha
				</label>
				<input
					ref={passwordRef}
					id="password"
					className={styles.input}
					type="password"
					placeholder="Senha"
				/>

				<button className={styles.button}>Logar</button>
			</form>
		</div>
	);
}
