import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import bannerImage from '../../assets/images/movies/strangerthings.jpg';

import styles from '../styles';

export default function Banner() {
	return (
		<View style={styles.banner}>
			<Image source={bannerImage} style={styles.banner_image} />
			<TouchableOpacity style={styles.play}>
				<Entypo style={{ marginRight: 5 }} name="controller-play" size={24} color="black" />
				<Text style={styles.watch_text}>Assistir</Text>
			</TouchableOpacity>
		</View>
	);
}