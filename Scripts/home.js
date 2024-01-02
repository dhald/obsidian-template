const now = dv.luxon.DateTime.now();
const has_deadline = task => task.hasOwnProperty("deadline");
const is_waiting_task = task => task.tags.includes("#waiting");

const incomplete_tasks = dv.pages("-#inbox").file.flatMap(f => f.tasks).where(t => !t.completed);;

const next_actions = incomplete_tasks.where(t => !is_waiting_task(t));
const waiting_tasks = incomplete_tasks.where(t => is_waiting_task(t));

const waiting_tasks_past_deadline = waiting_tasks.where(t => has_deadline(t) && (dv.luxon.DateTime.fromISO(t.deadline) <= now));
const other_waiting_tasks = waiting_tasks.where(t => !has_deadline(t) || (dv.luxon.DateTime.fromISO(t.deadline) > now));

const projects = dv.pages('"Projects" and #project').where(p => !p.completed);

dv.header(3, "➡️ Next actions");
dv.taskList(next_actions, false);

dv.header(3, "🚨 Waiting tasks past deadline")
dv.taskList(waiting_tasks_past_deadline, false);

dv.header(3, "🗂️ Projects")
dv.list(projects.file.link);

dv.header(3, "⏳ Other waiting tasks")
dv.taskList(other_waiting_tasks, false);
