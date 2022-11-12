import { NextPage } from 'next';
import React from 'react';

const ProjectsPage: NextPage = () => {
	return (
		<div className=' w-screen pt-4 tablet:pt-20 mb-4 z-10'>
			<div className='w-screen h-auto flex flex-col gap-4 text-8xl font-bold font-jtm p-10 animate-fade-in text-primary'>
				<div className=' w-fit transform-gpu duration-150 hover:text-secondary'>
					<a href='https://beta.kodex.io' target='_blank'>
						Kodex
					</a>
				</div>
				<div className=' w-fit transform-gpu duration-150 hover:text-secondary'>
					<a href='https://koyo.finance' target='_blank'>
						Kōyō Finance
					</a>
				</div>
				<div className=' w-fit transform-gpu duration-150 hover:text-secondary'>
					<a href='https://covstats-19.pages.dev/' target='_blank'>
						Covstats-19
					</a>
				</div>
				<div className=' w-fit transform-gpu duration-150 hover:text-secondary'>
					<a href='https://revolucijavodenja.si/' target='_blank'>
						Revolucija vodenja
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectsPage;
