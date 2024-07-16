import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import styles from '../../styles/Home.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('auth/login');
  }, [router]);

  return null;
}
