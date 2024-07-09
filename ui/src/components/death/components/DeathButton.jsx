import React from 'react'

const DeathButton = ({text, type, subtitle, disable}) => {
	return (
		<button
			onClick={() => {
				try {
					mp.trigger('client:death:btn', type) // eslint-disable-line
				} catch (e) {}
			}}
			className='death__content__buttons__item' disabled={disable}>
			{text}
			{subtitle ? <span className='death__content__buttons__subtitle'>{subtitle}</span> : null}
		</button>
	)
}

export default DeathButton