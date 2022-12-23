import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query GetPosts($first: Int, $after: String) {
  posts(first: $first, after: $after) {
    edges {
      node {
        author {
          node {
            avatar {
              url
            }
            roles {
              edges {
                node {
                  displayName
                }
              }
            }
            lastName
            firstName
            username
          }
        }
        title
        content
        date
        id
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          edges {
            node {
              name
            }
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
`;

const LOGIN_CLIENT = gql`
  mutation LoginUser {
    login(input: { username: "client", password: "client" }) {
      authToken
      user {
        id
        name
      }
    }
  }
`;

// const GET_POSTS = gql`
//   query GetPosts($first: Int, $after: String) {
//     posts(first: $first, after: $after) {
//       nodes {
//         id
//         title
//         content
//         date
//         author {
//           node {
//             avatar {
//               url
//             }
//             firstName
//             lastName
//             name
//             roles {
//               nodes {
//                 displayName
//               }
//             }
//             username
//           }
//         }
//         featuredImage {
//           node {
//             sourceUrl
//           }
//         }
//       }
//       pageInfo {
//         hasNextPage
//         endCursor
//       }
//     }
//   }
// `;


export { GET_POSTS, LOGIN_CLIENT };
