import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: 'black'
	},

	logo: {
		height: '4%',
		width: '28%',
		marginTop: Constants.statusBarHeight * 1.5
		/*transform: [
			{ scale: 0.05 },
			{ translateX: -200 }
		]*/
	},

	edit: {
		position: 'absolute',
		top: Constants.statusBarHeight + 20,
		right: '5%'
	},

	text: {
		color: '#fff',
		textAlign: 'center',
		marginBottom: '12%',
		fontSize: 18
	},

	users: {
		alignSelf: 'center',
		width: '55%',
		height: '55%',
		borderRadius: 5,
		marginBottom: '15%'
	},

	block1: {
		width: '100%',
		height: '85%',
		borderRadius: 5,
		backgroundColor: 'red'
	},

	block2: {
		width: '100%',
		height: '85%',
		borderRadius: 5,
		backgroundColor: 'yellow'
	},


	block3: {
		width: '100%',
		height: '85%',
		borderRadius: 5,
		backgroundColor: 'blue'
	},

	block4: {
		width: '100%',
		height: '85%',
		borderRadius: 5,
		backgroundColor: 'green'
	},

	block5: {
		width: '100%',
		height: '85%',
		borderRadius: 5,
		backgroundColor: 'orange'
	},

	user: {
		width: '43%',
		height: '70%'
	},

	users_row: {
		flexDirection: 'row', 
		justifyContent: 'space-between',
		width: '100%',
		height: '33%'
	},

	user_name: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 12,
		marginTop: 10
	}
});