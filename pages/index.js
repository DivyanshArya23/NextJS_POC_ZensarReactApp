import Head from "next/head";
import styles from "../styles/Home.module.css";
import AllUserCards from "./../src/components/AllUserCards";
import AddUser from "./../src/components/AddUser";

const Home = ({ data }) => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>ZENSAR Hiring Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AddUser />
      {/* <AllUserCards users={data} /> */}

      <footer className={styles.footer}>
        Made by :
        <a
          href="https://github.com/DivyanshArya23"
          target="_blank"
          rel="noopener noreferrer"
        >
          DivyanshArya23
          <img
            src="https://avatars.githubusercontent.com/u/47887824?v=4"
            alt="My Logo"
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  );
};

Home.getInitialProps = async ({
  req: {
    headers: { host },
  },
}) => {
  const res = await fetch(`http://${host}/api/userdata`);
  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
};

export default Home;
