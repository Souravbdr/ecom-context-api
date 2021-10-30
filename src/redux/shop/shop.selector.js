import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const selectStore = state => state.shop;

export const selectStoreCollections = createSelector(
    [selectStore],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectStoreCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectStoreCollections],
        collections => (collections ? collections[collectionUrlParam] : null)
    ));

export const selectCollectionFetching = createSelector(
    [selectStore],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectStore],
    shop => !!shop.collections
)