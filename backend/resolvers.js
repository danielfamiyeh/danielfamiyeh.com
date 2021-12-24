const { Photo, PhotoSet } = require('./models/Photo');
const Project = require('./models/Project');

module.exports = {
  Query: {
    projects: async () => await Project.find({}),
    project: async (parent, args) => await Project.findOne({ _id: args.id }),
  },

  Mutation: {
    addProject: async (parent, args) => {
      const { name, description, features, socials, skills } = args;
      const project = new Project({
        name,
        description,
        features,
        socials,
        skills,
      });

      try {
        return await project.save();
      } catch (error) {
        return { error: error.toString() };
      }
    },

    addPhoto: async (parent, args) => {
      const { caption, url } = args;
      const photo = new Photo({ caption, url });

      try {
        return await photo.save();
      } catch (error) {
        return { error: error.toString() };
      }
    },

    addPhotoSet: async (parent, args) => {
      const { title, photos } = args;
      const photoSet = new PhotoSet({ title, photos });

      try {
        return await photoSet.save();
      } catch (error) {
        return { error: error.toString() };
      }
    },
  },
};
