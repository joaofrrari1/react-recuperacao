export default function Livro({titulo, autor, ano, Sinopse}){
    return(
        <section className="sobrelivro">
            <div className="Informacoes">
                <h1>{titulo}</h1>
                <p>{autor}</p>
                <p>{ano}</p>
                <p>{Sinopse}</p>
            </div>
            <img src="https://flowgames.gg/wp-content/uploads/2023/04/serie-no-universo-harry-potter-pode-ser-realidade-confira-reproducao-hbo-max.jpg" alt="imagem"></img>
        </section>
    )
}