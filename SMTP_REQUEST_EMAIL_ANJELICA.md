# Email Draft — SMTP Credentials Request (Anjelica)

---

**TO:** Anjelica
**SUBJECT:** Need SMTP info for the website contact form (Microsoft 365)

---

Hi Anjelica,

Quick heads up on the website contact form. Right now the form on
amwairconditioning.com runs through a third-party service called Formspree, and
because the Formspree account is registered under my email, every submission is
landing in my inbox instead of yours. That's not a setting I can just flip — the
recipient is tied to the account that owns the form.

So I'm rebuilding the form to send mail directly through your own Microsoft 365
(Outlook) account. Once that's done, leads go straight to AMW's inbox, the emails
come from your own domain, and I'm no longer in the middle of it.

To set that up, I need the following from you (or from whoever administers the
Microsoft 365 tenant):

**1. The sending mailbox**
The email address the form should send *from* — a licensed Microsoft 365 mailbox
on amwairconditioning.com. A dedicated one like `noreply@amwairconditioning.com`
or `website@amwairconditioning.com` is ideal, but an existing mailbox works too.
I'll need the password for that mailbox, or better, an app password (see #3).

**2. The destination inbox(es)**
Where the form submissions should actually be delivered, plus anyone who should
be CC'd on every lead.

**3. Authentication**
Microsoft 365 blocks SMTP by default, so two things need to be turned on in the
Microsoft 365 admin center for the sending mailbox:

- **Authenticated SMTP** — Admin center → Users → Active users → select the
  mailbox → Mail tab → Manage email apps → check **Authenticated SMTP**.
- **An app password** — if MFA is enabled on that mailbox (it should be), a normal
  password won't authenticate. An app password is generated at
  myaccount.microsoft.com → Security info → Add sign-in method → App password.
  That app password is what I'd use for the form; it can't be used to log into the
  account normally and can be revoked any time without touching the real password.

For reference, the connection settings I expect to use are the Microsoft 365
standard ones — server `smtp.office365.com`, port `587`, STARTTLS — so I mainly
just need confirmation that nothing custom is in place.

**4. Admin / DNS access**
- Who has Global Admin on the Microsoft 365 tenant, in case the settings above
  need to be changed by an admin?
- Who manages DNS for amwairconditioning.com? I may need to add or adjust an SPF
  record so the form emails don't get flagged as spam.

**A note on the credentials:** please don't email me the password or app password
in plain text. Send it separately — a text message, a phone call, or a shared
password manager entry all work. Or, if you'd prefer not to hand over credentials
at all, get me on a short screen share and I'll walk you through generating the
app password while you keep it on your end and paste it straight into the site's
settings.

If it's easier, I'm happy to hop on a quick call and go through the admin center
with you step by step — it's about a ten minute job.

Thanks,
[Your name]
