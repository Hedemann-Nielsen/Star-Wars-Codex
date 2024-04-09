import { gql } from 'graphql-request';

export const AllFilms = gql `
query {
    allFilms {
        films {
            title
            producers
           director
           episodeID
        }
    }
}
`;