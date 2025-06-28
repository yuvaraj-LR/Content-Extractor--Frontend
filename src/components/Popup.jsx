import React from 'react'
import ContentExtraction from './PopupForContentExtraction';

const Popup = ({data}) => {
    return (
        <>
            <ContentExtraction popupData={data?.extractedContent} />
        </>
    )
}

export default Popup;