import { gql } from "@apollo/client";

const GET_BLOGS = gql`
  query GetBlogs($first: Int) {
    posts(first: $first) {
      nodes {
        id
        slug
        title
        content
        featuredImage {
          node {
            sourceUrl
            id
          }
        }
        categories {
          nodes {
            name
            id
            slug
          }
        }
      }
    }
  }
`;

const GET_RESOURCES_CATEGORIES = gql`
  query GetResourcesCategories {
    resourceCategories {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`;

const GET_RESOURCES = gql`
  query GetResources($cursor: String, $first: Int) {
    resources(first: $first, after: $cursor) {
      nodes {
        id
        slug
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        resourceCategories {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
  }
`;

const GET_RESOURCES_BY_CATEGORY = gql`
  query GetIndustryResources($cursor: String, $id: ID!) {
    resourceCategory(id: $id, idType: SLUG) {
      id
      name
      resources(first: 4, after: $cursor) {
        nodes {
          id
          slug
          title
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

const GET_FIRST_TWO_RESOURCES = gql`
  query GetFirstTwoResources {
    resources(first: 2) {
      nodes {
        id
        slug
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
      pageInfo {
        endCursor
        startCursor
      }
    }
  }
`;

const GET_USE_CASES = gql`
  query GetUseCases {
    useCases {
      nodes {
        slug
        heroName
        heroImageBackgroundGradientStart
        headerIcon {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

const GET_USE_CASE = gql`
  query GetUseCases($id: ID!) {
    useCase(id: $id, idType: SLUG) {
      heroName
      heroTitle
      heroDescription
      heroImage {
        node {
          sourceUrl
        }
      }
      heroBackgroundColor
      heroImageBackgroundGradientStart
      heroImageBackgroundGradientStop
      infoName
      infoTitle
      infoDescription
      infoContent
      additionalInfoTitle
      additionalInfoDescription
      additionalInfoImage {
        node {
          sourceUrl
        }
      }
      additionalInfoTitle2
      additionalInfoDescription2
      additionalInfoImage2 {
        node {
          sourceUrl
        }
      }
    }
  }
`;

const GET_LEGAL_BY_SLUG = gql`
  query GetLegalBySlug($slug: String!) {
    legalBy(slug: $slug) {
      title
      content
    }
  }
`;
const GET_LEGAL_BY_SLUG_TYPE = gql`
  query GetLegalBySlug($slug: String!) {
    legalBy(slug: $slug, idType: SLUG) {
      title
      content
    }
  }
`;

const GET_LEGAL_CATEGORIES = gql`
  query GetLegalCategories {
    legalCategories {
      nodes {
        slug
        name
        order
        legals {
          nodes {
            slug
            title
          }
        }
      }
    }
  }
`;

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
  mutation LoginUser($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      authToken
      refreshToken
      user {
        id
        name
      }
    }
  }
`;

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      edges {
        node {
          name
        }
      }
    }
  }
`;

const GET_TEAM_MEMBERS = gql`
  query getTeamMembers {
    teamMembers {
      nodes {
        fullName
        position
        linkedin
        picture {
          node {
            sourceUrl
          }
        }
        color
        gradientEndColor
        orderNumber
      }
    }
  }
`;

export {
  GET_POSTS,
  LOGIN_CLIENT,
  GET_CATEGORIES,
  GET_TEAM_MEMBERS,
  GET_LEGAL_BY_SLUG,
  GET_LEGAL_CATEGORIES,
  GET_LEGAL_BY_SLUG_TYPE,
  GET_USE_CASE,
  GET_USE_CASES,
  GET_FIRST_TWO_RESOURCES,
  GET_RESOURCES_BY_CATEGORY,
  GET_RESOURCES,
  GET_RESOURCES_CATEGORIES,
  GET_BLOGS
};
