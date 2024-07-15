import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },
    box: {
        backgroundColor: '#2c2c2c',
        padding: 30,
        borderRadius: 10,
        shadowColor: 'cyan',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
        width: '100%',
        maxWidth: 500,
        textAlign: 'center',
        marginVertical: 20,
        paddingTop: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    buttonBox: {
        flex: 1,
        marginHorizontal: 5,
        backgroundColor: '#3d3d3d',
        borderRadius: 5,
        overflow: 'hidden',
    },

    title: {
        color: '#00FFFF',
        fontSize: 25,
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#ffffff',
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    text: {
        color: '#ffffff',
        textAlign: 'center',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#000040',
        paddingVertical: 10,
        paddingTop: 30,
        width: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 1,
    },
    navbarButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    input: {
        width: '100%',
        height: 50,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#444',
        borderRadius: 5,
        backgroundColor: '#3d3d3d',
        color: 'white',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: 'white',
    },
});

export default styles;