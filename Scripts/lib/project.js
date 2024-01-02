header = require(app.vault.adapter.basePath + "/Scripts/lib/header.js");
tag = require(app.vault.adapter.basePath + "/Scripts/lib/tag.js");

const is_complete = project => project.completed;

const projects = dv.pages(tag.project);

const complete_projects = projects.where(is_complete);
const incomplete_projects = projects.where(p => !is_complete(p));

const success_or_error_view = (projects, header) => {
    if (projects.length == 0) {
        header.success_header(header);
    } else {
        header.error_header(header);
        dv.list(projects)
    }
}

exports.is_complete = is_complete;
exports.success_or_error_view = success_or_error_view;

exports.projects = projects;
exports.complete_projects = complete_projects;
exports.incomplete_projects = incomplete_projects;