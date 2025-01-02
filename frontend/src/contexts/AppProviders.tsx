import React, { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";
import { RestaurantProvider } from "./RestaurantContext";
import { LocationProvider } from "./LocationContext";
import { PasswordResetProvider } from "./PasswordResetContext";

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <UserProvider>
      <AuthProvider>
        <PasswordResetProvider>
          <RestaurantProvider>
            <LocationProvider>{children}</LocationProvider>
          </RestaurantProvider>
        </PasswordResetProvider>
      </AuthProvider>
    </UserProvider>
  );
};
