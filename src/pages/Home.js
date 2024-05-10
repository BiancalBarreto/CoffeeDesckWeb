import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Innovation from "./Innovation.gif";
import cogumelo from "./cogumelo.jpg";
import './Home.css';

export default function Home(){
    return(
        <>
       <div className="container">
            <div class="row">
                <div className="col estilo text-start mt-lg-5">
                    <h1>Coffe Desck</h1>
                
                    <h1>Conectando.</h1> 
                
                    <h1>Resolvendo. </h1>
                
                    <h1>Simplificando.</h1>
                    <h4>Simplificando o suporte técnico,
                    nosso sistema conecta usuários e técnicos em uma jornada de resolução de problemas sem complicações.</h4>
                    <div class="mt-5">
                    <button class="btn botao botaofonte">Cadastre-se</button>
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
        </>
      

            
        
    )
}

