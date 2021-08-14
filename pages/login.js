import React from "react";
import styles from "../styles/pages/login.module.scss";
import { Form, Input, Checkbox } from "antd";
import Link from "next/link";
import { Helmet } from "react-helmet";

const Login = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="login page" />
        <title>Login</title>
      </Helmet>
      <main className={styles.loginContainer}>
        <div>
          <h1>Sign in</h1>
          <Form>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input className={styles.inputFocus} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <div className={styles.checkBoxWrapper}>
              <p>Keep me logged in</p>
              <Checkbox />
            </div>
            <div className={styles.signupCta}>
              <button>Login</button>
            </div>
          </Form>
        </div>
        <section>
          <p>
            Not a member? <Link href="/signup">Sign up</Link>
          </p>
        </section>
      </main>
    </>
  );
};

export default Login;
