// pages/home.js
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
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
      <div className={styles.main}>
        <aside className={styles.sidebarLeft}>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/tags">Tags</Link></li>
            <li><Link href="/saved">Enregistrés</Link></li>
            <li><Link href="/members">Membres</Link></li>
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
              <button>2 <FontAwesomeIcon icon="thumbs-up" /></button>
              <button>2 <FontAwesomeIcon icon="thumbs-down" /></button>
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
      </div>
      <footer className={styles.footer}>
        <p>&copy; 2023 TOLA. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Home;
