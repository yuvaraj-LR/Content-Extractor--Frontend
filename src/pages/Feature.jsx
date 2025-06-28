import styled from 'styled-components'
import { StaticImage } from '../static/image';
import Popup from '../components/Popup';
import { useContentContextHook } from '../context/content.context';
import { PulseLoader } from 'react-spinners';

const TableHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 2fr;
  width: 100%;
  padding: 10px;
  font-weight: bold;
  background: #222;
  color: white;
  padding-left: 16px;

  @media(min-width: 768px) {
    grid-template-columns: 1fr 2.5fr 6.5fr 3fr;
  }
  `;

const TableBodyRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 2fr;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #444;
  align-items: center;
  @media(min-width: 768px) {
    grid-template-columns: 1fr 2.5fr 6.5fr 3fr;
  }
`;

const TableBodyListId = styled.div`
  padding: 0 8px;
`;
const TableBodyListTitle = styled.div`
  padding: 0 8px;
`;
const TableBodyListDescription = styled.div`
  padding: 0 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: none;
  
  @media(min-width: 768px) {
    display: block;
  }
`;

const TableActions = styled.div`
  display: flex;
  gap: 8px;
`;

const ReadMoreButton = styled.button`
  background-color: #6c5ce7;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointr;
`;

const DeleteButton = styled.button`
  background-color: #d63031;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
`;


const TableContainer = styled.div`
`;

const TableHeadList = styled.div`
`;

const TableHeadListDes = styled.div`
  display: none;

  @media(min-width: 768px) {
    display: block;
  }
`;


const TableBody = styled.div`
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  min-width: 50%;
  position: relative;
`;

const SortByContainer = styled.div`
`;

const FeatureHead = styled.h2`
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const SearchInput = styled.input`
  padding: 4px 4px 4px 36px;
  border-radius: 10px;
  width: 100%;
`;

const SubmitButton = styled.button`
  min-width: 100px;
  background: #240751;
  background: linear-gradient(144deg,rgba(36, 7, 81, 1) 40%, rgba(0, 0, 0, 1) 100%);
  color: #fff;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-transform: uppercase;
  min-height: 40px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    background: #240751;
    background: linear-gradient(144deg,rgba(36, 7, 81, 1) 0%, rgba(0, 0, 0, 1) 100%);
    transform: scale(1.02);
  }
`;

const DeleteText = styled.p`
  display: none;

  @media(min-width: 768px) {
    display: block;
  }
`;

const DeleteImg = styled.img`
  display: block;

  @media(min-width: 768px) {
    display: none;
  }
`;

const SearchIconImg = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 10px;
  left: 10px;
`;

const Loader = styled.div`
  position: absolute;
  top: calc(50% + 60px);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 25;
`

const Feature = () => {
  const { DBContentData, loading, handleReadMoreClick, handleDeleteClick, readMorePopup } = useContentContextHook();

  return (
    <>
      {readMorePopup?.url ? <Popup data={readMorePopup} /> : null }

      { loading ? 
      
      <Loader> <PulseLoader color='#ffffff' /></Loader> :
      
      <>
        <FeatureHead>Previously searched: </FeatureHead>

        <OptionsContainer>
          <SearchContainer>
            <SearchIconImg src={StaticImage.SearchIcon} alt="Search Icon" />
            <SearchInput type="text" placeholder='Search By Title' />
            <SubmitButton>Search</SubmitButton>
          </SearchContainer>
        </OptionsContainer>

        <TableContainer>
          <TableHead>
            <TableHeadList>Id</TableHeadList>
            <TableHeadList>Title</TableHeadList>
            <TableHeadListDes>Description</TableHeadListDes>
            <TableHeadList>Actions</TableHeadList>
          </TableHead>

          <TableBody>
            {
              DBContentData.map((data, i) => (
                <TableBodyRow key={i}>
                  <TableBodyListId>{i + 1}</TableBodyListId>
                  <TableBodyListTitle>{data.extractedContent.title.split(":")[0]}</TableBodyListTitle>
                  <TableBodyListDescription>{data.extractedContent.summary}</TableBodyListDescription>
                  <TableActions>
                    <ReadMoreButton onClick={(e) => handleReadMoreClick(i)} >Read More</ReadMoreButton>
                    <DeleteButton onClick={(e) => handleDeleteClick(i)}>
                      <DeleteText>Delete</DeleteText>
                      <DeleteImg src={StaticImage.DeleteIcon} />
                    </DeleteButton>
                  </TableActions>
                </TableBodyRow>
              ))
            }
          </TableBody>
        </TableContainer>
      </>}
    </>
  )
}

export default Feature