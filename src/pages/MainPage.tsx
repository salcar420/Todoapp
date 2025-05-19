const MainPage= () =>  {
return <div className="container">
    <h1>TODO APP</h1>
    <div>
        { /*seccion tablas*/ }

        <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">
        
        Tareas 

    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">
        Terminadas

    </a>
  </li>
  </ul>
    </div>
    <div>
       { /*Formulario TODOS*/ }

        <div className= "row mt-4" >
            <div className="col-md-10">
                <input className= "form-control" type="text"/>

            </div>
            <div className="col-md-2">
                <button  className="btn btn-primary" type="button">
                    Agregar
                </button>

            </div>
        </div>
    </div>
    <div>
        { /*Lista Todos*/ }

        <ul className="list-group mt-4">
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                ir a realizar compras   
             </div>

             <input className="form-check-input" type="checkbox"/>
             </li>
        </ul>
    </div>
</div>
}


export default MainPage