import PatternButton from '@UI/PatternButton';
import {
    DescriptionContainerArea, TextDescriptionHigher,
    DescriptionTextArea, TextDescription
} from './styles'
import { lightGreen } from 'src/shared/themes';

const DescriptionArea: React.FC = (props) => {
    return (
        <DescriptionContainerArea>
            <DescriptionTextArea>
                <TextDescription>The</TextDescription>
                <TextDescription>Greatest</TextDescription>
                <TextDescription>App</TextDescription>
            </DescriptionTextArea>
            <PatternButton color={lightGreen} isActive>for</PatternButton>
            <TextDescriptionHigher>LOTTERY</TextDescriptionHigher>
        </DescriptionContainerArea>
    )
}

export default DescriptionArea;