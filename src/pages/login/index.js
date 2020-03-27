import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'
import './style.css';

import heroesImg from '../../assets/images/heroes.png';
import logo from '../../assets/images/logo.svg';

import {api} from '../../services/api';

export default function Login() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post('/sessions', { id });

      localStorage.setItem('ong_id', id);
      localStorage.setItem('ong_name', response.data.name);
      history.push('profile');
    } catch(error) {
      alert('Falha no login.');
    }
  }

  return (
    <div className="login">
      <section className="form">
        <img src={logo} alt=""/>
        <form onSubmit={handleSubmit}>
          <h1>Faça seu Login</h1>
          <input
            type="text"
            placeholder="Sua ID"
            value={id} 
            onChange={e => setId(e.target.value)} />
          <button className="button" type="submit">Entrar</button>

          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt=""/>
    </div>
  )
}