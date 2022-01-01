const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authSchema = new Schema({
  token: String
});

const Auth = mongoose.model('Auth', authSchema);

module.exports = {
  assertAuth: async ({ token }) => {
    const auth = await Auth.findOne();

    if (auth.token !== token) throw new Error('Not authorized');
  }
};
