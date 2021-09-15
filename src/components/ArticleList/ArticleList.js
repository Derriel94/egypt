import React from 'react';
import './ArticleList.css';
import Article from '../Article/Article.js'

const ArticleList = () => {
	return (
		<div>
			{Article.map((article) => (
				<h3>{article.title}</h3>

				))}
		</div>
	);
}

export default ArticleList;