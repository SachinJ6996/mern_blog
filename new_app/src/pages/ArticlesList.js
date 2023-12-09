import React from 'react';
import articles from './article-content';

import Articles from '../components/Articles';

const ArticlesList = () => {
    return (
        <div className="mb-20">
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-blue-900">
                This is ArticlesList
            </h1>
            <div>
           <Articles articles = {articles}/>
            </div>
        </div>
    );
}

export default ArticlesList