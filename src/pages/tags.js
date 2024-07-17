import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog, faQuestionCircle, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/Tags.module.css';

const Tags = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const fakeTags = [
    { id: 1, libelle: "JavaScript" },
    { id: 2, libelle: "PHP" },
    { id: 3, libelle: "Python" },
    { id: 4, libelle: "Java" },
    { id: 5, libelle: "C++" },
    { id: 6, libelle: "Ruby" },
    { id: 7, libelle: "Go" },
    { id: 8, libelle: "Swift" },
    { id: 9, libelle: "Kotlin" },
    { id: 10, libelle: "Laravel" },
    { id: 11, libelle: "React" },
    { id: 12, libelle: "Spring Boot" },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Tags</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>
          TOLA LOGO
        </div>
        <nav className={styles.nav}>
          <div className={styles.searchContainer}>
            <input type="text" placeholder="Search..." className={styles.searchBar} />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className={styles.icons}>
            {isMounted && (
              <>
                <Link href="/search" legacyBehavior>
                  <a>
                    <FontAwesomeIcon icon={['fas', 'search']} size="lg" />
                  </a>
                </Link>
                <Link href="/settings" legacyBehavior>
                  <a>
                    <FontAwesomeIcon icon={['fas', 'cog']} size="lg" />
                  </a>
                </Link>
                <Link href="/help" legacyBehavior>
                  <a>
                    <FontAwesomeIcon icon={['fas', 'question-circle']} size="lg" />
                  </a>
                </Link>
                <Link href="/notifications" legacyBehavior>
                  <a>
                    <FontAwesomeIcon icon={['fas', 'bell']} size="lg" />
                  </a>
                </Link>
                <Link href="/profile" legacyBehavior>
                  <a>
                    <FontAwesomeIcon icon={['fas', 'user-circle']} size="lg" />
                  </a>
                </Link>
              </>
            )}
          </div>
        </nav>
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
            {fakeTags.map(tag => (
              <div key={tag.id} className={styles.tagCard}>
                <h3>{tag.libelle}</h3>
                <p>Je suis un langage de programmation développé en 10 jours et je suis maintenant sur le toit du monde</p>
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
