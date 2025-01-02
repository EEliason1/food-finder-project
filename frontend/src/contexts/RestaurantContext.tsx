import React, { createContext, useContext, useState, ReactNode } from "react";

interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  location: string;
}

interface RestaurantContextProps {
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant | null;
  setRestaurants: (restaurants: Restaurant[]) => void;
  selectRestaurant: (restaurant: Restaurant) => void;
}

interface RestaurantProviderProps {
  children: ReactNode;
}

const RestaurantContext = createContext<RestaurantContextProps | undefined>(
  undefined
);

export const RestaurantProvider: React.FC<RestaurantProviderProps> = ({
  children,
}) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);

  const selectRestaurant = (restaurant: Restaurant) =>
    setSelectedRestaurant(restaurant);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        selectedRestaurant,
        setRestaurants,
        selectRestaurant,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => {
  const context = useContext(RestaurantContext);
  if (!context)
    throw new Error("useRestaurant must be used within a RestaurantProvider");
  return context;
};
