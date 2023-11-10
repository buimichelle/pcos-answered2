import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <body>
        <div className="header">
          <h1>
            <Link href="/">
              <a>PCOS ANSWERED</a>
            </Link>
          </h1>
          <nav>
            <ul className="nav-list">
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/symptoms">
                  <a>Symptoms</a>
                </Link>
              </li>
              <li>
                <Link href="/resources">
                  <a>Resources</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.pcosaa.org/donate" >
                  <a target="_blank" rel="noopener noreferrer">Donate</a>
                </Link>
              </li>
              {/* Add more navigation links as needed */}
            </ul>
          </nav>
        </div>
      </body>
    </div>
  );
}




