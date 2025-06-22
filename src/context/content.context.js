import { createContext, useContext, useState } from "react";

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

    const dummyData = {
        url: "https://www.magzter.com/",
        title: "Magzter: Unlimited Digital Magazine and Newspaper Subscription",
        summary: "Magzter offers a subscription service providing unlimited access to over 9,500 magazines and newspapers. The service is accessible on any device, with the option to cancel at any time. It caters to diverse interests, with curated content based on user personas, such as Visionary Business Leaders, Tech Titans, and Gen AI enthusiasts. The platform showcases a wide range of publications including The Wall Street Journal, Time, The Washington Post, Vogue India, and several other prominent titles across various categories.",
        keypoints: [
            "Provides unlimited access to 9,500+ magazines and newspapers through a single subscription.",
            "Offers digital reading on any device with no long-term commitment (cancel anytime).",
            "Features curated content based on user personas to enhance discovery.",
            "Includes a wide variety of publications across news, business, entertainment, and lifestyle categories.",
            "Showcases cover stories and highlights from featured publications.",
        ]
    }

    const [contentDisplay, setContentDisplay] = useState(false);
    const [generatedContent, setGeneratedContent] = useState({});

    const value = { contentDisplay, setContentDisplay, generatedContent };

    return (
        <ContentContext.Provider value={value}>
            {children}
        </ContentContext.Provider>
    )
}

export {ContentContext, useContentContextHook};
export default ContentProvider;