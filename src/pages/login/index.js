import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import './style.css';
import heroesImg from '../../assets/images/heroes.png';
import logo from '../../assets/images/logo.svg';

export default function Login() {
  return (
    <div className="login">
      <section className="form">
        <img src={logo} alt=""/>
        <form>
          <h1>Faça seu Login</h1>
          <input type="text" placeholder="Sua ID"/>
          <button className="button" type="submit">Entrar</button>

          <a href="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </a>
        </form>
      </section>
      <img src={heroesImg} alt=""/>
    </div>
  )
}