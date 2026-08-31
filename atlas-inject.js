// ==UserScript==
// @name         Survev - Cowboy Hat & M870 Atlas Injector
// @namespace    survev-cowboy-hat
// @version      4.1
// @description  Automatically injects three custom cowboy hats and a custom M870 into the Survev loadout atlas.
// @match        https://survev.io/*
// @match        http://localhost:5173/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    console.log("[Cowboy Hat] Tampermonkey script started.");

    const cowboyHatBase641 = `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHdpZHRoPSIxNzYiIGhlaWdodD0iMTc2IiB2ZXJzaW9uPSIxLjEiIGlkPSJzdmczMSI+CiAgPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTM1Ij48L21ldGFkYXRhPgogIDxkZWZzIGlkPSJkZWZzMjUiPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDExNCI+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiMxYjFiMWI7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAiIGlkPSJzdG9wMTE0Ij48L3N0b3A+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiMyZDJkMmQ7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAuMjk2MDg0MjMiIGlkPSJzdG9wMTE2Ij48L3N0b3A+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiMyZDJkMmQ7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAuNzg2NzY3NDgiIGlkPSJzdG9wMTE3Ij48L3N0b3A+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiMxYjFiMWI7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjEiIGlkPSJzdG9wMTE1Ij48L3N0b3A+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGNsaXBQYXRoIGlkPSJlIj4KICAgICAgPHBhdGggZD0iTTE4OCAxMjhjMCA4MC02OS43NTYgMTE5LjM2Mi02OS43NTYgMTE5LjM2MkM2NCAyNDQgOC42MzggMTkzLjkyMiA4LjYzOCAxMjhTNjQgMTIgMTE4LjI0NCA4LjYzOEMxMTguMjQ0IDguNjM4IDE4OCA0OCAxODggMTI4eiIgZmlsbD0iIzI1MjUyNSIgZmlsbC1vcGFjaXR5PSIuNjAxIiBzdHJva2Utd2lkdGg9IjEyLjUzNyIgaWQ9InBhdGgyIj48L3BhdGg+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoIGlkPSJlLTIiPgogICAgICA8cGF0aCBkPSJtIDE4OCwxMjggYyAwLDgwIC02OS43NTYsMTE5LjM2MiAtNjkuNzU2LDExOS4zNjIgQyA2NCwyNDQgOC42MzgsMTkzLjkyMiA4LjYzOCwxMjggOC42MzgsNjIuMDc4IDY0LDEyIDExOC4yNDQsOC42MzggMTE4LjI0NCw4LjYzOCAxODgsNDggMTg4LDEyOCBaIiBmaWxsPSIjMjUyNTI1IiBmaWxsLW9wYWNpdHk9IjAuNjAxIiBzdHJva2Utd2lkdGg9IjEyLjUzNyIgaWQ9InBhdGgyLTMiPjwvcGF0aD4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGggaWQ9ImUtOCI+CiAgICAgIDxwYXRoIGQ9Im0gMTg4LDEyOCBjIDAsODAgLTY5Ljc1NiwxMTkuMzYyIC02OS43NTYsMTE5LjM2MiBDIDY0LDI0NCA4LjYzOCwxOTMuOTIyIDguNjM4LDEyOCA4LjYzOCw2Mi4wNzggNjQsMTIgMTE4LjI0NCw4LjYzOCAxMTguMjQ0LDguNjM4IDE4OCw0OCAxODgsMTI4IFoiIGZpbGw9IiMyNTI1MjUiIGZpbGwtb3BhY2l0eT0iMC42MDEiIHN0cm9rZS13aWR0aD0iMTIuNTM3IiBpZD0icGF0aDItOCI+PC9wYXRoPgogICAgPC9jbGlwUGF0aD4KICAgIDxsaW5lYXJHcmFkaWVudCB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQxMTQiIGlkPSJsaW5lYXJHcmFkaWVudDExNSIgeDE9Ijc1LjA3NTcxNCIgeTE9IjM1LjE5MTc0MiIgeDI9Ijc1LjkyODg0OCIgeTI9IjEzMy45NDE4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC45NTQ2NDIwOSwwLDAsMC44MDc3NjI1OSw0LjU0NDM1ODMsMTYuNTQ3ODU3KSI+PC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHBhdGggaWQ9InBhdGgzIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDExNSk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwOTA5MDk7c3Ryb2tlLXdpZHRoOjk7c3Ryb2tlLWRhc2hhcnJheTpub25lIiBkPSJtIDEyNC4yNjU3Niw4Ny43ODY1NjggYyAwLDE3Ljc1MjgwMiAtNi41NjM4NywzMy42NTI4NDIgLTE2LjkxODYyLDQ0LjM0ODkxMiAtOC40MzEwNjcsOC43MDg5NyAtMTcuNTQyODQ3LDExLjkwMDU2IC0yOS41MDM0NzksMTEuOTAwNTYgLTEyLjk1NTE0NywwIC0yNC4wMjUwODIsLTEuMzQ1OTggLTMyLjY5MzI4NiwtMTEuMzg3IEMgMzUuOTg3MDYyLDEyMi4wMzQ1IDYzLjYyMDQxMSwxMDMuOTkyODkgNjMuNjIwNDEsODcuNDQyMDA0IG0gMCwwLjI4MDk4MiBjIC0xMGUtNywtMTcuMjQ0NjU1IC0yNy4zNDg2NDksLTM0LjQwMDMzOCAtMTcuNTAzMjk1LC00NS4wNzY5NzIgOC41NDI2MzEsLTkuMjYzOTEzIDE4LjEyMzc5OSwtMTAuOTM2NjQgMzAuNTA0ODkzLC0xMC45MzY2NCAxMS42MDM5NTMsMCAyMi4xMzU0NjUsNC41MjUzODYgMzAuMzI4NDgyLDEyLjI5NDAxMyAxMC42MjM1LDEwLjA3MzIxOSAxNy4zMTUyNywyNS41OTkzMzYgMTcuMzE1MjcsNDMuNzgzMTgxIj48L3BhdGg+CiAgPHBhdGggc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMyZDJkMmQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwOTA5MDk7c3Ryb2tlLXdpZHRoOjk7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lIiBkPSJtIDcyLjk0NTg0NywxMjAuNzAzNDQgYyAwLjI5MDM0NSwtMC43MDY5NSAxMy43NjEwMDcsMS44MTgzMiAxNC41OTE0MzUsLTAuMDE1MyA3LjcxMTg5NywtMTcuMDI4MyAxNi42MjMwOTgsLTMzLjc2ODgzMiAwLjE2ODExMywtNjUuMTExNDMzIC0xLjAzOTM0NCwtMS45Nzk2ODcgLTEzLjY2ODU0LC0wLjA1OTI5IC0xNC43MjY2MTQsLTAuMjQ3MSAxNC4zODQxMzIsMjIuMjY5ODQ2IDEyLjc2OTUxOSw0NC4wMzAwNjYgLTAuMDMyOTQsNjUuMzczODMzIEwgNjIuMDEzMTM3LDExNC4xNjEyIDM0LjA1OTgyOSwxMTIuMzk2MDEgYyAtMS44MzgwMTYsLTIuMTQ5NTMgLTMuMzg2Mjg4LC00LjU1Nzc1IC02LjYyMDIxOCwtNi43MTY4MiAwLjEyNzQyNiwtMi4yNjMzNCAtMC4yMDA4MzEsLTcuODU1Mzg4IDAuOTAxMTE4LC03LjQ2NTY1OSAxLjE5NzI4OSwtMy4yMTc0MzcgOC4yNDcwMTUsLTYuNjU0MDg3IDguMTk3ODIzLC05Ljk2Mjk4OSAtMC4wNDkxOSwtMy4zMDg5MDEgLTcuOTA1Nzc5LC05Ljg5MDc5MyAtNy45MDU3NzksLTkuODkwNzkzIC0xLjk1NjIxNywtMS4zMDY0MjYgLTAuOTMzNzg4LC00LjUzNDUwOCAtMS4xMTM3MiwtOC4wMzE5MjQgMy40MzAxMTEsLTIuNjk5ODM4IDMuMjY2OTMzLC0yLjUxMzE3MiA3LjM3NTE5LC03LjE2Njc0IEwgNjIuNjQ3MDIsNjEuNDczNjMyIDcyLjk3ODc3Nyw1NS4zMjk2MjciIGlkPSJwYXRoNCI+PC9wYXRoPgogIDxwYXRoIHN0eWxlPSJmaWxsOiM4YjhiOGI7c3Ryb2tlLXdpZHRoOjIuNzY5NTk7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIiBkPSJtIDgwLjM1OTYxOSwxMTcuMjM2MzIgYyAtMC42MTk2NDQsLTAuMTE4NjEgLTAuNTkxNTM1LC0wLjIzMzU3IDAuODA2MjE3LC0zLjI5NzM0IDIuODg2MTksLTYuMzI2MyA0Ljk3MTA5MiwtMTMuNTA4NjUgNS43NDk4NDEsLTE5LjgwNzgxMSBDIDg3LjM4ODQ3Niw5MC4zMDY3OCA4Ny4xMzA4MDksODAuNzg0NTIxIDg2LjQ2MjUxNSw3Ny4zODQyMzUgODUuMzg0ODc5LDcxLjkwMTIxOSA4My43MDc1ODMsNjYuODc0NTkgODEuMTg0MzksNjEuNTY2NDIxIDgwLjUwMTU5Nyw2MC4xMjk5OTYgNzkuOTQyOTQ4LDU4Ljg5NzE5IDc5Ljk0Mjk0OCw1OC44MjY4NTIgYyAwLC0wLjA3MDM0IDEuMDY5NTA2LC0wLjEyNzg4NyAyLjM3NjY4LC0wLjEyNzg4NyBoIDIuMzc2Njc5IGwgMS4zMDI0NDksMi43Mzk1NjkgYyAyLjk3MDMwMSw2LjI0NzcyOCA1LjI1MzM4NiwxMy4zNDgxMDEgNi4xNzc4NDcsMTkuMjEzMDQ5IDAuNjAyMTc3LDMuODIwMzE2IDAuNjA5MDIyLDExLjAzMTM0MyAwLjAxMzk1LDE0LjY5ODc4OSAtMC44NjEwNzYsNS4zMDY4NjggLTIuODI2Nzg3LDExLjE3NzU0OCAtNi40NTAyMzQsMTkuMjYzOTA4IGwgLTEuMTk2MTA5LDIuNjY5MzMgLTEuNzcxMjgzLDAuMDM3OCBjIC0wLjk3NDIwNSwwLjAyMDggLTIuMDYwMTk2LC0wLjAxNzUgLTIuNDEzMzExLC0wLjA4NTEgeiIgaWQ9InBhdGgxIj48L3BhdGg+Cjwvc3ZnPgo=`;
    const cowboyHatBase642 = `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHdpZHRoPSIxNzYiIGhlaWdodD0iMTc2IiB2ZXJzaW9uPSIxLjEiIGlkPSJzdmczMSI+CiAgPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTM1Ij48L21ldGFkYXRhPgogIDxkZWZzIGlkPSJkZWZzMjUiPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDExNCI+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiM1ZDM0MDI7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAiIGlkPSJzdG9wMTE0Ij48L3N0b3A+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiM3YzQ1MDM7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAuMjk2MDg0MjMiIGlkPSJzdG9wMTE2Ij48L3N0b3A+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiM3YzQ1MDM7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAuNzg2NzY3NDgiIGlkPSJzdG9wMTE3Ij48L3N0b3A+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiM1ZDM0MDI7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjEiIGlkPSJzdG9wMTE1Ij48L3N0b3A+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGNsaXBQYXRoIGlkPSJlIj4KICAgICAgPHBhdGggZD0iTTE4OCAxMjhjMCA4MC02OS43NTYgMTE5LjM2Mi02OS43NTYgMTE5LjM2MkM2NCAyNDQgOC42MzggMTkzLjkyMiA4LjYzOCAxMjhTNjQgMTIgMTE4LjI0NCA4LjYzOEMxMTguMjQ0IDguNjM4IDE4OCA0OCAxODggMTI4eiIgZmlsbD0iIzI1MjUyNSIgZmlsbC1vcGFjaXR5PSIuNjAxIiBzdHJva2Utd2lkdGg9IjEyLjUzNyIgaWQ9InBhdGgyIj48L3BhdGg+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoIGlkPSJlLTIiPgogICAgICA8cGF0aCBkPSJtIDE4OCwxMjggYyAwLDgwIC02OS43NTYsMTE5LjM2MiAtNjkuNzU2LDExOS4zNjIgQyA2NCwyNDQgOC42MzgsMTkzLjkyMiA4LjYzOCwxMjggOC42MzgsNjIuMDc4IDY0LDEyIDExOC4yNDQsOC42MzggMTE4LjI0NCw4LjYzOCAxODgsNDggMTg4LDEyOCBaIiBmaWxsPSIjMjUyNTI1IiBmaWxsLW9wYWNpdHk9IjAuNjAxIiBzdHJva2Utd2lkdGg9IjEyLjUzNyIgaWQ9InBhdGgyLTMiPjwvcGF0aD4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGggaWQ9ImUtOCI+CiAgICAgIDxwYXRoIGQ9Im0gMTg4LDEyOCBjIDAsODAgLTY5Ljc1NiwxMTkuMzYyIC02OS43NTYsMTE5LjM2MiBDIDY0LDI0NCA4LjYzOCwxOTMuOTIyIDguNjM4LDEyOCA4LjYzOCw2Mi4wNzggNjQsMTIgMTE4LjI0NCw4LjYzOCAxMTguMjQ0LDguNjM4IDE4OCw0OCAxODgsMTI4IFoiIGZpbGw9IiMyNTI1MjUiIGZpbGwtb3BhY2l0eT0iMC42MDEiIHN0cm9rZS13aWR0aD0iMTIuNTM3IiBpZD0icGF0aDItOCI+PC9wYXRoPgogICAgPC9jbGlwUGF0aD4KICAgIDxsaW5lYXJHcmFkaWVudCB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQxMTQiIGlkPSJsaW5lYXJHcmFkaWVudDExNSIgeDE9Ijc1LjA3NTcxNCIgeTE9IjM1LjE5MTc0MiIgeDI9Ijc1LjkyODg0OCIgeTI9IjEzMy45NDE4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC45NTQ2NDIwOSwwLDAsMC44MDc3NjI1OSw0LjU0NDM1ODMsMTYuNTQ3ODU3KSI+PC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHBhdGggaWQ9InBhdGgzIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDExNSk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwOTA5MDk7c3Ryb2tlLXdpZHRoOjk7c3Ryb2tlLWRhc2hhcnJheTpub25lIiBkPSJtIDEyNC4yNjU3Niw4Ny43ODY1NjggYyAwLDE3Ljc1MjgwMiAtNi41NjM4NywzMy42NTI4NDIgLTE2LjkxODYyLDQ0LjM0ODkxMiAtOC40MzEwNjcsOC43MDg5NyAtMTcuNTQyODQ3LDExLjkwMDU2IC0yOS41MDM0NzksMTEuOTAwNTYgLTEyLjk1NTE0NywwIC0yNC4wMjUwODIsLTEuMzQ1OTggLTMyLjY5MzI4NiwtMTEuMzg3IEMgMzUuOTg3MDYyLDEyMi4wMzQ1IDYzLjYyMDQxMSwxMDMuOTkyODkgNjMuNjIwNDEsODcuNDQyMDA0IG0gMCwwLjI4MDk4MiBjIC0xMGUtNywtMTcuMjQ0NjU1IC0yNy4zNDg2NDksLTM0LjQwMDMzOCAtMTcuNTAzMjk1LC00NS4wNzY5NzIgOC41NDI2MzEsLTkuMjYzOTEzIDE4LjEyMzc5OSwtMTAuOTM2NjQgMzAuNTA0ODkzLC0xMC45MzY2NCAxMS42MDM5NTMsMCAyMi4xMzU0NjUsNC41MjUzODYgMzAuMzI4NDgyLDEyLjI5NDAxMyAxMC42MjM1LDEwLjA3MzIxOSAxNy4zMTUyNywyNS41OTkzMzYgMTcuMzE1MjcsNDMuNzgzMTgxIj48L3BhdGg+CiAgPHBhdGggc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiM3YzQ1MDM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwOTA5MDk7c3Ryb2tlLXdpZHRoOjk7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lIiBkPSJtIDcyLjk0NTg0NywxMjAuNzAzNDQgYyAwLjI5MDM0NSwtMC43MDY5NSAxMy43NjEwMDcsMS44MTgzMiAxNC41OTE0MzUsLTAuMDE1MyA3LjcxMTg5NywtMTcuMDI4MyAxNi42MjMwOTgsLTMzLjc2ODgzMiAwLjE2ODExMywtNjUuMTExNDMzIC0xLjAzOTM0NCwtMS45Nzk2ODcgLTEzLjY2ODU0LC0wLjA1OTI5IC0xNC43MjY2MTQsLTAuMjQ3MSAxNC4zODQxMzIsMjIuMjY5ODQ2IDEyLjc2OTUxOSw0NC4wMzAwNjYgLTAuMDMyOTQsNjUuMzczODMzIEwgNjIuMDEzMTM3LDExNC4xNjEyIDM0LjA1OTgyOSwxMTIuMzk2MDEgYyAtMS44MzgwMTYsLTIuMTQ5NTMgLTMuMzg2Mjg4LC00LjU1Nzc1IC02LjYyMDIxOCwtNi43MTY4MiAwLjEyNzQyNiwtMi4yNjMzNCAtMC4yMDA4MzEsLTcuODU1Mzg4IDAuOTAxMTE4LC03LjQ2NTY1OSAxLjE5NzI4OSwtMy4yMTc0MzcgOC4yNDcwMTUsLTYuNjU0MDg3IDguMTk3ODIzLC05Ljk2Mjk4OSAtMC4wNDkxOSwtMy4zMDg5MDEgLTcuOTA1Nzc5LC05Ljg5MDc5MyAtNy45MDU3NzksLTkuODkwNzkzIC0xLjk1NjIxNywtMS4zMDY0MjYgLTAuOTMzNzg4LC00LjUzNDUwOCAtMS4xMTM3MiwtOC4wMzE5MjQgMy40MzAxMTEsLTIuNjk5ODM4IDMuMjY2OTMzLC0yLjUxMzE3MiA3LjM3NTE5LC03LjE2Njc0IEwgNjIuNjQ3MDIsNjEuNDczNjMyIDcyLjk3ODc3Nyw1NS4zMjk2MjciIGlkPSJwYXRoNCI+PC9wYXRoPgogIDxwYXRoIHN0eWxlPSJmaWxsOiNkYWIwMDA7c3Ryb2tlLXdpZHRoOjIuNzY5NTk7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO2ZpbGwtb3BhY2l0eToxIiBkPSJtIDgwLjM1OTYxOSwxMTcuMjM2MzIgYyAtMC42MTk2NDQsLTAuMTE4NjEgLTAuNTkxNTM1LC0wLjIzMzU3IDAuODA2MjE3LC0zLjI5NzM0IDIuODg2MTksLTYuMzI2MyA0Ljk3MTA5MiwtMTMuNTA4NjUgNS43NDk4NDEsLTE5LjgwNzgxMSBDIDg3LjM4ODQ3Niw5MC4zMDY3OCA4Ny4xMzA4MDksODAuNzg0NTIxIDg2LjQ2MjUxNSw3Ny4zODQyMzUgODUuMzg0ODc5LDcxLjkwMTIxOSA4My43MDc1ODMsNjYuODc0NTkgODEuMTg0MzksNjEuNTY2NDIxIDgwLjUwMTU5Nyw2MC4xMjk5OTYgNzkuOTQyOTQ4LDU4Ljg5NzE5IDc5Ljk0Mjk0OCw1OC44MjY4NTIgYyAwLC0wLjA3MDM0IDEuMDY5NTA2LC0wLjEyNzg4NyAyLjM3NjY4LC0wLjEyNzg4NyBoIDIuMzc2Njc5IGwgMS4zMDI0NDksMi43Mzk1NjkgYyAyLjk3MDMwMSw2LjI0NzcyOCA1LjI1MzM4NiwxMy4zNDgxMDEgNi4xNzc4NDcsMTkuMjEzMDQ5IDAuNjAyMTc3LDMuODIwMzE2IDAuNjA5MDIyLDExLjAzMTM0MyAwLjAxMzk1LDE0LjY5ODc4OSAtMC44NjEwNzYsNS4zMDY4NjggLTIuODI2Nzg3LDExLjE3NzU0OCAtNi40NTAyMzQsMTkuMjYzOTA4IGwgLTEuMTk2MTA5LDIuNjY5MzMgLTEuNzcxMjgzLDAuMDM3OCBjIC0wLjk3NDIwNSwwLjAyMDggLTIuMDYwMTk2LC0wLjAxNzUgLTIuNDEzMzExLC0wLjA4NTEgeiIgaWQ9InBhdGgxIj48L3BhdGg+Cjwvc3ZnPgo=`;
    const cowboyHatBase643 = `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHdpZHRoPSIxNzYiIGhlaWdodD0iMTc2IiB2ZXJzaW9uPSIxLjEiIGlkPSJzdmczMSI+CiAgPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTM1Ij48L21ldGFkYXRhPgogIDxkZWZzIGlkPSJkZWZzMjUiPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDExNCI+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNiNzkyNjM7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAiIGlkPSJzdG9wMTE0Ij48L3N0b3A+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNiZjk4Njc7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAuMjk2MDg0MjMiIGlkPSJzdG9wMTE2Ij48L3N0b3A+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNiZjk5Njc7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAuNzg2NzY3NDgiIGlkPSJzdG9wMTE3Ij48L3N0b3A+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNiNzkyNjM7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjEiIGlkPSJzdG9wMTE1Ij48L3N0b3A+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGNsaXBQYXRoIGlkPSJlIj4KICAgICAgPHBhdGggZD0iTTE4OCAxMjhjMCA4MC02OS43NTYgMTE5LjM2Mi02OS43NTYgMTE5LjM2MkM2NCAyNDQgOC42MzggMTkzLjkyMiA4LjYzOCAxMjhTNjQgMTIgMTE4LjI0NCA4LjYzOEMxMTguMjQ0IDguNjM4IDE4OCA0OCAxODggMTI4eiIgZmlsbD0iIzI1MjUyNSIgZmlsbC1vcGFjaXR5PSIuNjAxIiBzdHJva2Utd2lkdGg9IjEyLjUzNyIgaWQ9InBhdGgyIj48L3BhdGg+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoIGlkPSJlLTIiPgogICAgICA8cGF0aCBkPSJtIDE4OCwxMjggYyAwLDgwIC02OS43NTYsMTE5LjM2MiAtNjkuNzU2LDExOS4zNjIgQyA2NCwyNDQgOC42MzgsMTkzLjkyMiA4LjYzOCwxMjggOC42MzgsNjIuMDc4IDY0LDEyIDExOC4yNDQsOC42MzggMTE4LjI0NCw4LjYzOCAxODgsNDggMTg4LDEyOCBaIiBmaWxsPSIjMjUyNTI1IiBmaWxsLW9wYWNpdHk9IjAuNjAxIiBzdHJva2Utd2lkdGg9IjEyLjUzNyIgaWQ9InBhdGgyLTMiPjwvcGF0aD4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGggaWQ9ImUtOCI+CiAgICAgIDxwYXRoIGQ9Im0gMTg4LDEyOCBjIDAsODAgLTY5Ljc1NiwxMTkuMzYyIC02OS43NTYsMTE5LjM2MiBDIDY0LDI0NCA4LjYzOCwxOTMuOTIyIDguNjM4LDEyOCA4LjYzOCw2Mi4wNzggNjQsMTIgMTE4LjI0NCw4LjYzOCAxMTguMjQ0LDguNjM4IDE4OCw0OCAxODgsMTI4IFoiIGZpbGw9IiMyNTI1MjUiIGZpbGwtb3BhY2l0eT0iMC42MDEiIHN0cm9rZS13aWR0aD0iMTIuNTM3IiBpZD0icGF0aDItOCI+PC9wYXRoPgogICAgPC9jbGlwUGF0aD4KICAgIDxsaW5lYXJHcmFkaWVudCB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQxMTQiIGlkPSJsaW5lYXJHcmFkaWVudDExNSIgeDE9Ijc1LjA3NTcxNCIgeTE9IjM1LjE5MTc0MiIgeDI9Ijc1LjkyODg0OCIgeTI9IjEzMy45NDE4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC45NTQ2NDIwOSwwLDAsMC44MDc3NjI1OSw0LjU0NDM1ODMsMTYuNTQ3ODU3KSI+PC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHBhdGggaWQ9InBhdGgzIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDExNSk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwOTA5MDk7c3Ryb2tlLXdpZHRoOjk7c3Ryb2tlLWRhc2hhcnJheTpub25lIiBkPSJtIDEyNC4yNjU3Niw4Ny43ODY1NjggYyAwLDE3Ljc1MjgwMiAtNi41NjM4NywzMy42NTI4NDIgLTE2LjkxODYyLDQ0LjM0ODkxMiAtOC40MzEwNjcsOC43MDg5NyAtMTcuNTQyODQ3LDExLjkwMDU2IC0yOS41MDM0NzksMTEuOTAwNTYgLTEyLjk1NTE0NywwIC0yNC4wMjUwODIsLTEuMzQ1OTggLTMyLjY5MzI4NiwtMTEuMzg3IEMgMzUuOTg3MDYyLDEyMi4wMzQ1IDYzLjYyMDQxMSwxMDMuOTkyODkgNjMuNjIwNDEsODcuNDQyMDA0IG0gMCwwLjI4MDk4MiBjIC0xMGUtNywtMTcuMjQ0NjU1IC0yNy4zNDg2NDksLTM0LjQwMDMzOCAtMTcuNTAzMjk1LC00NS4wNzY5NzIgOC41NDI2MzEsLTkuMjYzOTEzIDE4LjEyMzc5OSwtMTAuOTM2NjQgMzAuNTA0ODkzLC0xMC45MzY2NCAxMS42MDM5NTMsMCAyMi4xMzU0NjUsNC41MjUzODYgMzAuMzI4NDgyLDEyLjI5NDAxMyAxMC42MjM1LDEwLjA3MzIxOSAxNy4zMTUyNywyNS41OTkzMzYgMTcuMzE1MjcsNDMuNzgzMTgxIj48L3BhdGg+CiAgPHBhdGggc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNiZjk4Njc7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwOTA5MDk7c3Ryb2tlLXdpZHRoOjk7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lIiBkPSJtIDcyLjk0NTg0NywxMjAuNzAzNDQgYyAwLjI5MDM0NSwtMC43MDY5NSAxMy43NjEwMDcsMS44MTgzMiAxNC41OTE0MzUsLTAuMDE1MyA3LjcxMTg5NywtMTcuMDI4MyAxNi42MjMwOTgsLTMzLjc2ODgzMiAwLjE2ODExMywtNjUuMTExNDMzIC0xLjAzOTM0NCwtMS45Nzk2ODcgLTEzLjY2ODU0LC0wLjA1OTI5IC0xNC43MjY2MTQsLTAuMjQ3MSAxNC4zODQxMzIsMjIuMjY5ODQ2IDEyLjc2OTUxOSw0NC4wMzAwNjYgLTAuMDMyOTQsNjUuMzczODMzIEwgNjIuMDEzMTM3LDExNC4xNjEyIDM0LjA1OTgyOSwxMTIuMzk2MDEgYyAtMS44MzgwMTYsLTIuMTQ5NTMgLTMuMzg2Mjg4LC00LjU1Nzc1IC02LjYyMDIxOCwtNi43MTY4MiAwLjEyNzQyNiwtMi4yNjMzNCAtMC4yMDA4MzEsLTcuODU1Mzg4IDAuOTAxMTE4LC03LjQ2NTY1OSAxLjE5NzI4OSwtMy4yMTc0MzcgOC4yNDcwMTUsLTYuNjU0MDg3IDguMTk3ODIzLC05Ljk2Mjk4OSAtMC4wNDkxOSwtMy4zMDg5MDEgLTcuOTA1Nzc5LC05Ljg5MDc5MyAtNy45MDU3NzksLTkuODkwNzkzIC0xLjk1NjIxNywtMS4zMDY0MjYgLTAuOTMzNzg4LC00LjUzNDUwOCAtMS4xMTM3MiwtOC4wMzE5MjQgMy40MzAxMTEsLTIuNjk5ODM4IDMuMjY2OTMzLC0yLjUxMzE3MiA3LjM3NTE5LC03LjE2Njc0IEwgNjIuNjQ3MDIsNjEuNDczNjMyIDcyLjk3ODc3Nyw1NS4zMjk2MjciIGlkPSJwYXRoNCI+PC9wYXRoPgogIDxwYXRoIHN0eWxlPSJmaWxsOiM1MzM2MDk7c3Ryb2tlLXdpZHRoOjIuNzY5NTk7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO2ZpbGwtb3BhY2l0eToxIiBkPSJtIDgwLjM1OTYxOSwxMTcuMjM2MzIgYyAtMC42MTk2NDQsLTAuMTE4NjEgLTAuNTkxNTM1LC0wLjIzMzU3IDAuODA2MjE3LC0zLjI5NzM0IDIuODg2MTksLTYuMzI2MyA0Ljk3MTA5MiwtMTMuNTA4NjUgNS43NDk4NDEsLTE5LjgwNzgxMSBDIDg3LjM4ODQ3Niw5MC4zMDY3OCA4Ny4xMzA4MDksODAuNzg0NTIxIDg2LjQ2MjUxNSw3Ny4zODQyMzUgODUuMzg0ODc5LDcxLjkwMTIxOSA4My43MDc1ODMsNjYuODc0NTkgODEuMTg0MzksNjEuNTY2NDIxIDgwLjUwMTU5Nyw2MC4xMjk5OTYgNzkuOTQyOTQ4LDU4Ljg5NzE5IDc5Ljk0Mjk0OCw1OC44MjY4NTIgYyAwLC0wLjA3MDM0IDEuMDY5NTA2LC0wLjEyNzg4NyAyLjM3NjY4LC0wLjEyNzg4NyBoIDIuMzc2Njc5IGwgMS4zMDI0NDksMi43Mzk1NjkgYyAyLjk3MDMwMSw2LjI0NzcyOCA1LjI1MzM4NiwxMy4zNDgxMDEgNi4xNzc4NDcsMTkuMjEzMDQ5IDAuNjAyMTc3LDMuODIwMzE2IDAuNjA5MDIyLDExLjAzMTM0MyAwLjAxMzk1LDE0LjY5ODc4OSAtMC44NjEwNzYsNS4zMDY4NjggLTIuODI2Nzg3LDExLjE3NzU0OCAtNi40NTAyMzQsMTkuMjYzOTA4IGwgLTEuMTk2MTA5LDIuNjY5MzMgLTEuNzcxMjgzLDAuMDM3OCBjIC0wLjk3NDIwNSwwLjAyMDggLTIuMDYwMTk2LC0wLjAxNzUgLTIuNDEzMzExLC0wLjA4NTEgeiIgaWQ9InBhdGgxIj48L3BhdGg+Cjwvc3ZnPgo=`;
  // 4th Sprite: Custom M870 Base64 graphic
    const m870Base64 = `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmVyc2lvbj0iMS4xIiBpZD0ic3ZnOCI+CiAgPGRlZnMgaWQ9ImRlZnM4Ij48L2RlZnM+CiAgPHBhdGggZD0iTSA4NS4zODYxOTEsMzAuNzA5NzQ3IEMgNTkuMDYwOTY5LDUzLjAxNDAxNCA1Ni42MjA5MDMsNTUuMTc5MTQzIDU3LjAzMzMwOSw1NS43NjMzODUgYyAwLjI0MDU3LDAuMzQzNjcxIDIuNDQwMDY2LDMuNTM5ODE0IDQuODgwMTMyLDcuMTEzOTk1IGwgNC4zOTg5OTMsNi40OTUzODggMTIuODUzMzA2LC0xMC43OTEyNzkgYyA3LjA3OTYyOSwtNS45NDU1MTMgMTIuODUzMzA3LC0xMC45Mjg3NDcgMTIuODUzMzA3LC0xMS4wNjYyMTYgMCwtMC4xNzE4MzUgLTAuOTI3OTEyLC0xLjQ3Nzc4NiAtMi4wNjIwMjgsLTIuOTU1NTczIC0xLjEzNDExNSwtMS40Nzc3ODYgLTIuMDI3NjYsLTIuODE4MTA1IC0xLjk5MzI5MywtMi45NTU1NzMgMC4wNjg3MywtMC4xNzE4MzYgNi41OTg0ODksLTUuNzM5MzExIDE0LjU3MTY2NCwtMTIuNDA2NTM0IDcuOTM4ODEsLTYuNjY3MjIzIDE1LjI5MzM3LC0xMi44NTMzMDcgMTYuMjkwMDIsLTEzLjcxMjQ4NSBsIDEuODU1ODIsLTEuNjE1MjU1IC0yLjg4Njg0LC0zLjgxNDc1MSBjIC0xLjYxNTI1LC0yLjA5NjM5NTMgLTMuMDU4NjcsLTMuODE0NzUxOCAtMy4yNjQ4NywtMy43ODAzODQ3IC0wLjE3MTg0LDAgLTEzLjMwMDA4LDEwLjk5NzQ4MTcgLTI5LjE0MzMyOSwyNC40MzUwMjk3IHogbSAyOS45NjgxMzksLTE4Ljc5ODgyIDEuMDk5NzUsMS41NDY1MjEgLTAuOTYyMjgsMC44NTkxNzggYyAtMC41MTU1MSwwLjQ0Njc3MiAtMS4wMzEwMiwwLjgyNDgxMSAtMS4xMzQxMiwwLjgyNDgxMSAtMC4xMDMxLDAgLTAuNjg3MzQsLTAuNjUyOTc2IC0xLjMwNTk1LC0xLjQ0MzQyIGwgLTEuMDk5NzUsLTEuNDQzNDE5IDEuMDk5NzUsLTAuOTYyMjggYyAwLjYxODYxLC0wLjUxNTUwNyAxLjEzNDEyLC0wLjkyNzkxMiAxLjEzNDEyLC0wLjkyNzkxMiAwLjAzNDQsMCAwLjU0OTg3LDAuNjg3MzQyIDEuMTY4NDgsMS41NDY1MjEgeiBtIC01LjE1NTA3LDQuMTkyNzkgYyAwLjU4NDI0LDAuNzIxNzA5IDEuMDY1MzgsMS40MDkwNTIgMS4wNjUzOCwxLjU0NjUyIDAsMC4yNDA1NyAtNDcuOTA3Nzc5LDQwLjU1MzIxNCAtNDguNDU3NjUzLDQwLjc1OTQxNyAtMC4xMzc0NjksMC4wMzQzNyAtMC42ODczNDMsLTAuNTQ5ODc1IC0xLjIwMjg1LC0xLjM3NDY4NiBsIC0wLjk2MjI4LC0xLjQ0MzQxOSAwLjk5NjY0NywtMC43OTA0NDQgQyA2Mi4xODgzNzgsNTQuMzg4Njk5IDczLjAxNDAyNCw0NS4yMTI2NzYgODUuNjYxMTI4LDM0LjQ1NTc2NCA5OC4zNDI1OTksMjMuNjk4ODUyIDEwOC43OTAyMSwxNC44NjY1IDEwOC45Mjc2OCwxNC44NjY1IGMgMC4xMDMxLC0wLjAzNDM3IDAuNjg3MzQsMC41NDk4NzQgMS4yNzE1OCwxLjIzNzIxNyB6IE0gODcuMjA3NjQ5LDQ2LjAwMzEyIGMgMC4zNzgwMzgsMC40ODExMzkgMC42NTI5NzUsMS4wMzEwMTQgMC42MTg2MDgsMS4xNjg0ODIgLTAuMTM3NDY4LDAuMzQzNjcxIC0yMC41NTE1NDMsMTcuNDkyODY5IC0yMC44NjA4NDgsMTcuNDkyODY5IC0wLjEzNzQ2OCwwIC0wLjUxNTUwNywtMC40ODExNCAtMC44NTkxNzgsLTEuMDY1MzgxIC0wLjUxNTUwNywtMC44OTM1NDUgLTAuNTQ5ODc0LC0xLjEzNDExNSAtMC4xNzE4MzYsLTEuNTEyMTU0IDEuNjgzOTksLTEuNTgwODg4IDIwLjAzNjAzNywtMTcuMDExNzI5IDIwLjI0MjI0LC0xNy4wMTE3MjkgMC4xNzE4MzYsMCAwLjYxODYwOCwwLjQxMjQwNiAxLjAzMTAxNCwwLjkyNzkxMyB6IiBpZD0icGF0aDEtNSIgc3R5bGU9ImZpbGw6IzMyMzIzMjtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4wMzQzNjcxO2ZpbGwtb3BhY2l0eToxIj48L3BhdGg+CiAgPHBhdGggZD0ibSA0OC4zNzI3OTIsNjIuMjkzMTM5IGMgLTMuNjc3MjgzLDMuMjMwNTEgLTYuNzcwMzI1LDUuOTExMTQ3IC02LjgwNDY5Miw1Ljk3OTg4MSAtMC4zNDM2NzEsMC4zNDM2NzEgMS4xNjg0ODMsOC4zMTY4NDUgMi40NzQ0MzQsMTMuMTk2OTc4IDAuODI0ODExLDMuMDU4Njc0IDEuNTgwODg4LDUuNjM2MjA5IDEuNjQ5NjIyLDUuNjcwNTc2IDAuMTcxODM2LDAuMTcxODM2IDE5LjAwNTAyMywtMTYuNTY0OTU2IDE5LjAwNTAyMywtMTYuODc0MjYxIDAsLTAuNDEyNDA1IC05LjE0MTY1NywtMTMuODQ5OTUzIC05LjQxNjU5NCwtMTMuODQ5OTUzIC0wLjEzNzQ2OCwwIC0zLjIzMDUxLDIuNjQ2MjY5IC02LjkwNzc5Myw1Ljg3Njc3OSB6IG0gOS41MTk2OTUsMy4wNTg2NzUgYyAyLjU0MzE2OCwzLjg0OTExOCAyLjkyMTIwNiw0LjU3MDgyOCAyLjQ3NDQzMyw0Ljk0ODg2NyAtMi4yMzM4NjMsMi4xMzA3NjIgLTEyLjc1MDIwNSwxMS4yMDM2ODQgLTEyLjk5MDc3NSwxMS4yMDM2ODQgLTAuMzQzNjcxLDAgLTEuOTU4OTI2LC02LjUyOTc1NSAtMi40MDU2OTksLTkuNjIyNzk3IGwgLTAuMzA5MzA0LC0yLjIzMzg2MyAxLjkyNDU1OSwtMS43MTgzNTYgYyAxLjA2NTM4MSwtMC45NjIyOCAzLjI2NDg3OCwtMi45MjEyMDcgNC44ODAxMzMsLTQuMzY0NjI2IDEuNjE1MjU1LC0xLjQ0MzQxOSAzLjAyNDMwNywtMi42NDYyNjkgMy4xNjE3NzYsLTIuNjQ2MjY5IDAuMTcxODM1LC0wLjAzNDM3IDEuNjE1MjU1LDEuOTkzMjk0IDMuMjY0ODc3LDQuNDMzMzYgeiIgaWQ9InBhdGgyLTEiIHN0eWxlPSJmaWxsOiMzMjMyMzI7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMDM0MzY3MTtzdHJva2Utb3BhY2l0eToxO2ZpbGwtb3BhY2l0eToxIj48L3BhdGg+CiAgPHBhdGggZD0ibSAzNi41NTA0OTksNzUuNDkwMTE3IGMgLTMuODQ5MTE4LDYuMjIwNDUxIC00LjIyNzE1Nyw2LjcwMTU5MSAtNi40MjY2NTMsOC4yMTM3NDQgLTAuODU5MTc4LDAuNTg0MjQxIC02LjM5MjI4Niw2LjIyMDQ1MSAtMTIuMzM3OCwxMi41MDk2MzYgbCAtMTAuNzU2OTExNCwxMS40Nzg2MjMgNi4zMjM1NTI0LDYuMzIzNTUgYyAzLjQ3MTA4LDMuNDcxMDggNi40MjY2NTMsNi4zMjM1NSA2LjU2NDEyMSw2LjMyMzU1IDAuMTAzMTAyLDAgMS4zNDAzMTgsLTIuMTMwNzYgMi42ODA2MzcsLTQuNzA4MyAxLjM3NDY4NSwtMi42MTE5IDQuMjYxNTI0LC03Ljk3MzE3IDYuNDI2NjUzLC0xMS44OTEwMiA0LjI5NTg5MSwtNy44MDEzNDEgNC42MDUxOTUsLTguMTEwNjQ1IDYuOTQyMTYsLTcuNDU3NjY5IDEuNjgzOTg5LDAuNDQ2NzcyIDMuNjc3MjgzLDAuNDQ2NzcyIDUuMDg2MzM1LC0wLjA2ODczIDEuMDY1MzgxLC0wLjM3ODAzOSAxLjEzNDExNiwtMC41MTU1MDcgMC44OTM1NDYsLTEuNDc3Nzg3IC0wLjU0OTg3NCwtMi4wNjIwMjggLTAuMjc0OTM3LC00LjM5ODk5MyAwLjcyMTcwOSwtNi4yNTQ4MTggbCAwLjk2MjI4LC0xLjcxODM1NiAtMS4wMzEwMTQsLTMuMjMwNTEgQyA0MC45ODM4NTksNzguNDgwMDU3IDQwLjQ2ODM1Miw3Ni4yODA1NjEgNDAuMTkzNDE1LDczLjAxNTY4NCBsIC0wLjI0MDU3LC0yLjk4OTk0MSB6IG0gMi43MTUwMDQsNy40NTc2NjcgMC45NjIyNzksMy4zNjc5NzkgLTAuNzU2MDc3LDEuNzE4MzU3IGMgLTAuNDEyNDA1LDAuOTI3OTEyIC0wLjc5MDQ0NCwyLjU0MzE2NyAtMC44MjQ4MTEsMy41NzQxODEgbCAtMC4wNjg3MywxLjg5MDE5MiAtMi41Nzc1MzUsLTAuMjA2MjAzIGMgLTIuMTk5NDk2LC0wLjE3MTgzNSAtMi44MTgxMDQsLTAuMDY4NzMgLTMuOTUyMjIsMC41MTU1MDcgLTEuMjcxNTg0LDAuNjE4NjA5IC0xLjc4NzA5MSwxLjQwOTA1MyAtNS44NzY3NzksOC44NjY3MjMgLTIuNDc0NDMzLDQuNTM2NDYgLTUuMDUxOTY4LDkuMTc2MDIgLTUuNjcwNTc2LDEwLjM0NDUgLTAuNjUyOTc2LDEuMjAyODUgLTEuMjM3MjE3LDIuMTY1MTMgLTEuMzQwMzE5LDIuMTY1MTMgLTAuMTAzMTAxLDAgLTEuOTI0NTU5LC0xLjY4Mzk5IC00LjA4OTY4OCwtMy43MTE2NSBsIC0zLjk1MjIyLC0zLjcxMTY1IDkuNjIyNzk2LC0xMC4yMDcwMzUgYyA1LjU2NzQ3NiwtNS45Nzk4ODEgMTAuNTE2MzQyLC0xMC45Mjg3NDggMTEuODU2NjYsLTExLjg5MTAyNyAxLjY0OTYyMywtMS4yMzcyMTcgMi42NDYyNjksLTIuMzAyNTk4IDMuNzQ2MDE4LC00LjA4OTY4OSAwLjg1OTE3OCwtMS4zNzQ2ODUgMS42MTUyNTUsLTIuMzM2OTY1IDEuNzE4MzU2LC0yLjE5OTQ5NiAwLjEzNzQ2OSwwLjEzNzQ2OCAwLjY1Mjk3NSwxLjc1MjcyMyAxLjIwMjg1LDMuNTc0MTgxIHoiIGlkPSJwYXRoMy03IiBzdHlsZT0iZmlsbDojMzIzMjMyO3N0cm9rZTojMWExYTFhO3N0cm9rZS13aWR0aDowLjAzNDM2NzE7c3Ryb2tlLW9wYWNpdHk6MTtmaWxsLW9wYWNpdHk6MSI+PC9wYXRoPgogIDxwYXRoIGQ9Im0gNTcuMTM2NDEsNzkuMDk4NjY2IGMgLTEuNzg3MDkxLDEuNTQ2NTIxIC0yLjcxNTAwMywyLjU3NzUzNSAtMi42ODA2MzYsMi45ODk5NCAwLjI3NDkzNywxLjkyNDU1OSAtMS4yNzE1ODQsMy41NzQxODIgLTIuNjExOTAyLDIuODUyNDcyIC0wLjg1OTE3OCwtMC40NDY3NzMgLTEuMTM0MTE1LC0wLjMwOTMwNCAtMy40NzEwOCwxLjgyMTQ1OCBsIC0xLjc4NzA5MSwxLjYxNTI1NSAwLjg5MzU0NiwxLjE2ODQ4MiBjIDEuNDA5MDUyLDEuODU1ODI1IDMuNTM5ODE0LDIuNzE1MDA0IDYuMzU3OTE5LDIuNTQzMTY4IDIuNzQ5MzcsLTAuMTM3NDY5IDQuNTcwODI4LC0xLjEzNDExNSA2LjIyMDQ1LC0zLjQzNjcxMyAxLjk5MzI5NCwtMi43NDkzNyAyLjI2ODIzMSwtNi43NzAzMjUgMC42ODczNDMsLTEwLjEzODMwMyBsIC0wLjg1OTE3OCwtMS43NTI3MjQgeiBtIDEuMTY4NDgzLDYuNTY0MTIyIGMgLTAuNTQ5ODc1LDEuNDA5MDUyIC0yLjgxODEwNSwzLjMzMzYxMSAtNC4xNTg0MjMsMy41NzQxODEgLTEuMjcxNTg0LDAuMjQwNTcgLTMuMTYxNzc2LC0wLjM0MzY3MSAtMi44NTI0NzIsLTAuODU5MTc4IDAuMTM3NDY5LC0wLjIwNjIwMyAwLjM3ODAzOCwtMC4yNzQ5MzcgMC41NDk4NzQsLTAuMTM3NDY5IDEuMzQwMzE4LDAuODI0ODEyIDQuODgwMTMzLC0xLjgyMTQ1OCA1LjQ5ODc0MSwtNC4xMjQwNTUgMC4yMDYyMDMsLTAuNzU2MDc3IDAuNTQ5ODc0LC0xLjYxNTI1NSAwLjc1NjA3NywtMS44OTAxOTIgMC41ODQyNDEsLTAuNzIxNzEgMC43NTYwNzcsMi4xNjUxMjkgMC4yMDYyMDMsMy40MzY3MTMgeiIgaWQ9InBhdGg0LTEiIHN0eWxlPSJmaWxsOiMzMjMyMzI7c3Ryb2tlOiMxYTFhMWE7c3Ryb2tlLXdpZHRoOjAuMDM0MzY3MTtzdHJva2Utb3BhY2l0eToxO2ZpbGwtb3BhY2l0eToxIj48L3BhdGg+CiAgPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC44MjkwOTk7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Im0gMTYuOTcxOTEsMTEzLjA0OTQ4IGMgLTEuMDY5OTQsLTAuOTgzNyAtMi43NjM0NTcsLTIuNTc4NTQgLTMuNzYzMzcxLC0zLjU0NDA3IGwgLTEuODE4MDI1LC0xLjc1NTUyIDAuNTE4MTI1LC0wLjU2OTAzIGMgMC4yODQ5NjgsLTAuMzEyOTcgMy43MzI2NDksLTMuOTc0NjkgNy42NjE1MTMsLTguMTM3MTYgNy4xNjg4MTksLTcuNTk1MDY1IDExLjI4MzAxNiwtMTEuNzI2NzE4IDE0LjA1NzE5NiwtMTQuMTE2ODM4IDAuOTExNDk0LC0wLjc4NTMwNiAxLjk5OTg5NywtMi4wNDE4OTkgMi44MDI1NzIsLTMuMjM1NjQ2IDAuNzIxNzgyLC0xLjA3MzQ0MyAxLjQwMDg0MywtMS45NTE3MTQgMS41MDkwMjUsLTEuOTUxNzE0IDAuMjEzNjYsMCAwLjI3NDEzNywwLjE3MDA3OSAxLjQyNzE3OSw0LjAxMzY1OCBsIDAuNzc2MzEyLDIuNTg3NzggLTAuNDM5MDE1LDAuODYwNTQyIGMgLTAuNTcyNTc4LDEuMTIyMzQ1IC0xLjA5NDI0NSwzLjE0ODgwNCAtMS4wOTgwMTgsNC4yNjUzNDIgLTAuMDA2NSwxLjkyNTU5OCAwLjAzNzI1LDEuODk2NTU1IC0yLjYxNDcyMSwxLjczNTQ4NSAtMi42ODAwOTIsLTAuMTYyNzc3IC0zLjU4NTc0OSwwLjAzOTE5IC00Ljc0NjcyMSwxLjA1ODUzNCAtMS4wMDEzMTIsMC44NzkxNjQgLTEuOTUxMDQxLDIuNDU5MTk2IC02Ljg5NjUyMiwxMS40NzM1MTcgLTQuNzI5NDQsOC42MjA1MyAtNS4wMDgzMTMsOS4xMDM2OCAtNS4yNTQ2MDMsOS4xMDM2OCAtMC4wOTY1NywwIC0xLjA1MDk4NSwtMC44MDQ4NSAtMi4xMjA5MjYsLTEuNzg4NTYgeiIgaWQ9InBhdGgxMCI+PC9wYXRoPgogIDxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuODI5MDk5O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utb3BhY2l0eToxIiBkPSJtIDQ3LjE2MjE2Nyw4MC43MjI3MDQgYyAtMC40MzQ0NjksLTEuMTQyNzQgLTEuNTUxOTYxLC01Ljg3MDM1NiAtMS45ODE0NzYsLTguMzgyNzUxIC0wLjQxODY0NCwtMi40NDg4MDQgLTAuNDIwODQ5LC0yLjU3NzkxNyAtMC4wNTAwOSwtMi45MzM1NzYgMS4yMDQ4MTYsLTEuMTU1NzU1IDkuMzU4NTI4LC04LjMxMjc2NSA5LjQ2OTE3NywtOC4zMTE2NzUgMC4xNzA0OTksMC4wMDE3IDIuOTgyNTc4LDMuOTgzNzkzIDQuNDE0MDUzLDYuMjUwNjI3IDEuMjcyNzAzLDIuMDE1NDA2IDEuNDk4MjYyLDIuNjYxNTgxIDEuMDY2MDI2LDMuMDUzOTE3IC0yLjkwMTQzNSwyLjYzMzYwNyAtMTEuOTE0MjAxLDEwLjQxODAyNCAtMTIuNDMzNjE3LDEwLjczOTA0MSAtMC4xNjc5NTksMC4xMDM4MDQgLTAuMzQ0MDksLTAuMDQ3NDEgLTAuNDg0MDcsLTAuNDE1NTgzIHoiIGlkPSJwYXRoMTEiPjwvcGF0aD4KICA8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjgyOTA5OTtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW9wYWNpdHk6MSIgZD0ibSA2Mi4zNzE0MzcsNTcuNzQ1Mjk4IGMgLTAuNzMxMjc4LC0wLjgxODU0NCAtMS40MjY0NzIsLTEuOTExMTQ2IC0xLjM1MDA5MiwtMi4xMjE4NzEgMC4wMzk2MywtMC4xMDkzMzkgMS4xMDg1NiwtMS4wNjYyMjYgMi4zNzUzOTgsLTIuMTI2NDE1IDEuMjY2ODM4LC0xLjA2MDE4OCA4LjQyMzY1LC03LjExODEyNCAxNS45MDQwMjcsLTEzLjQ2MjA4MyA3LjQ4MDM3NywtNi4zNDM5NTggMTcuMjAzNzUzLC0xNC41NzU1OTkgMjEuNjA3NSwtMTguMjkyNTM2IGwgOC4wMDY4MiwtNi43NTgwNjcgMS4wNTI4OSwxLjE0NTA2MyBjIDAuNTc5MDksMC42Mjk3ODUgMS4wMjMzMiwxLjI3MDk4MyAwLjk4NzE4LDEuNDI0ODg1IC0wLjAzNjEsMC4xNTM5MDMgLTEuNDk3MDYsMS41MDUxNCAtMy4yNDY1MSwzLjAwMjc1MSAtOC43NDc0MTQsNy40ODgyMjggLTM5LjM5MjE5OSwzMy4yMjY5MiAtNDMuODkyMzg0LDM2Ljg2NTQxMyBsIC0xLjAwNjM1NSwwLjgxMzY1OSB6IiBpZD0icGF0aDEyIj48L3BhdGg+CiAgPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC44MjkwOTk7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Im0gNjYuMjg3NzkzLDYzLjU5Mjc1IGMgLTAuMjgwMDE3LC0wLjQzMjEzOSAtMC40NTk1MTcsLTAuOTE0OTc3IC0wLjM5ODg4OCwtMS4wNzI5NzMgMC4wNjA2MywtMC4xNTc5OTYgMC45ODA3MzYsLTEuMDQ5MDI3IDIuMDQ0NjgzLC0xLjk4MDA2OSAyLjQxMTM4MywtMi4xMTAxNiAxNS45NDM5NjgsLTEzLjQ4MTUzMiAxNy4zMTQ1ODYsLTE0LjU0OTM3IGwgMS4wMTA3MDIsLTAuNzg3NDMxIDAuNjM0MDU3LDAuNzA5NjMzIGMgMC4zNDg3MzIsMC4zOTAyOTkgMC42MzQwNTgsMC44NTMxNCAwLjYzNDA1OCwxLjAyODUzNyAwLDAuMzU0NzQzIC0xLjk5NzI0NiwyLjEyNzU4NyAtOS43NjE3ODIsOC42NjQ5OSAtNi42Njk1MjMsNS42MTU0NDkgLTEwLjU1ODM5MSw4Ljc3ODU4IC0xMC43ODg0MzUsOC43NzUxMDcgLTAuMDk4OTIsLTAuMDAxNSAtMC40MDg5NjQsLTAuMzU2Mjg0IC0wLjY4ODk4MSwtMC43ODg0MjQgeiIgaWQ9InBhdGgxMyI+PC9wYXRoPgogIDxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuODI5MDk5O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utb3BhY2l0eToxIiBkPSJtIDUyLjA0NDU1OCw4OC45NTc5NTkgYyAtMC43MTE5NjUsLTAuMzAzMzc3IC0wLjYxNDIzMiwtMC42NzYzNTEgMC4xMzc4MTcsLTAuNTI1OTQxIDEuNjk1NDUsMC4zMzkwOSA0LjQ4MjE4MSwtMS45ODI5MTIgNS4yODg4MDUsLTQuNDA2ODE3IDAuNTQwODI0LC0xLjYyNTE3NiAwLjgwNTU5NCwtMS45MTcwNDkgMS4wMDc4ODUsLTEuMTExMDU1IDAuNDI2NDExLDEuNjk4OTU2IC0wLjY5NDgwNiwzLjkzMzc5MSAtMi42NDg3MzEsNS4yNzk1MSAtMS4yNzAzODksMC44NzQ5NTEgLTIuODAwOTQ0LDEuMTgzOTUxIC0zLjc4NTc3NiwwLjc2NDMwMyB6IiBpZD0icGF0aDE0Ij48L3BhdGg+CiAgPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC44MjkwOTk7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Im0gMTEzLjIxODIyLDEzLjY2MjU5IC0xLjA5MzUzLC0xLjM3ODEgMC45MTc5NSwtMC44MTMyNjkgYyAwLjUwNDg3LC0wLjQ0NzI5OCAwLjk4NjE4LC0wLjgxNzQ3OCAxLjA2OTU3LC0wLjgyMjYyMiAwLjA4MzQsLTAuMDA1MSAwLjU5NDQ2LDAuNjA3NjEzIDEuMTM1NywxLjM2MTY4NCAxLjA4NzU0LDEuNTE1MTk1IDEuMDc2OTUsMS41OTU0NTYgLTAuMzQzOTcsMi42MDgyODggbCAtMC41OTIxOSwwLjQyMjEyIHoiIGlkPSJwYXRoMTUiPjwvcGF0aD4KPC9zdmc+Cg==`;

    // Coordinates for Hats
    const CUSTOM_X = 3500;
    const CUSTOM_Y1 = 1800;
    const CUSTOM_Y2 = 2150;
    const CUSTOM_Y3 = 2500;
    const CUSTOM_SIZE = 350;

    // Coordinates for the 4th sprite (M870)
    const M870_X = 3500;
    const M870_Y = 3000;
    const M870_SIZE = 128;

    const hatImage1 = new Image();
    const hatImage2 = new Image();
    const hatImage3 = new Image();
    const m870Image = new Image();

    let hat1Loaded = false;
    let hat2Loaded = false;
    let hat3Loaded = false;
    let m870Loaded = false;

    hatImage1.onload = function () {
        hat1Loaded = true;
        console.log("[Cowboy Hat] Hat 1 loaded.");
    };

    hatImage2.onload = function () {
        hat2Loaded = true;
        console.log("[Cowboy Hat] Hat 2 loaded.");
    };

    hatImage3.onload = function () {
        hat3Loaded = true;
        console.log("[Cowboy Hat] Hat 3 loaded.");
    };

    m870Image.onload = function () {
        m870Loaded = true;
        console.log("[Cowboy Hat] M870 loaded.");
    };

    hatImage1.onerror = function () {
        console.error("[Cowboy Hat] Hat 1 FAILED to load.");
    };

    hatImage2.onerror = function () {
        console.error("[Cowboy Hat] Hat 2 FAILED to load.");
    };

    hatImage3.onerror = function () {
        console.error("[Cowboy Hat] Hat 3 FAILED to load.");
    };

    m870Image.onerror = function () {
        console.error("[Cowboy Hat] M870 FAILED to load.");
    };

    hatImage1.src = cowboyHatBase641;
    hatImage2.src = cowboyHatBase642;
    hatImage3.src = cowboyHatBase643;
    m870Image.src = m870Base64;

    let atlasInjected = false;
    let modifiedAtlas = null;

    //display canvas for debugging
    function showDebugAtlas(canvas) {
        let debug = document.getElementById(
            "cowboy-hat-debug-atlas"
        );

        if (!debug) {
            debug = document.createElement("img");
            debug.id = "cowboy-hat-debug-atlas";

            debug.style.position = "fixed";
            debug.style.left = "10px";
            debug.style.top = "10px";
            debug.style.width = "500px";
            debug.style.height = "500px";
            debug.style.objectFit = "contain";
            debug.style.zIndex = "999999";
            debug.style.border = "5px solid red";
            debug.style.background = "white";

            document.documentElement.appendChild(debug);
        }

        debug.style.display = "block";

        try {
            debug.src = canvas.toDataURL("image/png");
        } catch (e) {
            console.error(
                "[Cowboy Hat] Could not create debug image:",
                e
            );
            return;
        }

        console.log(
            "[Cowboy Hat] DEBUG ATLAS DISPLAYED FOR 5 SECONDS"
        );

        setTimeout(function () {
            debug.style.display = "none";
            console.log(
                "[Cowboy Hat] DEBUG ATLAS HIDDEN"
            );
        }, 5000);
    }

    //Inject assets into canvas
    function hookWebGL(proto, name) {
        if (!proto || !proto.texImage2D) {
            console.warn(
                "[Cowboy Hat] Could not hook:",
                name
            );
            return;
        }

        if (proto.__cowboyHatHooked) {
            return;
        }

        proto.__cowboyHatHooked = true;

        const originalTexImage2D =
            proto.texImage2D;

        proto.texImage2D = function (...args) {
            try {
                if (atlasInjected) {
                    return originalTexImage2D.apply(
                        this,
                        args
                    );
                }
                if (
                    !hat1Loaded ||
                    !hat2Loaded ||
                    !hat3Loaded ||
                    !m870Loaded
                ) {
                    return originalTexImage2D.apply(
                        this,
                        args
                    );
                }

                const source =
                    args[args.length - 1];

                // html only
                if (!(source instanceof HTMLImageElement)) {
                    return originalTexImage2D.apply(
                        this,
                        args
                    );
                }

                if (!source.src) {
                    return originalTexImage2D.apply(
                        this,
                        args
                    );
                }

                const sourceURL =
                    source.src.toLowerCase();

                // If it's a main or loadout texture atlas, we can inject into it (or target loadout/main specifically)
                // Let's hook onto the texture containing the game sprites (or loadout/main)
                if (!sourceURL.includes("loadout") && !sourceURL.includes("main")) {
                    return originalTexImage2D.apply(
                        this,
                        args
                    );
                }
                console.log(
                    "[Cowboy Hat] Found target texture atlas:",
                    source.src
                );

                console.log(
                    "[Cowboy Hat] Source dimensions:",
                    source.width,
                    "x",
                    source.height
                );

                //modified loadout/atlas canvas
                const canvas =
                    document.createElement("canvas");

                canvas.width = Math.max(
                    source.width || 4096,
                    CUSTOM_X + CUSTOM_SIZE,
                    M870_X + M870_SIZE
                );

                canvas.height = Math.max(
                    source.height || 4096,
                    CUSTOM_Y3 + CUSTOM_SIZE,
                    M870_Y + M870_SIZE
                );

                const ctx =
                    canvas.getContext("2d");

                if (!ctx) {
                    console.error(
                        "[Cowboy Hat] Failed to create canvas context."
                    );

                    return originalTexImage2D.apply(
                        this,
                        args
                    );
                }

                //copy original atlas
                ctx.drawImage(
                    source,
                    0,
                    0
                );

                //Drawing hats (if present on this atlas sheet)
                ctx.drawImage(
                    hatImage1,
                    CUSTOM_X,
                    CUSTOM_Y1,
                    CUSTOM_SIZE,
                    CUSTOM_SIZE
                );
                ctx.drawImage(
                    hatImage2,
                    CUSTOM_X,
                    CUSTOM_Y2,
                    CUSTOM_SIZE,
                    CUSTOM_SIZE
                );
                ctx.drawImage(
                    hatImage3,
                    CUSTOM_X,
                    CUSTOM_Y3,
                    CUSTOM_SIZE,
                    CUSTOM_SIZE
                );

                //Drawing M870 4th sprite
                ctx.drawImage(
                    m870Image,
                    M870_X,
                    M870_Y,
                    M870_SIZE,
                    M870_SIZE
                );

                modifiedAtlas = canvas;
                window.__cowboyHatAtlas = canvas;

                showDebugAtlas(canvas);

                //webgl Handover
                args[args.length - 1] =
                    canvas;

                atlasInjected = true;

                console.log(
                    "[Cowboy Hat] SUCCESS: CUSTOM ASSETS INJECTED"
                );

            } catch (e) {
                console.error(
                    "[Cowboy Hat] WebGL interception error:",
                    e
                );
            }

            return originalTexImage2D.apply(
                this,
                args
            );
        };

        console.log(
            "[Cowboy Hat] WebGL hooked:",
            name
        );
    }

    //hook webgl
    if (
        typeof WebGLRenderingContext !==
        "undefined"
    ) {
        hookWebGL(
            WebGLRenderingContext.prototype,
            "WebGLRenderingContext"
        );
    }

    if (
        typeof WebGL2RenderingContext !==
        "undefined"
    ) {
        hookWebGL(
            WebGL2RenderingContext.prototype,
            "WebGL2RenderingContext"
        );
    }

    //pixi stuff
    function findPixiRoot() {
        const candidates = [];

        for (
            const key of Object.keys(window)
        ) {
            try {
                const value =
                    window[key];

                if (!value)
                    continue;

                if (
                    value.stage &&
                    value.renderer
                ) {
                    candidates.push(value);
                }
            } catch (_) {}
        }

        if (candidates.length) {
            console.log(
                "[Cowboy Hat] Pixi application found."
            );

            return candidates[0];
        }

        return null;
    }

    function walkDisplayTree(
        object,
        callback,
        depth = 0
    ) {
        if (!object || depth > 100)
            return;

        try {
            callback(object);
        } catch (_) {}

        if (
            object.children &&
            Array.isArray(object.children)
        ) {
            for (
                const child of object.children
            ) {
                walkDisplayTree(
                    child,
                    callback,
                    depth + 1
                );
            }
        }
    }

    let cowboyTexture1 = null;
    let cowboyTexture2 = null;
    let cowboyTexture3 = null;
    let m870Texture = null;

    function tryCreateCowboyTextures(sprite) {
        if (
            !sprite ||
            !sprite.texture
        ) {
            return null;
        }

        const texture =
            sprite.texture;

        const baseTexture =
            texture.baseTexture;

        if (!baseTexture) {
            return null;
        }

        const TextureClass =
            texture.constructor;

        let RectangleClass = null;

        if (texture.frame) {
            RectangleClass =
                texture.frame.constructor;
        }

        if (
            !TextureClass ||
            !RectangleClass
        ) {
            return null;
        }

        try {
            cowboyTexture1 =
                new TextureClass(
                    baseTexture,
                    new RectangleClass(
                        CUSTOM_X,
                        CUSTOM_Y1,
                        CUSTOM_SIZE,
                        CUSTOM_SIZE
                    )
                );

            cowboyTexture2 =
                new TextureClass(
                    baseTexture,
                    new RectangleClass(
                        CUSTOM_X,
                        CUSTOM_Y2,
                        CUSTOM_SIZE,
                        CUSTOM_SIZE
                    )
                );

            cowboyTexture3 =
                new TextureClass(
                    baseTexture,
                    new RectangleClass(
                        CUSTOM_X,
                        CUSTOM_Y3,
                        CUSTOM_SIZE,
                        CUSTOM_SIZE
                    )
                );

            m870Texture =
                new TextureClass(
                    baseTexture,
                    new RectangleClass(
                        M870_X,
                        M870_Y,
                        M870_SIZE,
                        M870_SIZE
                    )
                );

            window.__cowboyHatTexture1 =
                cowboyTexture1;

            window.__cowboyHatTexture2 =
                cowboyTexture2;

            window.__cowboyHatTexture3 =
                cowboyTexture3;

            window.__m870Texture =
                m870Texture;

            console.log(
                "[Cowboy Hat] Custom Pixi textures created (including M870)."
            );

            return [
                cowboyTexture1,
                cowboyTexture2,
                cowboyTexture3,
                m870Texture
            ];

        } catch (e) {
            console.error(
                "[Cowboy Hat] Texture creation failed:",
                e
            );

            return null;
        }
    }

    function inspectSprite(object) {
        if (!object)
            return;

        if (!object.texture)
            return;

        const name =
            String(
                object.name ||
                object.label ||
                object.id ||
                ""
            ).toLowerCase();

        if (
            name.includes("helmet") ||
            name.includes("player") ||
            name.includes("weapon") ||
            name.includes("m870")
        ) {
            console.log(
                "[Cowboy Hat] Possible target sprite:",
                object
            );

            if (
                !cowboyTexture1 ||
                !cowboyTexture2 ||
                !cowboyTexture3 ||
                !m870Texture
            ) {
                tryCreateCowboyTextures(
                    object
                );
            }
        }
    }

    //Scan runtime
    function scanRuntime() {
        if (!atlasInjected)
            return;

        const app =
            findPixiRoot();

        if (!app)
            return;

        let count = 0;

        walkDisplayTree(
            app.stage,
            function (object) {
                count++;
                inspectSprite(
                    object
                );
            }
        );

        console.log(
            "[Cowboy Hat] Display objects scanned:",
            count
        );
    }

    const scanner =
        setInterval(
            scanRuntime,
            1000
        );

    setTimeout(
        function () {
            clearInterval(scanner);
            console.log(
                "[Cowboy Hat] Runtime scanner stopped."
            );
        },
        60000
    );

    console.log(
        "[Cowboy Hat] Atlas injector ready."
    );

})();
