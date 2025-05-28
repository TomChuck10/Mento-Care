import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/mento_logo.png";
import BurgerMenu from "../assets/burgerMenu.svg";

import { useIsMobile } from "../hooks/useIsMobile";

const Navbar = () => {
	const isMobile = useIsMobile();

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const menuItems = [
		{ name: "o nas" },
		{ name: "cennik" },
		{ name: "usługi" },
		{ name: "blog" },
	];

	return (
		<nav className='fixed top-5 md:top-10 left-0 w-full z-50 px-4 md:px-[98px]'>
			<div className='flex justify-between items-center'>
				{/* Logo */}
				<div className='md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-20'>
					<img
						src={Logo}
						alt='Logo'
						className='logo cursor-pointer h-[60px] md:h-[80px] md:mt-[-20px]'
					/>
				</div>

				{/* Desktop Links */}
				<div className='hidden md:flex space-x-[32px] uppercase text-lg font-light'>
					{menuItems.slice(0, 3).map((item, index) => (
						<span key={index} className='cursor-pointer text-textPrimary'>
							{item.name}
						</span>
					))}
				</div>

				{/* Desktop Right Side */}
				<div className='hidden md:flex space-x-[32px] uppercase text-lg font-light'>
					{menuItems.slice(3).map((item, index) => (
						<span key={index} className='cursor-pointer text-textPrimary'>
							{item.name}
						</span>
					))}
					<p className='text-prime cursor-pointer flex items-center gap-2'>
						<span>{`>`}</span>
						<span>
							<a
								href='https://booksy.com/pl-pl/118318_mento-barber-shop_barber-shop_10189_bochnia#ba_s=seo'
								target='_blank'
								rel='noopener noreferrer'>
								zarezerwuj
							</a>
						</span>
						<span>{`<`}</span>
					</p>
				</div>

				{/* Mobile Menu Icon */}
				<div className='md:hidden z-20'>
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className='text-3xl text-prime focus:outline-none'>
						{isMobileMenuOpen ? (
							<AiOutlineClose style={{ color: "#FFFFFF" }} />
						) : (
							<img src={BurgerMenu} style={{ height: "20px" }} alt='Menu' />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className='fixed inset-0 bg-black bg-opacity-75 backdrop-blur-md flex flex-col justify-center items-center text-lg font-light uppercase z-10'>
					<ul className='flex flex-col gap-8 text-center text-white text-[18px]'>
						{menuItems.map((item, index) => (
							<li
								key={index}
								onClick={() => setIsMobileMenuOpen(false)}
								className='cursor-pointer'>
								{item.name}
							</li>
						))}
						<li>
							<p className='text-prime font-bold flex justify-center items-center gap-2'>
								<span>{`>`}</span>
								<span>
									<a
										href='https://booksy.com/pl-pl/118318_mento-barber-shop_barber-shop_10189_bochnia#ba_s=seo'
										target='_blank'
										rel='noopener noreferrer'>
										zarezerwuj
									</a>
								</span>
								<span>{`<`}</span>
							</p>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
