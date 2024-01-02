project = require(app.vault.adapter.basePath + "/Scripts/lib/project.js");
task = require(app.vault.adapter.basePath + "/Scripts/lib/task.js");

const incomplete_projects_without_next_action = project.incomplete_projects.file.where(f => f.tasks.none(task.is_active));
const header = "Incomplete projects without next action";

task.success_or_error_view(incomplete_projects_without_next_action, header);