export default function KoszykForm() {
	return (
		<div className='flex items-start justify-center min-w-25 pb-2  max-w-75 border-b border-snowWhite pb-10'>
			<form>
				<div>
					<input className='inputStyle' type='text' required placeholder='Imię' autoComplete='given-name' />
					<input className='inputStyle' type='text' required placeholder='Naziwsko' autoComplete='family-name' />
				</div>
				<input className='inputStyle ' type='text' required placeholder='Ulica' autoComplete='street-address' />
				<input className='inputStyle' type='text' required placeholder='Miasto' autoComplete='address-level2' />
				<input className='inputStyle' type='number' required placeholder='Numer domu' autoComplete='address-line1' />
				<input className='inputStyle' type='email' required placeholder='Email' autoComplete='email' />
			</form>
		</div>
	)
}
