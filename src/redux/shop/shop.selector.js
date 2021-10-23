import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectStore = state => state.shop;

export const selectStoreCollections = createSelector(
    [selectStore],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectStoreCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectStoreCollections],
        collections => collections[collectionUrlParam]
    ));