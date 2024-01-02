inbox = require(app.vault.adapter.basePath + "/Scripts/lib/inbox.js");
task = require(app.vault.adapter.basePath + "/Scripts/lib/task.js");

task.success_or_error_view(inbox.inbox_items, "Inbox items");