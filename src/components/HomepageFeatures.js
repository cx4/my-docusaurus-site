import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '个性化定制',
    Svg: require('../../static/img/Personalized_customization.svg').default,
    description: (
      <>
        我们为您提供个性化的地图定制，满足您的个性化需求.
      </>
    ),
  },
  {
    title: '高质量输出',
    Svg: require('../../static/img/dpi.svg').default,
    description: (
      <>
        无论是商用还是家用，我们都可提供高分辨率的地图，满足您不同大小的装饰和设计需求.
      </>
    ),
  },
  {
    title: '印刷及装裱服务',
    Svg: require('../../static/img/frame.svg').default,
    description: (
      <>
        出了提供个性化定制，我们可接受您的个性化印刷和装裱需求.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
