import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addContentAPI, deleteContentAPI, getContentAPI, searchContentAPI } from "../api/content.api";

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
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [DBContentData, setDBContentData] = useState([]);
    const [readMorePopup, setReadMorePopup] = useState({});
    const [searchInput, setSearchInput] = useState('');
    const [searchResult, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            setLoading(true);
            const contentData = await getContentAPI();
            console.log("CONTENT: ", contentData);
            if(contentData?.status) {
                setDBContentData(contentData?.data);
                setLoading(false);
            }
        } catch (error) {
            console.error("Failed to fetch content data:", error);
        }
        };

        fetchData();
    }, []);

    function isValidUrl(urlString) {
        try {
            new URL(urlString);
            return true;
        } catch (error) {
            return false;
        }
    }

    const handleSubmitForm = async(e) => {
        e.preventDefault();

        if(!url) {
            toast.error("Please enter the url.");
            return;
        }

        if(!isValidUrl(url)) {
            toast.error("Please enter a valid url.");
            setUrl("");
            return;
        }   

        setLoading(true);
        const addContent = await addContentAPI(url);
        
        setLoading(false);

        if(addContent?.status) {
            setContentDisplay(true);
            
            setGeneratedContent(addContent?.extractedData ? addContent.extractedData : addContent?.addedData);

            if(addContent?.status) {
                setDBContentData(addContent?.data);
            }
        } else {
            if(addContent?.message) {
                toast.error(addContent?.message);
            } else {
                toast.error("Something went wrong. Please try again later.");
            }
            return;
        }
    }

    const handleReadMoreClick = (i, id) => {
        setReadMorePopup(DBContentData[i]);
    }

    const handleDeleteClick = async (i, id) => {
        setLoading(true);
        const deleteHistory = await deleteContentAPI(id);
        setLoading(false);

        if(deleteHistory.status) {
            toast.success("Deleted Successfully.");
            setDBContentData(deleteHistory.data);
        } 
    }

    const handleSearchInputClick = async (e) => {
        // e.preventDefault();

        if (!searchInput) setSearchResults(DBContentData);

        try {
            setLoading(true);
            const result = await searchContentAPI(searchInput)
            console.log("SEARCH: ", result);
            setLoading(false);

            if (result.status) {
                setSearchResults(result.data);
            } else {
                toast.error(result.message || "No results found");
            }
        } catch (error) {
            toast.error("Search failed");
        }
    }

    const handleInputKeyPress = async (value, e) => {
        setSearchInput(value);
        await handleSearchInputClick(e);
    }

    const value = { contentDisplay, setContentDisplay, generatedContent, url, setUrl, handleSubmitForm, loading, DBContentData, handleReadMoreClick, handleDeleteClick, readMorePopup, searchInput, setSearchInput, handleSearchInputClick, searchResult, handleInputKeyPress };

    return (
        <ContentContext.Provider value={value}>
            {children}
        </ContentContext.Provider>
    )
}

export {ContentContext, useContentContextHook};
export default ContentProvider;