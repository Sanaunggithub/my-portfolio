import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>San Aung </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ maxWidth: 960, margin: '0 auto', padding: '2rem' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ margin: 0 }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              San Aung
            </Link>
          </h2>

          <nav>
            <Link href="/" style={{ marginRight: 12, textDecoration: 'none', color: 'inherit' }}>
              Home
            </Link>
            <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
              About
            </Link>
            <Link href="/project" style={{ textDecoration: 'none', color: 'inherit' }}>
              Projects
            </Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer style={{ marginTop: 48, borderTop: '1px solid #eee', paddingTop: 16 }}>
          <small>© {new Date().getFullYear()} San Aung — Built with Next.js</small>
        </footer>
      </div>
    </>
  );
}
