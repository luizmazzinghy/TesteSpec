import { Buttom } from "./Button";
import { render, screen, logRoles, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("Está renderizando?", () => {
  const onClick = jest.fn();
  const label = "Label Test";
  render(<Buttom onClick={onClick} label={label} />);
  screen.getAllByRole("button", { name: label });
});

test("Renderizar o Titulo teste", async () => {
  render(<App />);

  const elementoTitulo = await screen.getByText("Titulo teste");
  expect(elementoTitulo.textContent).toStrictEqual("Titulo teste");
  expect(screen.getByText("Titulo teste")).toBeInTheDocument();
});

test("Se eu clicar vai chamar a função correta?", () => {
  const onClick = jest.fn();
  const label = "Label Test";
  render(<Buttom onClick={onClick} label={label} />);
  const button = screen.getByRole("button", { name: label });

  // Vejo que o botão não foi clicado
  expect(onClick).not.toBeCalled();
  // Clicando no botão
  fireEvent.click(button);
  // O botão foi clicado
  expect(onClick).toHaveBeenCalledTimes(1);
});

test.skip("Exemplo de debug", () => {
  const onClick = jest.fn();
  const label = "Label Test";
  const { container } = render(<Buttom onClick={onClick} label={label} />);

  // screen.debug();
  logRoles(container);
});
