import Header from "./components/header";
import Perfil from "./docs/fotoenzoperfil.jpeg";
import Curriculo from "./docs/curriculo08.pdf";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {
  FaLaptop,
  FaSchool,
  FaBriefcase,
  FaTimes,
  FaLightbulb,
  FaGamepad,
  FaGithub,
  FaAddressBook,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const [popup, setPopup] = useState(false);
  const [popupTrad, setPopupTrad] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [input7, setInput7] = useState("");
  const [lingua, setLingua] = useState("pt");

  const [f1, setF1] = useState("Traduzir");
  const [f2, setF2] = useState("Desenvolvedor");
  const [f3, setF3] = useState("Sobre mim");
  const [f4, setF4] = useState("Há aproximadamente 11 meses descobri minha paixão pela programação. Desde então, tenho me dedicado muito para me tornar um desenvolvedor profissional e progredir na área, atualmente estou em busca de uma oportunidade.");
  const [f5, setF5] = useState("Experiência acadêmica");
  const [f6, setF6] = useState("Autodidata");
  const [f7, setF7] = useState("Minha principal fonte de aprendizado, estudei em tempo integral de forma autodidata por uns 5 meses, incluindo cursos, aulas, projetos, etc.");
  const [f8, setF8] = useState("Graduação");
  const [f9, setF9] = useState("Fiz apenas o 1º período e saí para entrar em uma faculdade ead e focar no estudo autodidata.");
  const [f10, setF10] = useState("Graduação");
  const [f11, setF11] = useState("Atualmente estou no 2º período.");
  const [f12, setF12] = useState("Auxiliar");
  const [f13, setF13] = useState("Auxiliar PHP");
  const [f14, setF14] = useState("Recebi uma oportunidade como auxiliar de desenvolvimento usando a linguagem PHP.");
  const [f15, setF15] = useState("Linguagens");
  const [f16, setF16] = useState("Clique para ver mais");
  const [f17, setF17] = useState("Comecei a estudar JavaScript no começo de maio e a partir daí mergulhei no mundo do front end. Fiz cursos de JavaScript puro e no final do mês já estava começando o framework ReactJS. A maioria dos meus projetos é em JS e é a linguagem que eu mais domino atualmente.");
  const [f18, setF18] = useState("Tenho bom conhecimento em PHP puro por ter estudado enquanto autodidata. Atualmente trabalho com um framework feito em PHP, usando essa linguagem no front e no back.");
  const [f19, setF19] = useState("Sei bastante sobre essas duas, estudei pelo youtube e tenho projetos. Me baseio em outros projetos e não fico para trás.");
  const [f20, setF20] = useState("Foi minha primeira linguagem, onde desenvolvi parte da minha lógica, depois migrei para JS.");
  const [f21, setF21] = useState("Banco de Dados");
  const [f22, setF22] = useState("Tenho cursos, projetos e é o banco que trabalhei na Conceito Sistemas, junto com PHP.");
  const [f23, setF23] = useState("Sei a linguagem e já usei, mas não tenho projetos no GitHub.");
  const [f24, setF24] = useState("Um banco de dados muito legal e fácil de utilizar. Tenho 3 projetos(incluindo o Think More) que foram feitos com ela. Aprendi em cursos na Udemy e de forma autodidata.");
  const [f25, setF25] = useState("Frameworks/Bibliotecas");
  const [f26, setF26] = useState("Tenho 2 cursos em React e alguns projetos(atualmente 6), além de estudar de forma autodidata. Estou fazendo um projeto grande sozinho, que está no meu Github.");
  const [f27, setF27] = useState("Tenho um curso da udemy nesse framework CSS, fiz alguns projetos usando ele junto com React, mas não estão no meu Github.");
  const [f28, setF28] = useState("Aprendi ele por ser um frameworks CSS famoso, usei ele com javascript puro e com React.");
  const [f29, setF29] = useState("Aprendi ele pois queria aprender um pouco sobre como desenvolver jogos, fiz um projeto pequeno, mas me ajudou muito a entender sobre desenvolvimento de jogos.");
  const [f30, setF30] = useState("Extra");
  const [f31, setF31] = useState("Tenho um curso da udemy em Figma para melhorar meu design e fazer projetos mais bonitos e profissionais.");
  const [f32, setF32] = useState("Uso eles para salvar meus projetos.");
  const [f33, setF33] = useState("Projetos");
  const [f34, setF34] = useState("Clique no card para acessar o site do projeto");
  const [f35, setF35] = useState("Uma rede social em que os usuários postam ideias, conta com login, perfil, home,search e atualmente estou fazendo curtidas e comentários.");
  const [f36, setF36] = useState("Um jogo da velha com opção 1v1 e 1vMáquina, tem histórico, botao de Undo, um menu que permite personalização de cores e icones.");
  const [f37, setF37] = useState("Um site que deixa voce favoritar repositorios do Github e ver infos, ex: nome e issues, adicione no formato 'Usuario/Projeto', ex: 'EnzoGoulart/portfolio'.");
  const [f38, setF38] = useState("Um site de gerencimento de tarefas que permite registrar, concluir e editar. Tem sistema de login e as tarefas ficam salvas.");
  const [f39, setF39] = useState("meu github");
  const [f40, setF40] = useState("Tenho mais de 20 projetos além dos que excluí ou não postei, acesse o meu github para ver todos!");
  const [f41, setF41] = useState("Currículo");
  const [f42, setF42] = useState("Baixar");
  const [f43, setF43] = useState("Diga algo");
  const [f44, setF44] = useState("faça uma pergunta, um elogio, uma crítica, uma mensagem, uma ofensa, qualquer coisa. Claro, de forma anônima!");
  const [f45, setF45] = useState("Enviar");
  const [f46, setF46] = useState("parece que você chegou ao fim!");  
  const [f47, setF47] = useState("Experiência profissional");  

  useEffect(() => {
    let linguaStorage = localStorage.getItem("lingua")
    if(!linguaStorage || linguaStorage == null){
        setLingua("pt")  
    } else {
        setLingua(linguaStorage)
    }  
    
    mudaLingua(lingua)
  }, []);
  async function insertFirebase() {
    try {
      const currentDate = new Date();

      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      const fDate = `${year}-${month}-${day}`;

      let dt = localStorage.getItem("date");

      if (input7.length <= 2) {
        return toast.error("Erro: Input muito curto");
      }
      if (
        !dt ||
        dt[3] !== fDate[3] ||
        dt[6] !== fDate[6] ||
        dt[9] !== fDate[9]
      ) {
        const userRef = collection(db, "portfolio");
        await addDoc(userRef, {
          message: input7,
        })
          .then(() => {
            localStorage.setItem("date", fDate);
            toast.success("Mensagem enviada!");
          })
          .catch((e) => {
            console.log(e.message);
            toast.error(
              "Devo ter desligado o meu servidor, mas isso não é um problema, me chame no linkedin!"
            );
          });
      } else {
        toast.error("limite de apenas 1 post por dia");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  }

  function showMore() {
    return (
      <div id="popupLi">
        <div id="xETitleLi">
          <FaTimes
            onClick={() => {
              setPopup(false);
            }}
            id="closeLi"
            size={35}
            color="#e4e4e4"
          />
          <p id="titleLi">{title}</p>
        </div>
        <div id="linhaLi"></div>
        <p id="subtitleLi">{subtitle}</p>
      </div>
    );
  }

  function showTradOptions() {
    return (
      <div id="popupLi">
        <div id="xETitleLi">
          <FaTimes
            onClick={() => {
              setPopupTrad(false);
            }}
            id="closeLi"
            size={35}
            color="#e4e4e4"
          />
          <p id="titleLi">Linguagens</p>
        </div>
        <div id="linhaLi"></div>
        <div id="opcoesTrad">
          <div id="opcaoTrad" onClick={() => mudaLingua('pt')}>
            <button id="btnOpcaoTrad" style={{backgroundColor: lingua == 'pt' ? '#2D5531' : '#fff'}}></button>
            <p id="txtOpcaoTrad">Português</p>
          </div>

          <div id="opcaoTrad" onClick={() => mudaLingua('en')}>
            <button id="btnOpcaoTrad" style={{backgroundColor: lingua == 'en' ?  '#2D5531' : '#fff'}}></button>
            <p id="txtOpcaoTrad">English</p>
          </div>
        </div>
      </div>
    );
  }

  function mudaLingua(linguaNova){
    setLingua(linguaNova)
    localStorage.setItem("lingua", linguaNova)
    traducao(linguaNova)
  }

  function changeInput7(e) {
    if (e.target.value.length <= 250) {
      setInput7(e.target.value);
    }
  }
  function traducao(linguaTrad){
    if(linguaTrad == 'pt'){
        setF1("Translate");
        setF2("Desenvolvedor");
        setF3("Sobre mim");
        setF4("Há aproximadamente 11 meses descobri minha paixão pela programação. Desde então, tenho me dedicado muito para me tornar um desenvolvedor profissional e progredir na área, atualmente estou em busca de uma oportunidade.");
        setF5("Experiência acadêmica");
        setF6("Autodidata");
        setF7("Minha principal fonte de aprendizado, estudei em tempo integral de forma autodidata por uns 5 meses, incluindo cursos, aulas, projetos, etc.");
        setF8("Graduação");
        setF9("Fiz apenas o 1º período e saí para entrar em uma faculdade ead e focar no estudo autodidata.");
        setF10("Graduação");
        setF11("Atualmente estou no 2º período.");
        setF12("Auxiliar");
        setF13("Auxiliar PHP");
        setF14("Recebi uma oportunidade como auxiliar de desenvolvimento usando a linguagem PHP.");
        setF15("Linguagens");
        setF16("Clique para ver mais");
        setF17("Comecei a estudar JavaScript no começo de maio e a partir daí mergulhei no mundo do front end. Fiz cursos de JavaScript puro e no final do mês já estava começando o framework ReactJS. A maioria dos meus projetos é em JS e é a linguagem que eu mais domino atualmente.");
        setF18("Tenho bom conhecimento em PHP puro por ter estudado enquanto autodidata. Atualmente trabalho com um framework feito em PHP, usando essa linguagem no front e no back.");
        setF19("Sei bastante sobre essas duas, estudei pelo youtube e tenho projetos. Me baseio em outros projetos e não fico para trás.");
        setF20("Foi minha primeira linguagem, onde desenvolvi parte da minha lógica, depois migrei para JS.");
        setF21("Banco de Dados");
        setF22("Tenho cursos, projetos e é o banco que trabalhei na Conceito Sistemas, junto com PHP.");
        setF23("Sei a linguagem e já usei, mas não tenho projetos no GitHub.");
        setF24("Um banco de dados muito legal e fácil de utilizar. Tenho 3 projetos(incluindo o Think More) que foram feitos com ela. Aprendi em cursos na Udemy e de forma autodidata.");
        setF25("Frameworks/Bibliotecas");
        setF26("Tenho 2 cursos em React e alguns projetos(atualmente 6), além de estudar de forma autodidata. Estou fazendo um projeto grande sozinho, que está no meu Github.");
        setF27("Tenho um curso da udemy nesse framework CSS, fiz alguns projetos usando ele junto com React, mas não estão no meu Github.");
        setF28("Aprendi ele por ser um frameworks CSS famoso, usei ele com javascript puro e com React.");
        setF29("Aprendi ele pois queria aprender um pouco sobre como desenvolver jogos, fiz um projeto pequeno, mas me ajudou muito a entender sobre desenvolvimento de jogos.");
        setF30("Extra");
        setF31("Tenho um curso da udemy em Figma para melhorar meu design e fazer projetos mais bonitos e profissionais.");
        setF32("Uso eles para salvar meus projetos.");
        setF33("Projetos");
        setF34("Clique no card para acessar o site do projeto");
        setF35("Uma rede social em que os usuários postam ideias, conta com login, perfil, home,search e atualmente estou fazendo curtidas e comentários.");
        setF36("Um jogo da velha com opção 1v1 e 1vMáquina, tem histórico, botao de Undo, um menu que permite personalização de cores e icones.");
        setF37("Um site que deixa voce favoritar repositorios do Github e ver infos, ex: nome e issues, adicione no formato 'Usuario/Projeto', ex: 'EnzoGoulart/portfolio'.");
        setF38("Um site de gerencimento de tarefas que permite registrar, concluir e editar. Tem sistema de login e as tarefas ficam salvas.");
        setF39("meu github");
        setF40("Tenho mais de 20 projetos além dos que excluí ou não postei, acesse o meu github para ver todos!");
        setF41("Currículo");
        setF42("Baixar");
        setF43("Diga algo");
        setF44("faça uma pergunta, um elogio, uma crítica, uma mensagem, uma ofensa, qualquer coisa. Claro, de forma anônima!");
        setF45("Enviar");
        setF46("parece que você chegou ao fim!");
        setF47("Experiência profissional");          
    } else {
        setF1("Tradução");
        setF2("Developer");
        setF3("About me");
        setF4("About 11 months ago, I discovered my passion for programming. Since then, I have dedicated myself a lot to becoming a professional developer and progressing in the field, currently I am looking for an opportunity.");
        setF5("Academic Experience");
        setF6("Autodidact");
        setF7("My main source of learning, I studied full-time as a self-taught for about 5 months, including courses, classes, projects, etc.");
        setF8("Undergraduate");
        setF9("I only completed the 1st semester and left to join an online college and focus on self-taught study.");
        setF10("Undergraduate");
        setF11("Currently, I am in the 2nd semester.");
        setF12("Assistant");
        setF13("PHP Assistant");
        setF14("I received an opportunity as a development assistant using the PHP language.");
        setF15("Languages");
        setF16("Click to see more");
        setF17("I started studying JavaScript in early May and from there I immersed myself in the world of front-end. I took courses in pure JavaScript and by the end of the month I was already starting the ReactJS framework. Most of my projects are in JS and it's the language I currently dominate the most.");
        setF18("I have good knowledge of pure PHP for having studied it as self-taught. Currently, I work with a framework made in PHP, using this language in the front and back end.");
        setF19("I know a lot about these two, I studied through YouTube and I have projects. I base myself on other projects and I don't fall behind.");
        setF20("It was my first language, where I developed part of my logic, then I migrated to JS.");
        setF21("Database");
        setF22("I have courses, projects, and it's the database I worked on at Conceito Sistemas, alongside PHP.");
        setF23("I know the language and I've used it, but I don't have projects on GitHub.");
        setF24("A very cool and easy-to-use database. I have 3 projects (including Think More) that were made with it. I learned it in Udemy courses and self-taught.");
        setF25("Frameworks/Libraries");
        setF26("I have 2 courses in React and some projects (currently 6), in addition to studying self-taught. I am doing a large project alone, which is on my Github.");
        setF27("I have a Udemy course in this CSS framework, I did some projects using it together with React, but they are not on my Github.");
        setF28("I learned it because it is a famous CSS framework, I used it with pure JavaScript and with React.");
        setF29("I learned it because I wanted to learn a little about how to develop games, I did a small project, but it helped me a lot to understand about game development.");
        setF30("Extra");
        setF31("I have a Udemy course in Figma to improve my design and make projects more beautiful and professional.");
        setF32("I use them to save my projects.");
        setF33("Projects");
        setF34("Click on the card to access the project website");
        setF35("A social network where users post ideas, has login, profile, home, search, and I'm currently working on likes and comments.");
        setF36("A tic-tac-toe game with option 1v1 and 1vMachine, has history, Undo button, a menu that allows color and icon customization.");
        setF37("A website that lets you favorite repositories from Github and see infos, ex: name and issues, add in the format 'User/Project', ex: 'EnzoGoulart/portfolio'.");
        setF38("A task management website that allows you to register, complete and edit tasks. It has a login system and the tasks are saved.");
        setF39("my github");
        setF40("I have more than 20 projects besides the ones I deleted or didn't post, access my github to see all!");
        setF41("Resume");
        setF42("Download");
        setF43("Say something");
        setF44("make a question, a compliment, a criticism, a message, an offense, anything. Of course, anonymously!");
        setF45("Send");
        setF46("It seems like you've reached the end!");        
        setF47("Professional experience");        
    }
  }
  return (
    <div>
      <div>
        <Header />
        <div id="containerH">
          {popup && <div id="divPo">{showMore()}</div>}

          {popupTrad && <div id="divPo">{showTradOptions()}</div>}
          <button
            id="btnTraduzirH"
            onClick={() => {
              setPopupTrad(true);
            }}
          >
            {f1}
          </button>
          <div id="divImgH">
            <img id="imgH" src={Perfil} />
          </div>
          <div id="textH">
            <p id="titleH">Enzo Goulart Scotti</p>
            <p id="subtitleH">{f2}</p>
          </div>
        </div>
        <div id="div2">
          <p id="title2">{f3}</p>
          <p id="sobre2">
            {f4}
          </p>
        </div>
        <div id="div3">
          <p id="expAc3">{f5}</p>
          <div className="deitaBoxes3">
            <div className="divBoxes3">
              <p className="um3">#1</p>
              <div className="boxauto3">
                <div className="painelAuto3">
                  <p className="pPainelAuto3">{f6}</p>
                  <FaLaptop size={28} color="#fff" />
                </div>
                <p className="h1BoxAuto3">{f6}</p>
                <div className="linhaBox3"></div>
                <p className="pBoxAuto3">
                  {f7}
                </p>
              </div>
            </div>

            <div className="divBoxes3">
              <p className="um3">#2</p>
              <div className="boxauto3">
                <div className="painelAuto3">
                  <p className="pPainelAuto3">{f8}</p>
                  <FaSchool size={28} color="#fff" />
                </div>
                <p className="h1BoxAuto3">UniSatc</p>
                <div className="linhaBox3"></div>
                <p className="pBoxAuto3">
                  {f9}
                </p>
              </div>
            </div>

            <div className="divBoxes3">
              <p className="um3">#3</p>
              <div className="boxauto3">
                <div className="painelAuto3">
                  <p className="pPainelAuto3">{f10}</p>
                  <FaSchool size={28} color="#fff" />
                </div>
                <p className="h1BoxAuto3">Anhanguera</p>
                <div className="linhaBox3"></div>
                <p className="pBoxAuto3">{f11}</p>
              </div>
            </div>
          </div>
        </div>

        <div id="div4">
          <p className="expPr4">{f47}</p>
          <div className="deitaBoxes3">
            <div className="divBoxes3">
              <p className="um3">#1</p>
              <div className="boxauto3">
                <div className="painelAuto3">
                  <p className="pPainelAuto3">{f12}</p>
                  <FaBriefcase size={28} color="#fff" />
                </div>
                <p className="h1BoxAuto3">{f13}</p>
                <div className="linhaBox3"></div>
                <p className="pBoxAuto3">
                  {f14}
                </p>
                <p className="dataBox3">08/23 - 02/2024</p>
              </div>
            </div>
          </div>
        </div>

        <div id="div5">
          <p className="txt5">{f15}</p>
          <p id="subtitle5">{f16}</p>
          <div className="divButtons5">
            <button
              className="button5"
              onClick={() => {
                setPopup(true);
                setTitle("JavaScript + NodeJS");
                setSubtitle(
                  f17
                );
              }}
            >
              JS/NodeJS
            </button>
            <button
              className="button5"
              onClick={() => {
                setPopup(true);
                setTitle("PHP");
                setSubtitle(
                 f18
                );
              }}
            >
              PHP
            </button>
            <button
              className="button5"
              onClick={() => {
                setPopup(true);
                setTitle("HTML & CSS");
                setSubtitle(
                  f19
                );
              }}
            >
              HTML & CSS
            </button>
            <button
              className="button5"
              onClick={() => {
                setPopup(true);
                setTitle("Python");
                setSubtitle(
                 f20
                );
              }}
            >
              Python
            </button>
          </div>
          <p className="txt5">{f21}</p>
          <div className="divButtons5">
            <button
              className="button5"
              onClick={() => {
                setPopup(true);
                setTitle("SQL - MySQL");
                setSubtitle(
                  f22
                );
              }}
            >
              MySQL
            </button>
            
            <button
              className="button5"
              onClick={() => {
                setPopup(true);
                setTitle("NoSQL - MongoDB");
                setSubtitle(
                  f23
                );
              }}
            >
              MongoDB
            </button>
            <button
              className="button5"
              onClick={() => {
                setPopup(true);
                setTitle("NoSQL - Firebase");
                setSubtitle(
                  f24
                );
              }}
            >
              Firebase
            </button>
          </div>
          <p className="txt5">{f25}</p>
          <div className="divButtons5">
            <button
              className="button5"
              onClick={() => {
                setPopup(true);
                setTitle("React");
                setSubtitle(
                  f26
                );
              }}
            >
              React
            </button>
            <button
              className="button5"
              onClick={() => {
                setPopup(true);
                setTitle("Tailwind");
                setSubtitle(
                 f27
                );
              }}
            >
              Tailwind
            </button>
            <button
              className="button5"
              onClick={() => {
                setPopup(true);
                setTitle("Bootstrap");
                setSubtitle(
                  f28
                );
              }}
            >
              Bootstrap
            </button>
            <button
              className="button5"
              onClick={() => {
                setPopup(true);
                setTitle("Pygame");
                setSubtitle(
                  f29
                );
              }}
            >
              Pygame
            </button>
          </div>
          <p className="txt5">{f30}</p>
          <div className="divButtons5">
            <button
              className="button5"
              onClick={() => {
                setPopup(true);
                setTitle("Figma");
                setSubtitle(
                  f31
                );
              }}
            >
              Figma
            </button>
            <button
              id="lastButton5"
              className="button5"
              onClick={() => {
                setPopup(true);
                setTitle("Git & GitHub");
                setSubtitle(f32);
              }}
            >
              Git
            </button>
          </div>
        </div>
        <div id="div6">
          <p className="txt5">{f33}</p>
          <p id="subtitle6">{f34}</p>
          <div className="deitaBoxes3">
            <div className="divBoxes3">
              <p className="um3">#1</p>
              <a href="https://tkmore.netlify.app/" target="_blank">
                <div className="boxauto3">
                  <div className="painelAuto3">
                    <p className="pPainelAuto3">tkmore</p>
                    <FaLightbulb size={28} color="#fff" />
                  </div>
                  <p className="h1BoxAuto3">Think more</p>
                  <div className="linhaBox3"></div>
                  <p className="pBoxAuto3">
                    {f35}
                  </p>
                </div>
              </a>
            </div>
            <div className="divBoxes3">
              <p className="um3">#2</p>
              <a href="https://mq99tc.csb.app" target="_blank">
                <div className="boxauto3">
                  <div className="painelAuto3">
                    <p className="pPainelAuto3">TicTacToe</p>
                    <FaGamepad size={28} color="#fff" />
                  </div>
                  <p className="h1BoxAuto3">TicTacToe</p>
                  <div className="linhaBox3"></div>
                  <p className="pBoxAuto3">
                    {f36}{" "}
                  </p>
                </div>
              </a>
            </div>
            <div className="divBoxes3">
              <p className="um3">#3</p>
              <a
                href="https://projetorepositoriosenzo.netlify.app"
                target="_blank"
              >
                <div className="boxauto3">
                  <div className="painelAuto3">
                    <p className="pPainelAuto3">Repositorios</p>
                    <FaGithub size={28} color="#fff" />
                  </div>
                  <p className="h1BoxAuto3">Projeto Repositorios</p>
                  <div className="linhaBox3"></div>
                  <p className="pBoxAuto3">
                    {f37}
                  </p>
                </div>
              </a>
            </div>
            <div className="divBoxes3">
              <p className="um3">#4</p>
              <a
                href="https://gerenciamentotarefasenzo.netlify.app"
                target="_blank"
              >
                <div className="boxauto3">
                  <div className="painelAuto3">
                    <p className="pPainelAuto3">Tarefas</p>
                    <FaAddressBook size={28} color="#fff" />
                  </div>
                  <p className="h1BoxAuto3">Tarefas</p>
                  <div className="linhaBox3"></div>
                  <p className="pBoxAuto3">
                    {f38}
                  </p>
                </div>
              </a>
            </div>
            <div className="divBoxes3">
              <p className="um3">#5</p>
              <a href="https://github.com/EnzoGoulart" target="_blank">
                <div className="boxauto3">
                  <div className="painelAuto3">
                    <p className="pPainelAuto3">Github</p>
                    <FaGithub size={28} color="#fff" />
                  </div>
                  <p className="h1BoxAuto3">{f39}</p>
                  <div className="linhaBox3"></div>
                  <p className="pBoxAuto3">
                    {f40}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div id="div7">
          <p className="txt5">{f41} </p>
          <div id="divButtons7">
            <a href={Curriculo} download>
              <button className="button5">{f42}</button>
            </a>
          </div>
          <p className="txt5">
            {f43}{" "}
            {input7.length > 200 ? (
              <span id="colorgBGreen">{input7.length}/250</span>
            ) : (
              <span>{input7.length}/250</span>
            )}
          </p>
          <textarea
            value={input7}
            onChange={(e) => {
              changeInput7(e);
            }}
            id="txtarea7"
            placeholder={f44}
          />
          <button id="btn7" onClick={insertFirebase}>
            {f45}
          </button>
          <p id="pFim7">{f46}</p>
        </div>

        <div></div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
