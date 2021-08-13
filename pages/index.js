import Head from "next/head";
import Link from "next/link";
import Card from "../components/Card";
import styles from "../theme/Home.module.scss";
import { indexCardsData } from "../data/index.data";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {indexCardsData.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              description={data.description}
              link={data.link}
            />
          ))}

          <Link href="/posts/first-post">
            <a className="card">
              <h3>First Post &rarr;</h3>
              <p>Go to first post</p>
            </a>
          </Link>
        </div>
      </main>
      <Footer />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
