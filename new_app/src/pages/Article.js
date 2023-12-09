import React from 'react';
import { useParams } from 'react-router-dom';
import articles from './article-content';
import { Link } from 'react-router-dom';
import Articles from '../components/Articles';

const Article = () => {
    const name = useParams()
    const article = articles.find((article) => article.name === name.name);
    if (!article) return <h1> No article found </h1>
    const otherArticles = articles.filter((article) => article.name !== name.name)
    return (
        <div className="mb-20">

            <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-red-900">
                {article.title}

                <Link to={`/article/${article.name}`}>

                    <img className="lg:h-60 md:h-30 w-full object-cover object-center rounded-lg
                        overflow-hidden"
                        src={article.thumbnail}
                        alt="blog"
                    />

                </Link>

            </h1>
            <div className="h-full border-2 border-gray-300 border-opacity-90 rounded-lg
                        overflow-hidden">
                <p className="leading-relaxed mb-3">
                    {article.content[0].substring(0, 115)}...
                </p>
            </div>
            {article.content.map = ((paragraph, index) =>
                <p className="mx-auto leading-relaxed text-base mb-4" key={index} >
                    {paragraph}


                </p>

              
            )}

            <h1 className='sm:text-2x text-1x font-bold mt-4 mb-4 text-gray-900'>
                Other Articles;
            </h1>
            <div className='flex flex-wrap -m-4'>
            <Articles articles = {otherArticles} />
            </div>
        </div>
        


    );
}

export default Article