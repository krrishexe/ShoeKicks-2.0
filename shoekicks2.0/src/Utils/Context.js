import {createContext ,useState} from 'react'


export const context = createContext();

const appContext = ({children}) =>{
    return (
        <context.Provider>
            {children}
        </context.Provider>
    )
}
export default appContext;