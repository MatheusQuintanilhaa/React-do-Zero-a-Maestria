import './MyForm.css';

import { useState } from 'react';


const MyForm = ({user}) => {
  // 6 - CONTROLLED INPUT
  // 3 - GERENCIAMENTO DE DADOS
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const handleName = (e) => {
    setName(e.target.value);
  }

  // console.log(name);
  // console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulário");
    console.log(name,email);
  }

  return (
    <div>
          {/* 5 - ENVIO DE FORM  */}

          {/* 1 - CRIAÇÃO DE FORM */}
          <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
  
              </div>
                        {/* 2 - LABEL ENVOLVENDO  INPUT */}
              <label>
          <span>E-mail</span>
                        {/* 4 - SIMPLIFICAÇÃO DE MANIPULAÇÃO DE STATE  */}

          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
                </label>
              <input type="submit" value="Enviar" />
          </form>
    </div>
  )
}

export default MyForm