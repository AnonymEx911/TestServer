import React from 'react';
import { IoIosPerson } from 'react-icons/io';
import EventManager from '../../EventManager';

import logo from './images/logo.svg';

const keys = {
	'~': 'Курсор',
	Z: 'Микрофон',
	ALT: 'Меню игрока и ТС',
	I: 'Инвентарь игрока',
	Y: 'Инвентарь ТС',
	M: 'Телефон',
	U: 'Останов. анимацию',
	L: 'Замок ТС',
	'2': 'Двигатель ТС',
	G: 'Ремень безопасности',
	'0': 'Скрыть HUD'
};

class Hud extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
			district: 'District...',
            street: 'Street...',
			playerId: 0,
			online: 0,
		}
	}

	componentDidMount() {
		EventManager.addHandler('hud', (value) => {
			if (value.type === 'show') {
				this.setState({show: true})
			} else if (value.type === 'hide') {
				this.setState({show: false})
			} else if (value.type === 'updateValues') {
                this.setState({district: value.district});
                this.setState({street: value.street});
				this.setState({playerId: value.playerId});
				this.setState({online: value.online});
            }
		});
	}

    componentWillUnmount() {
		EventManager.removeHandler('hud')
	}

    render() {
		if (!this.state.show) {
			return null
		}
		return (
            <div className='hud'>
				<div className='hud_help'>
					<ul className='hud_help-list'>
						{Object.entries(keys).map(([key, value], index) => (
							<li className='hud_help-item' key={index}>
								<h4 className='hud_help-name'>{key}</h4>
								<p className='hud_help-desc'>{value}</p>
							</li>
						))}
					</ul>
				</div>
				<div className='hud_online'>
					<img src={logo} alt="logo" />

					<div className='hud_online-container'>
						<p className='player-id'>ID:{this.state.playerId}</p>

						<div className='hud_online-count'>
							<IoIosPerson />
							<span>{this.state.online}</span>
						</div>
					</div>
				</div>
				<div className='hud_location'>
					<h3 className='hud_location-street'>{this.state.street}</h3>
					<h4 className='hud_location-zone'>{this.state.district}</h4>
				</div>
			</div>
        )
    }
}

export default Hud;