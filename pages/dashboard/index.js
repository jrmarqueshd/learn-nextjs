import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import useSWR from "swr";

import styles from "../../styles/Dashboard.module.css";

import Head from "../../components/Head";
import Link from "next/link";

const fetcher = (url) => axios.get(url).then((res) => res.data);

function Dashboard() {
	const [user, setUser] = useState({});
	const router = useRouter();

	const { data, error } = useSWR(
		`https://api.github.com/users/${router?.query?.user}`,
		fetcher
	);

	useEffect(() => {
		setUser(data);
	}, [data]);

	return (
		<div className={styles.container}>
			<Head>
				<title>Dashboard de {user?.name || user?.login}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.box}>
				<img src={user?.avatar_url} alt="Avatar" className={styles.avatar} />

				<div className={styles.info}>
					<b>Usuário:</b> {user?.login}
				</div>

				<div className={styles.info}>
					<b>Nome:</b> {user?.name}
				</div>

				<div className={styles.info}>
					<b>Link do Github</b>
					<Link href={user?.html_url || "#"}>
						<a>{user?.html_url || "-"}</a>
					</Link>
				</div>

				<Link href="/">
					<a className={styles.link}>Voltar</a>
				</Link>
			</div>
		</div>
	);
}

export default Dashboard;
