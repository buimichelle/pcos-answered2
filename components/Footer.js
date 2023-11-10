import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Made by Michelle Bui &nbsp;|&nbsp; Girls Who Code x RTX Leadership Academy Fall 2023 &nbsp;|&nbsp;{' '}
        <Link href="/sources">
          <a>Link To Sources (Research, Pictures, Fonts)</a>
        </Link>
      </p>
    </footer>
  );
}



