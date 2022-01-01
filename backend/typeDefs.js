const { gql } = require('apollo-server');

module.exports = {
  typeDefs: gql`
    ######## SCHEMAS ########

    scalar Date

    type Project {
      id: ID!
      name: String
      description: String
      features: [String]
      photos: [String]
      skills: [String]
      socials: [SocialLink]
    }

    type SocialLink {
      site: String
      url: String
    }

    type Photo {
      file: String!
      caption: String
      dateUploaded: Date
    }

    type PhotoSet {
      title: String
      files: [String]
      cover: Int
      dateUploaded: Date
    }

    type Query {
      projects: [Project]
      project(id: String): Project

      photos: [Photo]
      photoSets: [PhotoSet]
    }

    ######## MUTATIONS ########

    input ProjectInput {
      name: String
      description: String
      features: [String]
      skills: [String]
      socials: [SocialLinkInput]
    }

    input SocialLinkInput {
      site: String
      url: String
    }

    input PhotoInput {
      file: String
      caption: String
    }

    type Mutation {
      addProject(
        name: String
        description: String
        features: [String]
        photos: [String]
        socials: [SocialLinkInput]
        skills: [String]
      ): Project

      updateProject(id: ID, modifiers: ProjectInput): Project

      removeProject(id: ID): ID

      addPhoto(file: String, caption: String): Photo

      updatePhoto(id: ID, modifiers: PhotoInput): Photo

      removePhoto(id: ID): ID

      addPhotoSet(title: String, files: [String]): PhotoSet

      updatePhotoSet(id: ID, photos: [PhotoInput]): PhotoSet

      removePhotoSet(id: ID): ID
    }
  `
};
