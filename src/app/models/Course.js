const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongoose_delete = require('mongoose-delete'); 
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

//plugins
mongoose.plugin(slug);
Course.plugin(mongoose_delete, { 
  deletedAt : true,
  overrideMethods: 'all', 
});

module.exports = mongoose.model('Course', Course);
