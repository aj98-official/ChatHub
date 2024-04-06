import { Box, styled, InputBase } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';


const Component = styled(Box)`
          height: 40px;
          background-color: #fff;
          border-bottom: solid 2px #f0f2f5;
          padding: 10px 15px;
          display: flex;
          align-items: center;
    `
const Wrap = styled(Box)`
          background-color: #f5f5f5;
          width: 100%;
          height: 90%;
          border-radius: 10px;
          display: flex;
          align-items: center;
    `

const Icon = styled(Box)`
          padding: 6px 15px;
          margin-right: 10px;
    `
const StyledSearchIcon = styled(SearchIcon)`
          font-size: 20px;
          color: #738598
    `

const InputBox = styled(InputBase)`
            width: 100%;
            align-items: center;
    `
const Search = ({setText}) => {

    return (
        <Component>
            <Wrap>
                <Icon>
                    <StyledSearchIcon />
                </Icon>
                <InputBox placeholder="Search" onChange={(e) => setText(e.target.value)} />
            </Wrap>
        </Component>
    )
}

export default Search;