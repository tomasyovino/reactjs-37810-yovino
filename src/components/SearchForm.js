import { Search } from "@material-ui/icons"; 
import { Input, SearchContainer } from "./StyledComponents";

const SearchForm = () => {

    return(
        <SearchContainer>
            <Input />
            <Search />
        </SearchContainer>
    );
}

export default SearchForm;