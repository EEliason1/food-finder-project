import React, { createContext, useContext, useState, ReactNode } from "react";

interface PasswordResetContextProps {
  canAccessResetPage: boolean;
  allowResetPageAccess: () => void;
  restrictResetPageAccess: () => void;
}

interface PasswordResetProviderProps {
  children: ReactNode;
}

const PasswordResetContext = createContext<
  PasswordResetContextProps | undefined
>(undefined);

export const PasswordResetProvider: React.FC<PasswordResetProviderProps> = ({
  children,
}) => {
  const [canAccessResetPage, setCanAccessResetPage] = useState(false);

  const allowResetPageAccess = () => setCanAccessResetPage(true);
  const restrictResetPageAccess = () => setCanAccessResetPage(false);

  return (
    <PasswordResetContext.Provider
      value={{
        canAccessResetPage,
        allowResetPageAccess,
        restrictResetPageAccess,
      }}
    >
      {children}
    </PasswordResetContext.Provider>
  );
};

export const usePasswordReset = () => {
  const context = useContext(PasswordResetContext);
  if (!context) {
    throw new Error(
      "usePasswordReset must be used within a PasswordResetProvider"
    );
  }
  return context;
};
