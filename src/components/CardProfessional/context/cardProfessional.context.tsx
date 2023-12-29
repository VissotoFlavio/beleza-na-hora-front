import { FC, ReactNode, createContext, useContext } from 'react';
import { ProfessionalModel } from '../../../models/Professional/professional.model';
import { BaseControlProps } from '../../types/base-control.props';

export interface CardProfessionalContextProps extends BaseControlProps {
  details: ProfessionalModel;
}

const CardProfessionalContext = createContext<CardProfessionalContextProps>(
  {} as CardProfessionalContextProps,
);

export interface CardProfessionalProviderProps extends BaseControlProps {
  children: ReactNode;
  details: ProfessionalModel;
}

export const CardProfessionalProvider: FC<CardProfessionalProviderProps> = (props): JSX.Element => {
  return (
    <CardProfessionalContext.Provider
      value={{
        isDisabled: props.isDisabled,
        isReadOnly: props.isReadOnly,
        details: props.details,
      }}>
      {props.children}
    </CardProfessionalContext.Provider>
  );
};

export const useCardProfessional = (): CardProfessionalContextProps => {
  const context = useContext(CardProfessionalContext);
  return context;
};
