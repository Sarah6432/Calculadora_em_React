import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('Calculadora', () => {
  test('renderiza os botões e o display', () => {
    render(<App />);
    
    //verifica se o display inicia com 0//
    expect(screen.getByDisplayValue('0')).toBeInTheDocument();

    //verifica se os botões numéricos existem//
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].forEach(num => {
      expect(screen.getByText(num)).toBeInTheDocument();
    });

    //verifica se os botões de operação existem//
    ['+', '-', 'x', '/', '=', 'C'].forEach(op => {
      expect(screen.getByText(op)).toBeInTheDocument();
    });
  });
  //teste de inserir números no display//
  test('insere números no display', () => {
    render(<App />);
    
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('5'));
    
    expect(screen.getByDisplayValue('25')).toBeInTheDocument();
  });
  //teste de soma de dois números//
  test('soma dois números corretamente', () => {
    render(<App />);

    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByDisplayValue('10')).toBeInTheDocument();
  });
  //teste de subtração de dois números//
  test('subtrai dois números corretamente', () => {
    render(<App />);

    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByDisplayValue('5')).toBeInTheDocument();
  });
   //teste de multiplicação de dois números//
  test('multiplica dois números corretamente', () => {
    render(<App />);

    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByDisplayValue('18')).toBeInTheDocument();
  });
  //teste de divisão de dois números//
  test('divide dois números corretamente', () => {
    render(<App />);

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
});
