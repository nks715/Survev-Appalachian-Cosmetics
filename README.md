<img width="179" height="26" alt="image" src="https://github.com/user-attachments/assets/9f228f8c-944a-4838-85ee-fcdb3c0c7029" />**Survev Appalachian Cosmetics has many different user scripts to change your in game sprites to custom ones based on America in the 1950s. Basically, it's a reskinner script for survev.io. NO HACKS INCLUDED, everything is PURELY COSMETICAL**
Added so far:
Lvl 1 Helmet - White Cowboy Hat
Lvl 2 Helmet - Brown Cowboy Hat
Lvl 3 Helmet - Black Cowboy Hat
Planned:
Mosin Nagant - Ruger M77 RSI w/ new sounds for cycle, reload, and switch (fire sound will stay same)
Scout Elite - Henry Long Ranger 223 w/ new sounds for cycle, reload, switch, and fire
Spas-12 - Mossberg 590 w/ new sounds for cycle, reload, switch, and fire
MP220 - Browning Citori w/ new sounds for cycle, reload, switch, and fire
New sounds for picking up all the level 1, 2, or 3 helmets since this changes them to hats.

**HOW TO USE THE COWBOY HATS!!!! THIS IS IMPORTANT!** 
IT LOOKS LIKE A LOT BUT IT REALLY ISN'T! IF you need help, contact me on discord: nks0863
1. Open survev.io
2. Right click, Hit "Inspect" or Ctrl+I
3. Once you're in the DevTools area, click "Sources"
4. Click the double arrow on the top left that reads "more tabs," then click "Snippets"
5. Add a new Snippet code file (+ New Snippet), name it "atlasinject" or whatever you want
6. In this repo, Copy (Ctrl+C) all the code inside "atlasinject."
7. Paste (Ctrl+V) that code in the new Snippet, and hit Ctrl+S (Save)
8. Now, create a new empty folder/directory wherever you'd like on your computer. Name it "survevscripts"
9. Let's go back to the survev.io tab. In Sources of the devTools, go to "Page" (Exit out of Snippets)
10. Under "survev.io," open the "js" folder. There will be three .js files. We will focus on the two extremely long ones and leave the very short one alone.
11. Right click one of the long ones. and choose "Override Content." It will ask you to select a folder to save these overrides. For this, choose the folder that we made in step 8 (survevscripts).
12. Now left click to enter that .js file. Use Ctrl+f to search and type "loadAtlas." You should find a line that says loadAtlas(e) { or something similar. IF YOU DON'T, then go back to "Page" and check in the OTHER long .js file because it could be in either two (these file names change every mode so it's impossible to know which one has it, but one of them always has it for sure).
13. Come back to this repo, copy all the code in imagecreator.js here, and paste that code in the .js file of Step 12 that has the loadAtlas(e) line. You will paste it in between these two lines (yours may not have the exact same variable names but if it looks close enough to these then it is the correct one):
"let r = ri(this.renderer, this.basePath, t[n]);"
"this.atlases[e].spritesheets.push(r)"
15. Press Ctrl+S to save your override. Now let's go to the other long .js file. Ctrl+f "helmet01" and go to the FIRST INSTANCE (the first appearance of helmet01 in the whole script according to the Ctrl+f finder). You should find the lines that define the helmet01, helmet02, and helmet03.
16. Highlight all the code from helmet01, helmet02, helmet03, and replace it with the code in this repo called "helmetchanger.js." Ctrl+S to save this override too.
17. Make sure both of those files are saved by ensuring that there is no * marking on the file names.
18. Once everything you've added is saved, reload your survev.io tab (Ctrl+R). The three files you've changed in DevTools should still be saved with the new code.
19. Finally, go back to "Snippets" and click inside of the atlasinject snippet you created in steps 5, 6, and 7.
20. Hit the run button (sideways triangle with "Ctrl+Enter next to it)
21. You might encounter this small pop-up on the top of your screen. <img width="179" height="26" alt="image" src="https://github.com/user-attachments/assets/aade7baa-54d1-4aba-b388-a12e08661e79" />. Make sure to press the BLUE SIDEWAYS ARROW (resume script). If you don't encounter this, then don't worry about this step.
22. Check for this output in the console: 
[Cowboy Hat] Hat 1 loaded.
atlasinject:50 [Cowboy Hat] Hat 2 loaded.
atlasinject:55 [Cowboy Hat] Hat 3 loaded.
then join a game in either solo, duo, or squad (you can create/join team and it should still work)
23. A canvas will pop up for 5 seconds once you join a game. Make sure that you can see three new cowboy hats on that canvas. They shluld be on the right side.
24. The canvas disappears after 5 seconds, and you're good to go! All helmets should appear as either White, Brown, or Black cowboy hats!
