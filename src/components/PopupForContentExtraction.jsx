import React from 'react'
import { useContentContextHook } from '../context/content.context';
import styled, { keyframes } from 'styled-components';

// Subtle background animation keyframes
const gradientShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const ContentExtractionContainer = styled.div`
    margin: 16px;
`;

const ContentExtractionWrapper = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: auto;
    padding: 0 16px;
    position: relative;
    background: linear-gradient(90deg,rgba(16, 1, 38, 1) 0%, rgba(22, 2, 52, 1) 40%, rgba(62, 42, 99, 1) 100%);
    background-size: 800% 800%;
    animation: ${gradientShift} 16s ease-in-out infinite;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 16px;
    color: #ffffff;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.25),
        inset 0 0 1px rgba(255, 255, 255, 0.15);
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -150%;
        width: 150%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.08),
            transparent
        );
        animation: ${shimmer} 6s linear infinite;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(
            circle at 20% 80%,
            rgba(147, 51, 234, 0.15) 0%,
            transparent 70%
        ),
        radial-gradient(
            circle at 80% 20%,
            rgba(168, 85, 247, 0.15) 0%,
            transparent 70%
        );
        pointer-events: none;
        z-index: -1;
    }
`;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 16px;
    margin: 16px;
    position: relative;
    z-index: 1;

    @media(min-width: 768px) {
        flex-direction: row;
    }
`;

const Title = styled.h3`
    color: #e0e7ff;
    text-shadow: 0 0 10px rgba(147, 51, 234, 0.3);
`;

const TitleHead = styled.p`
    line-height: 22px;
    color: #f8fafc;
`;

const KeypointContainer = styled.ol`
    position: relative;
    z-index: 1;
`;

const KeypointItem = styled.li`
    margin-left: 40px; 
    list-style-type: decimal;
    color: #f1f5f9;
    margin-bottom: 8px;
    
    &::marker {
        color: #a855f7;
        font-weight: bold;
    }
`;

const Description = styled.h2`
    padding: 16px;
    color: #ffffff;
    text-align: center;
    text-shadow: 0 0 15px rgba(147, 51, 234, 0.4);
    position: relative;
    z-index: 1;
    background: linear-gradient(
        135deg,
        #ffffff 0%,
        #e0e7ff 50%,
        #c7d2fe 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

const ContentExtraction = ({popupData}) => {
    let { generatedContent } = useContentContextHook();

    console.log(generatedContent, "Content123");

    const {
        title = "",
        summary = "",
        keypoints = [],
    } = popupData
        ? popupData
        : generatedContent.status
        ? generatedContent.extractedData || {}
        : generatedContent || {};


    return (
        <>
            <ContentExtractionContainer>
                <ContentExtractionWrapper>
                    <Description>AI-Generated Summary of the Web Page</Description>
                    <Container>
                        <Title>Title: </Title>
                        <TitleHead>{title}</TitleHead>
                    </Container>
                    <Container>
                        <Title>Summary: </Title>
                        <TitleHead>{summary}</TitleHead>
                    </Container>
                    
                    <Container>
                        <Title>Keypoints: </Title>
                        <KeypointContainer>
                            {keypoints.map((keypoint, i) => (
                                <KeypointItem key={i}>{keypoint}</KeypointItem>
                            ))}
                        </KeypointContainer>
                    </Container>

                </ContentExtractionWrapper>
            </ContentExtractionContainer>
        </>
    )
}

export default ContentExtraction