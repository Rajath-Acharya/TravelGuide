import React from "react";
import styles from "../styles/pages/signup.module.scss";
import Link from "next/link";
import { Form, Input, Checkbox } from "antd";
import { Helmet } from "react-helmet";

const Signup = () => {
  return (
    <>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <main className={styles.signupContainer}>
        <div>
          <h1>Join us</h1>
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
            <Form.Item
              name="repeatPassword"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Repeat password" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                className={styles.inputFocus}
                placeholder="Email Address"
              />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>
                Agree to our <Link href="/terms">Terms & Conditions</Link>
              </Checkbox>
            </Form.Item>
            <div className={styles.signupCta}>
              <button>Sign up</button>
            </div>
          </Form>
        </div>
        <section>
          <p>
            Already a member? <Link href="/">Sign in</Link>
          </p>
        </section>
      </main>
    </>
  );
};

export default Signup;
