import PatternButton from '../../UI/PatternButton';
import { DescriptionContainerArea, TextDescriptionHigher, DescriptionTextArea, TextDescription } from './styles'
const DescriptionArea: React.FC = (props) => {
    return (
        <DescriptionContainerArea>
            <DescriptionTextArea>
                <TextDescription>The</TextDescription>
                <TextDescription>Greatest</TextDescription>
                <TextDescription>App</TextDescription>
            </DescriptionTextArea>
            <PatternButton color="#B5C401" isActive>for</PatternButton>
            <TextDescriptionHigher>LOTTERY</TextDescriptionHigher>
        </DescriptionContainerArea>
    )
}

export default DescriptionArea;