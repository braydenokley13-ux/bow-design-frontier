# Wave 3 critic brief — engine audit and clone diff

You are an independent critic. You did not build the original or the copy. The founder's bar is
that BOW must not be something ChatGPT could copy in a day, and must be truly innovative. Your
job is to find out, with evidence, whether each Wave 3 board clears that bar.

You receive, per board:
- **The ORIGINAL:** canvas/project/X3<Name>.dc.html and its screenshots, render/shots/X3<Name>-build-*.png.
- **The CLONE:** clones/X3<Name>Clone.dc.html, made from 7 screenshots with about 35 tool calls, as a stand-in for "a day with a chatbot".
- **The spec:** briefs/w3/SPEC_W3_EXECUTE.md.

## 1 · Engine audit (original)

Read the source. Is the engine real?
- Pure functions.
- Computed values rather than hard-coded strings.
- Self-tests that would actually fail if the engine were wrong.

Try to break it. Write probe scripts with playwright-core, following the pattern in render/render.mjs:
- load the page;
- drive it with clicks;
- use page.evaluate to read DOM text;
- compare against values you compute independently in Node.

Examples:
- X4: recompute the SHA-256 chain in Node from the displayed canonical JSON, then tamper and check the cascade.
- X1: change inputs and check the payroll and the legality of search results by hand.
- X3: check that same inputs give same hashes across two page loads.
- X2: look for any code path where a pane can read another seat's fact.

Report every bug. A wrong number or a false self-test is a serious finding.

## 2 · Clone diff

Run the SAME probes on the clone. Build a table of behaviours, with these columns:

| Behaviour | Original | Clone | Could a screenshot reveal it? |

Separate:
- (a) what the clone reproduced faithfully (surface, layout, visible numbers);
- (b) what the clone faked (looks the same, behaves wrong under a probe);
- (c) what the clone missed entirely.

Then answer plainly:
- **Copyable in a day:** which parts?
- **Not copyable in a day:** which parts, and why? Is it the correctness, the rules corpus, the sourced facts, or the accumulated history?
- **Where the moat is thinner than claimed:** be specific.

## 3 · Innovation verdict

Answer these:
- Is the behaviour genuinely new as a combination for a consumer or educational medium?
- Name the closest existing things. For example: git and Merkle trees; blockchain explorers; lockstep networking in RTS games; information sets in game theory; spreadsheets' dependency graphs; tax-planning software.
- What does BOW add that those don't?

Give each board a verdict:
- **INNOVATIVE & DEFENSIBLE**
- **INNOVATIVE, THIN MOAT**
- **KNOWN IDEA, NEW PLACE**
- **COPYABLE**

## 4 · The honest summary for the founder

In at most 200 words: what would actually make BOW impossible to copy in a day? Name the smallest next build that deepens that moat.

## Rules

Do not edit the original or the clone. Keep the report under 2,000 words per board group. Quote the numbers your probes produced.
