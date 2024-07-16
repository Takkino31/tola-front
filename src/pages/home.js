// pages/home.js
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>Vous êtes connecté !</p>
      <Link href="/auth/login">
        <a>Se déconnecter</a>
      </Link>
    </div>
  );
};

export default Home;
