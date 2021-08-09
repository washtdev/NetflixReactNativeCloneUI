import React from 'react';
import { Image } from 'react-native';

import styles from '../styles';

export default function Movie({ image }){
	return (
		<Image style={styles.movie} source={image} />
	);
}