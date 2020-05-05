import React from "react";
import classes from "./PhotoGallery.module.css";
import Gallery from 'react-grid-gallery';

const IMAGES =
    [   {
            src: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_3149-copy.jpg",
            thumbnail: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_3149-copy-400x400.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 400
        },
        {
            src: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_3130-copy.jpg",
            thumbnail: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_3130-copy-400x400.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 400
        },
        {
            src: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_4084.jpg",
            thumbnail: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_4084-400x400.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 400
        },
        {
            src: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_4105.jpg",
            thumbnail: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_4105-400x400.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 400
        },
        {
            src: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_3355-copy.jpg",
            thumbnail: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_3355-copy-400x400.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 400
        },
        {
            src: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_3304-copy.jpg",
            thumbnail: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_3304-copy-400x400.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 400
        },
        {
            src: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_3065-copy.jpg",
            thumbnail: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_3065-copy-400x400.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 400
        },
        {
            src: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_3340-copy.jpg",
            thumbnail: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_3340-copy-400x400.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 400
        },
        {
            src: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_3011-copy.jpg",
            thumbnail: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_3011-copy-400x400.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 400
        },
        {
            src: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_5016-copy.jpg",
            thumbnail: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_5016-copy-400x400.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 400
        },
        {
            src: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_4924-copy.jpg",
            thumbnail: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_4924-copy-400x400.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 400
        },
        {
            src: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_3485-copy.jpg",
            thumbnail: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_3485-copy-400x400.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 400
        },
        {
            src: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_3366-copy.jpg",
            thumbnail: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_3366-copy-400x400.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 400
        },
        {
            src: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_5120-copy.jpg",
            thumbnail: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_5120-copy-400x400.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 400
        },
        {
            src: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_3640-copy.jpg",
            thumbnail: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_3640-copy-400x400.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 400
        },
        {
            src: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_2871-1.jpg",
            thumbnail: "http://pizzeria-zielona-dolina.pl/wp-content/uploads/2019/07/DSC_2871-1-400x400.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 400
        }

    ]


export class PhotoGallery extends React.Component {
    render() {
        return (
            <div className={classes.mainContainer}>
                <Gallery images={IMAGES}
                         enableImageSelection={false} rowHeight={370}/>
            </div>

        );
    }
}