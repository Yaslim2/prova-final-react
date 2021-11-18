import { Main } from './styles'
import { PageWrapperProps } from './types'
const PageWrapper: React.FC<PageWrapperProps> = (props) => {
    return (
        <Main isCentered={props.isCentered}>{props.children}</Main>
    )
}

export default PageWrapper