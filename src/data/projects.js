export const projects = [
  {
    slug: "renttape",
    name: "RentTape",
    year: "2026",
    role: "Contributor",
    description:
      "A rental price-tracking platform for the King County area. Scrapes daily listings across nine rental-management platforms and surfaces price and availability history over time.",
    tech: ["Python", "Playwright", "Next.js", "TypeScript", "PostgreSQL", "GitHub Actions"],
    links: [{ label: "renttape.com", url: "https://renttape.com" }],
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
    slug: "agent-bugfix-testbed",
    name: "Autonomous Bug-Fixing Agent",
    year: "2026",
    role: "Personal project",
    description:
      "An LLM agent that fixes bugs on its own: it reads failing pytest tests, edits source, and re-runs the tests to prove the fix. Solved all 19 injected bugs in 57 of 57 independent trials.",
    tech: ["Python", "Claude API (tool use)", "pytest"],
    links: [
      { label: "GitHub", url: "https://github.com/kukkevin1-cmd/agent-bugfix-testbed" },
    ],
    detail: {
      intro:
        "I built a small Python codebase with 19 intentionally injected bugs across five modules, each caught by a failing pytest test, and an agent that fixes them with no human writing the fix. The agent runs a Claude tool-use loop with four tools (list_files, read_file, write_file, run_tests) and a hard cap of 8 tool turns.",
      stats: [
        { value: "57 / 57", label: "trials passed (pass@1)" },
        { value: "19", label: "bugs across 5 modules" },
        { value: "~21 s", label: "median time per fix" },
      ],
      highlights: [
        {
          title: "Guardrails that make the result mean something",
          body: "write_file refuses any path outside src/, so the agent can't \"fix\" a bug by editing the test. The ground-truth bug manifest is kept out of the agent's context, and the harness re-runs pytest itself instead of trusting the model's self-report.",
        },
        {
          title: "From one lucky run to real measurement",
          body: "A single pass per bug reported 100%, which proved little. I wrote run_trials.py to reset src/ to its buggy state before every trial and run each bug three times independently, then logged per-trial pass/fail and timing to trial_results.json.",
        },
        {
          title: "Raising the difficulty on purpose",
          body: "The first 16 single-cause bugs all passed, so I added three \"very-hard\" ones that need a different approach, not a one-line fix: a bracket checker that counted depth instead of using a stack, a run-length decoder that only handled single-digit counts, and a top-k sort missing its tiebreak. The agent still solved all three in every trial.",
        },
        {
          title: "What the agent actually did",
          body: "On is_balanced, it explored the repo before editing, explained why a depth counter can't tell \"([)]\" from \"([])\", rewrote the function with a stack, and then re-ran the whole test file on its own. When that surfaced two unrelated failures, it noted them as out of scope instead of touching them.",
        },
      ],
    },
  },
  {
    slug: "zoom-clone",
    name: "Zoom Clone",
    year: "2023 · rebuilt 2026",
    role: "Team project",
    description:
      "Multi-party video chat over WebRTC with a Socket.IO signaling server, in-room chat, and camera switching. Load-tested at 300 concurrent users with p95 room joins around 6 ms.",
    tech: ["JavaScript", "WebRTC", "Socket.IO", "Node.js", "Express", "Mocha", "k6"],
    links: [{ label: "GitHub", url: "https://github.com/kukkevin1-cmd/zoom-clone" }],
    images: [
      { src: "/projects/zoom-call.jpg", alt: "Three-person video call with the in-room chat panel open" },
    ],
    detail: {
      intro:
        "A real-time video chat app built with vanilla JavaScript, WebRTC, and Socket.IO. Originally a team project (Dec 2022 – Feb 2023) that we load-tested with LoadRunner; I rebuilt it in 2026 after the original repo was lost, with tests, CI, and an open-source load test.",
      stats: [
        { value: "300", label: "concurrent users in load test" },
        { value: "~6 ms", label: "p95 room join" },
        { value: "4", label: "people per room (mesh)" },
      ],
      highlights: [
        {
          title: "Signaling only, media peer-to-peer",
          body: "The server never touches audio or video. When someone joins, it returns the list of existing peers; the newcomer creates an RTCPeerConnection and an offer for each one, and the server just relays SDP offers, answers, and ICE candidates.",
        },
        {
          title: "Camera switching without renegotiation",
          body: "Switching cameras mid-call uses RTCRtpSender.replaceTrack, so the new video track goes out on every existing connection without a new offer/answer round.",
        },
        {
          title: "Replacing a commercial load test",
          body: "LoadRunner is commercial, so I wrote an equivalent k6 scenario: users ramp to 300, connect over Socket.IO, join rooms of four, and send chat messages every two seconds. Thresholds are p95 HTTP < 200 ms, room join < 300 ms, and WebSocket connect < 500 ms.",
        },
        {
          title: "Tested on every push",
          body: "Mocha tests cover the signaling server, and GitHub Actions runs them plus a 30-user k6 smoke test on every push.",
        },
      ],
    },
  },
  {
    slug: "fullstack-ts-apps",
    name: "Full-Stack TypeScript Apps",
    year: "2023 · rebuilt 2026",
    role: "Coursework",
    description:
      "An ELIZA-style chatbot and a timed polls app built with React, Express, and TypeScript in a functional style: pure functions, immutable data, and 37 Mocha tests.",
    tech: ["TypeScript", "React", "Vite", "Node.js", "Express", "Mocha", "Supertest"],
    links: [{ label: "GitHub", url: "https://github.com/kukkevin1-cmd/fullstack-ts-apps" }],
    images: [
      { src: "/projects/chatbot.jpg", alt: "Chatbot conversation screen" },
      { src: "/projects/polls-results.jpg", alt: "Poll results screen" },
    ],
    detail: {
      intro:
        "Two full-stack apps from my Full-Stack Software Design & Implementation course (Sept – Dec 2023), rebuilt in 2026 after the original repo was lost. The chatbot does pattern matching with per-session memory and saved transcripts; the polls app lets you create timed polls, vote, and see results once a poll closes.",
      stats: [
        { value: "37", label: "Mocha unit tests" },
        { value: "2", label: "independent full-stack apps" },
      ],
      highlights: [
        {
          title: "Pure core, thin shell",
          body: "All domain logic lives in pure modules with no Express or I/O dependencies. Routes only validate input, call the pure functions, and store the result. Time is injected (createApp(now)) so tests are deterministic.",
        },
        {
          title: "Immutable state everywhere",
          body: "Server state is replaced, never mutated: castVote returns a new Poll, respond returns a new ChatState. React state updates only with new arrays and objects.",
        },
        {
          title: "Types that rule out bad states",
          body: "Errors come back as a Result<T> type instead of exceptions, data is readonly, and a Page union in the polls client means only valid screens can exist.",
        },
        {
          title: "Recursive data structures",
          body: "The chatbot uses a hand-written immutable linked list (nil | cons) with recursive concat, map, and pattern matching.",
        },
      ],
    },
  },
  {
    slug: "workout-tracker-cli",
    name: "Workout Tracker CLI",
    year: "2026",
    role: "CS50P final project",
    description:
      "A command-line app for logging lifts, viewing workout history, and calculating estimated one-rep max and training volume. My final project for Harvard's CS50P.",
    tech: ["Python", "pytest", "CSV", "tabulate"],
    links: [
      { label: "GitHub", url: "https://github.com/kukkevin1-cmd/workout-tracker-cli" },
      { label: "Video demo", url: "https://www.youtube.com/watch?v=MeS9pF5oPWA" },
    ],
    detail: {
      intro:
        "I wanted something simpler than a spreadsheet to track my lifts, so I built a CLI that logs workouts (date, exercise, weight, reps) to a CSV file, shows history as a table, and calculates estimated 1RM with the Brzycki formula and total volume across sets.",
      highlights: [
        {
          title: "Pure functions, easy tests",
          body: "The core calculations have no input() or print() inside them, so pytest can test them directly, including edge cases like a single rep and inputs that should raise ValueError. All I/O stays in main() and the menu functions.",
        },
        {
          title: "Small decisions that prevent bad data",
          body: "Dates must be YYYY-MM-DD so they sort correctly as plain text, and exercise names are lowercased so \"Bench Press\" and \"bench press\" count as the same lift.",
        },
        {
          title: "What I'd add next",
          body: "Personal-record tracking per exercise, a volume-over-time chart, and moving from CSV to SQLite.",
        },
      ],
    },
  },
];
