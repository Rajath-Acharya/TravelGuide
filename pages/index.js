import React from "react";
import { FaMapMarked } from "react-icons/fa";
import Link from "next/link";
import styles from "../styles/pages/index.module.scss";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Welcome</title>
      </Helmet>
      <main className={styles.homePageContainer}>
        <div>
          <section>
            <div className={styles.logoWrapper}>
              <FaMapMarked className={styles.logo} />
            </div>
            <h5>ATLAS</h5>
            <h1>Your Travel Buddy</h1>
            <div />
          </section>
          <section>
            <Link href="/login">Login</Link>
            <p>
              OR
              <p />
              <p />
            </p>
            <Link href="/signup">Create an account</Link>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
