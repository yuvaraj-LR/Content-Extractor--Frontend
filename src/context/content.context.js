import { createContext, useContext } from "react";

/*
1. Create Context.
2. Create custom hook.
3. Create Provider.
4. Return 
*/

const ContentContext = createContext();

const useContentContextHook = () => {
    const value = useContext(ContentContext);
    return value;
}

const ContentProvider = ({children}) => {
    const value = {};
    return (
        <ContentContext.Provider value={value}>
            {children}
        </ContentContext.Provider>
    )
}

export {ContentContext, useContentContextHook};
export default ContentProvider;