import React, { useContext } from "react";
import CollectionsContext from "../../contexts/collections/collections.context";
import CollectionPreview from "../collection-preview/collection-preview.component";
import './collections-overview.styles.scss';

const CollectionOverview = () => {
    const collectionsMap = useContext(CollectionsContext);
    const collections = Object.keys(collectionsMap).map(
        key => collectionsMap[key]
    );
    return (
        <div className='collection-overview'>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />))
            }
        </div>
    )
};

export default CollectionOverview;