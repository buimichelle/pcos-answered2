import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        Made by Michelle Bui<span className={styles.separator}> | </span>
        Girls Who Code x RTX Leadership Academy Fall 2023<span className={styles.separator}> | </span>
        <Link href="/sources">
          <a>Link To Sources (Research, Pictures, Fonts)</a>
        </Link>
        <br />
        DISCLAIMER: DO NOT USE THIS WEBSITE AS A DIAGNOISIS. PLEASE SEE YOUR PRIMARY HEALTH PROVIDER.
      </p>
    </footer>
  );
}




