import React from 'react'

const Modal = ({ selectedImg, setSelectedImg }) => {
	const clickHandler = (e) => {
		if (e.target.classList.contains('backdrop')) {
			setSelectedImg(null)
		}
	}

	return (
		<div className='backdrop' onClick={clickHandler}>
			<img src={selectedImg} alt='enlarged pic' />
		</div>
	)
}

export default Modal
