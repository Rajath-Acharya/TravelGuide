import { Form, Input } from 'antd';
import Link from 'next/link';
import React from 'react';
import { Helmet } from 'react-helmet';
import styles from '../styles/pages/login.module.scss';

const Login = () => (
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
              { required: true, message: 'Please input your username!' },
            ]}
          >
            <Input className={styles.inputFocus} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please input your password!' },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <div className={styles.signupCta}>
            <button type="button">Login</button>
          </div>
        </Form>
      </div>
      <section>
        <p>
          Not a member?
          {' '}
          <Link href="/signup">Sign up</Link>
        </p>
      </section>
    </main>
  </>
);

export default Login;
