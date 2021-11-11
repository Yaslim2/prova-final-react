import { Main } from './styles'
const PageWrapper: React.FC<{ isCentered?: boolean }> = (props) => {
    return (
        <Main isCentered={props.isCentered}>{props.children}</Main>
    )
}

export default PageWrapper