import Formulario from "../componentes/Formulario"
import ListaTodos from "../componentes/ListaTodos"
import Navegacion from "../componentes/navegacion"
import Titulo from "../componentes/Titulo"

const MainPage= () =>  {
return <div className="container">
    <Titulo/>
    <Navegacion/>
    <Formulario/>
    <ListaTodos/>

}


export default MainPage