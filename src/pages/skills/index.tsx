import { NextPage } from 'next';
import React from 'react';
import LightUpString from '../../components/LightUpString';
import ChartJan from '../../components/Chart';
import Link from 'next/link';

const SkillsPage: NextPage = () => {
	return (
		<div className=' w-screen pt-4 tablet:pt-20 z-40'>
			<div className='w-screen min-h-screen flex flex-col laptop:flex-row pb-16 animate-fade-in'>
				<div className='w-screen h-auto laptop:w-1/2 pl-4 z-40'>
					<div className='h-auto text-2xl font-lba italic text-secondary pt-2 tablet:pt-0'>
						<LightUpString content='<h2>' color='tocyan' />
					</div>
					<h2 className='h-auto text-5xl tablet:text-6xl text-primary font-jtm ml-2 p-0'>
						<LightUpString
							content={`Skillset`}
							color={'topurple'}
						/>
					</h2>
					<div className='text-lg tablet:text-2xl font-lba italic text-secondary mb-2'>
						<LightUpString content='</h2>' color='tocyan' />
					</div>
					<div className='text-lg tablet:text-2xl font-lba italic text-secondary mb-4'>
						<LightUpString content='<p>' color='tocyan' />
					</div>

					<div className='w-full laptop:w-5/6 text-lg text-white font-extralight flex flex-col justify-items-start text-left gap-5 px-6'>
						<p>
							As a student, I got most experience from working on
							personal and open-source projects with great
							developers. Had a job at BMC International where I
							led the design and development of a website for an
							upcoming book{' '}
							<a
								href='https://revolucijavodenja.si'
								target='blank'
								className='text-primary transform duration-150 hover:text-secondary '
							>
								Revolucija Vodenja
							</a>
							.
						</p>
						<p>
							I have created some good looking, fast and easy to
							use websites. Most of my skillset involves HTML,
							CSS, JS and modern Front-end technologies like
							ReactJS, TailwindCSS, TypeScript... Most designs of
							projects I worked on were created by me.
						</p>
						<p>
							Even though I am mostly interested in Front-end
							development and creating beautiful designs, I also
							have some Full-stack experience working with
							Node.JS, PHP and some other programming languages
							like C++ and Python.
						</p>
						<p>
							Interested in working with me?&nbsp;&nbsp;
							<Link href='/contact'>
								<span className='text-primary transform duration-150 hover:text-secondary'>
									Contact me!
								</span>
							</Link>
						</p>
					</div>
					<div className='text-lg tablet:text-2xl font-lba italic text-secondary desktop:mt-5'>
						<LightUpString content='</p>' color='tocyan' />
					</div>
				</div>
				<div className='w-screen h-auto laptop:w-1/2 flex items-center border-0'>
					{/* <div className='p-6 w-full space-y-2 artboard laptop:w-5/6 laptop:h-2/3'>
						<div className='w-full flex flex-col justify-start'>
							<div className='text-2xl text-secondary p-2 '>
								<LightUpString
									content='HTML && CSS'
									color='tocyan'
								/>
							</div>
							<progress
								className='progress progress-accent'
								value='90'
								max='100'
							></progress>
						</div>
						<div className='w-full flex flex-col justify-start'>
							<div className='text-2xl text-secondary p-2 '>
								<LightUpString
									content='JavaScript'
									color='tocyan'
								/>
							</div>
							<progress
								className='progress progress-accent transform duration-300 '
								value='70'
								max='100'
							></progress>
						</div>
						<div className='w-full flex flex-col justify-start'>
							<div className='text-2xl text-secondary p-2'>
								<LightUpString
									content='ReactJS'
									color='tocyan'
								/>
							</div>
							<progress
								className='progress progress-accent'
								value='50'
								max='100'
							></progress>
						</div>
						<div className='w-full flex flex-col justify-start'>
							<div className='text-2xl text-secondary p-2'>
								<LightUpString
									content='Back-end'
									color='tocyan'
								/>
							</div>
							<progress
								className='progress progress-accent'
								value='40'
								max='100'
							></progress>
						</div>
					</div> */}
					<div className='h-full z-20 laptop:h-5/6 w-full'>
						<ChartJan />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillsPage;
