// import React from "react";
// import Perfil from "../Components/Perfil.jsx";
// import Aluno from "../Aluno.json"; // Certifique-se de que o caminho está correto

// const InfoPerfil = () => {
//   const { usuarios } = Aluno;

//   return (
//     <div>
//       {usuarios?.map((usuario, index) => (
//         <Perfil
//           key={index}
//           ra={usuario.ra}
//           nome={usuario.nome}
//           itinerario={usuario.itinerario}
//           email={usuario.email}
//         />
//       ))}
//     </div>
//   );
// };

// export default InfoPerfil;

////////////////////////////////////////////////////////////////////////////////////////




import React from "react";
import Perfil from "../Components/Perfil.jsx";
import Aluno from "../Aluno.json"; // Certifique-se de que o caminho está correto

const InfoPerfil = () => {
  const { usuarios } = Aluno;
  const usuario = usuarios[0]

  return (
    <div>
      {usuario ? (
        <Perfil
          ra={usuario.ra}
          nome={usuario.nome}
          itinerario={usuario.itinerario}
          email={usuario.email}
        />
      ) : (
        <p>Nenhum usuário encontrado.</p>
      )}
    </div>
  );
};


export default InfoPerfil;



///////////////////////////////////////////////////////////////////////////////////////

// import { useParams } from 'react-router-dom';
// import Aluno from '../Aluno.json'; // Assumindo que este é o arquivo JSON

// function StudentPage() {
//   const { id } = useParams();
//   const estudante = Aluno.find((estudante) => estudante.id === parseInt(id, 10)); // Adicionando a base 10 para parseInt

//   if (!Aluno.length) {
//     return <p>Carregando...</p>;
//   }

//   return (
//     <div>
//       {estudante ? (
//         <div>
//           <h1>Informações do Aluno</h1>
//           <p>Nome: {estudante.nome}</p>
//           <p>Idade: {estudante.age}</p>
//           {/* Adicione mais informações conforme necessário */}
//         </div>
//       ) : (
//         <p>Aluno não encontrado.</p>
//       )}
//     </div>
//   );
// }

// export default StudentPage;