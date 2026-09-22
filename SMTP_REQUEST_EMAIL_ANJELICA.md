# Email Draft — SMTP Credentials Request (Anjelica)

---

**TO:** Anjelica
**SUBJECT:** Need to update the email settings on the website contact form

---

Hi Anjelica,

The failover on the website contact form keeps triggering, so we need to update
the email settings on your end to get submissions routing correctly. Once that's
in place, leads go straight to AMW's inbox and send from your own domain.

Since you're on Microsoft 365 / Outlook, here's what I need from you. If you can
go through these in order and send the answers back, I can get it switched over
quickly.

**Step 1 — Tell me the sending mailbox**
The email address the form should send *from*. It needs to be a licensed
Microsoft 365 mailbox on amwairconditioning.com. A dedicated one like
`noreply@amwairconditioning.com` or `website@amwairconditioning.com` is ideal,
but an existing mailbox works too. Just send me the address.

**Step 2 — Tell me where the leads should go**
The inbox that should actually receive the form submissions, plus anyone who
should be CC'd on every lead.

**Step 3 — Turn on Authenticated SMTP for that mailbox**
In the Microsoft 365 admin center:
1. Go to **Users → Active users**
2. Click the mailbox from Step 1
3. Open the **Mail** tab
4. Click **Manage email apps**
5. Check **Authenticated SMTP** and save

Let me know once that's saved. (If you don't have admin access, tell me who does
and I'll coordinate with them.)

**Step 4 — Generate an app password**
If that mailbox has MFA turned on, a regular password won't work — it needs an
app password:
1. Sign in at **myaccount.microsoft.com** as that mailbox
2. Go to **Security info**
3. Click **Add sign-in method → App password**
4. Name it something like "Website form" and copy the password it gives you

An app password can't be used to sign in normally and can be revoked any time
without changing the account's real password.

**Please don't email me that password.** Send it by text, over the phone, or
through a shared password manager. If you'd rather not hand it over at all, get
me on a short screen share and I'll walk you through where it goes while it stays
on your side.

**Step 5 — Confirm your mail server settings**
I expect these to be the Microsoft 365 defaults — server `smtp.office365.com`,
port `587`, STARTTLS. Just confirm nothing custom is set up on the tenant.

**Step 6 — Tell me who manages your DNS**
Whoever controls DNS for amwairconditioning.com. I may need an SPF record
adjustment so the form emails don't get flagged as spam.

If it's easier, I'm happy to hop on a quick call and go through Steps 3 and 4
with you — it's about a ten minute job.

Thanks,
[Your name]
