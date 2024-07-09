import React from 'react';
import DeathButton from './components/DeathButton';
import EventManager from '../../EventManager';

class Death extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
			deathChoosen: false,
			timeout: 0,
		}
	}

	componentDidMount() {
		EventManager.addHandler('death', (value) => {
			if (value.type === 'show') {
				this.setState({show: true})
			} else if (value.type === 'hide') {
				this.setState({show: false})
			} else if (value.type === 'updateItems') {
				try {
					this.setState({show: true})
					this.setState({name: value.name})
				} catch (e) {}
			}
		});
	}

	getTimeLeft() {
		var sec_num = parseInt(this.state.timeout, 10)
		var hours = Math.floor(sec_num / 3600)
		var minutes = Math.floor(sec_num / 60) % 60
		var seconds = sec_num % 60

		return [hours, minutes, seconds]
			.map((v) => (v < 10 ? '0' + v : v))
			.filter((v, i) => v !== '00' || i > 0)
			.join(':')
	}

	componentWillUnmount() {
		EventManager.removeHandler('death')
	}

	render() {
		if (!this.state.show) {
			return null
		}
		return (
			<div className='death'>
				<div className='background-blackout-auth' />
				<div className='death__container'>
					<div className='death__content'>
						<span className='death__content__title'>Вы поетряли сознания</span>
						<div className='death__content__timeout'>
							До смерти осталось{' '}
							<span className='death__content__timeout__left'>{this.getTimeLeft(this)}</span>
						</div>
						<div className='death__content__buttons'>
							<DeathButton
								text='Умереть'
								type='death'
								disable={this.state.deathChoosen}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Death;