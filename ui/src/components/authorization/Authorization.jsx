import React from 'react';
import {CSSTransition} from 'react-transition-group';

import user from './images/user.svg';
import lock from './images/lock.svg';
import email from './images/email.svg';
import promo from './images/promo.svg';

import EventManager from '../../EventManager';

class Authorization extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
			activeForm: 'login',

			username: '',
			loginReg: '',
			pass: '',
			email: '',
			promo: '',
			pass1: '',
			pass2: '',
		}
	}

	componentDidCatch(error, errorInfo) {
		mp.trigger('client:ui:debug', 'Authorization.jsx', error, errorInfo); // eslint-disable-line
	}

	handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			if (this.state.showAuto) this.clickLogin()
			else this.clickReg()
		}
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress)

		EventManager.addHandler('authorization', (value) => {
			if (value.type === 'show') {
				this.setState({show: true})
			} else if (value.type === 'hide') {
				this.setState({show: false})
			} else if (value.type === 'activeForm') {
				this.handleChange(value.value)
			} else return
		})
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress)
		EventManager.removeHandler('authorization')
	}

	handleChange(name) {
		this.setState(() => ({activeForm: undefined}))

		setTimeout(() => this.setState(() => ({activeForm: name})), 200)
	}

	valueLogin(event) {
		this.setState({username: event.target.value.replace(/[^a-zA-Z0-9]+/g, '')})
	}

	valuePassword(event) {
		this.setState({pass: event.target.value.replace(/[^a-zA-Z0-9]+/g, '')})
	}

	valueMailReg(event) {
		this.setState({email: event.target.value})
	}

	valuePromocodeReg(event) {
		this.setState({promo: event.target.value})
	}

	valueLoginReg(event) {
		this.setState({loginReg: event.target.value.replace(/[^a-zA-Z0-9]+/g, '')})
	}

	valuePasswordReg(event) {
		this.setState({pass1: event.target.value.replace(/[^a-zA-Z0-9]+/g, '')})
	}

	valuePasswordRegCheck(event) {
		this.setState({pass2: event.target.value.replace(/[^a-zA-Z0-9]+/g, '')})
	}

	clickLogin() {
		try {
			if (!this.state.login) {
				mp.trigger('signin', this.state.username, this.state.pass); // eslint-disable-line
			} else {
				mp.trigger('signin', this.state.username, this.state.pass); // eslint-disable-line
			}
		} catch (e) {
			console.log(e)
		}
	}

	clickReg() {
		try {
			mp.trigger('signup', this.state.email, this.state.loginReg, this.state.pass1, this.state.pass2, this.state.promo); // eslint-disable-line
		} catch (e) {
			console.log(e)
		}
	}

	render() {
		if (!this.state.show) {
			return null
		}

		return (
			<React.Fragment>
				<div className='background-blackout-auth' />
				<div className='auth-main__left'>
					<div className='auth-main__left-row'>
						<div className='auth-main__left-row-line'></div>

						<div className='auth-main__left-row-wrapper'>
							<div className='auth-main__left-row-title'>Самописный мод</div>
							<div className='auth-main__left-row-text'>
								Наша команда KWERT STUDIO старалась над своим игровым
								<br />
								модом, на нашем моде уже есть множество уникальных
								<br />
								механик.
							</div>
						</div>
					</div>

					<div className='auth-main__left-row'>
						<div className='auth-main__left-row-line'></div>

						<div className='auth-main__left-row-wrapper'>
							<div className='auth-main__left-row-title'>Современный дизайн</div>
							<div className='auth-main__left-row-text'>
								Команда KWERT STUDIO старалась сделать уникальный, стильный а главное
								<br />
								удобный дизайн. Каждый интерфейс был разаботан по самым главным
								<br />
								критериям удобен и красивый.
							</div>
						</div>
					</div>

					<div className='auth-main__left-row'>
						<div className='auth-main__left-row-line'></div>

						<div className='auth-main__left-row-wrapper'>
							<div className='auth-main__left-row-title'>Уникальные системы</div>
							<div className='auth-main__left-row-text'>
								Команда KWERT STUDIO предлогает удобные а главное уникальные системы
								<br />
								и мехники которые вы не найдёте на других проектах
								<br />
								и это всё под названием Horizon RolePlay.
							</div>
						</div>
					</div>
				</div>
				<CSSTransition in={!!this.state.activeForm} timeout={200} classNames='alert'>
					<div className='auth-main_wrapper'>
						{this.state.activeForm == 'login' ? (
							<div className='flex-row'>
								<div className='auth-main'>
									<React.Fragment>
										<div className='header-title'>Авторизация</div>
										<div className='header-text'>С возвращением, на Horizon RolePlay!</div>
										<div className='auth-input'>
											<img src={user} />
											<input
												type='text'
												pattern='[a-zA-Z0-9]*'
												placeholder='Введите логин'
												name='login-auth'
												className='auth-input-style'
												defaultValue={this.state.username}
												onChange={this.valueLogin.bind(this)}
											/>
										</div>
										<div className='auth-input'>
											<img src={lock} />
											<input
												type={this.state.passwordShown ? 'text' : 'password'}
												pattern='[a-zA-Z0-9]*'
												placeholder='Введите пароль'
												name='password-auth'
												className='auth-input-style'
												value={this.state.pass}
												onChange={this.valuePassword.bind(this)}
											/>
										</div>

										<div className='button-auth primary' onClick={this.clickLogin.bind(this)}>
											Авторизоваться
										</div>

										<div className='reg-buttons-wrapper' onClick={() => {this.handleChange('register')}}>
											<div className='reg-text'>Нет аккаунта?</div>
											<div className='reg-text'>Зарегистрироваться</div>
										</div>
									</React.Fragment>
								</div>
							</div>
						) : null}
						{this.state.activeForm == 'register' ? (
							<div className='auth-main'>
								<React.Fragment>
									<div className='header-title'>Регистрация</div>
									<div className='header-text'>Заполните данные для регистрации</div>
									<div className='auth-input'>
										<img src={user} />
										<input
											type='text'
											pattern='[a-zA-Z0-9]*'
											placeholder='Придумайте логин'
											name='create-login'
											className='reg-input-style'
											defaultValue={this.state.loginReg}
											onChange={this.valueLoginReg.bind(this)}
										/>
									</div>
									<div className='auth-input'>
										<img src={email} />
										<input
											type='text'
											placeholder='Введите свой E-mail'
											name='create-email'
											className='reg-input-style'
											value={this.state.email}
											onChange={this.valueMailReg.bind(this)}
										/>
									</div>
									<div className='auth-input'>
										<img src={lock} />
										<input
											type='password'
											pattern='[a-zA-Z0-9]*'
											placeholder='Придумайте пароль'
											value={this.state.pass1}
											name='create-password'
											className='reg-input-style'
											onChange={this.valuePasswordReg.bind(this)}
										/>
									</div>
									<div className='auth-input'>
										<img src={lock} />
										<input
											type='password'
											pattern='[a-zA-Z0-9]*'
											placeholder='Повторите пароль'
											value={this.state.passwordRegCheck}
											name='create-password-repeat'
											className='reg-input-style'
											onChange={this.valuePasswordRegCheck.bind(this)}
										/>
									</div>
									<div className='auth-input'>
										<img src={promo} />
										<input
											type='text'
											pattern='[a-zA-Z0-9]*'
											placeholder='Введите промокод (не обязательно)'
											value={this.state.promo}
											name='create-promocode'
											className='reg-input-style'
											onChange={this.valuePromocodeReg.bind(this)}
										/>
									</div>
									<div className='button-auth primary' onClick={this.clickReg.bind(this)}>
										Готово
									</div>

									<div className='reg-buttons-wrapper' onClick={() => {this.handleChange('login')}}>
										<div className='reg-text'>Уже есть аккаунт?</div>
										<div className='reg-text'>Войти</div>
									</div>
								</React.Fragment>
							</div>
						) : null}
					</div>
				</CSSTransition>
			</React.Fragment>
		)
	}
}

export default Authorization
