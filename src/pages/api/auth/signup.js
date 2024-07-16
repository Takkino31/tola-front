import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../../Signup.module.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    nomUtilisateur: '',
    numeroEtudiant: '',
    departement: '',
    specialite: '',
    email: '',
    motDePasse: '',
    confirmerMotDePasse: ''
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.motDePasse !== formData.confirmerMotDePasse) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push('/auth/login');
    } else {
      setError('Erreur lors de l’inscription');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Inscription</title>
      </Head>
      <div className={styles.logo}>
        <span>TOLA LOGO</span>
        <span>SLOGAN TOLA</span>
      </div>
      <div className={styles.signupBox}>
        <h2>Inscription</h2>
        {error && <div className={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <div className={styles.inputBox}>
              <label>Nom</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputBox}>
              <label>Prénom</label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputBox}>
              <label>Nom d’utilisateur</label>
              <input
                type="text"
                name="nomUtilisateur"
                value={formData.nomUtilisateur}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputBox}>
              <label>Numéro Étudiant</label>
              <input
                type="text"
                name="numeroEtudiant"
                value={formData.numeroEtudiant}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputBox}>
              <label>Département</label>
              <input
                type="text"
                name="departement"
                value={formData.departement}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputBox}>
              <label>Spécialité</label>
              <input
                type="text"
                name="specialite"
                value={formData.specialite}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputBox}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputBox}>
              <label>Mot de passe</label>
              <input
                type="password"
                name="motDePasse"
                value={formData.motDePasse}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputBox}>
              <label>Confirmer le mot de passe</label>
              <input
                type="password"
                name="confirmerMotDePasse"
                value={formData.confirmerMotDePasse}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit" className={styles.signupButton}>S’inscrire</button>
        </form>
        <div className={styles.footer}>
          Tu as déjà un compte ? <Link href="/auth/login">Connecte-toi</Link>
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

export default Signup;
