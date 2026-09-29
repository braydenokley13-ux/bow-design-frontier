/* BOW Browser Frontier — the one shared store for every prototype in this folder.
 *
 * Wave 2 copied one wrong number into eleven boards. Prototypes therefore read facts from here
 * and never paste them. Every claim carries its epistemic kind (the truth grammar), a source and
 * an as-of date. Anything not checked against a source is `verify: true`; anything nobody knows is
 * kind UNKNOWN with no value. A prototype that needs a fact not listed here uses a
 * "[verify: …]" slot — it never invents one.
 *
 * Kinds: OBSERVED (outside world, reported) · RECORDED (BOW's own canonical history, an act inside a
 * World) · AUTHORED (a rule or number chosen on purpose, incl. prototype-illustrative values) ·
 * COMPUTED (follows exactly from rules + state) · MODELED (a named, versioned model actually ran;
 * shown as a range) · GENERATED (made by AI or a generator) · UNKNOWN (a marked hole).
 *
 * Sources: bow-design-frontier/briefs/w2/W2_BAR_AND_FIXTURES.md (incl. its CORRECTION block, which
 * follows BOW Economics Live runtime/src/modules/sameLine/world.ts, read 4 Sep 2026) and the Boston
 * spatial evidence on bow-economics-live branch claude/quirky-maxwell-s26mxx @ 09051acf.
 * Assembled 29 Sep 2026. Data only — no behaviour, no styling.
 */
(function () {
  var F = function (v, k, src, asOf, verify, note) {
    return { v: v, k: k, src: src || null, asOf: asOf || null, verify: verify !== false, note: note || null };
  };
  var FX = 'BOW Economics Live fixture (world.ts), via W2 fixture';
  var PUB = 'public reporting, via W2 fixture';
  var R = 'web search by research agent D, 29 Sep 2026 (search snippets; verify)';

  window.BOW_FIXTURE = {
    meta: {
      assembled: '2026-09-29',
      now: '2026-09-29',
      rule: 'Read facts from here; never paste. Unknowns stay holes. Real-world figures are verify.',
      capability: {
        REAL: 'REAL CURRENT PRODUCT CAPABILITY — exists in a BOW repo today',
        PROPOSED: 'PROPOSED PLATFORM CAPABILITY — plausible, not built',
        SPECULATIVE: 'SPECULATIVE FRONTIER — depends on unsolved problems'
      },
      kinds: {
        OBSERVED: 'measured or reported from outside BOW',
        RECORDED: 'written into BOW’s own canonical history',
        AUTHORED: 'a rule or number someone chose on purpose',
        COMPUTED: 'follows exactly from rules and state',
        MODELED: 'a named, versioned model’s answer (a range)',
        GENERATED: 'made by AI or a generator',
        UNKNOWN: 'nobody knows yet — a marked hole'
      }
    },

    /* ---------------------------------------------------------------- league rules */
    league: {
      name: 'NBA',
      season2627: {
        label: '2026–27',
        cap: F(164961000, 'OBSERVED', FX, '2026-09-04'),
        tax: F(200428000, 'OBSERVED', FX, '2026-09-04'),
        apron1: F(209015000, 'OBSERVED', FX, '2026-09-04'),
        apron2: F(221686000, 'OBSERVED', FX, '2026-09-04'),
        exceptions: {
          mleNonTaxpayer: F(15044000, 'OBSERVED', 'pr.nba.com via world.ts', '2026-09-04', true, 'using it hard-caps the team at the first apron'),
          room: F(9366000, 'OBSERVED', 'pr.nba.com via world.ts', '2026-09-04'),
          mleTaxpayer: F(6064000, 'OBSERVED', 'pr.nba.com via world.ts', '2026-09-04', true, 'hard-caps at the second apron'),
          minimum: F(2449000, 'OBSERVED', 'pr.nba.com via world.ts', '2026-09-04')
        },
        rulesInWords: [
          'A team over the cap signs a free agent only through an exception.',
          'Crossing the first apron removes the non-taxpayer (big) MLE.',
          'The tax is charged on tax salary, in rising brackets; repeat payers pay more (label simplified rates “first-time payer”).'
        ]
      },
      season2526: {
        label: '2025–26',
        cap: F(154647000, 'OBSERVED', 'NBA announcement, 30 Jun 2025 (not in the W2 fixture — verify)', '2025-06-30'),
        tax: F(187895000, 'OBSERVED', 'NBA announcement, 30 Jun 2025 (verify)', '2025-06-30'),
        apron1: F(195945000, 'OBSERVED', 'NBA announcement, 30 Jun 2025 (verify)', '2025-06-30'),
        apron2: F(207824000, 'OBSERVED', 'NBA announcement, 30 Jun 2025 (verify)', '2025-06-30')
      }
    },

    /* ---------------------------------------------------------------- reality */
    reality: {
      id: 'boston.reality',
      name: 'Boston Celtics · Reality',
      clock: { kind: 'live', label: 'Live · keeps changing without you', now: '2026-09-29', phase: F('2026–27 training camp', 'OBSERVED', PUB, '2026-09-29', true, '[verify: camp dates]') },
      youCan: ['observe', 'follow', 'enter a recorded moment', 'fork a recorded moment'],
      youCannot: ['act on the real team'],
      capPayroll: F(203600000, 'OBSERVED', FX, '2026-09-04', true, 'cap payroll — NOT the number the tax is charged on'),
      taxSalary: F(198722406, 'OBSERVED', 'salaryswish via world.ts', '2026-09-04', true, 'the tax is charged on this: ≈ $1.7M UNDER the tax line'),
      contracts: [
        { player: 'Jayson Tatum', salary: F(58500000, 'OBSERVED', PUB, '2026-09-29', true, 'approx.') }
      ],
      contractsNote: 'Other contracts: read from the Reality feed; do not name them without checking (roster has changed).',
      owner: F('Group led by Bill Chisholm (sale approved 13 Aug 2025; ≈$6.1B reported valuation; remaining stake transfers 2028)', 'OBSERVED', PUB, '2025-08-13'),
      liveEvent: F(null, 'UNKNOWN', null, null, true, '[next preseason game · from the Reality feed] — do not invent opponent or date'),
      realRecord2526: F('56–26', 'OBSERVED', 'BOW Economics Live art-direction note (franchise.realRecord)', '2026-09-28')
    },

    /* ---------------------------------------------------------------- recorded moments (doors) */
    /* A door is named by its QUESTION, never its answer. `sealed` is revealed only after the seat
       acts, or to an observer who asks. */
    moments: [
      {
        id: 'm2017-06-17', date: '2017-06-17',
        question: '17 Jun 2017 · Philadelphia calls about the No. 1 pick',
        seat: 'Boston president of basketball operations',
        sealed: F('Boston agreed that weekend to trade down (finalized 19 Jun) and took Jayson Tatum at No. 3 on 22 Jun.', 'OBSERVED', PUB, '2017-06-22')
      },
      {
        id: 'm2025-05-12', date: '2025-05-12',
        question: '12 May 2025 · Game 4 vs New York — Tatum goes down',
        sealed: F('Tatum ruptured his right Achilles.', 'OBSERVED', PUB, '2025-05-12')
      },
      {
        id: 'm2025-06', date: '2025-06-24',
        question: 'Late Jun 2025 · Over the second apron — who goes?',
        sealed: F('Jrue Holiday traded to Portland for Anfernee Simons and two second-round picks; Kristaps Porziņģis to Atlanta in a three-team deal (Boston received Georges Niang and a 2031 second, sent a 2026 second).', 'OBSERVED', 'NBA.com / Hoops Rumors via W2 fixture', '2025-07-01', true, '[verify: exact dates]')
      },
      {
        id: 'm2026-02-05', date: '2026-02-05',
        question: '5 Feb 2026 · Trade deadline day — the tax bill is the problem',
        sealed: F('Anfernee Simons traded to Chicago for Nikola Vučević; Boston’s projected tax fell from ≈$39.5M to ≈$17M.', 'OBSERVED', 'ESPN / NBC Sports Boston via W2 fixture', '2026-02-05')
      },
      {
        id: 'm2026-03-06', date: '2026-03-06',
        question: '6 Mar 2026 · Dallas at Boston — is Tatum back?',
        sealed: F('Tatum returned from the Achilles injury against Dallas.', 'OBSERVED', 'NBA.com via W2 fixture', '2026-03-06')
      }
    ],

    /* ---------------------------------------------------------------- the time cut the founder named */
    /* OPEN BOSTON · NOW → MOVE TO the trade deadline last year. Three layers:
       state (what existed), known (what a person in the building could know), sealed (not yet happened). */
    cuts: {
      deadline2026: {
        date: '2026-02-05',
        label: 'Trade deadline · 5 Feb 2026',
        firstReport: F('2026-02-03', 'OBSERVED', 'Boston.com, 3 Feb 2026, citing Shams Charania — ' + R, '2026-02-03', true, 'the Simons trade was reported two days before the deadline, so a cut “on 5 Feb” already knows it'),
        beforeFirstReport: { date: '2026-02-02', label: 'Deadline week · 2 Feb 2026, before the first report' },
        taxAfter: F('≈ $17.7M after the Simons trade (Yossi Gozlan via Boston.com); a 5 Feb report says further moves left Boston ≈ $0.84M UNDER the tax line', 'OBSERVED', R, '2026-02-05', true, 'the fixture’s ≈$17M may be an intermediate state'),
        question: '5 Feb 2026 · Trade deadline day — the tax bill is the problem',
        seasonLines: 'season2526',
        state: [
          { what: 'Season', value: F('2025–26, in progress', 'OBSERVED', PUB, '2026-02-05', false) },
          { what: 'Jayson Tatum', value: F('Out — right Achilles rupture (12 May 2025); no return yet', 'OBSERVED', PUB, '2026-02-05') },
          { what: 'Anfernee Simons', value: F('On Boston’s roster (arrived from Portland, summer 2025)', 'OBSERVED', PUB, '2026-02-05') },
          { what: 'Nikola Vučević', value: F('On Chicago’s roster', 'OBSERVED', PUB, '2026-02-05') },
          { what: 'Projected luxury tax (before any deadline move)', value: F(39500000, 'COMPUTED', 'computable at the cut from the books under the 2025–26 rules; the ≈$39.5M figure itself was REPORTED on 3–5 Feb (ESPN / NBC Sports Boston / Boston.com), after a 2 Feb cut', '2026-02-05', true, 'approx.; at a 2 Feb cut show it as computed from the books, and cite the later report only in SINCE') },
          { what: 'Boston record on the morning of 5 Feb', value: F(null, 'UNKNOWN', null, null, true, '[verify: record at the deadline]') },
          { what: 'Boston payroll vs 2025–26 lines', value: F(null, 'UNKNOWN', null, null, true, '[verify: payroll at the deadline]') }
        ],
        known: [
          { what: 'The 2025–26 tax line, aprons and brackets', value: F('Published rules', 'OBSERVED', 'NBA (verify)', '2025-06-30') },
          { what: 'The projected tax if nothing changed', value: F('≈ $39.5M', 'OBSERVED', 'ESPN / NBC Sports Boston via W2 fixture', '2026-02-05') },
          { what: 'That the deadline closes today', value: F('3 p.m. ET [verify: time]', 'OBSERVED', PUB, '2026-02-05') },
          { what: 'Which other teams were calling, and about whom', value: F(null, 'UNKNOWN', null, null, true, '[verify: reported talks — do not invent rumors]') }
        ],
        sealed: [
          { what: 'The Simons-for-Vučević trade', date: '2026-02-05', value: F('Simons to Chicago for Vučević; projected tax ≈$39.5M → ≈$17M', 'OBSERVED', 'ESPN / NBC Sports Boston via W2 fixture', '2026-02-05'), note: 'the act the seat takes or does not take' },
          { what: 'Tatum’s return', date: '2026-03-06', value: F('Returns vs Dallas', 'OBSERVED', 'NBA.com via W2 fixture', '2026-03-06') },
          { what: 'The rest of the regular season', date: null, value: F('Finishes 56–26', 'OBSERVED', 'BOW Economics Live (franchise.realRecord)', '2026-09-28'), note: '[verify: season end date]' },
          { what: 'The 2026 playoffs', date: null, value: F('Lost in the first round to Philadelphia, 3–4, after leading 3–1', 'OBSERVED', R, null, true, 'not in any BOW source; verify') },
          { what: 'Jaylen Brown traded to Philadelphia for Paul George', date: '2026-07-01', value: F('Reported 1 Jul 2026 (official ≈ 6 Jul)', 'OBSERVED', 'hoopsrumors via W2 fixture; date ' + R, '2026-07-01', true, '[verify: date]') }
        ]
      }
    },

    /* ---------------------------------------------------------------- historical states (frozen, no NOW) */
    historical: [
      { id: 'hist.1985-86', name: '1985–86 Celtics', clock: { kind: 'frozen', label: 'Frozen · no NOW' } },
      { id: 'hist.2007-08', name: '2007–08 Celtics', clock: { kind: 'frozen', label: 'Frozen · no NOW' } }
    ],

    /* ---------------------------------------------------------------- the BOW World */
    world: {
      id: 'boston.world.year-two',
      name: 'Boston · Year Two',
      what: 'A persistent BOW World: built from Reality at Year 0, then diverged by your acts. It keeps running on its own calendar while you are away.',
      clock: { kind: 'calendar', label: 'Year Two · Week 9', note: 'World time (authored calendar), not a date' },
      seat: { name: 'General manager, Boston', holder: 'you' },
      taxLine: F(200000000, 'AUTHORED', 'World rule', null, false, 'the World’s own line'),
      taxRule: F('Flat 1.5× over the line', 'AUTHORED', 'World rule (BOW Worlds branch)', null, false, 'World rule: flat 1.5× (authored) — the NBA’s real tax is incremental'),
      payroll: F(222800000, 'RECORDED', 'World record', null, false),
      projectedTax: F(34200000, 'COMPUTED', 'World rule × payroll', null, false, 'computed under the World rule — NOT what the NBA would charge'),
      acts: [
        { when: 'Year One', what: 'Funded Business over Basketball Ops (analytics staff cut)', k: 'RECORDED' },
        { when: 'Year Two · Week 6', what: 'Traded Derrick White (and a backup big as salary filler) to Golden State for Jimmy Butler — signed by both owners', k: 'RECORDED' },
        { when: 'Year Two · Week 9', what: 'Lost to Denver 112–115 at home; Jokić scored on the last possession after a switch left a big on a guard', k: 'RECORDED' }
      ],
      departments: [
        { id: 'analytics', name: 'Analytics', side: 'basketball', funded: false, opensFor: 2500000, why: 'not funded since Year One (Business funded instead)', k: 'RECORDED', note: 'price read from the spatial evidence; verify against the save' },
        { id: 'scouting', name: 'Scouting', side: 'basketball', funded: false, opensFor: 2000000, why: 'not funded since Year One (Business funded instead)', k: 'RECORDED', note: 'price read from the spatial evidence; verify against the save' },
        { id: 'ticketing', name: 'Ticketing', side: 'business', funded: true, why: 'Business funded in Year One', k: 'RECORDED', note: 'a funded ticketing room is what produces the next night’s seat forecast' },
        { id: 'partnerships', name: 'Partnerships', side: 'business', funded: true, why: 'Business funded in Year One', k: 'RECORDED' }
      ],
      hardLimit: F(250000000, 'AUTHORED', 'World rule (spatial evidence: payrollLimitK)', null, false, 'the World’s hard limit'),
      tradeFile: {
        with: 'Golden State', week: 'Year Two · Week 6', status: 'Signed by both owners',
        send: [{ player: 'Derrick White', salary: F(30300000, 'RECORDED', 'World trade file (spatial evidence)', null, false) }],
        get: [{ player: 'Jimmy Butler', salary: F(56800000, 'RECORDED', 'World trade file (spatial evidence)', null, false) }],
        payrollBefore: F(196300000, 'COMPUTED', '222.8 − (56.8 − 30.3)', null, false, '$3.7M under the World’s line before the trade (verify against the save)')
      },
      /* A longer record for prototypes that need one (lifting acts, many worlds). Acts marked
         AUTHORED are illustrative, written for the prototypes — not in any save. Money deltas are
         authored too, except the Week 6 trade (the World record). */
      record: [
        { id: 'y1-business', when: 'Year One', what: 'Funded Business over Basketball Ops', k: 'RECORDED', effects: { analytics: 'dark', scouting: 'dark', cash: 3000000 }, cashNote: 'authored' },
        { id: 'w1-minimum', when: 'Year Two · Week 1', what: 'Signed a guard to a minimum deal', k: 'AUTHORED', effects: { payroll: 2449000 } },
        { id: 'w2-partner', when: 'Year Two · Week 2', what: 'Booked a partner night at the arena', k: 'AUTHORED', effects: { cash: 600000 } },
        { id: 'w3-denver', when: 'Year Two · Week 3', what: 'Declined Denver’s call about a future second-round pick', k: 'AUTHORED', effects: {} },
        { id: 'w4-prices', when: 'Year Two · Week 4', what: 'Raised premium seat prices by 5%', k: 'AUTHORED', effects: { cashPerNight: 120000, premiumDemand: -0.04 } },
        { id: 'w6-trade', when: 'Year Two · Week 6', what: 'Traded Derrick White to Golden State for Jimmy Butler', k: 'RECORDED', effects: { payroll: 26500000 } },
        { id: 'w7-rotation', when: 'Year Two · Week 7', what: 'Moved Butler into the starting five', k: 'AUTHORED', needs: 'w6-trade', effects: {} },
        { id: 'w8-extension', when: 'Year Two · Week 8', what: 'Offered Butler’s camp an extension meeting', k: 'AUTHORED', needs: 'w6-trade', effects: {} }
      ],
      payrollStartYearTwo: F(193851000, 'AUTHORED', 'illustrative: 196.3 − 2.449', null, false, 'chosen so the record sums to the World’s $222.8M'),
      arena: {
        lastNight: F('Won 135–115 · 16,440 in the seats of 18,624', 'RECORDED', 'World record (spatial evidence)', null, false),
        nextNight: F('About 18,454 expected, of 18,624', 'MODELED', 'Ticketing room forecast (World model)', null, false, 'an estimate, not a played night'),
        ifTicketingDark: F(null, 'UNKNOWN', null, null, false, 'no seat forecast without a funded ticketing room')
      },
      openMatters: [
        { id: 'callup', what: 'Convert the two-way call-up before the roster deadline', due: 'Week 9 · Friday', k: 'AUTHORED', note: 'illustrative, authored' },
        { id: 'denver', what: 'Denver is asking about a future second-round pick', due: 'Week 10', k: 'AUTHORED', note: 'illustrative, authored' },
        { id: 'owner', what: 'The owner’s note on the tax bill is unanswered', due: 'before the next owners’ call', k: 'AUTHORED', note: 'illustrative, authored' }
      ]
    },

    /* ---------------------------------------------------------------- public forks (other people’s) */
    forks: [
      { id: 'fork.keep-no1', name: 'Keep No. 1 — Fultz', author: '[author]', diverged: '17 Jun 2017', clock: { kind: 'diverged', label: 'Diverged 17 Jun 2017' } },
      { id: 'fork.holiday-kept', name: 'Holiday kept', author: '[author]', diverged: 'Jun 2025', clock: { kind: 'diverged', label: 'Diverged Jun 2025' } }
    ],

    /* ---------------------------------------------------------------- other kinds that may appear */
    others: [
      { id: 'textbook.cap', kind: 'textbook', name: 'BOW Economics · The Cap', note: 'Track 101 lesson “The Window” EXISTS TODAY in BOW Economics Live', capability: 'REAL' },
      { id: 'model.apron2', kind: 'model', name: 'Second-apron consequences · BOW model v0.3', note: 'MODELED; runs on demand; assumptions and a version', capability: 'PROPOSED' },
      { id: 'creator.garden', kind: 'creator', name: 'Garden nights · arena economics · by [creator]', note: 'unreviewed community system', capability: 'SPECULATIVE' },
      { id: 'live.next', kind: 'live-event', name: '[next preseason game · from the Reality feed]', note: 'do not invent opponent or date', capability: 'PROPOSED' }
    ],

    /* ---------------------------------------------------------------- neighbouring systems Boston touches */
    neighbours: [
      { id: 'league', name: 'The League office', holds: 'the rules, trade approval, the trade call', crossing: 'a signed trade must be approved here' },
      { id: 'player-rep', name: 'A player and his representative', holds: 'consent, the agent’s incentives', crossing: 'extensions and some trades need them' },
      { id: 'arena', name: 'The arena business', holds: 'its own calendar and events', crossing: 'dates, revenue shares [verify: Boston’s arena arrangement]' },
      { id: 'media', name: 'Media', holds: 'who knows what, and when', crossing: 'reports move before signatures do' },
      { id: 'denver', name: 'Denver (another club)', holds: 'its own desk and private board', crossing: 'a trade is one object both sign' }
    ],

    /* ---------------------------------------------------------------- non-sports systems for transfer tests */
    domains: {
      air: {
        name: 'A regional airline’s rotation (illustrative)',
        rotation: ['BOS', 'PHL', 'ORD', 'PHL', 'BOS'],
        event: F('40-minute weather hold at ORD', 'AUTHORED', 'W2 fixture (illustrative)', null, false),
        rules: ['crew duty limits', 'minimum connection times', 'aircraft rotation']
      },
      supply: {
        name: 'Harrow Medical (fictional) · infusion pumps',
        supplier: 'Kaito Semiconductor (fictional), single-source MCUs',
        event: F('Fab fire at 06:10', 'AUTHORED', 'W2 fixture (fictional)', null, false),
        onHand: F(2300, 'AUTHORED', 'W2 fixture (fictional)', null, false, 'MCUs on hand'),
        burn: F(210, 'AUTHORED', 'W2 fixture (fictional)', null, false, 'MCUs per day'),
        runway: F(11, 'COMPUTED', '2,300 ÷ 210', null, false, '≈ 11 days'),
        promises: F(5, 'AUTHORED', 'W2 fixture (fictional)', null, false, 'customer promises over eight weeks')
      },
      chemistry: {
        name: 'N₂O₄ ⇌ 2 NO₂ in a sealed flask',
        kc298: F(0.00461, 'OBSERVED', 'standard textbook value at 25 °C (verify)', null, true, 'Kc, concentrations in mol/L'),
        dH: F(57.2, 'OBSERVED', 'standard textbook value, kJ/mol, forward reaction endothermic (verify)', null, true),
        note: 'NO₂ is brown, N₂O₄ colourless: heating the flask darkens it.'
      },
      chemistryDetail: {
        reaction: 'N₂O₄(g) ⇌ 2 NO₂(g)',
        Q: 'Q = [NO₂]² / [N₂O₄]',
        leChatelier: [
          'Heat the flask: the forward reaction is endothermic, K rises, more NO₂ — darker brown.',
          'Halve the volume: every concentration doubles, so Q = 2K > K — the mixture shifts toward N₂O₄ (fewer gas molecules) — lighter, then partly back.',
          'Add N₂O₄: Q < K — shifts toward NO₂.'
        ],
        note: 'COMPUTE these from the formula; never paste a result. K is temperature-dependent; only the 25 °C value is given (verify).'
      },
      ecology: {
        name: 'Yellowstone’s northern range after wolves returned',
        why: 'chosen as the awkward domain: nobody holds this system, there is essentially one act, causality is contested science, and the state is continuous and sparsely observed',
        act: F('Gray wolves reintroduced to Yellowstone from Canada in 1995 and 1996 (31 wolves in total)', 'OBSERVED', 'National Park Service public history (verify counts)', '1996', true),
        seats: ['National Park Service (the park)', 'U.S. Fish and Wildlife Service (the Endangered Species Act listing and the reintroduction rule)', 'the surrounding states (hunting outside the park)', 'ranchers (losses and compensation)', 'tribes [verify roles]'],
        contested: F('How much of the northern elk decline and of any willow / aspen recovery wolves caused, versus hunting, drought, bears and cougars, is disputed among researchers', 'OBSERVED', 'published ecology literature (verify sources before naming any)', null, true, 'show the disagreement; never pick a winner'),
        counts: F(null, 'UNKNOWN', null, null, true, '[verify: elk and wolf counts by year — do not invent]')
      },
      history1787: {
        name: 'Philadelphia, 16 Jul 1787 — equal votes in the Senate',
        tally: F('5 ayes (CT, NJ, DE, MD, NC) · 4 noes (PA, VA, SC, GA) · Massachusetts divided · New York absent · carried', 'OBSERVED', 'W2 fixture', null, true)
      }
    }
  };
})();
