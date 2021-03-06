import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop-selectors'
import CollectionItem from '../../components/collection-item/CollectionItem'
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './CollectionPage.styles'

const mapState = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

const CollectionPage = ({ collection }) => {
  const { title, items } = collection
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
}

export default connect(mapState)(CollectionPage)
