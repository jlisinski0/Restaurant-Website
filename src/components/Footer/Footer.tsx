import FooterLeft from './FooterLeft'
import FooterCenter from './FooterCenter'
import FooterRight from './FooterRIght'

export default function Footer() {
	return (
		<div className='min-h-[30vh] w-full bg-accentTwo pb-10'>
			<div className='flex flex-col lg:flex-row mx-auto max-w-300 text-white pt-20 text-center  justify-center md:pt-20'>
				<div className='flex flex-col lg:pr-30'>
					<h3 className='font-fjallaone text-4xl uppercase'>Restauracja</h3>
					<div className='flex flex-col items-center'>
						<FooterLeft />
					</div>
				</div>
				<div className='flex flex-col items-center justify-center md:items-start md:flex-row  lg:items-center'>
					<div className='flex flex-col md:px-10'>
						<FooterCenter />
					</div>
					<div className='flex flex-col justify-start h-full md:px-10'>
						<FooterRight />
					</div>
				</div>
			</div>
		</div>
	)
}
