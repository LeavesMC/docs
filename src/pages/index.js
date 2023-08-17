import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import IndexProjects from '@site/src/components/Projects';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <script async src="https://umami.skinow.skin/script.js"
        data-website-id="2251af9b-daca-4647-b5b6-35d7b6c34cb4"
        data-do-not-track="true"
        data-domains="docs.leavesmc.top"
      ></script>
      <div className="container">
        <h1 className="hero__title">{translate({message: "LeavesMC Documentation", description: "Home page title"})}</h1>
        <p className="hero__subtitle">{translate({message: "Documentation for all projects under the LeavesMC umbrella", description: "Home page subtitle"})}</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title={translate({message: "Home", description: "Home page head tag"})}>
      <HomepageHeader />
      <main>
        <IndexProjects />
      </main>
    </Layout>
  );
}
