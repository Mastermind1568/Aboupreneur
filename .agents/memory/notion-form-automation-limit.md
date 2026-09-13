---
name: Notion form automation limit
description: Limits of the connected Notion tools when configuring public intake forms.
---

The connected Notion tools can create database properties and a form view, but applying `SHOW` directives does not add those properties as visible form questions. The form remains in editor mode with only its required title question.

**Why:** Repeated create-view and update-view attempts succeeded without changing the form's question list.

**How to apply:** Build the database schema and form view programmatically, then provide an in-Notion setup guide. Require the user to add/reorder questions and publish the public form URL in Notion before linking it from the website.