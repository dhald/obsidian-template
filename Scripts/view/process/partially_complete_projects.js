project = require(app.vault.adapter.basePath + "/Scripts/lib/project.js");
task = require(app.vault.adapter.basePath + "/Scripts/lib/task.js");

const partially_complete_projects = project.complete_projects.where(p => p.file.tasks.some(t => !task.is_complete(t)));
const header = "Partially completed projects";

project.success_or_error_view(partially_complete_projects, header);