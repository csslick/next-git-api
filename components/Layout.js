import Link from 'next/link'
import Head from 'next/head'

function Layout ({ children, title }) {
  return (
    <div>
      <Head>
        <title>Next Portfolio</title>
      </Head>
      <header>
        <h1>CSSLICK</h1>
        <nav>
          <Link href="./"><a>Home</a></Link>
          <Link href="./about"><a>About</a></Link>
          <Link href="./getJoke"><a>Get Joke</a></Link>
          <Link href="./contact"><a>Contact</a></Link>
        </nav>
      </header>
      <h1>{title}</h1>
      { children }
      <footer>&copy; {new Date().getFullYear()} CSSLICK</footer>

      <style jsx>{`
        header {
          width: 100%;
          padding: 20px 0;
          display: flex;
          align-items: center;
        }
        header h1 {
          margin: 0 0 0 20px;
        }
        header nav {
          flex:1;
          text-align: right;
        }
        a { 
          color: #333;
          padding: 0 20px;
        }
        a:hover {
          color: red;
        }
      `}</style>
    </div>

  )
}

export default Layout