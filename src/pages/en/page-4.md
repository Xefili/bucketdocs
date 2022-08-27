---
title: Manual Moderation
description: Moderation through Moderators and Administrators
layout: ../../layouts/MainLayout.astro
---

How to Moderate a Server using Bucket Helper.

**The following commands require specific permissions!**

## Kick

The Kick command will Kick a User for the specified reason.

- Usage: `kick <User> <Reason>`

**The `<Reason>` argument is not required and will be None if not specified.**
- Output: Embed with the Username and Reason will be sent and the User will be kicked
- Requires `kick_members` or `administrator` permissions

## Ban

The ban command will permanently Ban a User for the specified reason.

- Usage: `ban <User> <Reason>`

**The `<Reason>` argument is not required and will be None if not specified.**
- Output: Embed with the Username and Reason will be send and the User will be banned
- Requires `ban_members` or `administrator` permissions