import Formulario from '../components/Formulario';
import { render, screen, fireEvent } from '@testing-library/react';
import ServersProvider from '../context/ServersContext';
import '@testing-library/jest-dom/extend-expect';

test('<Formulario />Cargar el formulario y revisar que todo sea correcto', () => {
  const wrapper = render(
    <ServersProvider>
      <Formulario />{' '}
    </ServersProvider>
  );
  // wrapper.debug();
  expect(screen.getByText('Monitoreo Servidores MELI')).toBeInTheDocument();
  expect(screen.getByTestId('serveroptions').tagName).toBe('OPTION');
  expect(screen.getByTestId('btn-submit').tagName).toBe('INPUT');
});

test('<Formulario />Cargar el formulario y revisar el submit', () => {
  const wrapper = render(
    <ServersProvider>
      <Formulario />{' '}
    </ServersProvider>
  );
  // wrapper.debug();

  const btnSubmit = screen.getByTestId('btn-submit');
  fireEvent.click(btnSubmit);
});

test('<Formulario />Cargar el formulario y revisar el submit', () => {
  const wrapper = render(
    <ServersProvider>
      <Formulario />{' '}
    </ServersProvider>
  );
  // wrapper.debug();

  fireEvent.change(
    screen.getByTestId('descripcion', {
      target: { value: 'fatal-error' },
    })
  );

  const btnSubmit = screen.getByTestId('btn-submit');
  fireEvent.click(btnSubmit);
});
