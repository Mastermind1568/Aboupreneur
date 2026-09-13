---
name: Formspree attachment limit
description: Provider-level constraint affecting the Aboupreneur contact form.
---

The current Formspree account accepts standard JSON and multipart submissions without files, but rejects multipart submissions containing a file with “File Uploads Not Permitted.”

**Why:** Adding a direct attachment control caused real contact-form submissions with files to fail.

**How to apply:** Keep the main contact form JSON-only and direct users to email assets separately. Reintroduce embedded uploads only after Formspree file support is confirmed or a separate storage flow is implemented.