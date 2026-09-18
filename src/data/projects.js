export const projects = [
  {
    slug: "renttape",
    name: "RentTape",
    year: "2026",
    role: "Contributor",
    description:
      "A rental price-tracking platform for the King County area. Scrapes daily listings across nine rental-management platforms and surfaces price and availability history over time.",
    tech: ["Python", "Playwright", "Next.js", "TypeScript", "PostgreSQL", "GitHub Actions"],
    link: "https://renttape.com",
    linkLabel: "renttape.com",
    repoNote: "Private team repository",
    detail: {
      intro:
        "RentTape tracks daily price and availability snapshots for apartment listings across King County, scraping nine different rental-management platforms and turning the results into per-unit price history. I joined after the initial deployment and have been working through a backlog of data-integrity and reliability issues.",
      stories: [
        {
          title: "A Seattle building was mapped to Scotland",
          problem:
            "Communities carry latitude/longitude for the map view, geocoded automatically when they're added. There was no check confirming those coordinates actually landed in Washington.",
          work: "Wrote check_coords.py: a script that flags any active community whose coordinates are missing or fall outside a Washington State bounding box, and runs it against the production data snapshot.",
          finding:
            "One listing, slug \"skye,\" was mapped to 57.27°N, -6.21°W — the Isle of Skye, Scotland. The geocoder had matched the building's short name to the wrong place entirely. The same run also surfaced 69 other communities with missing coordinates.",
          result:
            "Merged a fix and a reusable check that can be re-run after future geocoding batches.",
        },
        {
          title: "Units with no bedroom count were vanishing",
          problem:
            "The floor-plan summary table on each community's page buckets units by bedroom count (Studio, 1BR, 2BR, ...). Units with a null bedroom count matched none of the buckets and disappeared from the summary — while still sitting in the full unit list below it, which made the mismatch easy to miss.",
          work: "Added an \"Unknown\" bucket to the bucket list that only renders when it actually has units in it, and verified it against a unit with its bedroom count set to null in a copy of the production snapshot.",
          finding:
            "Confirmed the unit reappeared under \"Unknown\" and that its count left the bucket it used to silently occupy.",
          result: "Merged — no more silent data loss in the summary view.",
        },
        {
          title: "No CI meant broken parsers could merge silently",
          problem:
            "The repo's GitHub Actions only ran scraping, backups, and snapshots — nothing validated that a pull request's code actually still worked, so a parser regression could merge unnoticed.",
          work: "Added a test workflow that runs the Python test suite and, for the Next.js frontend, lint, a TypeScript check, and the unit tests — on every pull request.",
          finding:
            "Along the way, found that the frontend's lint step had never actually been configured (it would fail on any PR, correct or not) and that the TypeScript check failed even on a clean checkout of main, because two existing test files used an import style the tsconfig didn't allow. Fixed both before wiring the workflow, and verified the whole thing by deliberately breaking a parsing function — the new checks caught it immediately.",
          result:
            "Merged. Every PR now gets a real pass/fail signal instead of none at all.",
        },
        {
          title: "\"Updated hourly\" wasn't true, and the dashboard hid stale buildings",
          problem:
            "An internal Streamlit dashboard's sidebar said data was \"Updated hourly.\" Reading the actual scheduling code showed that while the cron job checks in hourly, each building is only scraped once per day, at its own staggered time slot.",
          work: "Traced the scheduling logic, fixed the caption, and then checked what the sidebar's \"Last scraped\" metric actually meant when \"All buildings\" was selected.",
          finding:
            "That metric used the most recently scraped date across every building — so if even one building had scraped today, the dashboard implied everything was current. A direct query showed 16 buildings hadn't been scraped in 13+ days, invisible under the old logic.",
          result:
            "Fixed the caption and changed the metric to reflect the least-recently-updated building instead, so \"Last scraped\" now means what it says.",
        },
      ],
    },
  },
  {
    name: "Zoom Clone",
    year: "2023",
    role: "Team project",
    description:
      "A real-time video communication UI built to understand WebRTC and low-latency data transmission. Load-tested with LoadRunner at 300+ concurrent users.",
    tech: ["JavaScript", "WebRTC", "LoadRunner"],
  },
  {
    name: "Full-Stack Software Design",
    year: "2023",
    role: "Coursework",
    description:
      "A chatbot and a polls app built to practice functional programming and immutable state. Covered with unit tests in Mocha for reliable, bug-free state transitions.",
    tech: ["React", "Node.js", "TypeScript", "Mocha"],
  },
];
