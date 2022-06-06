import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { MdPerson, MdPersonOutline } from 'react-icons/md';
import { RiContactsBookFill, RiContactsBookLine } from 'react-icons/ri';
import { VscFolderActive, VscTools } from 'react-icons/vsc';

const Navbar: React.FC = () => {
	const { pathname } = useRouter();
	console.log(pathname);

	return (
		<nav className='fixed w-full h-auto tablet:h-16 justify-between text-2xl bg-mainbg desktop:bg-transparent flex align-middle text-white min-w-full left-0 bottom-0 border-t-2  tablet:border-t-0 tablet:top-0 tablet:border-b border-gray-600 z-30'>
			<Link href='/'>
				<div className='hidden w-1/6 laptop:w-1/8 tablet:flex items-center justify-center pb-1 font-lob text-3xl text-secondary hover:text-primary transform hover:scale-125 transition-all duration-300'>
					JZ
				</div>
			</Link>
			<ul className='w-full h-10 tablet:w-2/3 laptop:w-1/2 text-primary text-3xl laptop:text-3xl font-main grid grid-cols-4 laptop:grid-cols-5 border-0 py-3 px-0 m-0'>
				<Link href='/'>
					<div className=' hover:text-secondary transform-gpu duration-150  hover:scale-125'>
						<AiOutlineHome
							className={`${
								pathname === '/' ? 'hidden' : 'inline-block'
							} tablet:hidden`}
						/>
						<AiFillHome
							className={`${
								pathname === '/'
									? 'inline-block text-secondary'
									: 'hidden'
							} tablet:hidden`}
						/>
						<span className='hidden'>Home</span>
					</div>
				</Link>

				<Link href='/about'>
					<div className=' hover:text-secondary transform-gpu duration-150  hover:scale-125'>
						<MdPersonOutline
							className={`${
								pathname === '/about'
									? 'hidden'
									: 'inline-block'
							} tablet:hidden`}
						/>
						<MdPerson
							className={`${
								pathname === 'about'
									? 'inline-block text-secondary'
									: 'hidden'
							} tablet:hidden`}
						/>
						<span className='hidden tablet:inline-block'>
							about
						</span>
					</div>
				</Link>

				<Link href='/skills'>
					<div className=' hover:text-secondary transform-gpu duration-150  hover:scale-125'>
						<VscTools
							className={`${
								pathname.includes('skills')
									? 'text-secondary'
									: 'text-primary'
							} tablet:hidden`}
						/>
						<span className='hidden tablet:inline-block'>
							skills
						</span>
					</div>
				</Link>

				<Link href='/projects/'>
					<div className=' hover:text-secondary transform-gpu duration-150  hover:scale-125'>
						<VscFolderActive
							className={`${
								pathname.includes('projects')
									? 'text-secondary'
									: 'text-primary'
							} tablet:hidden`}
						/>
						<span className='hidden tablet:inline-block'>
							projects
						</span>
					</div>
				</Link>

				<Link href='/contact'>
					<div className=' hover:text-secondary transform-gpu duration-150  hover:scale-125 scale-2'>
						<RiContactsBookLine
							className={`${
								pathname === 'contact'
									? 'hidden'
									: 'inline-block'
							} tablet:hidden`}
						/>
						<RiContactsBookFill
							className={`${
								pathname === 'contact'
									? ' inline-block text-secondary'
									: 'hidden'
							} tablet:hidden`}
						/>
						<span className='hidden tablet:inline-block'>
							contact
						</span>
					</div>
				</Link>
			</ul>
			<hr
				className={` absolute w-[10vw] top-16 h-1 hidden tablet:block bg-primary border-0 transition-all duration-300 transform  ${
					pathname === '/about' ? ' translate-x-[575%]' : ''
				} ${pathname === '/skills' ? 'translate-x-[675%]' : ' '} ${
					pathname === '/projects' ? 'translate-x-[775%]' : ''
				} ${pathname === '/contact' ? 'translate-x-[875%]' : ''}`}
			/>
		</nav>
	);
};

export default Navbar;
