import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <h1 className="header">
        <Link href="/landing">
          <a>PCOS ANSWERED</a>
        </Link>
      </h1>
    </div>

  );
}



