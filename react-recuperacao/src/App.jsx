import './App.css'
import Banner from './Componentes/Banner'
import Footer from './Componentes/Footer'
import Galeria from './Componentes/Galeria'
import Header from './Componentes/Header'
import Livro from './Componentes/Livro'

function App() {

  return (
    <>
     <Header />
     <Banner />
     <Livro
     titulo={"Saga de Harry potter"}
     autor={"ㅤㅤㅤJ. K. Rowling"}
     ano={"ㅤㅤDe 1997 a 2007."}
     Sinopse={" ㅤA saga de Harry Potter é uma série de livros de fantasia escrita pela autora britânica J.K. Rowling. Composta por sete livros, a série narra as aventuras do jovem bruxo Harry Potter e seus amigos, Hermione Granger e Ron Weasley, enquanto eles frequentam a Escola de Magia e Bruxaria de Hogwarts e lutam contra o bruxo das trevas Lord Voldemort."}
      />
    <h1 id='livros'>Livros</h1>
    <Galeria />
    <Footer />
    </>
  )
}

export default App
