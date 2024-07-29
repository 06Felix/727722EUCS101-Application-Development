import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/LandPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Home />
      <Results />
      <External />
      <Process />
      <Screen />  
    </div>
  );
};

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <a href="index.html"><img src="http://conversionlab.no/wp-content/uploads/2015/11/clab-logo-180px.png" alt="Student Assistance Logo" /></a>
      </div>
      <ul className={styles.menu}>
        <li><a href="#">About</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Procedure</a></li>
        <li><Link className={styles.cta} to="/login">Login</Link></li>
      </ul>
    </div>
  </header>
);

const Home = () => (
  <div className={styles.home}>
    <div className={styles.container}>
      <div className={styles.founderText}>
        <h1 className={styles.fTitle}>Unlock Your Future with Our Guidance.</h1>
        <p className={styles.fDescr}>Connecting Students to Resources and Opportunities.</p>
      </div>
      <div className={styles.founder}></div>
    </div>
  </div>
);

const Results = () => (
  <div className={`${styles.results} ${styles.box}`}>
    <div className={styles.container}>
      <h2 className={styles.title}>Achieve Your Academic Goals with Us!</h2>
      <p className={styles.descr}>Our expertise helps you find the best educational resources. We provide personalized support to ensure your academic success.</p>
      <div className={`${styles.resultsItem} ${styles.clearfix}`}>
        <ResultItem iconClass={styles.item1Icon} title="Explore Various Courses" description="We guide you in exploring a wide range of courses to find the best fit for your interests and career aspirations." />
        <ResultItem iconClass={styles.item2Icon} title="Fees Structure Enquiries" description="Get detailed information on the fees structure for different courses and institutions to plan your finances effectively." />
        <ResultItem iconClass={styles.item3Icon} title="Academic Growth" description="Our support services are designed to help you achieve continuous academic growth and reach your full potential." />
      </div>
    </div>
  </div>
);

const ResultItem = ({ iconClass, title, description }) => (
  <div className={`${styles.column} ${iconClass}`}>
    <h3 className={styles.itemTitle}>{title}</h3>
    <p className={styles.itemDescr}>{description}</p>
  </div>
);

const External = () => (
  <div className={`${styles.external} ${styles.box}`}>
    <div className={styles.container}>
      <div className={styles.externalImg}></div>
      <div className={styles.externalText}>
        <h2 className={styles.title}>Effective Solutions for Student Success</h2>
        <p className={styles.descr}>Our portal is designed with a singular focus: helping students succeed. By eliminating distractions and providing targeted resources, we ensure that you get the support you need to thrive.</p>
      </div>
    </div>
  </div>
);

const Process = () => (
  <div className={`${styles.process} ${styles.box}`}>
    <div className={styles.container}>
      <h2 className={styles.title}>Our Process – Student Support Optimization</h2>
      <div className={`${styles.processItem} ${styles.clearfix}`}>
        <ProcessItem iconClass={styles.processIcon1} title="Define Goals" description="Define your academic and career goals. We use this as a baseline to tailor our support services." />
        <ProcessItem iconClass={styles.processIcon2} title="Design & Plan" description="Create a personalized plan. We provide the resources and guidance needed to help you achieve your goals." />
        <ProcessItem iconClass={styles.processIcon3} title="Optimization" description="Using a scientific approach, we experiment with different strategies to find what works best for you." />
      </div>
    </div>
  </div>
);

const ProcessItem = ({ iconClass, title, description }) => (
  <div className={`${styles.column} ${iconClass}`}>
    <h3 className={styles.itemTitle}>{title}</h3>
    <p className={styles.itemDescr}>{description}</p>
  </div>
);

const Screen = () => (
  <div className={`${styles.screen} ${styles.box}`}>
    <div className={styles.container}>
      <div className={`${styles.screenText} ${styles.clearfix}`}>
        <h2 className={styles.title}>Accessible Support for All Devices</h2>
        <p className={styles.descr}>Ensure a seamless experience across all screen sizes. We provide support and resources tailored for both mobile and desktop users to maximize your success.</p>
      </div>
      <div className={styles.screenImg}></div>
    </div>
  </div>
);

export default LandingPage;
