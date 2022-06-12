import React, { useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesComp: React.FC = () => {
	let particlesLimit;

	const checkWindowSize = () => {
		if (window.innerWidth < 800) {
			particlesLimit = 20;
		} else {
			particlesLimit = 50;
		}
	};

	useEffect(() => {
		checkWindowSize();
	});

	const particlesInit = async (main: any) => {
		await loadFull(main);
	};

	return (
		<div className=' -z-50'>
			<Particles
				id='tsparticles'
				options={{
					fps_limit: 60,
					particles: {
						number: {
							limit: 50,
						},
						color: {
							value: '#383838',
						},
						links: {
							enable: true,
							color: '#383838',
							distance: 160,
						},
						move: {
							enable: true,
						},
						zIndex: {
							value: -1,
							sizeRate: 1,
						},
					},
				}}
				init={particlesInit}
				className=' w-screen h-screen z-0 fixed top-0 left-0'
			/>
		</div>
	);
};

export default ParticlesComp;
