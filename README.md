
> Open this page at [https://jamespburke.github.io/pxt-time-events/](https://jamespburke.github.io/pxt-time-events/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/jamespburke/pxt-time-events** and import


## API Reference

### setUpClock
timeevents.setUpClock(total_seconds=60, chunk_size=10)

**Configures the core timing system**  
*Parameters:*
- `total_seconds`: Total program duration (0-3600s, default 60)
- `chunk_size`: Time segments for events (1-60s, default 10)

**Example:**
timeevents.setUpClock(300, 30) // 5-minute program with 30-second chunks

---
### startClock
timeevents.startClock()

**starts the timing system**  

**Example:**
timeevents.startClock() // begin timing

---

### onChunkElapsed (Event Handler)
timeevents.onChunkElapsed(function () {
// Your event code here
})

**Triggers when a time chunk completes**  

---

### onTimeChunk (Event Handler)
timeevents.onTimeElapsed(function () {
// Your event code here
})

**Triggers when a total_seconds have elapsed**  

---



## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/jamespburke/pxt-time-events** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
