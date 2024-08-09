// import {
// Container,
// Form,
// Titulo,
// InputWrapper,
// Input,
// Icon,
// Button
// } from '../Styles/StyledAlterarSenha';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "../Styles/Icon.js";


// const AlterarSenha = () => {
//     return (
//       <Container>
//         <Form>
//           <Titulo>Alterar Senha</Titulo>
//           <InputWrapper>
//             <Input type="password" placeholder="Senha atual" />
//             <Icon icon={faUser} />
//           </InputWrapper>
//           <InputWrapper>
//             <Input type="password" placeholder="Nova senha" />
//             <Icon icon={faUser} />
//           </InputWrapper>
//           <InputWrapper>
//             <Input type="password" placeholder="Confirme nova senha" />
//             <Icon icon={faUser} />
//           </InputWrapper>
//           <Button type="submit">Alterar</Button>
//         </Form>
//       </Container>
//     );
//   }
  
//   export default AlterarSenha;
  

import React, { useState } from 'react';
import {
  Container,
  Form,
  Titulo,
  InputWrapper,
  Input,
  Icon,
  Button
} from '../Styles/StyledAlterarSenha';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const PasswordChange = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      // Lógica para alterar senha
      console.log('Senha alterada com sucesso');
    } else {
      console.error('As senhas não coincidem');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Titulo>Alterar Senha</Titulo>
        <InputWrapper>
          <Input
            type="password"
            placeholder="Senha atual"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <Icon>
            <FontAwesomeIcon icon={faUser} />
          </Icon>
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            placeholder="Nova senha"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Icon>
            <FontAwesomeIcon icon={faUser} />
          </Icon>
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            placeholder="Confirme nova senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Icon>
            <FontAwesomeIcon icon={faUser} />
          </Icon>
        </InputWrapper>
        <Button type="submit">Alterar</Button>
      </Form>
    </Container>
  );
};

export default PasswordChange;