import {createContext, useContext, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

const AuthContext = createContext({
    isAuthenticated: false,
    signIn: () => {},
    signOut: () => {}
});

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    const signIn = async() => {
        setIsAuthenticated(true)
    }

    const signOut = async() => {
        setIsAuthenticated(false)
    }

    const checkAuth = async () => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setIsAuthenticated(true);
    }

    useEffect(() => {
        checkAuth();
    }, [])

    if(isAuthenticated === undefined) {
        return (
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <ActivityIndicator/>
            </View>
        )
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);