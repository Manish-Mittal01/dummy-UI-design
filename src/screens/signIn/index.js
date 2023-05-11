import React, { useState } from "react";
import styles from "./signin.module.css";
import TextField from "../../Comps/textField";
import Card from "../../Comps/card";
import AcceptBtn from "../../Comps/button";
import CaptchBox from "../../Comps/card";
import Verify from "./Side";

export default function SignIn() {
  const [verifyOtp, setVerifyOtp] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setVerifyOtp({ ...verifyOtp, [anchor]: open });
  };

  const submit = () => {
    setVerifyOtp({ ...verifyOtp, right: true });
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.main1}>
          <div className={styles.main2}>
            <div className={styles.main3}>
              <div className={styles.main4}>
                <img width={130} height={70} src="logo.png" />
              </div>
              <div className={styles.main7}>
                <button className={styles.main8}>SUPPORT</button>
              </div>
            </div>

            <div className={styles.rightBox}>
              <h2>Welcome!</h2>
              <div className={styles.formWrapper}>
                <div className={styles.form}>
                  <p
                    className={styles.inputLabel}
                    style={{ marginBottom: "4px" }}
                  >
                    EMAIL ADDRESS
                  </p>
                  <TextField
                    placeholder={"Enter your Email Address"}
                    onChange={(e) => console.log("email:", e.target.value)}
                  />
                  {/* <p className="error">Email is required</p> */}
                  <p
                    className={styles.inputLabel}
                    style={{ marginBlock: "16px 4px" }}
                  >
                    PASSWORD
                  </p>
                  <TextField
                    placeholder={"Password"}
                    onChange={(e) => console.log("email:", e.target.value)}
                  />
                  <div>
                    <CaptchBox />
                  </div>
                  <button className={styles.submitBtn} onClick={() => submit()}>
                    SUBMIT
                  </button>
                  <u className={styles.forgotPassword}>Forgot your password?</u>
                </div>
              </div>
              <div className={styles.SignUp}>
                <p>Don’t have an Account?</p>
                <button>SIGN UP</button>
              </div>
            </div>
          </div>
          <div className={`${styles.main28} loading-component`}></div>
        </div>
      </div>
      <Verify verifyOtp={verifyOtp} toggleDrawer={toggleDrawer} />
    </>
  );
}
