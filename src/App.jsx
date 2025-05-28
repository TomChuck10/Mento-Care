import "./App.css";
import FacebookLogo from "./assets/facebook_logo.svg";
import InstagramLogo from "./assets/instagram_logo.svg";
import TikTokLogo from "./assets/tiktok_logo.svg";
import Girl from "./assets/girl_main_page.png";
import Navbar from "./components/Navbar";

import { useIsMobile } from "../hooks/useIsMobile";

function App() {
	const isMobile = useIsMobile();

	return (
		<>
			<Navbar />
			<div className='h-[100vh] overflow-hidden relative'>
				<div className='flex flex-col justify-center items-start h-full px-[98px]'>
					<h1
						style={{
							fontFamily: "Cormorant Garamond, SemiBold",
							fontSize: "80px",
							color: "#FCAF56",
							marginBottom: "-10px",
							marginTop: "auto",
						}}>
						MENTO CARE
					</h1>
					<p className='max-w-[515px] text-[#FFF8E7]'>
						wyjątkowe miejsce, gdzie profesjonalizm łączy się z komfortem i
						indywidualnym podejściem. Diagnozujemy problemy skórne i dobieramy
						skuteczne terapie, stawiając na slow aging – naturalne piękno i
						zdrową, promienną cerę. Zapraszamy!
					</p>
					<div className='flex justify-between items-center w-full mt-auto py-[2rem] z-20'>
						<div className='flex space-x-4'>
							<div className='border-2 border-gray-400 rounded-full py-2 px-5 text-textPrimary'>
								Nad Babicą 2, Bochnia
							</div>
							<div className='border-2 border-gray-400 rounded-full py-2 px-5 text-textPrimary'>
								+48 798 144 399
							</div>
						</div>
						<div className='flex space-x-4 text-textPrimary items-center'>
							<a
								href='https://www.facebook.com/MentoBarberShop'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									src={FacebookLogo}
									alt='facebook_logo'
									style={{ height: "48px" }}
								/>
							</a>
							<a
								href='https://www.instagram.com/mento.barbershop/'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									src={InstagramLogo}
									alt='instagram_logo'
									style={{ height: "38px" }}
								/>
							</a>
							<a
								href='https://www.tiktok.com/@mento_barbershop'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									src={TikTokLogo}
									alt='instagram_logo'
									style={{ height: "38px" }}
								/>
							</a>
						</div>
					</div>
				</div>
				<img
					src={Girl}
					alt='background photo'
					className='absolute right-0 w-[40%] h-auto pointer-events-none z-10'
					style={{ bottom: -100 }}
				/>
				<div
					className='absolute bottom-0 left-0 w-full h-[30%] pointer-events-none z-10'
					style={{
						background:
							"linear-gradient(180deg, #0B0C0F00 0%, #0B0C0F80 24%, #0B0C0FBF 35%, #0B0C0F 100%)",
					}}></div>
			</div>
		</>
	);
}

export default App;
