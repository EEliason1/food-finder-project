import React, { createContext, useContext, useState, ReactNode } from "react";

interface LocationContextProps {
  location: { latitude: number; longitude: number } | null;
  setLocation: (location: { latitude: number; longitude: number }) => void;
  clearLocation: () => void;
}

interface LocationProviderProps {
  children: ReactNode;
}

const LocationContext = createContext<LocationContextProps | undefined>(
  undefined
);

export const LocationProvider: React.FC<LocationProviderProps> = ({
  children,
}) => {
  const [location, setLocationState] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const setLocation = (location: { latitude: number; longitude: number }) =>
    setLocationState(location);

  const clearLocation = () => setLocationState(null);

  return (
    <LocationContext.Provider value={{ location, setLocation, clearLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context)
    throw new Error("useLocation must be used within a LocationProvider");
  return context;
};
