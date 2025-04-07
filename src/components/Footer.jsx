import React from 'react'
import { FooterContainer } from './styles/FooterStyled'

const Footer = () => {
  return (
    <FooterContainer>
    <div className='contato'>
        <h3>Contato</h3>
        <p>Email: contato@lojajogos.com</p>
        <p>Telefone: (11) 91234-5678</p>
    </div>

    <div className='direitos'>
      <p>&copy; 2025 - Loja Jogos - Todos os direitos reservados.</p>
    </div>

    <div className='redes-sociais'>
      <h3>Redes Sociais</h3>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
      </ul>
    </div>
    </FooterContainer>
  )
}

export default Footer
