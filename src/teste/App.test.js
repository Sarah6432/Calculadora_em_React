import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('Calculadora', () => {
  test('renderiza os botões e o display', () => {
    render(<App />);
    
    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
    
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].forEach(num => {
      expect(screen.getByText(num)).toBeInTheDocument();
    });
    
    ['+', '-', 'x', '/', '=', 'C'].forEach(op => {
      expect(screen.getByText(op)).toBeInTheDocument();
    });
  });
  //teste se está renderizando corretamente//
  test('insere números no display', () => {
    render(<App />);
    
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('5'));
    
    expect(screen.getByDisplayValue('25')).toBeInTheDocument();
  });
  //teste se está somando dois números corretamente//
  test('soma dois números corretamente', () => {
    render(<App />);

    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByDisplayValue('10')).toBeInTheDocument();
  });
  //teste se está subtraindo dois números corretamente//
  test('subtrai dois números corretamente', () => {
    render(<App />);

    fireEvent.click(screen.getByText('C'));
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByDisplayValue('5')).toBeInTheDocument();
  });
  //teste se está multiplicando dois números corretamente//
  test('multiplica dois números corretamente', () => {
    render(<App />);

    fireEvent.click(screen.getByText('C'));
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByDisplayValue('18')).toBeInTheDocument();
  });
  //teste se divide os números corretamente//
  test('divide dois números corretamente', () => {
    render(<App />);

    fireEvent.click(screen.getByText('C'));
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByDisplayValue('4')).toBeInTheDocument();
  });
  //teste de limpeza do display//
  test('limpa o display ao clicar em C', () => {
    render(<App />);

    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('C'));

    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
  });
  //teste de integração, execução das operações em sequência//
  test('executa todas as operações em sequência (teste de integração)', () => {
    render(<App />);
    
    fireEvent.click(screen.getByText('C'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('10')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('C'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('10')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('C'));
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('5')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('C'));
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('2')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('C'));
    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
  });
});
