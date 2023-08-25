import * as S from "./styles";
export interface ICard {
    descricao: string
}
export const Card = ({ descricao }: ICard) => {
    return (
        <S.Aside>
            <article>
                <h3> {descricao} </h3>
            </article>
        </S.Aside>
    );
};