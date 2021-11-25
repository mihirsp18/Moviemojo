import React from 'react';

export const PopularNewsListItem = ({popularNews}) => {
    let image = ''
    if (popularNews.media[0]){
        image = popularNews.media[0]['media-metadata'][2];
    }
    
    let imageSrc = '';
    if (image) {
        imageSrc = image.url;
    } else {
        imageSrc = 'https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg';
    }
    // console.log('image: ' + image[0]);
    let date = new Date(popularNews.published_date).toLocaleDateString();
    return (
        <div className='list-group-item'>
            <div className="row">
                <div className="col-3">
                    <img className="img-responsive" src={imageSrc} width="300" height="200"/>
                </div>
                <div className="col-9">
                    <a href={popularNews.url} target="_blank"><h3>{popularNews.title}</h3></a>
                    <p>{popularNews.abstract}</p>
                    <h6>{date}</h6>
                    <p>{popularNews.byline}</p>
                </div>
            </div>
        </div>
    )
}