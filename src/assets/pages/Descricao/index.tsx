import * as S from "./styles"
import { dados } from "../../services/dados"
import { ComponentCard } from "../../components/index"

export function Descricao() {
    return (
        <S.Section>
            {dados.map(item => (
                <ComponentCard
                    key={item.id}
                    descricao={item.descricao}
                />
            ))}
        </S.Section>
    )
}