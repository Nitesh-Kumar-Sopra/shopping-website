import styled from "styled-components";
import CategoriesItem from "./CategoriesItem";
import {Category} from "../data";
import {mobile} from "../reponsive";
const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile ({padding: "0px" , flexDirection:"column"})}
`;

const Categories = () => {
    return <Container>
        {Category.map(item =>(
            <CategoriesItem item={item} key={item.id}/>
        ))}
    </Container>;
}

export default Categories; 