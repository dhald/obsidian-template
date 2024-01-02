tag = require(app.vault.adapter.basePath + "/Scripts/lib/tag.js");
task = require(app.vault.adapter.basePath + "/Scripts/lib/task.js");

const inbox_items = dv.pages(tag.inbox).file.flatMap(f => f.tasks).where(t => !task.is_complete(t));

exports.inbox_items = inbox_items;