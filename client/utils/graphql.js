import gql from "graphql-tag";

export const FETCH_PINGS_QUERY = gql`
{
getPings {
    id 
    body 
    location {
        type
        coordinates
    }
    imageUrl
    createdAt 
    author {
        id
        imageUrl 
        username
    }
    support {
        supported
        user {
            id
        }
    }
    supportCount
    commentCount
}
}
`;