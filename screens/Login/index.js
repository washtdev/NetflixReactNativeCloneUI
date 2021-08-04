import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import logo from '../assets/images/logo.png';

import styles from './styles';

export default function Login({ navigation }){
	function handle(event){
		navigation.navigate('main');
	}

	return (
		<View style={styles.container}>
			<Image source={logo} style={styles.logo} />
			<TouchableOpacity style={styles.edit}>
				<MaterialCommunityIcons name="pencil" size={24} color="white" />
			</TouchableOpacity>
			<View style={styles.users}>
				<Text style={styles.text}>Quem está assistindo?</Text>
				<View style={styles.users_row}>
					<TouchableOpacity onPress={handle} style={styles.user}>
						<View style={styles.block1}></View>
						<Text style={styles.user_name}>User 01</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={handle} style={styles.user}>
						<View style={styles.block2}></View>
						<Text style={styles.user_name}>User 02</Text>
					</TouchableOpacity>
				</View>
				
				<View style={styles.users_row}>
					<TouchableOpacity onPress={handle} style={styles.user}>
						<View style={styles.block3}></View>
						<Text style={styles.user_name}>User 03</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={handle} style={styles.user}>
						<View style={styles.block4}></View>
						<Text style={styles.user_name}>User 04</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.users_row}>
					<TouchableOpacity onPress={handle} style={styles.user}>
						<View style={styles.block5}></View>
						<Text style={styles.user_name}>User 05</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View />
			<StatusBar style="light" />
		</View>
	);
}

//<Text style={{ color: '#fff' }}> Hello Guys!</Text>