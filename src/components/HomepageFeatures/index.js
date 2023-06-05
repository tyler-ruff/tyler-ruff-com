import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Software Architect',
    Svg: require('@site/static/img/icons/code-solid.svg').default,
    description: (
      <>
        In addition to writing code, I also design systems and maintain them.
      </>
    ),
  },
  {
    title: 'Information Architect',
    Svg: require('@site/static/img/icons/hashtag-solid.svg').default,
    description: (
      <>
        This involves organizing and publishing of information in digital systems.
      </>
    ),
  },
  {
    title: 'Cloud Architect',
    Svg: require('@site/static/img/icons/cloud-solid.svg').default,
    description: (
      <>
        I maintain multiple domains across the internet, so my work can be audited.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg}  role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
