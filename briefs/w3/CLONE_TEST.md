# The clone test — "could someone copy this in a day?"

The founder's bar is that BOW must not be something ChatGPT could copy in a day. This test
checks that literally.

## Cloner instructions

You are a skilled developer who has just seen someone else's product. Your job is to copy it as
fast as you can.

**What you may use:**
- Only the screenshots named in your task.
- The format rules in briefs/DC_AUTHORING.md, which you need for the file to run at all.
- Your own general knowledge.

**What you may NOT read:**
- the original board's source file (canvas/project/X3*.dc.html);
- any spec in briefs/w3/ other than this file;
- any repair file.
This is the whole point of the test: a copier has screenshots, not the source.

**Budget:** about 35 tool calls in total. That stands in for "a day with a chatbot". Spend them
on building, not polishing.

**Output:**
- Write your copy to scratchpad/clones/<Name>Clone.dc.html.
- Symlink it into scratchpad/render/ so it can be rendered.
- Render it once or twice with the harness to check that it works.

**Aim:** reproduce what the screenshots show:
- the layout;
- the numbers;
- the click path;
- the behaviour you can infer.
Where you can't tell how something works, make it look and behave as plausibly as you can, the
way a real copier would.

**Report (≤ 150 words):**
- what you copied;
- what you could not work out from the screenshots;
- anything you faked.
Be honest: faking is expected, and saying where you faked is the useful part.
