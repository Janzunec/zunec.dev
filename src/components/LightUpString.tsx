import React from 'react';

interface LightUpStringProps {
	content: string;
	color: string;
}

const LightUpString: React.FC<LightUpStringProps> = ({ content, color }) => {
	return (
		<>
			{content.split('').map((char, i) => (
				<span key={i} className={color + 'z-20'}>
					{char}
				</span>
			))}
		</>
	);
};

export default LightUpString;
