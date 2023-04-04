import React,{useState} from 'react'
import './NovaDisciplina.css';
import DisciplinaForm  from './DisciplinaForm';


const NovaDisciplina = (props) => {
 
 const [disciform,setDisciForm] = useState()

 const guardarDisciplina = (disci) => {
  props.onAddDisciplina(disci)
  console.log(disci);
 }
function handleClick(){
  setDisciForm(!disciform)
}

  return (
   <div>
      <div className='new-disciplina'>
      { disciform &&(< DisciplinaForm onGuardarDisciplina = { guardarDisciplina }/> ) }
      {
        !disciform&&(<div>
          < button onClick={handleClick}>
            cadastrar
          </button>
        </div>)
      }
      </div>
      
   </div> 
  );
};

export default NovaDisciplina;

