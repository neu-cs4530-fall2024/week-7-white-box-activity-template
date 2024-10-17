
import { OperatorKeys } from '../enums/operator-keys.enum';
import { IContext, IStateData } from '../interfaces';
import { ICalculatorState } from '../interfaces/calculator-state.interface';

export abstract class AbstractCalculatorState implements ICalculatorState {

  public constructor(protected _context: IContext, protected _data: IStateData) { }

  public display(): string {
    return this._data.display();
  }

  protected add(firstNumber: number, secondNumber: number): number {
    const result: number = firstNumber + secondNumber;
    this._context.notify(`${firstNumber} + ${secondNumber} = ${result}`);
    return result;
  }

  protected subtract(firstNumber: number, secondNumber: number): number {
    const result: number = (firstNumber - secondNumber);
    this._context.notify(`${firstNumber} - ${secondNumber} = ${result}`);
    return result;
  }

  protected multiply(firstNumber: number, secondNumber: number): number {
    const result: number = (firstNumber * secondNumber);
    this._context.notify(`${firstNumber} * ${secondNumber} = ${result}`);
    return result;
  }

  protected divide(firstNumber: number, secondNumber: number): number {
    const result: number = (firstNumber / secondNumber);
    this._context.notify(`${firstNumber} / ${secondNumber} = ${result}`);
    return result;
  }

  public abstract digit(digit: string): void;
  public abstract decimalSeparator(): void;
  public abstract binaryOperator(operator: OperatorKeys): void;
  public abstract equals(): void;
  public abstract clear(): void;

}
