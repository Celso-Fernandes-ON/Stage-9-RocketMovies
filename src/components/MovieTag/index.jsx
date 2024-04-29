import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from './styles'

export function MovieTag({isNew, value, onClick, ...rest}){
    return(
        <Container isNew={isNew}>
            <input type="text" value={value} readOnly={!isNew} {...rest} />
            <button ttpe="button" onClick={onClick} > {isNew ? <FiPlus/> : <FiX/> } </button>
            
        </Container>
    )
}