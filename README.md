# Rocket League Overlay

## Overview

This project is a broadcast overlay for Rocket League built using Vite + React. It grabs data from the SOS Overlay plugin, written for the BakkesMod addition. Data from the game comes in from a websocket provided by SOS. This project is also my first completed react project, built to showcase my progress as a beginner in the Web Dev field. Over time it will evolve with me.

## Installation

  Prerequisites
   - [Rocket League](https://www.rocketleague.com/)
   - [BakkesMod](https://www.bakkesmod.com/)
   - [SOS Overlay Plugin](https://gitlab.com/bakkesplugins/sos/sos-plugin)
   - [NodeJS](https://nodejs.org/en)
  
  Optional
   - [SOS Emulator](https://github.com/pharuxtan/sos-emulator)

Assuming all the prerequisites above are installed,
   1. Unzip the package to a known location
   2. In the newly unzipped folder, open cmd or PowerShell, type `npm install`
      - This will install all node packages needed for the site itself.
   3. In the same terminal, install http-server using `npm install http-server`
   4. Still in the same terminal, run `http-server -o`
      - This will create a webserver. It will open a webpage, if a webpage is not opened, the link to the page is most likely `localhost:8080` 

   To test, use either the SOS Emulator or a bot game in Rocket League. If there are any issues, please report them [here](https://github.com/WGuethlein/RLOverlay/issues/new).

## Editing Features
   To edit some features, you will have to download the source code and build it yourself

### Editing Headshots
   Currently headshot images are hard coded, if the names dont match it will simply not show an image for that player. To edit the hard coded inputs, traverse to [ActivePlayer.jsx](https://github.com/WGuethlein/RLOverlay/blob/main/src/components/ActivePlayer/ActivePlayer.jsx). From there, lines 5-19 are where the hard coded inputs lie. 

   ![](https://github.com/WGuethlein/RLOverlay/blob/main/public/noHeadshot.png?raw=true)
   
   *No Headshot Example*
   
   ![](https://github.com/WGuethlein/RLOverlay/blob/main/public/headshot.png?raw=true)
   
   *Headshot Example*

## Known Bugs
 - When writing team names, sometimes the name does not save to local storage causing the names to reset to null on page refresh

## Missing Features
 - Ability to read team names from websocket while keeping the manual name entry
 - Full ability to update series score
    - This feature can be enabled if you are code-savy, but it does not update automatically, series score will need to be updated manually.
 - Boost Meter for Active Player
 - Statfeed events
 - Start script
