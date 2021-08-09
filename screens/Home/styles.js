import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const images_size = {
	width: 475,
	height: 679
}

export function HeaderStyles(y){
	if(!y) y=0;

	return StyleSheet.create({
		header: {
			width: '100%',
			height: Constants.statusBarHeight + 100,
			backgroundColor: `rgba(0, 0, 0, ${Math.min(y, 204) / 255})`,
			position: 'relative'
		}
	});
}

export default StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: '#000'
	},

	icon: {
		marginTop: Constants.statusBarHeight,
		marginLeft: 10,
		width: 18,
		height: 32
	},

	menu: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		alignSelf: 'center',
		width: '80%',
		height: 82
	},

	menu_item: {
		color: 'white',
		fontSize: 16
	},

	banner: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		alignSelf: 'center',
		marginTop: -100,
		marginBottom: 30
	},

	banner_image: {
		width: images_size.width,
		height: images_size.height
	},

	watch_text: {
		fontWeight: 'bold',
		fontSize: 15
	},

	play: {
		padding: 5,
		paddingLeft: 15,
		paddingRight: 20,
		borderRadius: 5,
		backgroundColor: '#EEE',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 30
	},

	title: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
		marginLeft: 10
	},

	movies_list: {
		marginBottom: 50,
		marginLeft: 10
	},

	movie: {
		width: images_size.width * 0.25,
		height: images_size.height * 0.25,
		marginRight: 10,
		borderRadius: 5
	}
});