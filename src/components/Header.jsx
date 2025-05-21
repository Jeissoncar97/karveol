import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import client from '../data/client';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true); // Estado para manejar la carga
	const navigate = useNavigate();

	useEffect(() => {
		const getUser = async () => {
			try {
				const {
					data: { user },
				} = await client.auth.getUser();
				setUser(user);
			} catch (error) {
				console.error('Error al obtener usuario:', error);
				setUser(null);
			} finally {
				setLoading(false);
			}
		};
		getUser();
	}, [navigate]);

	const handleLogout = async () => {
		try {
			await client.auth.signOut();
			setUser(null);
			navigate('/');
		} catch (error) {
			console.error('Error al cerrar sesión:', error);
		}
	};

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	if (loading) {
		return (
			<header className="backdrop-blur-[10px] w-full overflow-visible z-[99999] header-animate mb-10 py-4 fixed">
				<div className="max-w-7xl mx-auto px-4">Cargando...</div>
			</header>
		);
	}

	return (
		<header className="backdrop-blur-[10px] md:backdrop-blur-0 w-full overflow-visible z-[99999] header-animate mb-10 py-4 fixed">
			<div className="max-w-7xl grid items-center justify-center md:justify-normal w-full grid-cols-[auto_1fr] mx-auto text-white gap-x-10 md:flex max-w-screen-full">
				<div className="md:flex-grow md:basis-0 flex justify-start">
					<Link
						to="/"
						className="ml-4 flex items-center gap-2.5 font-bold transition-transform duration-300 hover:scale-110 text-"
					>
						<img
							src="/logoGRande_sin_fondo.png"
							alt="Logo"
							className="w-10 mr-2"
						/>
						<span className="text-[24px] md:text-[32px] font-bold">
							Karveol
						</span>
					</Link>
				</div>

				<nav
					className={`font-inter col-span-full row-[2/3] transition-all duration-400 ease-in-out overflow-hidden md:overflow-visible md:justify-center md:flex group/nav ${
						isOpen ? 'max-h-[500px]' : 'max-h-0'
					} md:max-h-full`}
				>
					<ul className="flex flex-col items-center overflow-hidden md:flex-row gap-x-2">
						<li className="flex justify-center w-full first:mt-5 md:first:mt-0 md:block md:w-auto">
							<Link
								onClick={closeMenu}
								to="/catalog"
								className="flex items-center md:w-auto justify-center gap-2 md:px-4 md:py-2 hover:bg-gray-900 md:rounded-2xl border border-transparent hover:border-gray-700 transition-all min-h-[50px] md:text-base px-5 py-4 text-xl duration-300 w-full"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="1.5em"
									height="1.5em"
									viewBox="0 0 16 16"
								>
									<path
										fill="currentColor"
										d="M14 12a2 2 0 1 1-3.999.001A2 2 0 0 1 14 12"
									/>
									<path
										fill="currentColor"
										d="M11.7 16c-.8 0-1.6-.2-2.3-.7L3.2 12c-.5-.4-.9-.6-1.3-1C.7 9.8 0 8.1 0 6.4s.7-3.3 1.9-4.5S4.7 0 6.4 0S9.7.7 11 1.9c.4.4.6.7 1 1.2l3.5 6.4c1 1.7.7 3.8-.7 5.2c-.9.9-1.9 1.3-3.1 1.3M6.4 1C5 1 3.6 1.6 2.6 2.6S1 5 1 6.4c0 1.5.6 2.8 1.6 3.8c.3.3.6.5 1.1.8l6.3 3.4c.6.4 1.2.5 1.8.5c.9 0 1.7-.3 2.3-1c1.1-1.1 1.3-2.7.5-4l-3.5-6.4c-.3-.4-.5-.7-.8-1C9.2 1.6 7.9 1 6.4 1"
									/>
									<path
										fill="currentColor"
										d="M11 7V6l-1.4-.5c-.1-.2-.1-.3-.2-.5l.6-1.3l-.7-.7l-1.3.6c-.2-.1-.3-.1-.5-.2L7 2H6l-.5 1.4c-.2.1-.3.1-.5.2L3.7 3l-.7.7l.6 1.3c-.1.2-.1.3-.2.5L2 6v1l1.4.5c.1.2.1.3.2.5L3 9.3l.7.7L5 9.4c.2.1.3.2.5.2L6 11h1l.5-1.4c.2-.1.3-.1.5-.2l1.3.6l.7-.7L9.4 8c.1-.2.2-.3.2-.5zM6.5 8C5.7 8 5 7.3 5 6.5S5.7 5 6.5 5S8 5.7 8 6.5S7.3 8 6.5 8"
									/>
								</svg>
								Catálogo
							</Link>
						</li>
						<li className="flex justify-center w-full first:mt-5 md:first:mt-0 md:block md:w-auto">
							<Link
								onClick={closeMenu}
								to="/blog"
								className="flex items-center md:w-auto justify-center gap-2 md:px-4 md:py-2  hover:bg-gray-900 md:rounded-2xl border border-transparent hover:border-gray-700 transition-all min-h-[50px] md:text-base px-5 py-4 text-xl duration-300 w-full"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="1.5em"
									height="1.5em"
									viewBox="0 0 48 48"
								>
									<g
										fill="none"
										stroke="currentColor"
										strokeLinejoin="round"
										strokeWidth="4"
									>
										<rect width="36" height="36" x="6" y="6" rx="3" />
										<path strokeLinecap="round" d="M6 17h36M17 42V17" />
									</g>
								</svg>
								Blog
							</Link>
						</li>
						<li className="flex justify-center w-full first:mt-5 md:first:mt-0 md:block md:w-auto">
							<Link
								onClick={closeMenu}
								to="/plans"
								className="flex items-center md:w-auto justify-center gap-2 md:px-4 md:py-2 hover:bg-gray-900 md:rounded-2xl border border-transparent hover:border-gray-700 transition-all min-h-[50px] md:text-base px-5 py-4 text-xl duration-300 w-full"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="1.5em"
									height="1.5em"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M6 2.25A2.75 2.75 0 0 0 3.25 5v14A2.75 2.75 0 0 0 6 21.75h7a.75.75 0 0 0 0-1.5H6c-.69 0-1.25-.56-1.25-1.25V5c0-.69.56-1.25 1.25-1.25h10c.69 0 1.25.56 1.25 1.25v5.5a.75.75 0 0 0 1.5 0V5A2.75 2.75 0 0 0 16 2.25z"
									/>
									<path
										fill="currentColor"
										d="M7 10.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3 0a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zm-3 3a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3 0a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm-3 3a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3 0a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
									/>
									<path
										fill="currentColor"
										d="M6.076 5.617C6 5.801 6 6.034 6 6.5s0 .699.076.883a1 1 0 0 0 .541.54C6.801 8 7.034 8 7.5 8h7c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C16 7.199 16 6.966 16 6.5s0-.699-.076-.883a1 1 0 0 0-.541-.54C15.199 5 14.966 5 14.5 5h-7c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541M18.75 14a.75.75 0 0 0-1.5 0v.417h-.087c-.957 0-1.913.7-1.913 1.766c0 .444.12.852.421 1.173c.278.295.633.431.908.513l2.418.701c.092.027.153.052.193.072a.3.3 0 0 1 .042.026l.002.004a.5.5 0 0 1 .016.145c0 .037-.016.093-.084.154a.5.5 0 0 1-.33.112h-1.505c-.419 0-.581-.274-.581-.416a.75.75 0 0 0-1.5 0c0 1.12.973 1.877 2 1.915V21a.75.75 0 0 0 1.5 0v-.417h.087c.957 0 1.913-.7 1.913-1.766c0-.444-.12-.852-.421-1.173c-.278-.295-.633-.431-.908-.513l-2.418-.701a1 1 0 0 1-.193-.072a.3.3 0 0 1-.042-.026l-.002-.004a.5.5 0 0 1-.016-.145c0-.037.016-.093.084-.154a.5.5 0 0 1 .33-.112h1.505c.419 0 .581.274.581.416a.75.75 0 0 0 1.5 0c0-1.12-.973-1.877-2-1.915z"
										opacity=".5"
									/>
								</svg>
								Planes
							</Link>
						</li>
					</ul>
					<div>
						{user ? (
						<>
							<Link
								onClick={closeMenu}
								to="/perfil"
								className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
							>
								Ver perfil
							</Link>
							<button
								onClick={() => {
									handleLogout();
									closeMenu();
								}}
								className="cursor-pointer px-4 justify-center rounded-[10px] flex items-center gap-x-2.5 hover:scale-105 transition-transform duration-300 bg-red-500 text-white border-brand-blue font-bold text-lg py-1.5"
							>
								Cerrar sesión
							</button>
						</>
					) : (
						<>
							<Link
								onClick={closeMenu}
								to="/log-in"
								className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
							>
								Iniciar sesión
							</Link>
							<Link
								onClick={closeMenu}
								to="/sign-up"
								className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold"
							>
								Registrarse
							</Link>
						</>
					)}
					</div>
				</nav>

				<div className="flex md:flex-grow md:basis-0 items-center gap-4 mr-4 ml-auto md:ml-0 justify-end md:hidden">
					
					<button
						onClick={toggleNav}
						className="flex items-center justify-center py-2 md:hidden"
					>
						<div className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 cursor-pointer">
							<span className={`h-0.5 w-6 bg-white rounded-md`} />
							<span className={`h-0.5 w-6 bg-white rounded-md`} />
							<span className={`h-0.5 w-6 bg-white rounded-md`} />
						</div>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
