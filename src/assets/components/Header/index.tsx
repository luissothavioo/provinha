import * as S from "./styles"

export function Header() {
    return (
        <>
            <S.Header>
                <h1>Inovando na Tecnologia</h1>
                <S.NavBar>
                    <ul>
                        <li>
                            <h3>Notícias</h3>
                        </li>
                        <li>
                            <a href="/topicos">Tópicos</a>
                        </li>
                        <li>
                            <a href="/descricao">Descrição</a>
                        </li>
                    </ul>
                </S.NavBar>
            </S.Header>
        </>
    )
}