import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
	return (
		<div className=' mi-h-screen w-full'>
			<Head>
				<title>Jan Žunec | Home</title>
				<meta
					name='description'
					content='A portfolio of Jan Žunec. A junior full-stack developer'
				/>
				<meta name='author' content='Jan Žunec' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div> Hey!</div>
		</div>
	);
};

export default Home;
