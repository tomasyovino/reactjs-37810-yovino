import { Search } from "@material-ui/icons"; 
import { Input, SearchContainer } from "./StyledComponents";

const SearchForm = () => {
    const handleKeyDown = (e) => {
        const vowels = [65, 69 , 73, 79 , 85];
        for (let i = 0; i < vowels.length; i++){
            if (e.keyCode === vowels[i] ) e.preventDefault();
        }
    }

    return(
        <SearchContainer>
            <Input onKeyDown={handleKeyDown} />
            <Search />
        </SearchContainer>
    );
}

export default SearchForm;