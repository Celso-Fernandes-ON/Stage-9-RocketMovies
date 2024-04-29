import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Container, Form, NewTag } from './styles'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { MovieTag } from '../../components/MovieTag'
import { Button } from '../../components/Button'

export function New(){
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <Link to="/" >
                        <FiArrowLeft/> Voltar
                    </Link>

                    <h1>Novo filme</h1>

                    <div>
                        <Input placeholder="Título" type="text" />
                        <Input placeholder="Sua nota (de 0 a 5)" type="number" />
                    </div>

                    <Textarea placeholder="Observações"/>

                    <h2>Marcadores</h2>

                    <NewTag>
                        <MovieTag value="Drama" />
                        <MovieTag value="" isNew />
                    </NewTag>

                    <div>
                        <Button title="Excluir filme" />
                        <Button title="Salvar alterações" />
                    </div>

                </Form>
            </main>
        </Container>
    )
}