import React from 'react';
import { FlatList } from 'react-native';

import Movie from './Movie';

import styles from '../styles';

export default function MoviesFlatList({ data }){
	return (
		<FlatList data={data} renderItem={({ item }) => Movie(item) } style={styles.movies_list} horizontal />
	);
}