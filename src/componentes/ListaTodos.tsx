const ListaTodos = () => {
  return (
    <div>
      {/* Lista Todos */}
      <ul className="list-group mt-4">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            Ir a realizar compras
          </div>
          <input className="form-check-input" type="checkbox" />
        </li>
      </ul>
    </div>
  );
};

export default ListaTodos;
