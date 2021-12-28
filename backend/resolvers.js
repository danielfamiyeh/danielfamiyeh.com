const { Photo, PhotoSet } = require('./models/Photo');
const Project = require('./models/Project');

module.exports = {
  Query: {
    projects: async () => await Project.find({}),
    project: async (parent, args) => await Project.findOne({ _id: args.id }),
    photos: async () => await Photo.find({}),
    photoSets: async () => await PhotoSet.find({})
  },

  Mutation: {
    addProject: async (parent, args) => {
      const { name, description, features, socials, skills } = args;
      const project = new Project({
        name,
        description,
        features,
        socials,
        skills
      });

      try {
        return await project.save();
      } catch (error) {
        return { error: error.toString() };
      }
    },

    updateProject: async (parent, args) => {
      const { id, modifiers } = args;

      try {
        const project = await Project.findOneAndUpdate({ _id: id }, modifiers);
        return project;
      } catch (error) {
        return { error: error.toString() };
      }
    },

    removeProject: async (parent, args) => {
      const { id } = args;
      try {
        const project = await Project.findOne({ _id: id });
        await project.remove();
      } catch (error) {
        return { error: error.toString() };
      }
    },

    addPhoto: async (parent, args) => {
      const { caption, file } = args;
      const photo = new Photo({ caption, file });

      try {
        return await photo.save();
      } catch (error) {
        return { error: error.toString() };
      }
    },

    addPhotoSet: async (parent, args) => {
      const { title, files } = args;
      const photoSet = new PhotoSet({ title, files });

      try {
        return await photoSet.save();
      } catch (error) {
        return { error: error.toString() };
      }
    }
  }
};
