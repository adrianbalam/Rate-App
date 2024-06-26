import { gql } from "apollo-boost";

export const GET_REPOSITORIES = gql`
query {
    repositories {
        edges {
            node {
                id
                name
                fullName
                ownerName
                description
                language
                ownerAvatarUrl
            }
        }
    }
}
`