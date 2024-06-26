'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
	NavigationMenuCustom,
	NavigationMenuContentCustom,
	NavigationMenuItemCustom,
	NavigationMenuLinkCustom,
	NavigationMenuListCustom,
	NavigationMenuTriggerCustom,
} from '@/components/ui/custom-navigation-menu';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
	return (
		<header className="w-full  z-10 fixed justify-center mt-4 flex">
			<nav className="w-3/4 h-[140px] lg:h-[90px]  bg-slate-300 bg-opacity-25 backdrop-blur-md backdrop-filter rounded-3xl lg:rounded-full">
				<div className="flex h-full lg:flex-row flex-col gap-4 lg:justify-between items-start lg:items-center max-sm:py-2  py-1.5 px-6 lg:px-8">
					<div className="flex lg:items-center w-full justify-between lg:w-2/4 lg:justify-around">
						<h3 className="text-2xl flex justify-center items-center font-medium">
							<Link href="/">Createnary</Link>
						</h3>
						{/* Search Input for desktop */}
						<div className="hidden lg:flex  bg-white px-2  rounded-3xl">
							<Image
								src="/search.svg"
								alt="search"
								width={16}
								height={16}
								className="object-contain mx-2"
							/>
							<input
								type="text"
								placeholder="Search Creators"
								className="p-3.5 rounded-r-3xl  outline-none"
							/>
						</div>
						{/* Hamburger Button for tablet and mobile screens */}
						<NavigationMenuCustom className="flex lg:hidden">
							<NavigationMenuListCustom>
								<NavigationMenuItemCustom>
									<NavigationMenuTriggerCustom className="text-base text-black">
										<div
											className="flex flex-col h-12 w-12  rounded justify-center items-center group"
											onClick={() => setIsOpen(!isOpen)}>
											<div
												className={`${genericHamburgerLine} ${
													isOpen
														? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
														: 'opacity-50 group-hover:opacity-100'
												}`}
											/>
											<div
												className={`${genericHamburgerLine} ${
													isOpen
														? 'opacity-0'
														: 'opacity-50 group-hover:opacity-100'
												}`}
											/>
											<div
												className={`${genericHamburgerLine} ${
													isOpen
														? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
														: 'opacity-50 group-hover:opacity-100'
												}`}
											/>
										</div>
									</NavigationMenuTriggerCustom>
									<NavigationMenuContentCustom className="flex w-full flex-col bg-transparent hover:bg-transparent">
										<NavigationMenuLinkCustom className="px-6 py-2  flex gap-1 cursor-pointer hover:bg-background/10">
											<Image
												src="/cart.svg"
												alt="cart"
												width={16}
												height={16}
												className="object-contain"
											/>
											Cart
										</NavigationMenuLinkCustom>
										<NavigationMenuLinkCustom className="px-6 py-2   flex gap-1 cursor-pointer hover:bg-background/10">
											<Image
												src="/information.svg"
												alt="information"
												width={16}
												height={16}
												className="object-contain"
											/>
											About
										</NavigationMenuLinkCustom>
										<NavigationMenuLinkCustom className="px-6 py-2   flex gap-1 cursor-pointer hover:bg-background/10">
											<Image
												src="/contact.svg"
												alt="contact"
												width={16}
												height={16}
												className="object-contain"
											/>
											Contact
										</NavigationMenuLinkCustom>
										<NavigationMenuLinkCustom className="px-6 py-2  whitespace-nowrap  hover:bg-background/10 bg-transparent ">
											Sign Up
										</NavigationMenuLinkCustom>
										<NavigationMenuLinkCustom className="px-6 py-2 bg-transparent  hover:bg-background/10">
											Login
										</NavigationMenuLinkCustom>
									</NavigationMenuContentCustom>
								</NavigationMenuItemCustom>
							</NavigationMenuListCustom>
						</NavigationMenuCustom>
					</div>
					{/* Search Input for mobile and tablet screens */}
					<div className="flex lg:hidden w-full lg:w-auto bg-white px-2  rounded-3xl">
						<Image
							src="/search.svg"
							alt="search"
							width={16}
							height={16}
							className="object-contain mx-2"
						/>
						<input
							type="text"
							placeholder="Search Creators"
							className="p-3.5 rounded-r-3xl w-full lg:w-auto outline-none"
						/>
					</div>
					{/* Nav Items for desktop screen */}
					<ul className="lg:flex items-center hidden lg:flex-row w-2/4 justify-evenly">
						<li className="flex gap-2 cursor-pointer">
							<Image
								src="/cart.svg"
								alt="cart"
								width={16}
								height={16}
								className="object-contain"
							/>
							Cart
						</li>
						<li className="flex gap-2 cursor-pointer">
							<Image
								src="/information.svg"
								alt="information"
								width={16}
								height={16}
								className="object-contain"
							/>
							About
						</li>
						<li className="flex gap-2 cursor-pointer">
							<Image
								src="/contact.svg"
								alt="contact"
								width={16}
								height={16}
								className="object-contain"
							/>
							Contact
						</li>
						<li>
							<NavigationMenu>
								<NavigationMenuList>
									<NavigationMenuItem>
										<NavigationMenuTrigger className="text-base text-black">
											Login
										</NavigationMenuTrigger>
										<NavigationMenuContent className="flex w-full flex-col bg-transparent hover:bg-transparent">
											<NavigationMenuLink className="px-6 py-2  whitespace-nowrap rounded-2xl hover:bg-background/10 bg-transparent ">
												Sign Up
											</NavigationMenuLink>
											<NavigationMenuLink className="px-6 py-2 bg-transparent rounded-2xl hover:bg-background/10">
												Login
											</NavigationMenuLink>
										</NavigationMenuContent>
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
