import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import DynamicFontAwesomeIcon from '../components/DynamicFontAwesomeIcon';
import styles from '../../styles/Home.module.css';

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const replyText = e.target.replyText.value.trim();
    if (replyText) {
      console.log('Reply submitted:', replyText);
      e.target.replyText.value = '';
      handleCloseModal();
    } else {
      console.log('Reply cannot be empty');
    }
  };

  const fakeResponses = [
    { id: 1, content: "Réponse 1 : Javascript est plus flexible que PHP.", author: "User1", date: "Apr 24, 2019 at 16:00" },
    { id: 2, content: "Réponse 2 : PHP a des frameworks puissants comme Laravel.", author: "User2", date: "Apr 24, 2019 at 16:10" },
    { id: 3, content: "Réponse 3 : Javascript permet de faire du développement full-stack.", author: "User3", date: "Apr 24, 2019 at 16:20" },
    { id: 4, content: "Réponse 4 : Javascript est plus flexible que PHP.", author: "User4", date: "Apr 24, 2019 at 16:00" },
    { id: 5, content: "Réponse 5 : PHP a des frameworks puissants comme Laravel.", author: "User5", date: "Apr 24, 2019 at 16:10" },
   
  ];

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
          <DynamicFontAwesomeIcon icon="search" />
        </div>
        <div className={styles.icons}>
          <DynamicFontAwesomeIcon icon="cog" />
          <DynamicFontAwesomeIcon icon="question-circle" />
          <DynamicFontAwesomeIcon icon="bell" />
          <DynamicFontAwesomeIcon icon="user-circle" />
        </div>
      </header>
      <main className={styles.main}>
        <aside className={styles.sidebarLeft}>
          <ul>
            <li>
              <Link href="/home" legacyBehavior>
                <a>
                  <DynamicFontAwesomeIcon icon={['fas', 'home']} /> Accueil
                </a>
              </Link>
            </li>
            <li>
              <Link href="/tags" legacyBehavior>
                <a>
                  <DynamicFontAwesomeIcon icon={['fas', 'tags']} /> Tags
                </a>
              </Link>
            </li>
            <li>
              <Link href="/saved" legacyBehavior>
                <a>
                  <DynamicFontAwesomeIcon icon={['fas', 'bookmark']} /> Enregistrés
                </a>
              </Link>
            </li>
            <li>
              <Link href="/members" legacyBehavior>
                <a>
                  <DynamicFontAwesomeIcon icon={['fas', 'users']} /> Membres
                </a>
              </Link>
            </li>
          </ul>
        </aside>
        <section className={styles.content}>
          <button className={styles.addResponseButton} onClick={handleOpenModal}>
            Ajouter une réponse
          </button>

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
                  <button>2 <DynamicFontAwesomeIcon icon={['fas', 'thumbs-up']} /></button>
                  <button>2 <DynamicFontAwesomeIcon icon={['fas', 'thumbs-down']} /></button>
                </>
              )}
            </div>
          </div>

          <div className={styles.responses}>
            {fakeResponses.map((response, index) => (
              <div key={response.id} className={index % 2 === 0 ? styles.responseEven : styles.responseOdd}>
                <p>{response.content}</p>
                <p><strong>{response.author}</strong> - {response.date}</p>
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

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={handleCloseModal}>&times;</span>
            <form className={styles.replyForm} onSubmit={handleSubmit}>
              <textarea name="replyText" placeholder="Postez votre réponse"></textarea>
              <button type="submit">Postez votre réponse</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
