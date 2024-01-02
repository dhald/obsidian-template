header = require(app.vault.adapter.basePath + "/Scripts/lib/header.js");
task = require(app.vault.adapter.basePath + "/Scripts/lib/task.js");

header.regular_header(dv, "➡️ Next actions");
dv.taskList(task.next_actions(dv), false);