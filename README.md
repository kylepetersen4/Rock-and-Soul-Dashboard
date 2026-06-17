[README.md](https://github.com/user-attachments/files/29067873/README.md)
# The Rock & Soul — Content Dashboard

A live dashboard showing every video and photo delivered each month against the
8-video monthly agreement. Built to be updated by editing one file.

---

## What the client sees

- **Running balance** at the top — instantly answers "am I getting what I pay for?"
- **Per-month reconciliation** — e.g. April shows `6/8` (short), May shows `10/8`
  (extra), so the April-vs-May situation reads at a glance.
- **Each video** — title, a Download button, a Photos button, and a status dot.
- **In Editing section** — anything filmed but not yet edited shows in yellow so
  the pipeline is visible even before the video ships.
- **Multiplier badges** — a big shoot can count as `2×`, `3×`, etc. toward the
  monthly 8, with the badge shown right on the card.

---

## How to update it (no coding needed)

1. Open **`data.js`**.
2. Find the month you want.
3. To add a video, copy one existing video block (everything between `{` and `},`),
   paste it under the others, and change the words:

   ```js
   {
     title: "Citrine Close-Up",        // the video name
     video: "https://...",             // download link (leave "" if not ready)
     photo: "https://...",             // photo link (leave "" if none)
     countsAs: 1,                       // 1, or 2/3/4 for a big shoot
     status: "edited",                  // "edited" = done, "pending" = still editing
   },
   ```

4. Save the file, then commit it (see below). The website updates on its own.

### Common edits
- **Mark something as still editing:** set `status: "pending"`.
- **A long video that's worth more than one:** set `countsAs: 2` (or 3, 4...).
- **Add a note to a month** (e.g. why something counts as 2): edit the `note:` line.
- **Finish a month:** set `complete: true` on that month. Until you do, the
  month shows as "in progress" and doesn't count against the running balance —
  so a half-finished June never makes the numbers look bad.

---

## How to publish changes

This repo is connected to Netlify. Every time you commit a change to GitHub,
Netlify rebuilds the site automatically within a minute.

**Easiest way (in the browser):**
1. Go to the repo on GitHub.
2. Click `data.js`, then the pencil ✏️ icon to edit.
3. Make your changes, scroll down, click **Commit changes**.
4. Wait ~1 minute, refresh the live site.

---

## Files

- `index.html` — the dashboard (design + logic). You usually won't touch this.
- `data.js` — **all the content. This is the file you edit.**
- `netlify.toml` — deployment settings.
- `README.md` — this file.
