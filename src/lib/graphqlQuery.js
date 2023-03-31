import { gql } from "@apollo/client";

const GET_RESOURCE_BY_SLUG = gql`
  query GetResourceBySlug($id: ID!) {
    resource(id: $id, idType: SLUG) {
      id
      slug
      title
      content
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

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
        id
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
      id
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
      id
      title
      content
    }
  }
`;
const GET_LEGAL_BY_SLUG_TYPE = gql`
  query GetLegalBySlug($slug: String!) {
    legalBy(slug: $slug, idType: SLUG) {
      id
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
      nodes {
        author {
          node {
            avatar {
              url
            }
            roles {
                nodes {
                  id
                  displayName
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
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            id
            slug
            name
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
      nodes {
        id
        slug
        name
      }
    }
  }
`;

const GET_RECOMMENDED_POSTS = gql`
  query getRecommendedPosts {
    posts(first: 4) {
      nodes {
        id
        date
        title
        content
        featuredImage {
           node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;

const GET_TEAM_MEMBERS = gql`
  query getTeamMembers {
    teamMembers {
      nodes {
        id
        fullName
        position
        linkedin
        picture {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;

const GET_BLOG_DETAILS = gql`
  query GetBlogDetails($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      date
      author {
        node {
          firstName
          lastName
          avatar {
            url
          }
          roles {
              nodes {
                displayName
              }
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
  }
`;

const GET_RELATED_POST = gql`
  query getPosts($categoryName: String = "") {
    posts(first: 4, where: { categoryName: $categoryName }) {
      nodes {
        id
        date
        slug
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            slug
            id
          }
        }
      }
    }
  }
`;

export {
  GET_POSTS,
  LOGIN_CLIENT,
  GET_CATEGORIES,
  GET_RECOMMENDED_POSTS,
  GET_BLOG_DETAILS,
  GET_RELATED_POST,
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
  GET_BLOGS,
  GET_RESOURCE_BY_SLUG,
};
