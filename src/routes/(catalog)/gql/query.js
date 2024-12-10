import { gql } from 'graphql-request';

export const CATALOG = gql`
  query catalog($slug: String!, $key: UUID!) {
    catalog(slug: $slug, key: $key) {
      value
      slug
      metaTitle {
        value
      }
      metaDescription {
        value
      }
      rubric {
        value
        slug
        category {
          is_active
          value
          slug
          product_count
        }
      }
      text {
        value
      }
      image {
        hash
      }
    }
  }
`;

