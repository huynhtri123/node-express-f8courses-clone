const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: '', required: true, },
    description: String,
    image: String,
    videoId: { type: String, required: true, },
    slug: { type: String, slug: 'name', unique: true, },
  }, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);
