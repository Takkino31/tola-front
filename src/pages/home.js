import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/Home.module.css';

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Accueil</title>
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
          <div className={styles.post}>
            <div className={styles.postHeader}>
              <div className={styles.postInfo}>
                <h3>Pourquoi Javascript est meilleur que PHP ?</h3>
                <p>Takkino31 asked Apr 24, 2019 at 15:35</p>
              </div>
              <div className={styles.postTags}>
                <span>JS</span>
                <span>PHP</span>
                <span>Programm</span>
                <span>Algo</span>
                <span>Dev</span>
                <span>Logiciel</span>
              </div>
            </div>
            <div className={styles.postBody}>
              <p>Pourquoi Javascript est meilleur que PHP ? Je fais du js et du PHP depuis ma première année mais, ce que je peux dire c’est que ya pas de meilleure de language de programmation.</p>
            </div>
            <div className={styles.postActions}>
              {isMounted && (
                <>
                  <button>2 <FontAwesomeIcon icon={['fas', 'thumbs-up']} /></button>
                  <button>2 <FontAwesomeIcon icon={['fas', 'thumbs-down']} /></button>
                </>
              )}
            </div>
          </div>
          <form className={styles.replyForm}>
            <textarea placeholder="Postez votre réponse"></textarea>
            <button type="submit">Postez votre réponse</button>
          </form>
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

export default Home;
