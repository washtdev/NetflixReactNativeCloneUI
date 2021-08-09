import React, { useContext } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import Icon from '../../assets/images/icon.png';

import styles from '../styles';
import { HeaderStyles } from '../styles';

import { ScrollContext } from '../index';

export default function Header(){
	const headerStyles = HeaderStyles(useContext(ScrollContext));

	return (
		<View style={headerStyles.header}>
			<Image source={Icon} style={styles.icon} />
			<View style={styles.menu}>
				<TouchableOpacity>
					<Text style={styles.menu_item}>Séries</Text>
				</TouchableOpacity>

				<TouchableOpacity>
					<Text style={styles.menu_item}>Filmes</Text>
				</TouchableOpacity>

				<TouchableOpacity>
					<Text style={styles.menu_item}>Minha Lista</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}