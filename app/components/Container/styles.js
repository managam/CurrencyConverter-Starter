import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$primaryBlue'
    },
    secondContainer: {
        flex: 2,
        alignItems: 'baseline',
        justifyContent: 'center',
        backgroundColor: '$secondYellow'
    }
});

export default styles;