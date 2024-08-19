import  React, {createContext, useContext, useState, useEffect, ReactNode} from 'react'


interface contextType {
    toggleMenu: boolean
    changeToggleMenu :  () => void
}

interface providerProps {
    children: ReactNode
}

const defaultContext: contextType = {
    toggleMenu: false,
    changeToggleMenu: () => {}
}

const userContext = createContext<contextType>(defaultContext)

const myContext = () => useContext(userContext)

const ContextProvider = ({children}: providerProps) => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false)
    const changeToggleMenu = () => setToggleMenu(!toggleMenu)


    return <userContext.Provider value={{changeToggleMenu, toggleMenu}}>
        {children}
    </userContext.Provider>
}

export  {myContext, ContextProvider} 



