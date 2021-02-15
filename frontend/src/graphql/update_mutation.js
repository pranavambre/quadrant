import { gql  } from '@apollo/client'


export const UPDATE_OPTION = gql`
  mutation updateOption(
      $id: ID!, 
      $name: String!, 
      $type:String!, 
      $fabric:String!
      ) {
    updateOption(
        id: $id, 
        name: $name, 
        type: $type, 
        fabric:$fabric
        ) {
      id
      name
      type
      fabric
    }
  }
`;