task = require(app.vault.adapter.basePath + "/Scripts/lib/task.js");
property = require(app.vault.adapter.basePath + "/Scripts/lib/property.js");

const waiting_tasks_without_deadline = task.waiting_tasks.where(t => !property.has_property(t, property.deadline));
const header = "Waiting tasks without deadline";

task.success_or_error_view(waiting_tasks_without_deadline, header);
