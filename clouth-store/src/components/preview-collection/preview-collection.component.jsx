import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import './preview-collection.styles.scss'


const PreviewCollection = ({title, items}) => (
    <div className='collection-preview'>
        <div>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map(item => (
                            <CollectionItem key={item.id} item={item}/>
                        ))
                }
            </div>
        </div>
    </div>
);

export default PreviewCollection;
