import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Finanzas, { useTodos } from "./Finanzas";

configure({ adapter: new Adapter() });

describe("Finanzas", () => {
  it("Llama a eliminarFinanza onClick", () => {
    const finanzas = [
      { desc: "Finanza 1", cant: 100 },
      { desc: "Finanza 2", cant: 80 },
    ];
    const eliminarFinanza = jest.fn();
    const wrapper = shallow(
      <Finanzas finanzas={finanzas} eliminarFinanza={eliminarFinanza} />
    );

    wrapper.find("button").at(1).simulate("click");
    expect(eliminarFinanza.mock.calls).toEqual([[0]]);

    const resultado1 = wrapper.text().includes("Finanza 1");
    const resultado2 = wrapper.text().includes("Finanza 2");

    expect(resultado1).toEqual(true);
    expect(resultado2).toEqual(true);
  });
});

describe("Custom Hook: useTodos", () => {
  it("guardarEnTodos", () => {
    const Test = (props) => {
      const hook = props.hook();
      return <div {...hook} />;
    };

    const wrapper = shallow(<Test hook={useTodos} />);
    let props = wrapper.find("div").props();
    props.guardarEnTodos({
      desc: "Descripcion",
      cant: 1500,
    });
    props = wrapper.find("div").props();
    expect(props.todos[0]).toEqual({
      descripcion: "Descripcion",
      cantidad: 1500,
    });
  });
});
