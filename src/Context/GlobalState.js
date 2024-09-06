import { createContext ,useState } from "react";

export const GlobalContext = createContext();

export const GloabalProvider =(props)=>{
    const [deger,setDeger] = useState("Ömer");
    return(
        <GlobalContext.Provider 
        value={{
            id:25, 
            deger:deger,
            linkler:["Anasayfa",
            "Hakkımızda",
            "İletişim",
            "Portfolyo"
            ],
            setDeger,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}