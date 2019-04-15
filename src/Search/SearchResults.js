import React from 'react'
import SearchResult from './SearchResult'
import './search.css'

class SearchResults extends React.Component {
	state = {
		loading: false,
		results: [],
	}

	componentDidMount = () => {
		this.fetchResults()
	}

	componentWillReceiveProps = nextProps => {
		if (
			nextProps.searchTerm !== this.props.searchTerm ||
			nextProps.searchType !== this.props.searchType
		) {
			this.fetchResults(nextProps.searchTerm, nextProps.searchType)
		}
	}

	fetchResults = async (
		searchTerm = this.props.searchTerm,
		searchType = this.props.searchType,
	) => {
		//
		if (!searchTerm.length) return
		this.setState({ loading: true })
		const response = await fetch(
			`https://api.github.com/search/${searchType}?q=${searchTerm}`,
		).then(r => r.json())
		const results = response.items
		console.log(results)
		this.setState({ loading: false, results })
	}

	isBookmarked = result => {
		const { searchType, bookmarks } = this.props
		if (!bookmarks[searchType]) return false
		return Boolean(bookmarks[searchType].find(b => b.id === result.id))
	}

	render() {
		const { searchTerm, saveBookmark, searchType, removeBookmark } = this.props
		const { results, loading } = this.state
		if (loading) return <p>Loading...</p>
		if (results.length === 0) {
			if (searchTerm.length) return <p>No Results for "{searchTerm}"</p>
			return <p>Search for something!</p>
		}
		return (
			<div>
				<p>Search results for "{searchTerm}"</p>
				<div className="search-results">
					{results.map(result => (
						<SearchResult
							key={result.id}
							result={result}
							searchType={searchType}
							saveBookmark={saveBookmark}
							removeBookmark={removeBookmark}
							isBookmarked={this.isBookmarked(result)}
						/>
					))}
				</div>
			</div>
		)
	}
}

export default SearchResults