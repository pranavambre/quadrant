import { gql  } from '@apollo/client'

export const CREATE_OPTION_MUTATION = gql`
  mutation createOption(
    $name: String!
    $type: String!
    $fabric: String!
  ) {
    createOption(
        name: $name
        type: $type
        fabric: $fabric
    ) {
      name
      type
      fabric
    }
  }
`