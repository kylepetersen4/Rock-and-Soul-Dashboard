/* ============================================================================
   THE ROCK & SOUL — CONTENT DATA
   ============================================================================

   THIS IS THE ONLY FILE YOU EVER NEED TO EDIT.

   Each month is one block. Inside it, each video is one block.
   To add a video, copy an existing video block, paste it, and change the words.
   Save the file, commit, and the website updates itself.

   --- WHAT EACH FIELD MEANS -------------------------------------------------
     title       The name of the video. (e.g. "Purple Agate")
     video       The download link for the video. Leave as "" if not ready.
     photo       The download link for the photo set. Leave as "" if none.
     countsAs    How many of the 8 monthly videos this one is worth.
                 Most are 1. A big shoot might be 2, 3, or 4.
     status      "edited"  = done and delivered
                 "pending" = filmed, still being edited (shows in yellow)
   --------------------------------------------------------------------------

   --- THE NUMBERS AT THE TOP ------------------------------------------------
     QUOTA_PER_MONTH   How many videos are owed each month (8 per the contract)
     PHOTOS_PER_MONTH  Photo cap per month (20 per the contract)

   --- "complete" ON EACH MONTH ----------------------------------------------
     complete: true   The month is finished. It counts toward the running
                      balance (owes the full 8).
     complete: false  The month is still in progress. Its videos still show,
                      but it does NOT count against the balance yet, so an
                      in-progress month never makes the balance look negative.
                      Flip it to true once the month is wrapped.
   ========================================================================== */

const QUOTA_PER_MONTH  = 8;
const PHOTOS_PER_MONTH = 20;

const MONTHS = [

  /* ===================== APRIL ===================== */
  {
    name: "April",
    year: 2026,
    complete: true,
    note: "The Utica Field Trip Recap counts as 2 videos because of the extra filming hours.",
    videos: [
      {
        title: "Utica Field Trip Recap Video",
        video: "https://public.3.basecamp.com/p/o5BeTEq667Sx4MWZQfyZ4X4w/vault/9885880140",
        photo: "",
        countsAs: 2,
        status: "edited",
      },
      {
        title: "R&S Field Trip Reel v2",
        video: "https://public.3.basecamp.com/p/h4jQt6rhjWmXmiAwEH2RhaiB/vault/9893474247",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "R&S Sluice Box Reel",
        video: "https://public.3.basecamp.com/p/h4jQt6rhjWmXmiAwEH2RhaiB/vault/9892856632",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Gem Mining Activity Promo Video",
        video: "https://public.3.basecamp.com/p/V7C81YHDPCiumNhttWCFwiPb/vault/9939149984",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Drone One Shotter",
        video: "https://public.3.basecamp.com/p/V7C81YHDPCiumNhttWCFwiPb/vault/9938541937",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
    ],
  },

  /* ===================== MAY ===================== */
  {
    name: "May",
    year: 2026,
    complete: true,
    note: "Two extra videos delivered this month to make up for April.",
    videos: [
      {
        title: "UV Reactive in the Shop",
        video: "https://public.3.basecamp.com/p/5nJcpRS2KJUs8YSmnTKdmKa2/vault/9998661195",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Summer Promo R&S",
        video: "https://public.3.basecamp.com/p/5nJcpRS2KJUs8YSmnTKdmKa2/vault/9998324813",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Summer Promo 2",
        video: "https://3.basecamp.com/5662035/buckets/43533713/uploads/10008126729",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Sulfur",
        video: "https://public.3.basecamp.com/p/5nJcpRS2KJUs8YSmnTKdmKa2/vault/9995015155",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Magnesium",
        video: "https://public.3.basecamp.com/p/5nJcpRS2KJUs8YSmnTKdmKa2/vault/9994977795",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Amethyst",
        video: "https://public.3.basecamp.com/p/7GbBgUtEtXzUgG61wBP2XHGn/vault/9999383036",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Copper",
        video: "https://public.3.basecamp.com/p/7GbBgUtEtXzUgG61wBP2XHGn/vault/9999383802",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Purple Agate",
        video: "https://public.3.basecamp.com/p/7GbBgUtEtXzUgG61wBP2XHGn/vault/9999384181",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Rubies v2",
        video: "https://public.3.basecamp.com/p/7GbBgUtEtXzUgG61wBP2XHGn/vault/9999384685",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Adventure x Wonder",
        video: "https://public.3.basecamp.com/p/7GbBgUtEtXzUgG61wBP2XHGn/vault/10008125564",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
    ],
  },

  /* ===================== JUNE ===================== */
  {
    name: "June",
    year: 2026,
    complete: false,
    note: "",
    videos: [
      // Add June videos here. Copy a block above, paste it, change the words.
      // Set status to "pending" for anything filmed but not yet edited.
    ],
  },

  /* ===================== JULY ===================== */
  {
    name: "July",
    year: 2026,
    complete: false,
    note: "",
    videos: [
      // Add July videos here.
    ],
  },

];
