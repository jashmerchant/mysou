import Head from 'next/head';
import getConfig from 'next/config';
import { useState } from 'react';
import { setCookie } from 'nookies';
import Router from 'next/router';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin() {
        const loginInfo = {
            identifier: username,
            password: password
        }

        const login = await fetch(`${publicRuntimeConfig.API_URL}/auth/local`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(loginInfo)
        })

        const loginResponse = await login.json()

        setCookie(null, 'jwt', loginResponse.jwt, {
            maxAge: 30 * 24 * 60,
            path: '/',
            sameSite: 'None',
            secure: true,
        })

        let id = loginResponse.user.id - 1;

        setCookie(null, 'id', id, {
            maxAge: 30 * 24 * 60,
            path: '/',
            sameSite: 'None',
            secure: true,
        })
        Router.push(`/student/${id}/dashboard`);
    }

    return (
        <>
            <Head>
                <title>My SOU : Login</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}

                {/* <!-- Bulma CDN --> */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css" />

                {/* <!-- Fontawesome5 CDN --> */}
                {/* <script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script> */}
            </Head>

            {/* <form>
                <input type="email" onChange={e => setUsername(e.target.value)} value={username} /><br />
                <input type="password" onChange={e => setPassword(e.target.value)} value={password} /><br />
                <button type="button" onClick={() => handleLogin()}>Login</button>
            </form> */}

            <section class="hero is-light is-fullheight">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns is-centered">
                            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                                <h1 class="title has-text-centered" style={{ fontFamily: "serif" }}>Silver Oak University</h1>
                                <form class="box">
                                    <div class="field">
                                        <label for="" class="label">Username</label>
                                        <div class="control has-icons-left">
                                            <input value={username} type="email" name="username" placeholder="Username" class="input" required
                                                onChange={e => setUsername(e.target.value)} />
                                        </div>
                                    </div>
                                    {/* <div class="field">
                                        <label for="" class="label">Enrollment Number</label>
                                        <div class="control has-icons-left">
                                            <input name="enroll_no" type="text" placeholder="Enrollment Number" class="input"
                                                autocomplete="off" />
                                        </div>
                                    </div> */}
                                    <div class="field">
                                        <label for="" class="label">Password</label>
                                        <div class="control has-icons-left">
                                            <input value={password} name="password" type="password" placeholder="*********" class="input"
                                                required onChange={e => setPassword(e.target.value)} />

                                        </div>
                                    </div>
                                    <div class="field">
                                        <a href="" class="help level-right has-text-link">Forgot Password?</a>
                                        <a href="" class="help level-right has-text-link">Need Help?</a>
                                        <button className="button is-success" type="button" onClick={() => handleLogin()}>Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

const { publicRuntimeConfig } = getConfig()

export default Login