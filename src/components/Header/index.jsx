import { Input } from '../Input'
import { Link } from 'react-router-dom'
import { Container, Profile } from './styles'

export function Header(){
    return(
        <Container>
            <Link to="/" >
                RocketMovies
            </Link>
            <Input placeholder="Pesquisar pelo título"/>
            <Profile to="/profile" >
                <div>
                    <span>Bem-vindo</span>
                    <strong>Celso Fernandes</strong>
                </div>
                <img src="https://github.com/Celso-Fernandes-ON.png" alt="" />
            </Profile>
        </Container>
    )
}