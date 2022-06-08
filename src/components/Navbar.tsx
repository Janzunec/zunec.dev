import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { MdPerson, MdPersonOutline } from 'react-icons/md';
import { RiContactsBookFill, RiContactsBookLine } from 'react-icons/ri';
import { VscFolderActive, VscTools } from 'react-icons/vsc';

const Navbar: React.FC = () => {
	const { pathname } = useRouter();

	return (
		<nav className=' w-full h-auto tablet:h-16 justify-between text-2xl bg-mainbg desktop:bg-transparent flex align-middle text-white min-w-full fixed left-0 bottom-0 border-t-2  tablet:border-t-0 tablet:top-0 tablet:border-b border-gray-600 z-30'>
			<Link href='/'>
				<div className='hidden w-1/6 laptop:w-1/8 tablet:flex items-center justify-center pb-1 font-lob text-3xl text-secondary hover:text-primary transform hover:scale-125 transition-all duration-300'>
					JZ
				</div>
			</Link>
			<ul className='w-screen tablet:w-2/3 laptop:w-1/2 text-primary text-3xl laptop:text-3xl font-main grid grid-cols-5 tablet:grid-cols-4  border-0 py-3 px-0 m-0'>
				<Link href='/'>
					<div className='navLink tablet:hidden'>
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
					</div>
				</Link>
				<Link href='/about'>
					<div className='navLink'>
						<MdPersonOutline
							className={`${
								pathname === '/about'
									? 'hidden'
									: 'inline-block'
							} tablet:hidden`}
						/>
						<MdPerson
							className={`${
								pathname === '/about'
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
					<div className='navLink'>
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
					<div className='navLink'>
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
					<div className='navLink'>
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
				<hr
					className={`h-1 w-full hidden tablet:block bg-primary border-0 mt-1 transition-all duration-300 transform translate-x-navSm laptop:translate-x-navLg  ${
						pathname === '/about'
							? 'tablet:ml-aboutSm laptop:ml-aboutLg'
							: ''
					} ${
						pathname === '/skills'
							? 'tablet:ml-skillsSm laptop:ml-skillsLg'
							: ' '
					} ${
						pathname === '/projects'
							? 'tablet:ml-projectsSm laptop:ml-projectsLg'
							: ''
					} ${
						pathname === '/contact'
							? ' tablet:ml-contactSm laptop:ml-contactLg'
							: ''
					}`}
				/>
			</ul>
		</nav>
	);
};

export default Navbar;
