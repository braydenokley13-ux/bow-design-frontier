# P4 · THE GUEST — the nearly invisible Browser (BOW inside other surfaces; home as a Round)

File: `prototypes/Guest.html` (+ `.steps.json`). Read first: `briefs/00_PRIOR_ART.md`,
`briefs/PROTOTYPE_CONTRACT.md`, `prototypes/_shared/boston-fixture.js`, and research: F §2.10 "The
Guest" and §2.11 "The Floor"; B §2.1 "The Reading", §2.3 "The Offer", §2.7 trust without badges,
§2.8 external invocation, §2.9 unspoofable; A §H "The Round" (Doorstep / Round / Standing); H §H5 "On
Call".

## Exact design problem
BOW as the executable layer other surfaces invoke — so the Browser is mostly ABSENT. A person meets
a system inside something they already use (an assistant's answer, a news article, a text from a
friend, a ring on their phone, a voice), and BOW appears only at THRESHOLDS: to verify a claim, to
hand them into a seat, to fork, to run their Round when they return. Show what an embedded surface
can do (read, verify, open a cut, carry an offer) and what only BOW Browser can do (sign a seat,
hold a branch, compare, the Round, the frame only BOW may draw). Also answer "what is home?" with no
home page.

## User
A fan with an assistant; a newsreader; a friend who receives a link; the GM of "Boston · Year Two"
who holds a seat and is away for two weeks.

## System
Boston Reality and the BOW World "Boston · Year Two" (fixture). All host surfaces are FICTIONAL and
generic: "an assistant" (neutral transcript, no real product's look or name), a fictional paper "The
Harbour Ledger", a generic phone messages screen, a generic phone ring. Never imitate a real
brand's interface.

## Mandatory states
1. **Inside an assistant.** The user asks "Is Boston over the tax line?". The assistant's sentence
   says "past the tax line". BOW's claim card, drawn INSIDE the transcript in BOW's own frame (the
   host cannot restyle it), shows both numbers side by side (cap payroll ≈ $203.6M; tax salary
   $198,722,406, ≈ $1.7M under the $200.428M line; verify) and flags the assistant's sentence "does
   not match the record" (a `verify` result). Two affordances: "Open the cut" and "Enter as owner"
   (the second shows: "Signing happens in BOW, not here — the assistant cannot sign").
2. **Inside an article.** A paragraph in "The Harbour Ledger" about last season's deadline dumps; its
   numbers are TRUE MARKS (a hairline). Press "≈ $39.5M": provenance (kind, source, as-of) and typed
   doors that exist, with counts, before opening — BECAUSE · MEANWHILE · WHO · WHO SAYS YES · WHAT'S
   DIFFERENT. A mark the record cannot back shows a dashed "no record" instead.
3. **A text from a friend.** "Maya" (fictional) sent a Reading: "Follow · Boston Celtics · Maya saw
   it 29 Sep 2026, 14:03 · maple-otter". Opening it three weeks later (simulate) gives an ARRIVAL
   NOTE: kind first, sender, what this is, and a DRIFT stripe "Reality recorded 3 things since Maya
   looked; 1 touches this". A second Reading, a Snapshot, opens exactly as it stood, dated.
4. **Spoken.** A voice exchange rendered as a transcript: "Boston, the Philadelphia call, June 2017"
   → read-back in fixed order (kind, question, when, check words) → "Say exact" → "maple, otter" →
   opens. One misheard word yields "did you mean…", never a wrong landing.
5. **The Offer (authority apart from reference).** A teacher's or owner's Offer arrives: "Offer from
   the owner · the GM seat of Boston · Year Two · until Friday". Redeeming it opens BOW's THRESHOLD
   (the only full-Browser moment so far): who offers, which seat, what you'll see, what you give up,
   what stays private; sign; the seat binds to this device. A copy of the phrase opened on a second
   device (simulate) gets "Not for you" — identical to a seat that doesn't exist.
6. **A ring (On Call).** Later, the phone rings from the seat: "Boston · Year Two · Week 10 · you:
   GM — Denver's offer expires 11:00. If nobody acts: declined." A 20-second brief (the offer, the
   gauge, the deadline, the default). Picking up is entering for the length of the call. "Hold"
   runs your answer as a dry run in a private fork and reads back a receipt ("payroll would become
   $220.35M; roster 14") before you commit. Commit or decline; hang up; the receipt goes back to the
   host surface as PUBLIC facts only.
7. **Standing orders.** While you're away, a standing order you wrote ("decline any offer for a
   first-round pick; accept seconds for players on minimum deals") answers one ring; the act is
   stamped "by your standing order §2", never "by you".
8. **Return after 14 days: the Round.** No home page. BOW opens inside the first stop and states its
   length: "4 stops · 1 closes tonight". Stop 1 (responsibility): Week 10 Monday, a SEAT DIFF — what
   your seat can see now that it couldn't, what it can no longer do, what's due; act / pass (recorded
   as absence, NO ACT) / leave. Stop 2 (a kept branch fractured by a Reality act — staged, labelled).
   Stop 3 (addressed to you: Maya's invitation). Stop 4 (live: the next preseason game `[verify]`).
   One cause touching three of your things shows ONCE with three doors. Last stop: "Level with the
   record." — the frame goes quiet.
9. **Standing, with eight kinds of trust.** The edge ledger of relations you hold (seat, kept
   branch, follow, standing order, want), each with an end condition. The systems you hold wear
   FRAMES, not badges, for: OFFICIAL BOW · THIRD-PARTY VERIFIED · THIRD-PARTY UNVERIFIED · LOCAL ·
   TEMPORARY (thin frame thinning toward expiry) · LIVE REALITY · MODELED · ARCHIVED (matted, clock
   stopped). One plain sentence per kind at the threshold, on request ("Made by [creator]. Not
   checked by BOW."). Risk is loud by presence; trusted kinds are calm.
10. **AI unavailable.** A switch "Models unavailable": reads, verify, offers, rings, standing orders,
    the Round all still work; only language asks degrade to typed choices. Nothing spins.

## What BOW Browser uniquely provides (make it visible)
A small, honest panel reachable at any time: "In a host surface you can: read a claim, verify a
sentence, open a cut, carry an offer. Only in BOW: sign a seat, hold a branch, compare, run your
Round, see the frame BOW alone draws."

## Art direction — "Borrowed rooms, one BOW frame"
The host surfaces are deliberately plain and generic (grey assistant transcript, a newsprint
article, a phone). BOW's own frame is unmistakable and constant across all of them: e.g., a thick
black threshold rule with a cut corner and a small serif "BOW" wordmark as TEXT (no logo art), the
truth textures inside. Fonts: e.g. "Spectral" (BOW) + "Work Sans" (hosts).

## Capability labels
REAL CURRENT: BOW Economics Live's no-LLM runtime posture (D166/D179), join codes that avoid
mishearable characters, device-bound seats and rejoin, the dated fact store; the Live World page's
seats by lease (prototype-grade). PROPOSED: claim cards in hosts, verify, Readings with check words,
Offers, rings, standing orders, the Round, the eight trust frames. SPECULATIVE: assistants honouring
the card and quoting faithfully at scale. External protocols (MCP, MCP Apps, WebMCP) exist outside
BOW; no BOW server does. AI: BOW side NO AI REQUIRED for reads/verify/offers/rings; the assistant pays
its own tokens; parsing loose speech SMALL / CHEAP MODEL.

## Prohibited
Imitating any real product's UI or name; a feed of notifications; an inbox of cards or a four-tile
dashboard; engagement ranking; "recommended for you" after the last stop; a chat window as BOW's UI;
toasts for refusals; badges walls.

## Acceptance criteria
All 10 states in the steps file; BOW's frame is identical and unforgeable-looking across every host;
the Round ends in a quiet "level" state; the second-device refusal is identical to a nonexistent
seat; harness clean at both viewports.
