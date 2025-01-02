import React, { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";
import { RestaurantProvider } from "./RestaurantContext";
import { LocationProvider } from "./LocationContext";

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <RestaurantProvider>
          <LocationProvider>{children}</LocationProvider>
        </RestaurantProvider>
      </UserProvider>
    </AuthProvider>
  );
};
