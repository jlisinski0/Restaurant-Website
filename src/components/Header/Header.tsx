import SubText from './HeaderSubText'
import Toast from '../Toast/Toast'

export default function Header() {
	return (
		<header className='h-screen-1/2 w-full px-5 pt-30 dotBackground'>
			<div className='flex flex-col justify-start items-start m-auto max-w-300 h-full w-full overflow-hidden py-20'>
				<div>
					<h1 className='text-black font-fjallaone text-6xl uppercase max-w-[320px] md:text-8xl'>Restauracja Polskie potrawy</h1>
				</div>
				<SubText />
				<Toast />
			</div>
		</header>
	)
}
