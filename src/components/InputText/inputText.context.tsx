import { FC, ReactNode, createContext, useContext } from 'react';
import { BaseControlProps } from '../types/base-control.props';

export type InputTextContextProps = BaseControlProps;

const InputTextContext = createContext<InputTextContextProps>({} as InputTextContextProps);

export interface InputTextProviderProps extends BaseControlProps {
  children: ReactNode;
}

export const InputTextProvider: FC<InputTextProviderProps> = (props): JSX.Element => {
  return (
    <InputTextContext.Provider
      value={{
        isDisabled: props.isDisabled,
        isReadOnly: props.isReadOnly,
      }}>
      {props.children}
    </InputTextContext.Provider>
  );
};

export const useInputText = (): InputTextContextProps => {
  const context = useContext(InputTextContext);
  return context;
};
