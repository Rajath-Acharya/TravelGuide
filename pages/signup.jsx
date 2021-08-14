import { Form, Input } from 'antd';
import Link from 'next/link';
import React from 'react';
import { Helmet } from 'react-helmet';
import styles from '../styles/pages/signup.module.scss';

const Signup = () => (
  <>
    <Helmet>
      <meta name="description" content="sign up page" />
      <title>Sign up</title>
    </Helmet>
    <main className={styles.signupContainer}>
      <div>
        <h1>Join us</h1>
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
          <Form.Item
            name="repeatPassword"
            rules={[
              { required: true, message: 'Please input your password!' },
            ]}
          >
            <Input.Password placeholder="Repeat password" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input
              className={styles.inputFocus}
              placeholder="Email Address"
            />
          </Form.Item>
          <div className={styles.signupCta}>
            <button type="button">Sign up</button>
          </div>
        </Form>
      </div>
      <section>
        <p>
          Already a member?
          {' '}
          <Link href="/login">Sign in</Link>
        </p>
      </section>
    </main>
  </>
);

export default Signup;
