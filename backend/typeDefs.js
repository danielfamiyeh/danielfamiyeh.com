const { gql } = require('apollo-server');

module.exports = {
  typeDefs: gql`
    ######## SCHEMAS ########

    type Project {
      id: ID!
      name: String
      description: String
      features: [String]
      skills: [String]
      socials: [SocialLink]
    }

    type SocialLink {
      site: String
      url: String
    }

    type Photo {
      url: String
      caption: String
    }

    type PhotoSet {
      title: String
      photos: Photo
    }

    type Query {
      projects: [Project]
      project(id: String): Project
    }

    ######## MUTATIONS ########

    input PhotoInput {
      url: String
      caption: String
    }

    input SocialLinkInput {
      site: String
      url: String
    }

    type Mutation {
      addProject(
        name: String
        description: String
        features: [String]
        socials: [SocialLinkInput]
        skills: [String]
      ): Project

      removeProject(id: ID): ID

      addPhoto(url: String, caption: String): Photo

      addPhotoSet(title: String, photos: [PhotoInput]): PhotoSet
    }
  `,
};
