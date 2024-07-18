import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import styles from '../../styles/Tags.module.css';

const Tags = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setIsMounted(true);
    fetchTags();
  }, []);

  const fetchTags = async () => {
    try {
      const response = await axios.get('/api/tags');
      setTags(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des tags:', error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Tags</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span>TOLA LOGO</span>
        </div>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search..." className={styles.searchBar} />
          <FontAwesomeIcon icon="search" />
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon="cog" />
          <FontAwesomeIcon icon="question-circle" />
          <FontAwesomeIcon icon="bell" />
          <FontAwesomeIcon icon="user-circle" />
        </div>
      </header>
      <main className={styles.main}>
        <aside className={styles.sidebarLeft}>
          <ul>
            <li>
              <Link href="/home" legacyBehavior>
                <a>
                  <FontAwesomeIcon icon={['fas', 'home']} /> Accueil
                </a>
              </Link>
            </li>
            <li>
              <Link href="/tags" legacyBehavior>
                <a>
                  <FontAwesomeIcon icon={['fas', 'tags']} /> Tags
                </a>
              </Link>
            </li>
            <li>
              <Link href="/saved" legacyBehavior>
                <a>
                  <FontAwesomeIcon icon={['fas', 'bookmark']} /> Enregistrés
                </a>
              </Link>
            </li>
            <li>
              <Link href="/members" legacyBehavior>
                <a>
                  <FontAwesomeIcon icon={['fas', 'users']} /> Membres
                </a>
              </Link>
            </li>
          </ul>
        </aside>
        <section className={styles.content}>
          <h1>Tags</h1>
          <p className={styles.tagDescription}>un tag ce que c’est blablabla ...</p>
          <input type="text" placeholder="Search..." className={styles.searchBar} />
          <div className={styles.tagsContainer}>
            {tags.map(tag => (
              <div key={tag.id} className={styles.tagCard}>
                <h3>{tag.libelle}</h3>
                <p>{tag.descriptif}</p>
                <p>234 questions</p>
                <div className={styles.tagActions}>
                  <button>234 questions</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <aside className={styles.sidebarRight}>
          <div>
            <h3>Top Discussions</h3>
            {/* Ajoutez des liens ou du contenu ici */}
          </div>
          <div>
            <h3>En rapport</h3>
            {/* Ajoutez des liens ou du contenu ici */}
          </div>
        </aside>
      </main>
      <footer className={styles.footer}>
        &copy; 2023 TOLA. Tous droits réservés.
      </footer>
    </div>
  );
};

export default Tags;
