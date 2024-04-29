import { Tag } from '../Tag'
import { FaStarHalfAlt, FaRegStar, FaStar } from "react-icons/fa";
import { Container } from './styles'

export function Movie({data, ...rest}){
    return(
        <Container {...rest} >
            <h1>{data.title} </h1>
            <div>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <p>
                {data.sinopse}
            </p>
            {
                data.tags && 
                <footer>
                    {data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}