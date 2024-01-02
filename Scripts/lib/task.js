header = require(app.vault.adapter.basePath + "/Scripts/lib/header.js");
tag = require(app.vault.adapter.basePath + "/Scripts/lib/tag.js");

const is_complete = task => task.is_completed;
const is_fully_complete = task => task.is_fully_complete;
const is_waiting_task = task => task.tags.includes(waiting_tag);

const tasks = dv => dv.pages("-" + inbox_tag).file.flatMap(f => f.tasks);
const incomplete_tasks = dv => tasks(dv).where(t => !is_complete(t));

const waiting_tasks = dv => incomplete_tasks(dv).where(is_waiting_task);
const next_actions = dv => incomplete_tasks(dv).where(t => !is_waiting_task(t));

const success_or_error_view = (dv, tasks, header) => {
    if (tasks.length == 0) {
        header.success_header(dv, header);
    } else {
        header.error_header(dv, header);
        dv.taskList(tasks, false);
    }
}

exports.is_complete = is_complete;
exports.is_fully_complete = is_fully_complete;
exports.is_waiting_task = is_waiting_task;
exports.success_or_error_view = success_or_error_view;

exports.tasks = tasks
exports.incomplete_tasks = incomplete_tasks;
exports.waiting_tasks = waiting_tasks;
exports.next_actions = next_actions;

