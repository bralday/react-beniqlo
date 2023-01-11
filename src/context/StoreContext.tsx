import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type StoreItem = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

type StoreProviderProps = {
  children: ReactNode;
};

// for better IDE auto completion
type StoreContext = {
  storeItems: StoreItem[];
  isLoading: boolean;
  httpError: any;
};

const StoreContext = createContext({} as StoreContext);

export function useStore() {
  // for context
  return useContext(StoreContext);
}

export function StoreProvider({ children }: StoreProviderProps) {
  // for store fetching
  const [storeItems, setStoreItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        "https://react-http-d1854-default-rtdb.firebaseio.com/inventory.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedItems = [];

      for (const key in responseData) {
        loadedItems.push({
          id: key,
          name: responseData[key].name,
          imgUrl: responseData[key].imgUrl,
          price: responseData[key].price,
        });
      }

      setStoreItems(loadedItems);
      setIsLoading(false);
    };

    fetchItems().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [storeItems]);

  return (
    <StoreContext.Provider
      value={{
        storeItems,
        isLoading,
        httpError,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
