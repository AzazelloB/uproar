import React from 'react';

type StateHook<T extends object> = (props: any) => T;

class ContextOutOfProvider<T extends object> extends Error {
  constructor(f: StateHook<T>) {
    const fName = f.name.replace(/^use(\w)(\w+)state$/i, (_, firstLetter, rest) => firstLetter.toUpperCase() + rest);
    const message = `'use${fName}Context' must be used within '${fName}Provider'`;

    super(message);
  }
}

/** Naming convention for stateCreators is `use[StateName]state` */
export function createContext<T extends object>(stateCreator: StateHook<T>) {
  const Context = React.createContext<ReturnType<StateHook<T>> | undefined>(undefined);

  const Provider = ({ children, ...props } : { children: React.ReactNode }) => (
    <Context.Provider value={stateCreator(props)}>
      { children }
    </Context.Provider>
  );

  const useContext = () => {
    const context = React.useContext(Context);

    if (context === undefined) {
      throw new ContextOutOfProvider(stateCreator);
    }

    return context;
  };

  return [Provider, useContext] as const;
}
