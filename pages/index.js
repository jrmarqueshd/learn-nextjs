import { useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";

export default function Home() {
	const userRef = useRef(null);

	const router = useRouter();

	function handleLogin(e) {
		e.preventDefault();

		const user = userRef.current.value;

		if (!user) return alert("Preencha todos os campos");

		router.push({
			pathname: "/dashboard",
			query: {
				user,
			},
		});
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Buscar usuário no GitHub</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<form onSubmit={handleLogin} className={styles.boxLogin}>
				<h1 className={styles.title}>Buscar usuário do Github</h1>

				<label className={styles.label} htmlFor="user">
					Username
				</label>
				<input
					ref={userRef}
					id="user"
					placeholder="username"
					className={styles.input}
					type="text"
				/>

				<button className={styles.button}>Buscar</button>
			</form>
		</div>
	);
}
