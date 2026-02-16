export default function KoszykForm() {
	return (
		<div className='flex items-start justify-center min-w-25 pb-2  max-w-75 '>
			<form>
				<div>
					<input className='inputStyle' type='text' required placeholder='Imię' />
					<input className='inputStyle' type='text' required placeholder='Naziwsko' />
				</div>
				<input className='inputStyle ' type='text' required placeholder='Ulica' />
				<input className='inputStyle' type='text' required placeholder='Miasto' />
				<input className='inputStyle' type='number' required placeholder='Numer domu' />
				<input className='inputStyle' type='email' required placeholder='Email' />
			</form>
		</div>
	)
}
