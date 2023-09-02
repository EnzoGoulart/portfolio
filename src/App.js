import Header from "./components/header";
import Perfil from './docs/fotoenzoperfil.jpeg'
import Curriculo from './docs/curriculo08.pdf'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { FaLaptop, FaSchool, FaBriefcase, FaTimes, FaLightbulb, FaGamepad, FaGithub, FaAddressBook} from "react-icons/fa";
import { useState } from "react"; 
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const [popup,setPopup] = useState(false)
  const [title,setTitle] = useState('')
  const [subtitle,setSubtitle] = useState('') 
  const [input7, setInput7] = useState('');
  async function insertFirebase() {
    
    try {
      const currentDate = new Date();
        
        const year = currentDate.getFullYear();  
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');  
        const day = String(currentDate.getDate()).padStart(2, '0');  
        const fDate = `${year}-${month}-${day}`;

      let dt = localStorage.getItem('date')
 
      if (input7.length <= 2) {
        return toast.error('Erro: Input muito curto');
      }
      if(!dt || dt[3] !== fDate[3] || dt[6] !== fDate[6] ||dt[9] !== fDate[9] ){
      const userRef = collection(db, "portfolio");
      await addDoc(userRef, {
        message: input7,
      }).then(()=>{
        
        localStorage.setItem('date',fDate)
        toast.success('Mensagem enviada!')  

      }).catch(e=>{
        console.log(e.message)
        toast.error('Devo ter desligado o meu servidor, mas isso não é um problema, me chame no linkedin!')
      })     
    }else{
      toast.error('limite de apenas 1 post por dia')
    }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  } 

  function showMore(){
    return (
      <div id="popupLi">
        <div id="xETitleLi">
          <FaTimes onClick={()=>
          { 
              setPopup(false);               
          }
          } id="closeLi" size={35} color="#e4e4e4" />
          <p id="titleLi">{title}</p>
        </div>
        <div id="linhaLi"></div>
        <p id="subtitleLi">{subtitle}</p>
      </div>
    );
  }
  function changeInput7(e){
    if(e.target.value.length <= 250){
      setInput7(e.target.value)
    }
  }
  return (
    <div>
    <div>
      <Header/>
      <div id="containerH"> 
      {popup && (
        <div id="divPo">
          {showMore()}
        </div>
      )}
          <div id="divImgH"><img id="imgH" src={Perfil}/></div> 
        <div id="textH">
          <p id="titleH">Enzo Goulart Scotti</p>
          <p id="subtitleH">desenvolvedor junior</p>
           
        </div>
      </div>
      <div id="div2">
        <p id="title2">Sobre mim</p>
        <p id="sobre2">
        Há aproximadamente 6 meses descobri minha paixão pela programação. Desde então, tenho me dedicado muito para me tornar um desenvolvedor profissional e progredir na área.
        </p>
      </div>
      <div id="div3">
        <p id="expAc3">Experiência acadêmica</p>
        <div className="deitaBoxes3">
          
          <div className="divBoxes3">
            <p className="um3">#1</p>
              <div className="boxauto3">
                <div className='painelAuto3'>
                  <p className="pPainelAuto3">Autodidata</p><FaLaptop size={28} color="#fff" />
                </div>
                  <p className="h1BoxAuto3">Autodidata</p>
                  <div className="linhaBox3"></div>
                  <p className="pBoxAuto3">Minha principal fonte de aprendizado, estudei em tempo integral de forma autodidata por uns 5 meses, incluindo cursos, aulas, projetos, etc.</p>
                        </div>
          </div>
          
            <div className="divBoxes3">
          <p className="um3">#2</p>
            <div className="boxauto3">
              <div className='painelAuto3'>
                <p className="pPainelAuto3">Graduação</p><FaSchool size={28} color="#fff" />
              </div>
                <p className="h1BoxAuto3">UniSatc</p>
                <div className="linhaBox3"></div>
                <p className="pBoxAuto3">Fiz apenas o 1º período e saí para focar no estudo autodidata.</p>
                      </div>
            </div>
          
        </div>
      </div>
      
      <div id="div4">
     
        <p className="expPr4">Experiência profissional</p>
        <div className="deitaBoxes3">
          <div className="divBoxes3">
          <p className="um3">#1</p>
            <div className="boxauto3">
              <div className='painelAuto3'>
                <p className="pPainelAuto3">Auxiliar</p><FaBriefcase size={28} color="#fff" />
              </div>
                <p className="h1BoxAuto3">Auxiliar PHP</p>
                <div className="linhaBox3"></div>
                <p className="pBoxAuto3">Recebi uma oportunidade como auxiliar de desenvolvimento usando a linguagem PHP.</p>
                <p className="dataBox3">08/23 - hoje</p>
                      </div>
            </div>
        </div>
      </div>   

      <div id="div5">
          <p className="txt5">Linguagens</p>
          <p id="subtitle5" >Clique para ver mais</p>
          <div className="divButtons5">
            <button className="button5" onClick={()=>{
            setPopup(true)
            setTitle("JavaScript + NodeJS") 
            setSubtitle("Comecei a estudar JavaScript no começo de maio e a partir daí mergulhei no mundo do front end. Fiz cursos de JavaScript puro e no final do mês já estava começando o framework ReactJS. A maioria dos meus projetos é em JS e é a lingaugem que eu mais domino atualmente.")
            }}>JS/NodeJS</button>
            <button className="button5" onClick={()=>{
            setPopup(true)
            setTitle("PHP") 
            setSubtitle("Tenho bom conhecimento em PHP puro por ter estudado enquanto autodidata. Atualmente trabalho com um framework feito em PHP, usando essa linguagem no front e no back.")
            }}>PHP</button>
            <button className="button5"  onClick={()=>{
            setPopup(true)
            setTitle("HTML & CSS") 
            setSubtitle("Sei bastante sobre essas duas, estudei pelo youtube e tenho projetos. Me baseio em outros projetos e não fico para trás.")
            }}>HTML & CSS</button>
            <button className="button5" onClick={()=>{
            setPopup(true)
            setTitle("Python") 
            setSubtitle("Foi minha primeira linguagem, onde desenvolvi parte da minha lógica, depois migrei para JS. ")
            }}>Python</button>
         </div>
          <p className="txt5">Banco de Dados</p>
            <div className="divButtons5">
              <button className="button5"  onClick={()=>{
            setPopup(true)
            setTitle("SQL - MySQL") 
            setSubtitle("Tenho cursos, projetos e é o banco que trabalho atualmente, junto com PHP.")
            }}>MySQL</button>
              <button className="button5" onClick={()=>{
            setPopup(true)
            setTitle("SQL - MySQL") 
            setSubtitle("Conheço assim como MySQL pois são parecidas e já usei, mas não tenho projetos no GitHub.")
            }}>Postgre</button>
              <button className="button5" onClick={()=>{
            setPopup(true)
            setTitle("NoSQL - MongoDB") 
            setSubtitle("Sei a linguagem e já usei, mas não tenho projetos no GitHub.")
            }} >MongoDB</button>
              <button className="button5" onClick={()=>{
            setPopup(true)
            setTitle("NoSQL - Firebase") 
            setSubtitle("Um banco de dados muito legal e fácil de utilizar. Tenho 3 projetos(incluindo o Think More) que foram feitos com ela. Aprendi em cursos na Udemy e  de forma autodidata.")
            }}>Firebase</button>              
            </div>
            <p className="txt5">Frameworks/Bibliotecas</p>
          <div className="divButtons5">  
                  <button className="button5" onClick={()=>{
            setPopup(true)
            setTitle("React") 
            setSubtitle("Tenho 2 cursos em React e alguns projetos(atualmente 6), além de estudar de forma autodidata. Estou fazendo um projeto grande sozinho, que está no meu Github.")
            }}>React</button>
                  <button className="button5" onClick={()=>{
            setPopup(true)
            setTitle("Tailwind") 
            setSubtitle("Tenho um curso da udemy nesse framework CSS, fiz alguns projetos usando ele junto com React, mas não estão no meu Github.")
            }}>Tailwind</button>
                  <button className="button5" onClick={()=>{
            setPopup(true)
            setTitle("Bootstrap") 
            setSubtitle("Aprendi ele por ser um frameworks CSS famoso, usei ele com javascript puro e com React.")
            }}>Bootstrap</button>
                  <button className="button5" onClick={()=>{
            setPopup(true)
            setTitle("Pygame") 
            setSubtitle("Aprendi ele pois queria aprender um pouco sobre como desenvolver jogos, fiz um projeto pequeno, mas me ajudou muito a entender sobre desenvolvimento de jogos.")
            }}>Pygame</button>
              </div>
              <p className="txt5">Extra</p>
              <div className="divButtons5">
              <button className="button5" onClick={()=>{
            setPopup(true)
            setTitle("Figma") 
            setSubtitle("Tenho um curso da udemy em Figma para melhorar meu design e fazer projetos mais bonitos e profissionais.")
            }}>Figma</button>
                  <button id="lastButton5" className="button5" onClick={()=>{
            setPopup(true)
            setTitle("Git & GitHub") 
            setSubtitle("Uso eles para salvar meus projetos.")
            }}>Git</button>
              </div>
      </div>
      <div id="div6">
        <p className="txt5">Projetos</p>
        <p id='subtitle6'>Clique no card para acessar o site do projeto</p>
        <div className="deitaBoxes3">
           
                  <div className="divBoxes3">
           <p className="um3">#1</p>
             <a href="https://tkmore.netlify.app/" target="_blank">
               <div className="boxauto3">
                 <div className='painelAuto3'>
                   <p className="pPainelAuto3">tkmore</p><FaLightbulb size={28} color="#fff" />
                 </div>
                   <p className="h1BoxAuto3">Think more</p>
                   <div className="linhaBox3"></div>
                   <p className="pBoxAuto3">Uma rede social em que os usuários postam ideias, conta com login, perfil, home,search e atualmente estou fazendo curtidas e comentários.</p>
                         </div>
             </a>
              </div>
             <div className="divBoxes3">
                     <p className="um3">#2</p>
             <a href="https://mq99tc.csb.app" target="_blank">
               <div className="boxauto3">
                 <div className='painelAuto3'>
                   <p className="pPainelAuto3">TicTacToe</p><FaGamepad size={28} color="#fff" />
                 </div>
                   <p className="h1BoxAuto3">TicTacToe</p>
                   <div className="linhaBox3"></div>
                   <p className="pBoxAuto3">Um jogo da velha com opção 1v1 e 1vMáquina, tem histórico, botao de Undo, um menu que permite personalização de cores e icones. </p>
          
                   </div>
             </a>
             </div>
             <div className="divBoxes3">
                     <p className="um3">#3</p>
             <a href="https://projetorepositoriosenzo.netlify.app" target="_blank">
               <div className="boxauto3">
                 <div className='painelAuto3'>
                   <p className="pPainelAuto3">Repositorios</p><FaGithub size={28} color="#fff" />
                 </div>
                   <p className="h1BoxAuto3">Projeto Repositorios</p>
                   <div className="linhaBox3"></div>
                   <p className="pBoxAuto3">Um site que deixa voce favoritar repositorios do Github e ver infos, ex: nome e issues, adicione no formato 'Usuario/Projeto', ex: 'EnzoGoulart/portfolio'.</p>
          
                   </div>
             </a>
             </div>
             <div className="divBoxes3">
                     <p className="um3">#4</p>
             <a href="https://gerenciamentotarefasenzo.netlify.app" target="_blank">
               <div className="boxauto3">
                 <div className='painelAuto3'>
                   <p className="pPainelAuto3">Tarefas</p><FaAddressBook size={28} color="#fff" />
                 </div>
                   <p className="h1BoxAuto3">Tarefas</p>
                   <div className="linhaBox3"></div>
                   <p className="pBoxAuto3">Um site de gerencimento de tarefas que permite registrar, concluir e editar. Tem sistema de login e as tarefas ficam salvas.</p>
          
                   </div>
             </a>
             </div>
             <div className="divBoxes3">
                     <p className="um3">#5</p>
             <a href="https://github.com/EnzoGoulart" target="_blank">
               <div className="boxauto3">
                 <div className='painelAuto3'>
                   <p className="pPainelAuto3">Github</p><FaGithub size={28} color="#fff" />
                 </div>
                   <p className="h1BoxAuto3">meu github</p>
                   <div className="linhaBox3"></div>
                   <p className="pBoxAuto3">Tenho mais de 20 projetos além dos que excluí ou não postei, acesse o meu github para ver todos!</p>
          
                   </div>
             </a>
             </div>
             
        </div>
      </div>
      <div id="div7">
      <p className="txt5">Currículo </p>
        <div id="divButtons7"> 
          <a href={Curriculo} download><button className="button5">Baixar</button></a>
        </div>
        <p className="txt5">Diga algo {input7.length>200 ? (<span id="colorgBGreen">{input7.length}/250</span>):(<span>{input7.length}/250</span>)}</p>
        <textarea value={input7} onChange={(e)=>{
          changeInput7(e)}} id="txtarea7" placeholder="faça uma pergunta, um elogio, uma crítica, uma mensagem, uma ofensa, qualquer coisa. Claro, de forma anônima!"/>
          <button id='btn7' onClick={ insertFirebase}>Enviar</button>
        <p id="pFim7">parece que você chegou ao fim!</p>
      </div>
      
      <div>
        
      </div>
      
      </div>
      <ToastContainer/>
      </div>
  );
}

export default App;
