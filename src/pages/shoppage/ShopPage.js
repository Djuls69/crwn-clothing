import React from 'react'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection-page/CollectionPage'
import CollectionOverview from '../../components/collection-overview/CollectionOverview'

const ShopPage = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage
