const basePath = "https://content-extractor-5yc4.onrender.com/api/content";

export const addContentAPI = async (url) => {
    try {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url })
        };

        const addContentReq = await fetch(basePath, options);
        const addContentRes = await addContentReq.json();

        return addContentRes;
    } catch (error) {
        console.log(error);
    }
}

export const getContentAPI = async (url) => {
    try {
        const options = {
            method: "GET",
        }

        const getContentReq = await fetch(basePath, options);
        const getContentRes = await getContentReq.json();

        return getContentRes;
    } catch (error) {
        console.log(error);
    }
}