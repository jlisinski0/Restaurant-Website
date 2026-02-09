import FooterLeft from './FooterLeft'
import FooterCenter from './FooterCenter'

export default function Footer() {
	return (
		<div className='min-h-[50vh] w-full bg-accentTwo'>
			<div className='mx-auto max-w-300 text-white pt-20 text-center'>
				<h3 className='font-fjallaone text-4xl uppercase'>Restauracja</h3>
				<div className='flex flex-col items-center'>
					<FooterLeft />
				</div>
				<div className='flex flex-col'>
					<FooterCenter />
				</div>
				<div>
					<h4>Inne</h4>
				</div>
				<div></div>
			</div>
		</div>
	)
}
