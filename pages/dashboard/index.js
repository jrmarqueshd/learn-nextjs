import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "../../styles/Dashboard.module.css";

import Head from "../../components/Head";
import Link from "next/link";

function Dashboard() {
	const [user, setUser] = useState({ login: "", password: "" });

	const router = useRouter();
	const { query } = router;

	useEffect(() => {
		setUser((prevState) => ({
			...prevState,
			login: query?.login,
			password: query?.password,
		}));
	}, [router]);

	return (
		<div className={styles.container}>
			<Head>
				<title>Dashboard</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.box}>
				<h1 className={styles.title}>Dashboard</h1>

				<div className={styles.info}>
					<b>Usuário:</b> {user?.login}
				</div>

				<div className={styles.info}>
					<b>Senha:</b> {user?.password}
				</div>

				<Link href="/">
					<a className={styles.link}>Deslogar</a>
				</Link>
			</div>
		</div>
	);
}

export default Dashboard;
