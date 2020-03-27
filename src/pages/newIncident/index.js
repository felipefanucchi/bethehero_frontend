import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import { FiArrowLeft } from 'react-icons/fi'

import logo from '../../assets/images/logo.svg';

import { api } from '../../services/api';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ong_id');
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    const data = { title, description, value };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      });

      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso.');
    }
  }

  return (
    <div className="new-incident">
      <div className="content">
        <section>
          <img src={logo} alt="Be the Hero"/>
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          <Link to="/profile" className="back-link">
            <FiArrowLeft  size={16} color="#E02041" />
            Voltar para Home
          </Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}/>
          <textarea 
            type="email" 
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)} />
          <input 
            type="text" 
            placeholder="Valor em Reais"
            value={value}
            onChange={e => setValue(e.target.value)} />
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}