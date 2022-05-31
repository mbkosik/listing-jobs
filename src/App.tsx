import logo from "./assets/logo.svg";
import styles from "./styles/App.module.scss";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
