import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Innovation from "./Innovation.gif";
import cogumelo from "./cogumelo.jpg";
import '../App.css';
import Footer from "../components/Footer";

export default function Home(){
    return(
        <>
       <div className="container">
            <div class="row">
                <NavBar/>
                <div className="col estilo text-start mt-lg-5">
                    <h1>Coffe Desck</h1>
                
                    <h1>Conectando.</h1> 
                
                    <h1>Resolvendo. </h1>
                
                    <h1>Simplificando.</h1>
                    <h4>Simplificando o suporte técnico,
                    nosso sistema conecta usuários e técnicos em uma jornada de resolução de problemas sem complicações.</h4>
                    <div class="mt-5">
                    <button className="btn botao botaofonte">Cadastre-se</button>
                    </div> 
                </div>
                <div class="col estilo text-start mb-5">
                    <img src={Innovation}></img>
                </div>
            </div>
       </div>
       <div className="equipe">
        <div class="row text-center estilo">
            <h4>Equipe</h4>
        </div>
        <div className="row mt-5">
            <div className="col-sm-3">
                {/* <div className="card margemcard" style="width: 18rem;"> */}
                <div className="card margemcard">
                    <img src={cogumelo} className="card-img-top" ></img>
                    <div className="card-body">
                        <p className="card-text">
                            <Link to={'https://github.com/Nataly-Carvalho'}>
                                <i class="fa-brands fa-github m-1"></i></Link>
                            <Link to={'https://www.linkedin.com/in/nataly-carvalho-silva/'}>
                                <i class="fa-brands fa-linkedin"></i></Link>  
                                Nataly Carvalho  
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card margemcard" >
                    <img src={cogumelo} className="card-img-top"></img>
                    <div className="card-body">
                        <p className="card-text">
                            <Link to={'https://github.com/jucrodrigues'}>
                                <i class="fa-brands fa-github m-1"></i></Link>
                            <Link to={'https://www.linkedin.com/in/juliana-crodrigues/'}>
                                <i class="fa-brands fa-linkedin"></i></Link>  
                                Juliana Rodrigues  
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card margemcard" >
                    <img src={cogumelo} className="card-img-top"></img>
                    <div className="card-body">
                        <p className="card-text">
                            <Link to={'https://github.com/laregn'}>
                                <i class="fa-brands fa-github m-1"></i></Link>
                            <Link to={'https://www.linkedin.com/in/laysregn/'}>
                                <i class="fa-brands fa-linkedin"></i></Link>  
                                Lays Souza  
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card margemcard" >
                    <img src={cogumelo} className="card-img-top"></img>
                    <div className="card-body">
                        <p className="card-text">
                            <Link to={'https://github.com/BiancalBarreto'}>
                                <i class="fa-brands fa-github m-1"></i></Link>
                            <Link to={'https://www.linkedin.com/in/biancaleandrobarreto/'}>
                                <i class="fa-brands fa-linkedin"></i></Link>  
                                Bianca Barreto  
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card margemcard" >
                    <img src={cogumelo} className="card-img-top"></img>
                    <div className="card-body">
                        <p className="card-text">
                            <Link to={'https://github.com/Gracielle-Pereira'}>
                                <i class="fa-brands fa-github m-1"></i></Link>
                            <Link to={'https://www.linkedin.com/in/gracielle-pereira/'}>
                                <i class="fa-brands fa-linkedin"></i></Link>  
                                Gracielle Pereira  
                        </p>
                    </div>
                </div>
            </div>
        </div>
       </div>
       <div>
        <div className="container mt-5 m-5" id="contato">
            <div className="row justify-content-center">
                <div className="card border-dark m-5">
                    <div className="mb-3 mt-2 text-center">
                    Como podemos ajudar?
                    </div>
                    <div className="form-floating mb-3 mt-3">
                        <input type="text" className="form-control" id="floatingText" placeholder="Seu nome"></input>
                        <label for="floatingInput">Nome</label>
                    </div>
                    <div className="form-floating mb-3 mt-3">
                        <input type="email" className="form-control" id="floatingTextInput" placeholder="name@example.com"></input>
                        <label for="floatingInput">E-mail</label>
                    </div>
                    <div className="form-floating mb-3 mt-3">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                        <label for="floatingTextarea2">Mensagem</label>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-4 m-3">
                        <button class="btn botao" type="button">Enviar</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
       </div>
        </>
      

            
        
    )
}

