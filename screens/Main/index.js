import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Home from '../Home';
import Soon from '../Soon';
import Downloads from '../Downloads';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const mainNavigation = createMaterialBottomTabNavigator({
	home: {
		screen: Home,
		navigationOptions: () => ({
			tabBarIcon: ({ focused }) => focused ? <MaterialIcons name="home-filled" size={24} color="white" /> : <MaterialIcons name="home-filled" size={24} color="#fff8" />
		})
	},

	soon: {
		screen: Soon,
		navigationOptions: () => ({
			tabBarIcon: ({ focused }) => focused ? <MaterialCommunityIcons name="television-play" size={24} color="white" /> : <MaterialCommunityIcons name="television-play" size={24} color="#fff8" />
		})
	},

	downloads: {
		screen: Downloads,
		navigationOptions: () => ({
			tabBarIcon: ({ focused }) => focused ? <MaterialCommunityIcons name="download-circle-outline" size={24} color="white" /> : <MaterialCommunityIcons name="download-circle-outline" size={24} color="#fff8" />
		})
	}
}, {
	barStyle: {
		backgroundColor: '#10100F'
	}
});

export default createAppContainer(mainNavigation);//#221f1f
