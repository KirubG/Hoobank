import {
  Billing,
  Business,
  Button,
  Carddeal,
  Clients,
  CTA,
  Footer,
  GetStarted,
  Hero,
  Navbar,
  Stats,
  Testiomonials,
} from "./component";
import styles from "./style";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <Carddeal />
          <Testiomonials />
          <Clients />
          <CTA />
          <Footer />
          </div>
      </div>

    </div>
  );
};

export default App;
