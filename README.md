# Rocket League Overlay

## Overview

This project is a broadcast overlay for Rocket League built using Vite + React. It grabs data from the SOS Overlay plugin, written for the BakkesMod addition. Data from the game comes in from a websocket provided by SOS. This project is also my first completed react project, built to showcase my progress as a beginner in the Web Dev field. Over time it will evolve with me.

## Installation

  Prerequisits
   - [Rocket League](https://www.rocketleague.com/)
   - [BakkesMod](https://www.bakkesmod.com/)
   - [SOS Overlay Plugin](https://gitlab.com/bakkesplugins/sos/sos-plugin)
   - [NodeJS](https://nodejs.org/en)
  
  Optional
   - [SOS Emulator](https://github.com/pharuxtan/sos-emulator)

//TODO
## Known Bugs
 - When writing team names, sometimes the name does not save to local storage causing the names to reset to null on page refresh

## Missing Features
 - Ability to read team names from websocket while keeping the manual name entry
 - Full ability to update series score
    - This feature can be enabled if you are code-savy, but it does not update automatically, series score will need to be updated manually.
 - Boost Meter for Active Player
 - Statfeed events
