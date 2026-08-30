---
name: "MINJAE.DEV V2 Career Adventure"
description: "A warm side-scrolling career world where recruiters explore backend experience as a seven-stage journey."
colors:
  start-coral: "#ff7657"
  field-green: "#74aa6a"
  factory-blue: "#4d9ec5"
  spring-violet: "#8b79c6"
  market-lime: "#b4d446"
  trips-orange: "#ff9d45"
  next-coral: "#e66f66"
  paper: "#faf7ef"
  panel-paper: "#fffdf7"
  world-sky: "#cfe3dc"
  sky-light: "#e8f1eb"
  sky-depth: "#bdd9d2"
  grass: "#93b273"
  grass-depth: "#739558"
  road-sand: "#d8c7a5"
  outline-ink: "#293a31"
  action-ink: "#213128"
  body-ink: "#526058"
  muted-ink: "#7c8881"
  sun-gold: "#ffd370"
typography:
  display:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "clamp(32px, 3.6vw, 54px)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "clamp(38px, 5vw, 62px)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.045em"
  body:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.72
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "10px"
    fontWeight: 500
    letterSpacing: "0.14em"
rounded:
  square: "0"
  cloud: "40px"
  circle: "50%"
spacing:
  xs: "6px"
  sm: "8px"
  md: "12px"
  lg: "18px"
  xl: "24px"
  2xl: "30px"
components:
  hud-action:
    backgroundColor: "{colors.panel-paper}"
    textColor: "{colors.action-ink}"
    rounded: "{rounded.square}"
    padding: "0 14px"
    height: "40px"
  story-panel:
    backgroundColor: "{colors.panel-paper}"
    textColor: "{colors.outline-ink}"
    rounded: "{rounded.square}"
    padding: "28px 30px"
  quest-action:
    backgroundColor: "{colors.action-ink}"
    textColor: "{colors.panel-paper}"
    rounded: "{rounded.square}"
    padding: "11px 14px"
  drawer:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.outline-ink}"
    rounded: "{rounded.square}"
    padding: "clamp(32px, 5vw, 68px)"
---

# Design System: MINJAE.DEV V2 Career Adventure

## Overview

**Creative North Star: "The Walkable Career World"**

This document is canonical for the shipped `v2.html` experience only; v1 remains preserved as a separate surface. V2 is a modern 2D adventure portfolio in which a pixel character walks across seven career landmarks, from Backend Journey and Field Base through project stages to Next Stage. The first viewport always combines the current location, Java/Spring positioning, movement guidance, and the story attached to the selected stop.

The world is warm, legible, and deliberately constructed rather than nostalgic for its own sake. Paper HUD surfaces frame a geometric landscape; dark ink outlines turn buildings and the hero into readable game objects; live stage color connects the selected landmark, character, story panel, focus state, and scrollbar. Project proof is an optional quest record, while the full map provides a fast route for visitors who do not want to traverse every stop.

**Key Characteristics:**

- A fixed three-band viewport: top HUD, playable world, and bottom movement HUD.
- Seven horizontally spaced landmarks with one centered active stage.
- A CSS-built pixel hero and geometric landmark silhouettes.
- Layered sky, mountains, ground, road, and world translation for parallax depth.
- Paper story and drawer surfaces whose accent follows the active stage.
- Landmark, HUD, keyboard, and overview-map navigation paths.

## Colors

The base world uses botanical greens, misty blue-green sky, warm paper, sand, and near-black green ink. Each stage owns one saturated landmark color; only the active stage color becomes the global `--accent`.

### Primary

- **Start Coral** (`#ff7657`): Backend Journey and the fallback focus color.
- **Field Green** (`#74aa6a`), **Factory Blue** (`#4d9ec5`), **Spring Violet** (`#8b79c6`), **Market Lime** (`#b4d446`), **Trips Orange** (`#ff9d45`), and **Next Coral** (`#e66f66`): Stage identities used on landmarks, map markers, the beacon, and the hero/story accent when selected.

### Neutral and World

- **Paper** (`#faf7ef`) and **Panel Paper** (`#fffdf7`): Fixed HUD, story card, and drawers.
- **World Sky** (`#cfe3dc`), **Sky Light** (`#e8f1eb`), and **Sky Depth** (`#bdd9d2`): Atmospheric field.
- **Grass** (`#93b273`), **Grass Depth** (`#739558`), and **Road Sand** (`#d8c7a5`): Ground-plane bands.
- **Outline Ink** (`#293a31`) and **Action Ink** (`#213128`): Structural outlines, character pixels, and actions.
- **Body Ink** (`#526058`) and **Muted Ink** (`#7c8881`): Narrative and secondary notation.
- **Sun Gold** (`#ffd370`): Atmospheric sun only; it does not compete with stage accents.

### Named Rules

**The Active Stage Rule.** Assign the current stop color to `--accent`; use it for the hero torso, story edge and count, active copy, focus outline, and scrollbar.

**The World Before Chrome Rule.** Reserve botanical and atmospheric colors for scenery. HUD and reading surfaces stay paper-colored with dark green ink.

## Typography

**Display Font:** Pretendard Variable (Pretendard, system-ui fallback)  
**Body Font:** Pretendard Variable (Pretendard, system-ui fallback)  
**Label/Mono Font:** IBM Plex Mono (monospace fallback)

**Character:** Pretendard sets destinations and quest headings in a heavy, tightly tracked voice that stays professional rather than playful, and carries Korean explanation and controls in the same family for a single consistent texture. IBM Plex Mono provides compact system notation for stage numbers, HUD labels, station signs, keyboard keys, and metadata.

### Hierarchy

- **Display:** Pretendard at 800 weight, `clamp(32px, 3.6vw, 54px)`, 1.04 line height, and `-0.045em`; used for the story title. It becomes 36px below 850px and 30px below 480px.
- **Headline:** Pretendard at 800 weight, `clamp(38px, 5vw, 62px)` for drawer titles; responsive sizes are 48px then 42px.
- **Body:** Pretendard at 13px/1.72 for story copy and 13–14px/1.55–1.75 in drawers. Korean narrative uses `word-break: keep-all`.
- **Label:** IBM Plex Mono at 9–11px with medium or semibold weight and generous tracking for HUD status, counts, signs, metadata, tags, and keyboard hints.

### Named Rules

**The Two-Voice Rule.** Pretendard names the adventure and explains it — one family, separated by weight and size — while IBM Plex Mono reports game state.

## Layout

The app occupies `100vh`, hides page overflow, and divides the viewport into a 72px top HUD, a flexible game screen, and a 76px bottom HUD. Both HUDs stay above the world at `z-index: 30`. The top HUD holds the wordmark, centered active-journey label, and map/GitHub actions; the bottom HUD mirrors previous action, keyboard hint, and next action.

The world is a 2300px track with seven stops at 310px intervals. Selecting a stop translates it to viewport center with `translateX(calc(50vw - position))`; far and near mountains move at smaller 18px and 34px increments. The hero remains centered over the ground, so movement reads as the world passing behind the character. The story panel floats at upper left with a stage rail, title, subtitle, narrative, skills, and—only for project stops—a quest-entry action. A compact progress map sits at upper right.

At 850px and below, HUD rows become 62px and 66px, the centered journey label disappears, action labels collapse to icons, and the story panel becomes a tighter bottom card with a three-line narrative clamp. Drawers become full-width; project metadata and metrics stack. At 480px and below, the stage count disappears, the story panel becomes one column, world objects scale down, and drawer padding tightens. On project stages specifically, narrative and skill chips are hidden so the title, subtitle, and project-entry action remain usable above the bottom HUD.

## Elevation & Depth

Depth comes first from spatial layers: distant and near mountains move at different rates, the world track moves fastest, and the hero remains fixed in the foreground. Soft shadows support that structure without turning every surface into a card.

### Shadow Vocabulary

- **Story Float** (`0 22px 55px #25382e26`): Separates the translucent story panel from scenery.
- **Landmark Lift** (`0 18px 32px #2e49352e`): Grounds geometric buildings.
- **Station Sign** (`0 5px 14px #283b3026`): Keeps labels readable over the world.
- **Drawer Lift** (`-25px 0 70px #10201840`): Establishes the right-side modal plane.
- **Active Beacon:** Two color-mixed rings plus a stage-colored glow mark the destination.

## Shapes

Interactive and reading surfaces are rectilinear: HUD buttons, story card, tags, signs, quest actions, map rows, and drawers use square corners and one- to four-pixel ink borders. Buildings combine rectangles, triangular or flat roofs, windows, doors, stacks, and towers. Circles belong to environmental or state cues—the sun, clouds, hero shadow, beacon, and tower light—not generic containers. The character is assembled from intentionally blocky CSS parts with a dark pixel outline.

## Components

### HUD

- **Top:** Paper strip with logo, active-journey label, map button, and GitHub action. Below 850px, the title disappears and action labels become icon-only.
- **Bottom:** Previous/next controls flank `A`/`D` keycaps and a movement hint. Edge controls disable at route limits; mobile keeps a shorter hint.
- **Focus:** Interactive elements receive a 3px active-accent outline with a 4px offset.

### Pixel Character

The 62×112px hero uses separate head, hair, face, torso, backpack, arms, feet, and elliptical shadow. The torso follows `--accent`. During a 620ms move state, opposing arms and feet alternate over 320ms while the character bobs; reduced motion collapses these animations.

### Landmarks and Parallax World

Each stop is a 230×300px button containing a stage-specific geometric building, beacon, and numbered sign. Resting landmarks are reduced and translucent; hover increases opacity; the active landmark reaches full scale and reveals its animated beacon. Mountain, world, road, and ground layers retain independent depths and speeds.

### Story Panel

The paper panel uses a five-pixel active-accent top rule, monospaced stage rail, Pretendard display title, colored subtitle, Korean narrative, and bordered technology tags. Its entrance is a short rise/fade. Project stops append a dark `프로젝트 입장` action; non-project stops do not.

### Project Dialog

The quest drawer presents outcome, period, team, personal role, proof list, optional metrics, and external evidence links. It is a right-side sheet on desktop and a full-width sheet below 850px. Closing returns focus to the project-entry trigger.

### Map Dialog

The map drawer lists all seven stops as direct navigation buttons, marks the current route in the active accent, and ends with email and GitHub paths. Choosing a route moves the world and closes the map.

### Dialog Behavior

Both drawers use `role="dialog"`, `aria-modal="true"`, labeled headings, an inert/hidden background, and a dismissible blurred shade. Opening focuses the first focusable control. Tab and Shift+Tab cycle inside, Escape closes, and close restores focus to the opener.

### Movement Rules

When focus is not inside a button, link, input, textarea, select, or editable region, Right Arrow or `D` moves one stage forward and Left Arrow or `A` moves one stage backward. Movement is clamped to the seven-stop route and ignored while a dialog is open. Pointer users can use landmarks, HUD arrows, or the map.

## Do's and Don'ts

### Do:

- **Do** keep this document scoped to game-first v2; preserve v1 separately.
- **Do** keep the hero centered while world and mountains translate at distinct rates.
- **Do** connect active color across landmark, beacon, hero, story, focus, and progress.
- **Do** preserve landmark, HUD, keyboard, and map navigation paths.
- **Do** preserve focus trapping/restoration, Escape dismissal, inert background, and reduced motion.
- **Do** preserve the compact project-stage CTA adaptation below 480px.

### Don't:

- **Don't** restore the stale editorial control-room, evidence ledger, inline tabs, timeline, or orbital map.
- **Don't** turn the map or project record into inline page sections; they are modal drawers.
- **Don't** add rounded card chrome to square paper HUD and quest surfaces.
- **Don't** fire movement shortcuts from interactive/editable controls or while a drawer is open.
- **Don't** remove the seven stops, stage palettes, phrase-safe Korean, or mobile prioritization.
