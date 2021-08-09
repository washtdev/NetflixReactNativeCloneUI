import React from 'react';

import DeadPool from '../assets/images/movies/deadpool.jpg';
import Jaws from '../assets/images/movies/jaws.jpg';
import MeanGirls from '../assets/images/movies/meangirls.jpg';
import MoonLight from '../assets/images/movies/moonlight.jpg';
import MrBean from '../assets/images/movies/mrbean.jpg';
import StrangerThings from '../assets/images/movies/strangerthings.jpg';
import WhiteHouse from '../assets/images/movies/whitehouse.jpg';

import Header from './components/Header';
import Banner from './components/Banner';
import ListTitle from './components/ListTitle';
import MoviesFlatList from './components/MoviesFlatList';

export const MainList = [
	{
		key: 'HEADER',
		render: () => <Header />
	},
	{
		key: 'BANNER',
		render: () => <Banner />
	},
	{
		key: 'CONTINUE_WATCHING_TITLE',
		render: () => <ListTitle title="Continue Assistindo" />
	},
	{
		key: 'CONTINUE_WATCHING',
		render: () => <MoviesFlatList data={MoviesWatchingList} />
	},
	{
		key: 'POPULAR_ON_NETFLIX_TITLE',
		render: () => <ListTitle title="Popular na Netflix" />
	},
	{
		key: 'POPULAR_ON_NETFLIX',
		render: () => <MoviesFlatList data={PopularList} />
	},
	{
		key: 'MOVIES_TITLE',
		render: () => <ListTitle title="Filmes" />
	},
	{
		key: 'MOVIES',
		render: () => <MoviesFlatList data={MoviesList} />
	}
];

export const MoviesList = [
	{
		key: 'DEADPOOL',
		image: DeadPool
	},
	{
		key: 'JAWS',
		image: Jaws
	},
	{
		key: 'MEANGIRLS',
		image: MeanGirls
	},
	{
		key: 'MOONLIGHT',
		image: MoonLight
	},
	{
		key: 'MRBEAN',
		image: MrBean
	},
	{
		key: 'STRANGERTHINGS',
		image: StrangerThings
	},
	{
		key: 'WHITEHOUSE',
		image: WhiteHouse
	}
];

export const MoviesWatchingList = [
	{
		key: 'DEADPOOL',
		image: DeadPool
	},
	{
		key: 'WHITEHOUSE',
		image: WhiteHouse
	}
];

export const PopularList = [
	{
		key: 'STRANGERTHINGS',
		image: StrangerThings
	},
	{
		key: 'DEADPOOL',
		image: DeadPool
	},
	{
		key: 'MRBEAN',
		image: MrBean
	}
];