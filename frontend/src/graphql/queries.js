import { gql } from '@apollo/client'

export const POSTS_QUERY = gql`
  query {
    options {
      id
      name
      type
      fabric
    }
  }
`