task = require(app.vault.adapter.basePath + "/Scripts/lib/task.js");

const partially_complete_tasks = task.tasks.where(t => task.is_complete(t) && !task.is_fully_complete(t));
const header = "Partially complete tasks";

task.success_or_error_view(partially_complete_tasks, header);