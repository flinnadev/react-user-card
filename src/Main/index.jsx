import { userState } from "react";
import userImg from "./user1.jpg";
import styles from "./Main.module.css";

function Main() {
  const [userImg] = userState(0);
  return (
    <>
      <img className={styles.userImg} src={userImg} alt="" />;
    </>
  );
}

export default Main;
