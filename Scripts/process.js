const error_header = header => dv.header(3, "❌ " + header);
const success_header = header => dv.header(3, "✅ " + header);

const tasks_view = (tasks, header) => {
    if (tasks.length == 0) {
        success_header(header);
    } else {
        error_header(header);
        dv.taskList(tasks, false);
    }
}

const projects_view = (projects, header) => {
    if (projects.length == 0) {
        success_header(header);
    } else {
        error_header(header);
        dv.list(projects.file.link)
    }
}

const inbox_items = dv.pages("#inbox").flatMap(p => p.file.tasks.where(t => !t.completed));
const projects = dv.pages('"Projects" and #project');

const complete_projects = projects.where(p => p.completed);
const incomplete_projects = projects.where(p => !p.completed);

const projects_without_next_action = incomplete_projects.where(p => p.file.tasks.none(t => !t.completed));
const partially_complete_projects = complete_projects.where(p => p.file.tasks.some(t => !t.completed));

const tasks = dv.pages("-#inbox").file.flatMap(f => f.tasks);

const partially_complete_tasks = tasks.where(t => t.completed && !t.fullyCompleted);
const waiting_tasks_without_deadline = tasks.where(t => !t.completed && t.tags.includes("#waiting") && !t.hasOwnProperty("deadline"));

// Inbox items
tasks_view(inbox_items, "Inbox items");

// Projects without next action
projects_view(projects_without_next_action, "Projects without next action");

// Partially complete projects
projects_view(partially_complete_projects, "Partially complete projects");

// Partially complete tasks
tasks_view(partially_complete_tasks, "Partially complete tasks");

// Waiting tasks without deadline
tasks_view(waiting_tasks_without_deadline, "Waiting tasks without deadline");