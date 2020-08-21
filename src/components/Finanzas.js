import React, { useState } from "react";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const guardarEnTodos = (finanza) => {
    const newArray = todos;
    const newInput = {
      descripcion: finanza.desc,
      cantidad: finanza.cant,
    };
    const result = [...newArray, newInput];
    setTodos(result);
  };

  return { todos, guardarEnTodos };
};

export default function Finanzas({ finanzas, eliminarFinanza }) {
  const { todos, guardarEnTodos } = useTodos();

  return (
    <div className="column is-half">
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Agregar a Permanente</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {finanzas.map((x, i) => (
            <tr key={i}>
              <td>{x.desc}</td>
              <td>{x.cant}</td>
              <td>
                <button
                  className="button is-info"
                  onClick={() => guardarEnTodos(x)}
                >
                  Agregar a Permanente
                </button>
              </td>
              <td>
                <button
                  className="button is-warning"
                  onClick={() => eliminarFinanza(i)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2
        style={{
          fontWeight: 700,
          padding: ".5rem",
          borderBottom: "solid .2rem #000",
        }}
      >
        Costos Importantes Permanentes
      </h2>
      <div>
        {todos.map((x, i) => (
          <div
            key={i}
            style={{ padding: ".5rem", borderBottom: "solid .05rem #333" }}
          >
            <div>
              <p
                style={{
                  width: "50%",
                  display: "inline-block",
                }}
              >
                {x.descripcion}
              </p>
              <p
                style={{
                  width: "50%",
                  display: "inline-block",
                }}
              >
                {x.cantidad}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
