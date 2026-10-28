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

   --- PHOTOS ON EACH MONTH ---------------------------------------------------
     photos      Link to that month's photo folder. Leave as "" if none yet.
     photoCount  How many edited photos are in that folder.
   (A video's own "photo" line is optional. Only use it if one video has its
    own photo set; otherwise leave it as "" and nothing extra shows.)

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
    photos: "",
    photoCount: 0,
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
    photos: "",
    photoCount: 0,
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
    photos: "https://public.3.basecamp.com/p/SvWnnmq8cu6Pnjj2U3GuEbrj/vault/10025748082",
    photoCount: 47,
    complete: true,
    note: "",
    videos: [
      {
        title: "Larimar",
        video: "https://public.3.basecamp.com/p/nDDvzwYx2e8fgk6UrXkiZCmi/vault/10086072513",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Peaceful Pebbles",
        video: "https://public.3.basecamp.com/p/nDDvzwYx2e8fgk6UrXkiZCmi/vault/10086073108",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Tumble Stones",
        video: "https://public.3.basecamp.com/p/nDDvzwYx2e8fgk6UrXkiZCmi/vault/10086073373",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Vintage Sale Promo",
        video: "https://public.3.basecamp.com/p/nDDvzwYx2e8fgk6UrXkiZCmi/vault/10090407403",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Rollie Pollie",
        video: "https://public.3.basecamp.com/p/nDDvzwYx2e8fgk6UrXkiZCmi/vault/10091912463",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Green Mica",
        video: "https://public.3.basecamp.com/p/nDDvzwYx2e8fgk6UrXkiZCmi/vault/10091912068",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Something for Everyone",
        video: "https://public.3.basecamp.com/p/nDDvzwYx2e8fgk6UrXkiZCmi/vault/10091968938",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Sluice Box",
        video: "https://public.3.basecamp.com/p/nDDvzwYx2e8fgk6UrXkiZCmi/vault/10092101012",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
    ],
  },

  /* ===================== JULY ===================== */
  {
    name: "July",
    year: 2026,
    photos: "https://public.3.basecamp.com/p/SvWnnmq8cu6Pnjj2U3GuEbrj/vault/10201801624",
    photoCount: 29,
    complete: true,
    note: "",
    videos: [
      {
        title: "Bead Sale",
        video: "https://public.3.basecamp.com/p/hKkwcpSE5At3h8d4vVeijbgy/vault/10162688894",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Ammonite",
        video: "https://public.3.basecamp.com/p/hKkwcpSE5At3h8d4vVeijbgy/vault/10162690214",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Fountain",
        video: "https://public.3.basecamp.com/p/hKkwcpSE5At3h8d4vVeijbgy/vault/10162693080",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Tarot & Books",
        video: "https://public.3.basecamp.com/p/hKkwcpSE5At3h8d4vVeijbgy/vault/10162691046",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Rose Quartz",
        video: "https://public.3.basecamp.com/p/hKkwcpSE5At3h8d4vVeijbgy/vault/10162692177",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Arrowheads",
        video: "https://public.3.basecamp.com/p/hKkwcpSE5At3h8d4vVeijbgy/vault/10202688644",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Copper Collectible Coin",
        video: "https://public.3.basecamp.com/p/hKkwcpSE5At3h8d4vVeijbgy/vault/10202690732",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Purple Charoite",
        video: "https://public.3.basecamp.com/p/hKkwcpSE5At3h8d4vVeijbgy/vault/10202692364",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
    ],
  },

  /* ===================== AUGUST ===================== */
  {
    name: "August",
    year: 2026,
    photos: "https://public.3.basecamp.com/p/SvWnnmq8cu6Pnjj2U3GuEbrj/vault/10387261701",
    photoCount: 22,
    complete: true,
    note: "",
    videos: [
      {
        title: "Burgoo Promo",
        video: "https://public.3.basecamp.com/p/x564npPVZiCXTrV6pKGJ43Dn/vault/10329943724",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Kids Stuff",
        video: "https://public.3.basecamp.com/p/x564npPVZiCXTrV6pKGJ43Dn/vault/10329945182",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Vanadinite",
        video: "https://public.3.basecamp.com/p/x564npPVZiCXTrV6pKGJ43Dn/vault/10329949006",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Aquamarine",
        video: "https://public.3.basecamp.com/p/x564npPVZiCXTrV6pKGJ43Dn/vault/10383792696",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Burgoo Promo 2",
        video: "https://public.3.basecamp.com/p/x564npPVZiCXTrV6pKGJ43Dn/vault/10383803625",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Soapstone Carvings",
        video: "https://public.3.basecamp.com/p/x564npPVZiCXTrV6pKGJ43Dn/vault/10383992981",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Something for Everyone (August)",
        video: "https://public.3.basecamp.com/p/x564npPVZiCXTrV6pKGJ43Dn/vault/10384020763",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Pink Calcite",
        video: "https://public.3.basecamp.com/p/x564npPVZiCXTrV6pKGJ43Dn/vault/10384021909",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
    ],
  },

  /* ===================== SEPTEMBER ===================== */
  {
    name: "September",
    year: 2026,
    photos: "",
    photoCount: 0,
    complete: false,
    note: "",
    videos: [
      {
        title: "Moldavite",
        video: "https://public.3.basecamp.com/p/v3oHGdSmVPUixjyDKSHtWxoy",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "What You'll Find",
        video: "https://public.3.basecamp.com/p/vCiwaVEEdLgNJhmYqM2H6f2L",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "What You'll Find (Graphics)",
        video: "https://public.3.basecamp.com/p/Qv54bMh8sjnkTbsPcfEFGq5q",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Libyan Desert Glass",
        video: "https://public.3.basecamp.com/p/ubTYKsFAz56hwLCea1JdhYqq",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Fulgurite (Morocco)",
        video: "https://public.3.basecamp.com/p/tdcXW4KMpV8wUd5VSSce6zJS",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Motion Graphic Video",
        video: "https://public.3.basecamp.com/p/jxudJuiu2enwr8zK1L7kzcv9",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
      {
        title: "Halloween",
        video: "https://public.3.basecamp.com/p/iRKZ4zB7ccsV5HBhi5zs4gfb",
        photo: "",
        countsAs: 1,
        status: "edited",
      },
    ],
  },

  /* ===================== OCTOBER ===================== */
  {
    name: "October",
    year: 2026,
    photos: "",
    photoCount: 0,
    complete: false,
    note: "",
    videos: [
      // Add October videos here. Copy a block above, paste it, change the words.
      // Set status to "pending" for anything filmed but not yet edited.
    ],
  },

];
