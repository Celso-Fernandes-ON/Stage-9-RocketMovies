import { FiLock, FiMail, FiUser, FiArrowLeft, FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Avatar, Container, Form } from './styles'

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/> Voltar
                </Link>
            </header>
            <Form>
                <Avatar>
                    <img src="https://github.com/Celso-Fernandes-ON.png" alt="" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input id='avatar' type="file" />
                    </label>
                </Avatar>
                <Input type="text" placeholder="Usuário" icon={FiUser}/>
                <Input type="text" placeholder="E-mail" icon={FiMail}/>
                <Input type="password" placeholder="Senha atual" icon={FiLock}/>
                <Input type="password" placeholder="Nova senha" icon={FiLock}/>
                <Button title="Salvar" />
            </Form>
        </Container>
    )
}