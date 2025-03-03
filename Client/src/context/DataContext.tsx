import { createContext, useState, ReactNode , useEffect } from 'react';
import SecureStorage from 'react-secure-storage';

interface DataContextProps {
  role?: string ;
  setRole: (role : string) => void;
  token?: string ;
  setToken : (tokken : string) => void;
  userId?: number;
  setUser : (user : number) => void;
  notif: number;
  setNotif : (user : number) => void;
}

export const DataContext = createContext<DataContextProps>(
  {
    role: "",
    setRole: () => {},
    token: "",
    setToken : () => {},
    setUser : () => {},
    notif : 0,
    setNotif : () => {}
  }
)


export const DataProvider = ({children }: { children: ReactNode }) => {
  const [role, setRoleState] = useState<string>(() => SecureStorage.getItem('role') as string || "");
  const [token, setTokenState] = useState<string>(() => SecureStorage.getItem('token') as string || "");
  const [userId, setUserState] = useState<number>(() => SecureStorage.getItem('user') as number);
  const [notif, setNotifState] = useState<number>(() => SecureStorage.getItem('notif') as number || 0);

  const setRole = (newRole : string) => {
    setRoleState(newRole);
    SecureStorage.setItem('role', newRole);
  };

  const setToken = (newToken : string) => {
    setTokenState(newToken);
    SecureStorage.setItem('token', newToken);
  };

  const setUser = (newUser : number) => {
    setUserState(newUser);
    SecureStorage.setItem('user', newUser);
  };

  const setNotif = (newNotif : number) => {
    setNotifState(newNotif);
    SecureStorage.setItem('notif', newNotif);
  };


  useEffect(() => {
    setRole(SecureStorage.getItem('role') as string || "");
    setToken(SecureStorage.getItem('token') as string || "");
    setUser(SecureStorage.getItem('user') as number );
    setNotif(SecureStorage.getItem('notif') as number );
  }, []);

  return (
    <DataContext.Provider value={{ role, setRole, token, setToken,userId ,setUser,notif, setNotif}}>
    {children}
  </DataContext.Provider>
  );
};
