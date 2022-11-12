import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	const yearCounter =
		new Date().getUTCFullYear() - new Date(1091590212000).getUTCFullYear();

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
				<article className=' w-fit tablet:mr-32 mt-10 mr-6 laptop:mt-40 '>
					<div className='perspective-text'>
						<div className='perspective-line'>
							<div></div>
							<div>{yearCounter} years old</div>
						</div>
						<div className='perspective-line'>
							<div>{yearCounter} y/o</div>
							<div>programmer</div>
						</div>
						<div className='perspective-line'>
							<div>programmer</div>
							<div>& full stack</div>
						</div>
						<div className='perspective-line'>
							<div>& full stack</div>
							<div>developer</div>
						</div>
						<div className='perspective-line'>
							<div>developer</div>
							<div></div>
						</div>
					</div>
				</article>
				<div className='w-full relative mt-28 tablet:mt-40 flex flex-col justify-center items-center'>
					<div className='flex w-screen text-center flex-row gap-4 justify-center items-center mb-4'>
						<div className='text-3xl'>🚧</div>
						<div className='  text-center text-primary font-jtm text-lg tablet:text-xl desktop:text-2xl z-20'>
							THIS WEBSITE IS CURRENTLY UNDER CONSTRUCTION
						</div>
						<div className='text-3xl'>🚧</div>
					</div>
					<div className='mx-auto w-screen text-center text-primary font-jtm text-2xl z-20'>
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
			</div>
		</>
	);
};

export default Home;
