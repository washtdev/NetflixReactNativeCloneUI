import React, { useState, createContext } from 'react';
import { FlatList } from 'react-native';

import { MainList } from './data';

import styles from './styles';

export const ScrollContext = createContext('');

export default function Home(){
	const [y, setY] = useState(0);

	function updateY(event){
		setY(event.nativeEvent.contentOffset.y);
	}

	return (
		<ScrollContext.Provider value={y}>
			<FlatList 
				data={MainList}
				onScroll={updateY}
				style={styles.screen}
				renderItem={({ item }) => item.render() }
				stickyHeaderIndices={[0]} />
		</ScrollContext.Provider>
	);
}
