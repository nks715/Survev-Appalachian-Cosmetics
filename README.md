**Survev Appalachian Cosmetics has many different user scripts to change your in game sprites to custom ones based on America in the 1950s. Basically, it's a reskinner script for survev.io. NO HACKS INCLUDED, everything is PURELY COSMETICAL**

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


# 🤠 HOW TO USE THE COWBOY HATS

**IMPORTANT: READ ALL OF THIS BEFORE STARTING!**

It looks like a lot of steps, but once you do it the first time, it's pretty easy. It has just been broken down into very small steps so that anyone can understand.
If you get stuck, contact me on Discord: **nks0863**

------------------------------------------------------------------------

# FIRST TIME SETUP

You only need to do these steps **once**.

### 1. Install Tampermonkey
You need the **Tampermonkey** browser extension.
If you already have it, skip this step.
If you don't have it, install it here:
[[Tampermonkey for
Chrome]([https://chromewebstore.google.com/detail/tampermonkey/dhdgffjojejmpbldmpobfkfo?hl=en](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en))](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
After installing it:
1.  Click the Tampermonkey icon in your browser.
2.  Create a **new script**.
3.  Open **`atlas-inject.js`** from this repository.
4.  Copy **all of the code** inside it.
5.  Paste the code into your new Tampermonkey script.
6.  Save it.
Make sure Tampermonkey is allowed to run on **survev.io**.
------------------------------------------------------------------------
### 2. Open Survev
Open **survev.io** and keep the tab open.
------------------------------------------------------------------------
### 3. Make a folder for the Survev files
Create a new, empty folder **anywhere on your computer**.
Name it:
**`survevscripts`**
Don't put anything inside it yet.

------------------------------------------------------------------------
### 4. Open DevTools
Go back to your **survev.io** tab.
Open DevTools:
**Right-click the page → Inspect**
Then click the **Sources** tab.
Click **Page** inside the **Sources** tab.
------------------------------------------------------------------------
### 5. Find the Survev JavaScript files
On the left side of DevTools, find:
**`survev.io` → `js`**
You should see **three `.js` files**:
-   one short file
-   two **very long** files
We only care about the **two long files**.
**Leave the short file alone.**
Left click each file to look inside it in order to see which one is the shortest one, and make sure not to touch it.
------------------------------------------------------------------------
### 6. Turn on Local Overrides
Right-click **one of the two long `.js` files**.
Choose:
**Override Content**
Chrome will ask you to choose a folder. It will ask this on the TOP of the DevTools. Click "Select Folder."
Choose:
**`survevscripts`**
If Chrome asks for permission, allow it.

------------------------------------------------------------------------
### 7. Find `loadAtlas`
Click the long `.js` file you just enabled.
Press **Ctrl + F** and search for:
**`loadAtlas`**
You should find something similar to:
``` js
loadAtlas(e) {
```
**Can't find it? No problem.**
Go back to **Page → js** and open the **other long `.js` file**.
Press **Ctrl + F** and search for `loadAtlas` again.
The file names can change, so don't worry if yours looks different.
One of the two long files will have `loadAtlas`.

------------------------------------------------------------------------
### 8. Add `imagecreator.js`
Open **`imagecreator.js`** from this repository.
Copy **all of the code** inside it.
Go back to the `.js` file where you found `loadAtlas`.
Inside `loadAtlas`, find these two lines (your variable names may be a
little different):
``` js
let r = ri(this.renderer, this.basePath, t[n]);
```
and:
``` js
this.atlases[e].spritesheets.push(r)
```
Paste the entire contents of **`imagecreator.js`** **between those two
lines**.

------------------------------------------------------------------------
### 9. Save the file
Press **Ctrl + S**.
Look at the file name.
You should see a **purple dot** next to it.
That means the override is active.

------------------------------------------------------------------------
### 10. Find the helmet code
Go to the **other long `.js` file**.
Press **Ctrl + F** and search for:
**`helmet01`**
Go to the **FIRST result**.
You should see code defining:
-   `helmet01`
-   `helmet02`
-   `helmet03`

------------------------------------------------------------------------
### 11. Replace the helmet code
Open **`helmetchanger.js`** from this repository.
Copy all of its code.
In the `.js` file, select the code that defines:
``` text
helmet01
helmet02
helmet03
```
Highlight all of it You will replace that with the new code from here.
Paste the contents of **`helmetchanger.js`** in its place.
Press **Ctrl + S** to save.

------------------------------------------------------------------------
### 12. Check that both files are saved
You should now have **two modified `.js` files**.
Make sure:
-   There is **no `*`** next to either file name.
-   Both files have the **purple override dot**.
If you see a `*`, press **Ctrl + S**.

------------------------------------------------------------------------
### 13. Reload Survev
Reload the Survev page:
**Ctrl + R**
Your DevTools overrides should stay saved.

------------------------------------------------------------------------
### 14. You might see a blue arrow
Sometimes Chrome pauses the game's code while it is loading.
If you see the popup at the top of the screen, click the **BLUE SIDEWAYS
ARROW ▶**.
This means **Resume script execution**.
![Chrome resume script
popup](https://private-user-images.githubusercontent.com/188116400/640604577-aade7baa-54d1-4aba-b388-a12e08661e79.png)
If you don't see the popup, **don't worry about it**. Just continue.

------------------------------------------------------------------------
### 15. Check the Console
Open the **Console** tab in DevTools.
Look for:
``` text
[Cowboy Hat] Hat 1 loaded.
[Cowboy Hat] Hat 2 loaded.
[Cowboy Hat] Hat 3 loaded.
```
If you see all three messages, you're good.

------------------------------------------------------------------------
### 16. Join a game
Join a game in:
-   Solo
-   Duo
-   Squad

You can also create or join a team.
The cowboy hats should work either way.

------------------------------------------------------------------------

### 17. Check the cowboy hat canvas
When you join a game, a large canvas should appear for about **5
seconds**.
You should see **three cowboy hats** on the right side of the canvas.
If you see all three hats, **the injection worked!** 🤠
The canvas will disappear after about 5 seconds.

------------------------------------------------------------------------
# 🎉 YOU'RE DONE!

Your helmets should now appear as:

-   🤍 **White cowboy hat**
-   🤎 **Brown cowboy hat**
-   🖤 **Black cowboy hat**

You don't need to repeat the setup steps every time.

------------------------------------------------------------------------

# USING IT NEXT TIME

After completing the setup above **once**, you don't need to do all 17
setup steps again.

Every time you come back to Survev:

1.  Open **survev.io**
2.  Open DevTools with **Right-click → Inspect**
3.  Reload the page with **Ctrl + R**
4.  Close DevTools

That's it.

Your saved overrides should still be there, so the cowboy hats should
work automatically. 🤠
