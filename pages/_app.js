import Layout from '../components/Layout'
import '../styles/globals.css'
import getConfig from 'next/config'
import Router from 'next/router'
import { parseCookies } from 'nookies'

function MyApp({ Component, pageProps, router }) {
	if (router.pathname == '/login') {
		return (
			<Component {...pageProps} />
		)
	}
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

const { publicRuntimeConfig } = getConfig()

function redirectUser(ctx, location) {
	if (ctx.req) {
		ctx.res.writeHead(302, { Location: location });
		ctx.res.end();
	} else {
		Router.push(location);
	}
}

MyApp.getInitialProps = async ({ ctx }) => {

	const jwt = parseCookies(ctx).jwt
	const id = parseCookies(ctx).id

	if (!jwt) {
		if (ctx.pathname === "/student/[id]/dashboard") {
			redirectUser(ctx, "/login");
		}
	} else if (jwt) {
		if (ctx.pathname === "/login") {
			redirectUser(ctx, `/student/${id}/dashboard`)
		}
	}

	return {}
}

export default MyApp