import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Signup.module.css';

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
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nom) newErrors.nom = 'Le nom est requis';
    if (!formData.prenom) newErrors.prenom = 'Le prénom est requis';
    if (!formData.nomUtilisateur) newErrors.nomUtilisateur = 'Le nom d’utilisateur est requis';
    if (!formData.numeroEtudiant) newErrors.numeroEtudiant = 'Le numéro étudiant est requis';
    if (!formData.departement) newErrors.departement = 'Le département est requis';
    if (!formData.specialite) newErrors.specialite = 'La spécialité est requise';
    if (!formData.email) newErrors.email = 'L’email est requis';
    if (!formData.motDePasse) newErrors.motDePasse = 'Le mot de passe est requis';
    if (formData.motDePasse !== formData.confirmerMotDePasse) newErrors.confirmerMotDePasse = 'Les mots de passe ne correspondent pas';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
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
      setErrors({ form: 'Erreur lors de l’inscription' });
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
        {errors.form && <div className={styles.error}>{errors.form}</div>}
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
              {errors.nom && <div className={styles.error}>{errors.nom}</div>}
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
              {errors.prenom && <div className={styles.error}>{errors.prenom}</div>}
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
              {errors.nomUtilisateur && <div className={styles.error}>{errors.nomUtilisateur}</div>}
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
              {errors.numeroEtudiant && <div className={styles.error}>{errors.numeroEtudiant}</div>}
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
              {errors.departement && <div className={styles.error}>{errors.departement}</div>}
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
              {errors.specialite && <div className={styles.error}>{errors.specialite}</div>}
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
              {errors.email && <div className={styles.error}>{errors.email}</div>}
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
              {errors.motDePasse && <div className={styles.error}>{errors.motDePasse}</div>}
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
              {errors.confirmerMotDePasse && <div className={styles.error}>{errors.confirmerMotDePasse}</div>}
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
