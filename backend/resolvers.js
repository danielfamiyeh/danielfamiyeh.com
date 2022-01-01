const { Photo, PhotoSet } = require('./models/Photo');
const Project = require('./models/Project');
const { assertAuth } = require('./models/Auth');

module.exports = {
  Query: {
    projects: async () => await Project.find({}),
    project: async (parent, args) => await Project.findOne({ _id: args.id }),
    photos: async () => await Photo.find({}),
    photoSets: async () => await PhotoSet.find({})
  },

  Mutation: {
    addProject: async (parent, args, context) => {
      const { name, description, features, socials, skills } = args;
      const project = new Project({
        name,
        description,
        features,
        socials,
        skills
      });

      try {
        await assertAuth(context);
        return await project.save();
      } catch (error) {
        return { error: error.toString() };
      }
    },

    updateProject: async (parent, args, context) => {
      const { id, modifiers } = args;

      try {
        await assertAuth(context);
        const project = await Project.findOneAndUpdate({ _id: id }, modifiers);

        return project;
      } catch (error) {
        return { error: error.toString() };
      }
    },

    removeProject: async (parent, args, context) => {
      const { id } = args;
      try {
        await assertAuth(context);

        const project = await Project.findOne({ _id: id });
        await project.remove();
      } catch (error) {
        return { error: error.toString() };
      }
    },

    addPhoto: async (parent, args, context) => {
      const { caption, file } = args;
      const photo = new Photo({ caption, file });

      await assertAuth(context);

      try {
        return await photo.save();
      } catch (error) {
        return { error: error.toString() };
      }
    },

    addPhotoSet: async (parent, args, context) => {
      const { title, files } = args;
      const photoSet = new PhotoSet({ title, files });

      await assertAuth(context);

      try {
        return await photoSet.save();
      } catch (error) {
        return { error: error.toString() };
      }
    }
  }
};
