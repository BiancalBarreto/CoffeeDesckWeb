import '../App.css';

export default function Footer(){
    return(
        <>
            <footer className="bg-cor">
                <div className='row'>
                    <div className='col-md-4 mt-5 text-center estilo'>
                        <p>
                        Transformando demandas em <br/>
                        soluções, nossa plataforma <br/>
                        de chamados técnicos oferece<br/>
                        eficiência e excelência em cada
                        <br/>
                        interação
                        </p>
                    </div>
                    <div className='col-md-1'>
                        <div className='vertical-line mt-5 mb-3'></div>
                    </div>
                    <div className='col-md-3 mt-5 estilo'>
                    <h6>Contato</h6>
                        <p> Email: coffedesck@gmail.com
                        <br/>
                        Numero: 99 9999-9999
                        <br/>
                        Endereço: <br/>
                        R. Manuel da Nóbrega, 986 - cjto 1122
                        <br/> - Paraíso, São Paulo - SP, 04001-003
                        </p>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8290210047494!2d-46.65735152529391!3d-23.57458347879069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59ea735dfcf3%3A0xee7ef175148a9fe9!2sR.%20Manuel%20da%20N%C3%B3brega%2C%20986%20-%20Para%C3%ADso%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004001-003!5e0!3m2!1spt-BR!2sbr!4v1715147028176!5m2!1spt-BR!2sbr"
                        allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <div className="footer-copyright bg-dark text-center">
                    <span class="text-light"> © 2024 Copyright </span>
                </div>
            </footer>

        </>
    )
}