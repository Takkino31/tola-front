import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    try {
      const res = await fetch('http://localhost:8081/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Stocker le token dans le localStorage
        localStorage.setItem('token', data.token);

        // Redirige vers la page d'accueil
        router.push('/home');
      } else {
        setError('Nom d’utilisateur ou mot de passe incorrect');
      }
    } catch (error) {
      setError('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Connexion</title>
      </Head>
      <div className={styles.logo}>
        <span>TOLA LOGO</span>
        <span>KEN DU NiUNE</span>
      </div>
      <div className={styles.loginBox}>
        <h2>Se connecter</h2>
        {error && <div className={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className={styles.inputBox}>
            <label>Nom d’utilisateur</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
              aria-invalid={!!error}
              placeholder="Entrez votre nom d’utilisateur"
            />
          </div>
          <div className={styles.inputBox}>
            <label>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-required="true"
              aria-invalid={!!error}
              placeholder="Entrez votre mot de passe"
            />
          </div>
          <button type="submit" className={styles.loginButton}>Connexion</button>
        </form>
        <div className={styles.footer}>
          <div className={styles.signup}>
            Pas encore de compte ? <Link href="/auth/signup">Inscris-toi</Link>
          </div>
          <div className={styles.forgotPassword}>
            <Link href="#">Mot de passe oublié ?</Link>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <Link href="#"><i className="fab fa-facebook"></i></Link>
          <Link href="#"><i className="fab fa-twitter"></i></Link>
          <Link href="#"><i className="fab fa-instagram"></i></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
