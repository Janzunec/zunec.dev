import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Jan Žunec | Home</title>
				<meta
					name='description'
					content='Jan Žunec. A junior full-stack developer'
				/>
				<meta name='author' content='Jan Žunec' />
				<meta
					name='keywords'
					content='Jan Žunec, Jan, Žunec, Developer, Full-stack, full stack'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className=' w-full z-50  min-h-screen flex-col flex items-center justify-center animate-fade-in'>
				{/* <Title /> */}
				<article className=' w-fit mr-32 mt-10 laptop:mt-40 '>
					<div className='perspective-text'>
						<div className='perspective-line'>
							<p></p>
							<p>17 years old</p>
						</div>
						<div className='perspective-line'>
							<p>17 y/o</p>
							<p>programmer</p>
						</div>
						<div className='perspective-line'>
							<p>programmer</p>
							<p>& full stack</p>
						</div>
						<div className='perspective-line'>
							<p>& full stack</p>
							<p>developer</p>
						</div>
						<div className='perspective-line'>
							<p>developer</p>
							<p></p>
						</div>
					</div>
				</article>
				<div className=' mt-36 w-full text-center text-primary font-jtm text-2xl z-20'>
					🚧THIS WEBSITE IS CURRENTLY UNDER CONSTRUCTION🚧
				</div>
				<div className='w-full text-center text-primary font-jtm text-2xl z-20'>
					(TO SEE MY PORTFOLIO, GO TO MY{' '}
					<a
						href='https://our-app.pages.dev'
						className=' text-secondary hover:underline transform-gpu duration-150'
					>
						OLD WEBSITE
					</a>
					)
				</div>
			</div>
		</>
	);
};

export default Home;
