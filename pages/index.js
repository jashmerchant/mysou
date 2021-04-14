import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
	return (
		<>
			<Head>
				<title>My SOU</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>You seem lost</h1>
			<p>Go back to <Link href="/login"><a>Login</a></Link></p>
		</>
	)
}

// export async function getServerSideProps() {
// 	const { API_URL } = process.env

// 	const res = await fetch(`${API_URL}/student-profiles`)
// 	const studentProfiles = await res.json()

// 	return {
// 		props: {
// 			studentProfiles: studentProfiles
// 		}
// 	}
// }
