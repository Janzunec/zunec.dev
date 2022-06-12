import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import ParticlesComp from '../components/Particles';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Dancing+Script&family=JetBrains+Mono:wght@100&family=La+Belle+Aurore&family=Lobster&family=Nova+Square&family=Source+Code+Pro:wght@200&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Oxygen:wght@300&family=Pacifico&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Shippori+Antique+B1&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Navbar />
			<div className=' -z-50'>
				<ParticlesComp />
			</div>
			<main className='w-full  z-50'>
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default MyApp;
