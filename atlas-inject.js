// ==UserScript==
// @name         Survev - Cowboy Hat Runtime Atlas x3
// @namespace    survev-cowboy-hat
// @version      3.0
// @description  Injects three cowboy hats into the loadout atlas.
// @match        http://localhost:5173/*
// @match        https://survev.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    console.log("[Cowboy Hat] Script started.");

    // ============================================================
    // 1. THREE COWBOY HAT BASE64 INPUTS
    // ============================================================

    // HAT 1
    const cowboyHatBase641 = `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHdpZHRoPSIxNzYiIGhlaWdodD0iMTc2IiB2ZXJzaW9uPSIxLjEiIGlkPSJzdmczMSI+CiAgPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTM1Ij48L21ldGFkYXRhPgogIDxkZWZzIGlkPSJkZWZzMjUiPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDExNCI+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiMxYjFiMWI7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAiIGlkPSJzdG9wMTE0Ij48L3N0b3A+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiMyZDJkMmQ7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAuMjk2MDg0MjMiIGlkPSJzdG9wMTE2Ij48L3N0b3A+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiMyZDJkMmQ7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAuNzg2NzY3NDgiIGlkPSJzdG9wMTE3Ij48L3N0b3A+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiMxYjFiMWI7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjEiIGlkPSJzdG9wMTE1Ij48L3N0b3A+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGNsaXBQYXRoIGlkPSJlIj4KICAgICAgPHBhdGggZD0iTTE4OCAxMjhjMCA4MC02OS43NTYgMTE5LjM2Mi02OS43NTYgMTE5LjM2MkM2NCAyNDQgOC42MzggMTkzLjkyMiA4LjYzOCAxMjhTNjQgMTIgMTE4LjI0NCA4LjYzOEMxMTguMjQ0IDguNjM4IDE4OCA0OCAxODggMTI4eiIgZmlsbD0iIzI1MjUyNSIgZmlsbC1vcGFjaXR5PSIuNjAxIiBzdHJva2Utd2lkdGg9IjEyLjUzNyIgaWQ9InBhdGgyIj48L3BhdGg+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoIGlkPSJlLTIiPgogICAgICA8cGF0aCBkPSJtIDE4OCwxMjggYyAwLDgwIC02OS43NTYsMTE5LjM2MiAtNjkuNzU2LDExOS4zNjIgQyA2NCwyNDQgOC42MzgsMTkzLjkyMiA4LjYzOCwxMjggOC42MzgsNjIuMDc4IDY0LDEyIDExOC4yNDQsOC42MzggMTE4LjI0NCw4LjYzOCAxODgsNDggMTg4LDEyOCBaIiBmaWxsPSIjMjUyNTI1IiBmaWxsLW9wYWNpdHk9IjAuNjAxIiBzdHJva2Utd2lkdGg9IjEyLjUzNyIgaWQ9InBhdGgyLTMiPjwvcGF0aD4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGggaWQ9ImUtOCI+CiAgICAgIDxwYXRoIGQ9Im0gMTg4LDEyOCBjIDAsODAgLTY5Ljc1NiwxMTkuMzYyIC02OS43NTYsMTE5LjM2MiBDIDY0LDI0NCA4LjYzOCwxOTMuOTIyIDguNjM4LDEyOCA4LjYzOCw2Mi4wNzggNjQsMTIgMTE4LjI0NCw4LjYzOCAxMTguMjQ0LDguNjM4IDE4OCw0OCAxODgsMTI4IFoiIGZpbGw9IiMyNTI1MjUiIGZpbGwtb3BhY2l0eT0iMC42MDEiIHN0cm9rZS13aWR0aD0iMTIuNTM3IiBpZD0icGF0aDItOCI+PC9wYXRoPgogICAgPC9jbGlwUGF0aD4KICAgIDxsaW5lYXJHcmFkaWVudCB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQxMTQiIGlkPSJsaW5lYXJHcmFkaWVudDExNSIgeDE9Ijc1LjA3NTcxNCIgeTE9IjM1LjE5MTc0MiIgeDI9Ijc1LjkyODg0OCIgeTI9IjEzMy45NDE4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC45NTQ2NDIwOSwwLDAsMC44MDc3NjI1OSw0LjU0NDM1ODMsMTYuNTQ3ODU3KSI+PC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHBhdGggaWQ9InBhdGgzIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDExNSk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwOTA5MDk7c3Ryb2tlLXdpZHRoOjk7c3Ryb2tlLWRhc2hhcnJheTpub25lIiBkPSJtIDEyNC4yNjU3Niw4Ny43ODY1NjggYyAwLDE3Ljc1MjgwMiAtNi41NjM4NywzMy42NTI4NDIgLTE2LjkxODYyLDQ0LjM0ODkxMiAtOC40MzEwNjcsOC43MDg5NyAtMTcuNTQyODQ3LDExLjkwMDU2IC0yOS41MDM0NzksMTEuOTAwNTYgLTEyLjk1NTE0NywwIC0yNC4wMjUwODIsLTEuMzQ1OTggLTMyLjY5MzI4NiwtMTEuMzg3IEMgMzUuOTg3MDYyLDEyMi4wMzQ1IDYzLjYyMDQxMSwxMDMuOTkyODkgNjMuNjIwNDEsODcuNDQyMDA0IG0gMCwwLjI4MDk4MiBjIC0xMGUtNywtMTcuMjQ0NjU1IC0yNy4zNDg2NDksLTM0LjQwMDMzOCAtMTcuNTAzMjk1LC00NS4wNzY5NzIgOC41NDI2MzEsLTkuMjYzOTEzIDE4LjEyMzc5OSwtMTAuOTM2NjQgMzAuNTA0ODkzLC0xMC45MzY2NCAxMS42MDM5NTMsMCAyMi4xMzU0NjUsNC41MjUzODYgMzAuMzI4NDgyLDEyLjI5NDAxMyAxMC42MjM1LDEwLjA3MzIxOSAxNy4zMTUyNywyNS41OTkzMzYgMTcuMzE1MjcsNDMuNzgzMTgxIj48L3BhdGg+CiAgPHBhdGggc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMyZDJkMmQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwOTA5MDk7c3Ryb2tlLXdpZHRoOjk7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lIiBkPSJtIDcyLjk0NTg0NywxMjAuNzAzNDQgYyAwLjI5MDM0NSwtMC43MDY5NSAxMy43NjEwMDcsMS44MTgzMiAxNC41OTE0MzUsLTAuMDE1MyA3LjcxMTg5NywtMTcuMDI4MyAxNi42MjMwOTgsLTMzLjc2ODgzMiAwLjE2ODExMywtNjUuMTExNDMzIC0xLjAzOTM0NCwtMS45Nzk2ODcgLTEzLjY2ODU0LC0wLjA1OTI5IC0xNC43MjY2MTQsLTAuMjQ3MSAxNC4zODQxMzIsMjIuMjY5ODQ2IDEyLjc2OTUxOSw0NC4wMzAwNjYgLTAuMDMyOTQsNjUuMzczODMzIEwgNjIuMDEzMTM3LDExNC4xNjEyIDM0LjA1OTgyOSwxMTIuMzk2MDEgYyAtMS44MzgwMTYsLTIuMTQ5NTMgLTMuMzg2Mjg4LC00LjU1Nzc1IC02LjYyMDIxOCwtNi43MTY4MiAwLjEyNzQyNiwtMi4yNjMzNCAtMC4yMDA4MzEsLTcuODU1Mzg4IDAuOTAxMTE4LC03LjQ2NTY1OSAxLjE5NzI4OSwtMy4yMTc0MzcgOC4yNDcwMTUsLTYuNjU0MDg3IDguMTk3ODIzLC05Ljk2Mjk4OSAtMC4wNDkxOSwtMy4zMDg5MDEgLTcuOTA1Nzc5LC05Ljg5MDc5MyAtNy45MDU3NzksLTkuODkwNzkzIC0xLjk1NjIxNywtMS4zMDY0MjYgLTAuOTMzNzg4LC00LjUzNDUwOCAtMS4xMTM3MiwtOC4wMzE5MjQgMy40MzAxMTEsLTIuNjk5ODM4IDMuMjY2OTMzLC0yLjUxMzE3MiA3LjM3NTE5LC03LjE2Njc0IEwgNjIuNjQ3MDIsNjEuNDczNjMyIDcyLjk3ODc3Nyw1NS4zMjk2MjciIGlkPSJwYXRoNCI+PC9wYXRoPgogIDxwYXRoIHN0eWxlPSJmaWxsOiM4YjhiOGI7c3Ryb2tlLXdpZHRoOjIuNzY5NTk7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIiBkPSJtIDgwLjM1OTYxOSwxMTcuMjM2MzIgYyAtMC42MTk2NDQsLTAuMTE4NjEgLTAuNTkxNTM1LC0wLjIzMzU3IDAuODA2MjE3LC0zLjI5NzM0IDIuODg2MTksLTYuMzI2MyA0Ljk3MTA5MiwtMTMuNTA4NjUgNS43NDk4NDEsLTE5LjgwNzgxMSBDIDg3LjM4ODQ3Niw5MC4zMDY3OCA4Ny4xMzA4MDksODAuNzg0NTIxIDg2LjQ2MjUxNSw3Ny4zODQyMzUgODUuMzg0ODc5LDcxLjkwMTIxOSA4My43MDc1ODMsNjYuODc0NTkgODEuMTg0MzksNjEuNTY2NDIxIDgwLjUwMTU5Nyw2MC4xMjk5OTYgNzkuOTQyOTQ4LDU4Ljg5NzE5IDc5Ljk0Mjk0OCw1OC44MjY4NTIgYyAwLC0wLjA3MDM0IDEuMDY5NTA2LC0wLjEyNzg4NyAyLjM3NjY4LC0wLjEyNzg4NyBoIDIuMzc2Njc5IGwgMS4zMDI0NDksMi43Mzk1NjkgYyAyLjk3MDMwMSw2LjI0NzcyOCA1LjI1MzM4NiwxMy4zNDgxMDEgNi4xNzc4NDcsMTkuMjEzMDQ5IDAuNjAyMTc3LDMuODIwMzE2IDAuNjA5MDIyLDExLjAzMTM0MyAwLjAxMzk1LDE0LjY5ODc4OSAtMC44NjEwNzYsNS4zMDY4NjggLTIuODI2Nzg3LDExLjE3NzU0OCAtNi40NTAyMzQsMTkuMjYzOTA4IGwgLTEuMTk2MTA5LDIuNjY5MzMgLTEuNzcxMjgzLDAuMDM3OCBjIC0wLjk3NDIwNSwwLjAyMDggLTIuMDYwMTk2LC0wLjAxNzUgLTIuNDEzMzExLC0wLjA4NTEgeiIgaWQ9InBhdGgxIj48L3BhdGg+Cjwvc3ZnPgo=`;

    // HAT 2
    const cowboyHatBase642 = `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHdpZHRoPSIxNzYiIGhlaWdodD0iMTc2IiB2ZXJzaW9uPSIxLjEiIGlkPSJzdmczMSI+CiAgPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTM1Ij48L21ldGFkYXRhPgogIDxkZWZzIGlkPSJkZWZzMjUiPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDExNCI+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiM1ZDM0MDI7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAiIGlkPSJzdG9wMTE0Ij48L3N0b3A+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiM3YzQ1MDM7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAuMjk2MDg0MjMiIGlkPSJzdG9wMTE2Ij48L3N0b3A+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiM3YzQ1MDM7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAuNzg2NzY3NDgiIGlkPSJzdG9wMTE3Ij48L3N0b3A+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiM1ZDM0MDI7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjEiIGlkPSJzdG9wMTE1Ij48L3N0b3A+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGNsaXBQYXRoIGlkPSJlIj4KICAgICAgPHBhdGggZD0iTTE4OCAxMjhjMCA4MC02OS43NTYgMTE5LjM2Mi02OS43NTYgMTE5LjM2MkM2NCAyNDQgOC42MzggMTkzLjkyMiA4LjYzOCAxMjhTNjQgMTIgMTE4LjI0NCA4LjYzOEMxMTguMjQ0IDguNjM4IDE4OCA0OCAxODggMTI4eiIgZmlsbD0iIzI1MjUyNSIgZmlsbC1vcGFjaXR5PSIuNjAxIiBzdHJva2Utd2lkdGg9IjEyLjUzNyIgaWQ9InBhdGgyIj48L3BhdGg+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoIGlkPSJlLTIiPgogICAgICA8cGF0aCBkPSJtIDE4OCwxMjggYyAwLDgwIC02OS43NTYsMTE5LjM2MiAtNjkuNzU2LDExOS4zNjIgQyA2NCwyNDQgOC42MzgsMTkzLjkyMiA4LjYzOCwxMjggOC42MzgsNjIuMDc4IDY0LDEyIDExOC4yNDQsOC42MzggMTE4LjI0NCw4LjYzOCAxODgsNDggMTg4LDEyOCBaIiBmaWxsPSIjMjUyNTI1IiBmaWxsLW9wYWNpdHk9IjAuNjAxIiBzdHJva2Utd2lkdGg9IjEyLjUzNyIgaWQ9InBhdGgyLTMiPjwvcGF0aD4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGggaWQ9ImUtOCI+CiAgICAgIDxwYXRoIGQ9Im0gMTg4LDEyOCBjIDAsODAgLTY5Ljc1NiwxMTkuMzYyIC02OS43NTYsMTE5LjM2MiBDIDY0LDI0NCA4LjYzOCwxOTMuOTIyIDguNjM4LDEyOCA4LjYzOCw2Mi4wNzggNjQsMTIgMTE4LjI0NCw4LjYzOCAxMTguMjQ0LDguNjM4IDE4OCw0OCAxODgsMTI4IFoiIGZpbGw9IiMyNTI1MjUiIGZpbGwtb3BhY2l0eT0iMC42MDEiIHN0cm9rZS13aWR0aD0iMTIuNTM3IiBpZD0icGF0aDItOCI+PC9wYXRoPgogICAgPC9jbGlwUGF0aD4KICAgIDxsaW5lYXJHcmFkaWVudCB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQxMTQiIGlkPSJsaW5lYXJHcmFkaWVudDExNSIgeDE9Ijc1LjA3NTcxNCIgeTE9IjM1LjE5MTc0MiIgeDI9Ijc1LjkyODg0OCIgeTI9IjEzMy45NDE4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC45NTQ2NDIwOSwwLDAsMC44MDc3NjI1OSw0LjU0NDM1ODMsMTYuNTQ3ODU3KSI+PC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHBhdGggaWQ9InBhdGgzIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDExNSk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwOTA5MDk7c3Ryb2tlLXdpZHRoOjk7c3Ryb2tlLWRhc2hhcnJheTpub25lIiBkPSJtIDEyNC4yNjU3Niw4Ny43ODY1NjggYyAwLDE3Ljc1MjgwMiAtNi41NjM4NywzMy42NTI4NDIgLTE2LjkxODYyLDQ0LjM0ODkxMiAtOC40MzEwNjcsOC43MDg5NyAtMTcuNTQyODQ3LDExLjkwMDU2IC0yOS41MDM0NzksMTEuOTAwNTYgLTEyLjk1NTE0NywwIC0yNC4wMjUwODIsLTEuMzQ1OTggLTMyLjY5MzI4NiwtMTEuMzg3IEMgMzUuOTg3MDYyLDEyMi4wMzQ1IDYzLjYyMDQxMSwxMDMuOTkyODkgNjMuNjIwNDEsODcuNDQyMDA0IG0gMCwwLjI4MDk4MiBjIC0xMGUtNywtMTcuMjQ0NjU1IC0yNy4zNDg2NDksLTM0LjQwMDMzOCAtMTcuNTAzMjk1LC00NS4wNzY5NzIgOC41NDI2MzEsLTkuMjYzOTEzIDE4LjEyMzc5OSwtMTAuOTM2NjQgMzAuNTA0ODkzLC0xMC45MzY2NCAxMS42MDM5NTMsMCAyMi4xMzU0NjUsNC41MjUzODYgMzAuMzI4NDgyLDEyLjI5NDAxMyAxMC42MjM1LDEwLjA3MzIxOSAxNy4zMTUyNywyNS41OTkzMzYgMTcuMzE1MjcsNDMuNzgzMTgxIj48L3BhdGg+CiAgPHBhdGggc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiM3YzQ1MDM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwOTA5MDk7c3Ryb2tlLXdpZHRoOjk7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lIiBkPSJtIDcyLjk0NTg0NywxMjAuNzAzNDQgYyAwLjI5MDM0NSwtMC43MDY5NSAxMy43NjEwMDcsMS44MTgzMiAxNC41OTE0MzUsLTAuMDE1MyA3LjcxMTg5NywtMTcuMDI4MyAxNi42MjMwOTgsLTMzLjc2ODgzMiAwLjE2ODExMywtNjUuMTExNDMzIC0xLjAzOTM0NCwtMS45Nzk2ODcgLTEzLjY2ODU0LC0wLjA1OTI5IC0xNC43MjY2MTQsLTAuMjQ3MSAxNC4zODQxMzIsMjIuMjY5ODQ2IDEyLjc2OTUxOSw0NC4wMzAwNjYgLTAuMDMyOTQsNjUuMzczODMzIEwgNjIuMDEzMTM3LDExNC4xNjEyIDM0LjA1OTgyOSwxMTIuMzk2MDEgYyAtMS44MzgwMTYsLTIuMTQ5NTMgLTMuMzg2Mjg4LC00LjU1Nzc1IC02LjYyMDIxOCwtNi43MTY4MiAwLjEyNzQyNiwtMi4yNjMzNCAtMC4yMDA4MzEsLTcuODU1Mzg4IDAuOTAxMTE4LC03LjQ2NTY1OSAxLjE5NzI4OSwtMy4yMTc0MzcgOC4yNDcwMTUsLTYuNjU0MDg3IDguMTk3ODIzLC05Ljk2Mjk4OSAtMC4wNDkxOSwtMy4zMDg5MDEgLTcuOTA1Nzc5LC05Ljg5MDc5MyAtNy45MDU3NzksLTkuODkwNzkzIC0xLjk1NjIxNywtMS4zMDY0MjYgLTAuOTMzNzg4LC00LjUzNDUwOCAtMS4xMTM3MiwtOC4wMzE5MjQgMy40MzAxMTEsLTIuNjk5ODM4IDMuMjY2OTMzLC0yLjUxMzE3MiA3LjM3NTE5LC03LjE2Njc0IEwgNjIuNjQ3MDIsNjEuNDczNjMyIDcyLjk3ODc3Nyw1NS4zMjk2MjciIGlkPSJwYXRoNCI+PC9wYXRoPgogIDxwYXRoIHN0eWxlPSJmaWxsOiNkYWIwMDA7c3Ryb2tlLXdpZHRoOjIuNzY5NTk7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO2ZpbGwtb3BhY2l0eToxIiBkPSJtIDgwLjM1OTYxOSwxMTcuMjM2MzIgYyAtMC42MTk2NDQsLTAuMTE4NjEgLTAuNTkxNTM1LC0wLjIzMzU3IDAuODA2MjE3LC0zLjI5NzM0IDIuODg2MTksLTYuMzI2MyA0Ljk3MTA5MiwtMTMuNTA4NjUgNS43NDk4NDEsLTE5LjgwNzgxMSBDIDg3LjM4ODQ3Niw5MC4zMDY3OCA4Ny4xMzA4MDksODAuNzg0NTIxIDg2LjQ2MjUxNSw3Ny4zODQyMzUgODUuMzg0ODc5LDcxLjkwMTIxOSA4My43MDc1ODMsNjYuODc0NTkgODEuMTg0MzksNjEuNTY2NDIxIDgwLjUwMTU5Nyw2MC4xMjk5OTYgNzkuOTQyOTQ4LDU4Ljg5NzE5IDc5Ljk0Mjk0OCw1OC44MjY4NTIgYyAwLC0wLjA3MDM0IDEuMDY5NTA2LC0wLjEyNzg4NyAyLjM3NjY4LC0wLjEyNzg4NyBoIDIuMzc2Njc5IGwgMS4zMDI0NDksMi43Mzk1NjkgYyAyLjk3MDMwMSw2LjI0NzcyOCA1LjI1MzM4NiwxMy4zNDgxMDEgNi4xNzc4NDcsMTkuMjEzMDQ5IDAuNjAyMTc3LDMuODIwMzE2IDAuNjA5MDIyLDExLjAzMTM0MyAwLjAxMzk1LDE0LjY5ODc4OSAtMC44NjEwNzYsNS4zMDY4NjggLTIuODI2Nzg3LDExLjE3NzU0OCAtNi40NTAyMzQsMTkuMjYzOTA4IGwgLTEuMTk2MTA5LDIuNjY5MzMgLTEuNzcxMjgzLDAuMDM3OCBjIC0wLjk3NDIwNSwwLjAyMDggLTIuMDYwMTk2LC0wLjAxNzUgLTIuNDEzMzExLC0wLjA4NTEgeiIgaWQ9InBhdGgxIj48L3BhdGg+Cjwvc3ZnPgo=`;

    // HAT 3
    const cowboyHatBase643 = `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHdpZHRoPSIxNzYiIGhlaWdodD0iMTc2IiB2ZXJzaW9uPSIxLjEiIGlkPSJzdmczMSI+CiAgPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTM1Ij48L21ldGFkYXRhPgogIDxkZWZzIGlkPSJkZWZzMjUiPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDExNCI+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNiNzkyNjM7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAiIGlkPSJzdG9wMTE0Ij48L3N0b3A+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNiZjk4Njc7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAuMjk2MDg0MjMiIGlkPSJzdG9wMTE2Ij48L3N0b3A+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNiZjk5Njc7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAuNzg2NzY3NDgiIGlkPSJzdG9wMTE3Ij48L3N0b3A+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNiNzkyNjM7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjEiIGlkPSJzdG9wMTE1Ij48L3N0b3A+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGNsaXBQYXRoIGlkPSJlIj4KICAgICAgPHBhdGggZD0iTTE4OCAxMjhjMCA4MC02OS43NTYgMTE5LjM2Mi02OS43NTYgMTE5LjM2MkM2NCAyNDQgOC42MzggMTkzLjkyMiA4LjYzOCAxMjhTNjQgMTIgMTE4LjI0NCA4LjYzOEMxMTguMjQ0IDguNjM4IDE4OCA0OCAxODggMTI4eiIgZmlsbD0iIzI1MjUyNSIgZmlsbC1vcGFjaXR5PSIuNjAxIiBzdHJva2Utd2lkdGg9IjEyLjUzNyIgaWQ9InBhdGgyIj48L3BhdGg+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoIGlkPSJlLTIiPgogICAgICA8cGF0aCBkPSJtIDE4OCwxMjggYyAwLDgwIC02OS43NTYsMTE5LjM2MiAtNjkuNzU2LDExOS4zNjIgQyA2NCwyNDQgOC42MzgsMTkzLjkyMiA4LjYzOCwxMjggOC42MzgsNjIuMDc4IDY0LDEyIDExOC4yNDQsOC42MzggMTE4LjI0NCw4LjYzOCAxODgsNDggMTg4LDEyOCBaIiBmaWxsPSIjMjUyNTI1IiBmaWxsLW9wYWNpdHk9IjAuNjAxIiBzdHJva2Utd2lkdGg9IjEyLjUzNyIgaWQ9InBhdGgyLTMiPjwvcGF0aD4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGggaWQ9ImUtOCI+CiAgICAgIDxwYXRoIGQ9Im0gMTg4LDEyOCBjIDAsODAgLTY5Ljc1NiwxMTkuMzYyIC02OS43NTYsMTE5LjM2MiBDIDY0LDI0NCA4LjYzOCwxOTMuOTIyIDguNjM4LDEyOCA4LjYzOCw2Mi4wNzggNjQsMTIgMTE4LjI0NCw4LjYzOCAxMTguMjQ0LDguNjM4IDE4OCw0OCAxODgsMTI4IFoiIGZpbGw9IiMyNTI1MjUiIGZpbGwtb3BhY2l0eT0iMC42MDEiIHN0cm9rZS13aWR0aD0iMTIuNTM3IiBpZD0icGF0aDItOCI+PC9wYXRoPgogICAgPC9jbGlwUGF0aD4KICAgIDxsaW5lYXJHcmFkaWVudCB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQxMTQiIGlkPSJsaW5lYXJHcmFkaWVudDExNSIgeDE9Ijc1LjA3NTcxNCIgeTE9IjM1LjE5MTc0MiIgeDI9Ijc1LjkyODg0OCIgeTI9IjEzMy45NDE4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC45NTQ2NDIwOSwwLDAsMC44MDc3NjI1OSw0LjU0NDM1ODMsMTYuNTQ3ODU3KSI+PC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHBhdGggaWQ9InBhdGgzIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDExNSk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwOTA5MDk7c3Ryb2tlLXdpZHRoOjk7c3Ryb2tlLWRhc2hhcnJheTpub25lIiBkPSJtIDEyNC4yNjU3Niw4Ny43ODY1NjggYyAwLDE3Ljc1MjgwMiAtNi41NjM4NywzMy42NTI4NDIgLTE2LjkxODYyLDQ0LjM0ODkxMiAtOC40MzEwNjcsOC43MDg5NyAtMTcuNTQyODQ3LDExLjkwMDU2IC0yOS41MDM0NzksMTEuOTAwNTYgLTEyLjk1NTE0NywwIC0yNC4wMjUwODIsLTEuMzQ1OTggLTMyLjY5MzI4NiwtMTEuMzg3IEMgMzUuOTg3MDYyLDEyMi4wMzQ1IDYzLjYyMDQxMSwxMDMuOTkyODkgNjMuNjIwNDEsODcuNDQyMDA0IG0gMCwwLjI4MDk4MiBjIC0xMGUtNywtMTcuMjQ0NjU1IC0yNy4zNDg2NDksLTM0LjQwMDMzOCAtMTcuNTAzMjk1LC00NS4wNzY5NzIgOC41NDI2MzEsLTkuMjYzOTEzIDE4LjEyMzc5OSwtMTAuOTM2NjQgMzAuNTA0ODkzLC0xMC45MzY2NCAxMS42MDM5NTMsMCAyMi4xMzU0NjUsNC41MjUzODYgMzAuMzI4NDgyLDEyLjI5NDAxMyAxMC42MjM1LDEwLjA3MzIxOSAxNy4zMTUyNywyNS41OTkzMzYgMTcuMzE1MjcsNDMuNzgzMTgxIj48L3BhdGg+CiAgPHBhdGggc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNiZjk4Njc7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwOTA5MDk7c3Ryb2tlLXdpZHRoOjk7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lIiBkPSJtIDcyLjk0NTg0NywxMjAuNzAzNDQgYyAwLjI5MDM0NSwtMC43MDY5NSAxMy43NjEwMDcsMS44MTgzMiAxNC41OTE0MzUsLTAuMDE1MyA3LjcxMTg5NywtMTcuMDI4MyAxNi42MjMwOTgsLTMzLjc2ODgzMiAwLjE2ODExMywtNjUuMTExNDMzIC0xLjAzOTM0NCwtMS45Nzk2ODcgLTEzLjY2ODU0LC0wLjA1OTI5IC0xNC43MjY2MTQsLTAuMjQ3MSAxNC4zODQxMzIsMjIuMjY5ODQ2IDEyLjc2OTUxOSw0NC4wMzAwNjYgLTAuMDMyOTQsNjUuMzczODMzIEwgNjIuMDEzMTM3LDExNC4xNjEyIDM0LjA1OTgyOSwxMTIuMzk2MDEgYyAtMS44MzgwMTYsLTIuMTQ5NTMgLTMuMzg2Mjg4LC00LjU1Nzc1IC02LjYyMDIxOCwtNi43MTY4MiAwLjEyNzQyNiwtMi4yNjMzNCAtMC4yMDA4MzEsLTcuODU1Mzg4IDAuOTAxMTE4LC03LjQ2NTY1OSAxLjE5NzI4OSwtMy4yMTc0MzcgOC4yNDcwMTUsLTYuNjU0MDg3IDguMTk3ODIzLC05Ljk2Mjk4OSAtMC4wNDkxOSwtMy4zMDg5MDEgLTcuOTA1Nzc5LC05Ljg5MDc5MyAtNy45MDU3NzksLTkuODkwNzkzIC0xLjk1NjIxNywtMS4zMDY0MjYgLTAuOTMzNzg4LC00LjUzNDUwOCAtMS4xMTM3MiwtOC4wMzE5MjQgMy40MzAxMTEsLTIuNjk5ODM4IDMuMjY2OTMzLC0yLjUxMzE3MiA3LjM3NTE5LC03LjE2Njc0IEwgNjIuNjQ3MDIsNjEuNDczNjMyIDcyLjk3ODc3Nyw1NS4zMjk2MjciIGlkPSJwYXRoNCI+PC9wYXRoPgogIDxwYXRoIHN0eWxlPSJmaWxsOiM1MzM2MDk7c3Ryb2tlLXdpZHRoOjIuNzY5NTk7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO2ZpbGwtb3BhY2l0eToxIiBkPSJtIDgwLjM1OTYxOSwxMTcuMjM2MzIgYyAtMC42MTk2NDQsLTAuMTE4NjEgLTAuNTkxNTM1LC0wLjIzMzU3IDAuODA2MjE3LC0zLjI5NzM0IDIuODg2MTksLTYuMzI2MyA0Ljk3MTA5MiwtMTMuNTA4NjUgNS43NDk4NDEsLTE5LjgwNzgxMSBDIDg3LjM4ODQ3Niw5MC4zMDY3OCA4Ny4xMzA4MDksODAuNzg0NTIxIDg2LjQ2MjUxNSw3Ny4zODQyMzUgODUuMzg0ODc5LDcxLjkwMTIxOSA4My43MDc1ODMsNjYuODc0NTkgODEuMTg0MzksNjEuNTY2NDIxIDgwLjUwMTU5Nyw2MC4xMjk5OTYgNzkuOTQyOTQ4LDU4Ljg5NzE5IDc5Ljk0Mjk0OCw1OC44MjY4NTIgYyAwLC0wLjA3MDM0IDEuMDY5NTA2LC0wLjEyNzg4NyAyLjM3NjY4LC0wLjEyNzg4NyBoIDIuMzc2Njc5IGwgMS4zMDI0NDksMi43Mzk1NjkgYyAyLjk3MDMwMSw2LjI0NzcyOCA1LjI1MzM4NiwxMy4zNDgxMDEgNi4xNzc4NDcsMTkuMjEzMDQ5IDAuNjAyMTc3LDMuODIwMzE2IDAuNjA5MDIyLDExLjAzMTM0MyAwLjAxMzk1LDE0LjY5ODc4OSAtMC44NjEwNzYsNS4zMDY4NjggLTIuODI2Nzg3LDExLjE3NzU0OCAtNi40NTAyMzQsMTkuMjYzOTA4IGwgLTEuMTk2MTA5LDIuNjY5MzMgLTEuNzcxMjgzLDAuMDM3OCBjIC0wLjk3NDIwNSwwLjAyMDggLTIuMDYwMTk2LC0wLjAxNzUgLTIuNDEzMzExLC0wLjA4NTEgeiIgaWQ9InBhdGgxIj48L3BhdGg+Cjwvc3ZnPgo=`;


    // ============================================================
    // 2. CREATE THREE IMAGE OBJECTS
    // ============================================================

    const hatImage1 = new Image();
    const hatImage2 = new Image();
    const hatImage3 = new Image();

    let hat1Loaded = false;
    let hat2Loaded = false;
    let hat3Loaded = false;

    hatImage1.onload = () => {
        hat1Loaded = true;
        console.log("[Cowboy Hat] Hat 1 loaded.");
    };

    hatImage2.onload = () => {
        hat2Loaded = true;
        console.log("[Cowboy Hat] Hat 2 loaded.");
    };

    hatImage3.onload = () => {
        hat3Loaded = true;
        console.log("[Cowboy Hat] Hat 3 loaded.");
    };

    hatImage1.onerror = () => {
        console.error("[Cowboy Hat] Hat 1 FAILED to load.");
    };

    hatImage2.onerror = () => {
        console.error("[Cowboy Hat] Hat 2 FAILED to load.");
    };

    hatImage3.onerror = () => {
        console.error("[Cowboy Hat] Hat 3 FAILED to load.");
    };

    hatImage1.src = cowboyHatBase641;
    hatImage2.src = cowboyHatBase642;
    hatImage3.src = cowboyHatBase643;


    // ============================================================
    // 3. ATLAS POSITIONS
    // ============================================================

    // SAME X FOR ALL THREE HATS
    const CUSTOM_X = 3500;

    // DIFFERENT Y FOR EACH HAT
    // Each is 350 pixels away from the next.
    const CUSTOM_Y1 = 1800;
    const CUSTOM_Y2 = 2150;
    const CUSTOM_Y3 = 2500;

    // Size of each injected sprite.
    const CUSTOM_SIZE = 350;

    let atlasInjected = false;
    let modifiedAtlas = null;


    // ============================================================
    // 4. DEBUG ATLAS
    // ============================================================

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

        debug.src = canvas.toDataURL("image/png");

        console.log(
            "[Cowboy Hat] DEBUG ATLAS DISPLAYED FOR 5 SECONDS"
        );

        setTimeout(() => {

            debug.style.display = "none";

            console.log(
                "[Cowboy Hat] DEBUG ATLAS HIDDEN"
            );

        }, 5000);
    }


    // ============================================================
    // 5. INJECT THREE HATS INTO LOADOUT ATLAS
    // ============================================================

    function hookWebGL(proto, name) {

        if (!proto || !proto.texImage2D)
            return;

        if (proto.__cowboyHatHooked)
            return;

        proto.__cowboyHatHooked = true;

        const originalTexImage2D =
            proto.texImage2D;

        proto.texImage2D = function (...args) {

            try {

                const source =
                    args[args.length - 1];

                // Wait until ALL THREE images are loaded.
                if (
                    !atlasInjected &&
                    hat1Loaded &&
                    hat2Loaded &&
                    hat3Loaded &&
                    source instanceof HTMLImageElement &&
                    source.src &&
                    source.src
                        .toLowerCase()
                        .includes("loadout")
                ) {

                    console.log(
                        "[Cowboy Hat] Found loadout texture:",
                        source.src
                    );

                    console.log(
                        "[Cowboy Hat] Source dimensions:",
                        source.width,
                        "x",
                        source.height
                    );


                    // ====================================================
                    // CREATE NEW ATLAS CANVAS
                    // ====================================================

                    const canvas =
                        document.createElement("canvas");

                    canvas.width = Math.max(
                        source.width || 4096,
                        CUSTOM_X + CUSTOM_SIZE
                    );

                    canvas.height = Math.max(
                        source.height || 4096,
                        CUSTOM_Y3 + CUSTOM_SIZE
                    );


                    const ctx =
                        canvas.getContext("2d");

                    if (!ctx) {

                        console.error(
                            "[Cowboy Hat] Failed to create 2D context."
                        );

                    } else {

                        // ====================================================
                        // COPY ORIGINAL ATLAS
                        // ====================================================

                        ctx.drawImage(
                            source,
                            0,
                            0
                        );


                        // ====================================================
                        // HAT 1
                        // ====================================================

                        ctx.drawImage(
                            hatImage1,
                            CUSTOM_X,
                            CUSTOM_Y1,
                            CUSTOM_SIZE,
                            CUSTOM_SIZE
                        );

                        console.log(
                            "[Cowboy Hat] Hat 1 drawn at:",
                            CUSTOM_X,
                            CUSTOM_Y1
                        );


                        // ====================================================
                        // HAT 2
                        // ====================================================

                        ctx.drawImage(
                            hatImage2,
                            CUSTOM_X,
                            CUSTOM_Y2,
                            CUSTOM_SIZE,
                            CUSTOM_SIZE
                        );

                        console.log(
                            "[Cowboy Hat] Hat 2 drawn at:",
                            CUSTOM_X,
                            CUSTOM_Y2
                        );


                        // ====================================================
                        // HAT 3
                        // ====================================================

                        ctx.drawImage(
                            hatImage3,
                            CUSTOM_X,
                            CUSTOM_Y3,
                            CUSTOM_SIZE,
                            CUSTOM_SIZE
                        );

                        console.log(
                            "[Cowboy Hat] Hat 3 drawn at:",
                            CUSTOM_X,
                            CUSTOM_Y3
                        );


                        // ====================================================
                        // SAVE MODIFIED ATLAS
                        // ====================================================

                        modifiedAtlas = canvas;

                        window.__cowboyHatAtlas =
                            canvas;


                        // ====================================================
                        // DEBUG DISPLAY
                        // ====================================================

                        showDebugAtlas(canvas);


                        // ====================================================
                        // GIVE MODIFIED ATLAS TO WEBGL
                        // ====================================================

                        args[args.length - 1] =
                            canvas;

                        atlasInjected = true;


                        // ====================================================
                        // LOG EVERYTHING
                        // ====================================================

                        console.log(
                            "[Cowboy Hat] SUCCESS: Three hats injected."
                        );

                        console.log(
                            "[Cowboy Hat] Atlas size:",
                            canvas.width,
                            "x",
                            canvas.height
                        );

                        console.log(
                            "[Cowboy Hat] Hat 1:",
                            "X =", CUSTOM_X,
                            "Y =", CUSTOM_Y1,
                            "Size =", CUSTOM_SIZE
                        );

                        console.log(
                            "[Cowboy Hat] Hat 2:",
                            "X =", CUSTOM_X,
                            "Y =", CUSTOM_Y2,
                            "Size =", CUSTOM_SIZE
                        );

                        console.log(
                            "[Cowboy Hat] Hat 3:",
                            "X =", CUSTOM_X,
                            "Y =", CUSTOM_Y3,
                            "Size =", CUSTOM_SIZE
                        );
                    }
                }

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


    // ============================================================
    // 6. HOOK WEBGL
    // ============================================================

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


    // ============================================================
    // 7. PIXI RUNTIME DISCOVERY
    // ============================================================

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
                "[Cowboy Hat] Possible Pixi applications:",
                candidates
            );

            return candidates[0];
        }

        return null;
    }


    // ============================================================
    // 8. DISPLAY TREE WALKER
    // ============================================================

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


    // ============================================================
    // 9. THREE COWBOY TEXTURES
    // ============================================================

    let cowboyTexture1 = null;
    let cowboyTexture2 = null;
    let cowboyTexture3 = null;


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

            console.warn(
                "[Cowboy Hat] Sprite has no baseTexture."
            );

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

            console.warn(
                "[Cowboy Hat] Could not obtain Pixi texture constructors."
            );

            return null;
        }


        try {

            // ====================================================
            // TEXTURE 1
            // ====================================================

            const rectangle1 =
                new RectangleClass(
                    CUSTOM_X,
                    CUSTOM_Y1,
                    CUSTOM_SIZE,
                    CUSTOM_SIZE
                );

            cowboyTexture1 =
                new TextureClass(
                    baseTexture,
                    rectangle1
                );


            // ====================================================
            // TEXTURE 2
            // ====================================================

            const rectangle2 =
                new RectangleClass(
                    CUSTOM_X,
                    CUSTOM_Y2,
                    CUSTOM_SIZE,
                    CUSTOM_SIZE
                );

            cowboyTexture2 =
                new TextureClass(
                    baseTexture,
                    rectangle2
                );


            // ====================================================
            // TEXTURE 3
            // ====================================================

            const rectangle3 =
                new RectangleClass(
                    CUSTOM_X,
                    CUSTOM_Y3,
                    CUSTOM_SIZE,
                    CUSTOM_SIZE
                );

            cowboyTexture3 =
                new TextureClass(
                    baseTexture,
                    rectangle3
                );


            console.log(
                "[Cowboy Hat] Cowboy textures CREATED."
            );

            console.log(
                "[Cowboy Hat] Texture 1:",
                cowboyTexture1
            );

            console.log(
                "[Cowboy Hat] Texture 2:",
                cowboyTexture2
            );

            console.log(
                "[Cowboy Hat] Texture 3:",
                cowboyTexture3
            );


            // Make them available from console.
            window.__cowboyHatTexture1 =
                cowboyTexture1;

            window.__cowboyHatTexture2 =
                cowboyTexture2;

            window.__cowboyHatTexture3 =
                cowboyTexture3;


            return [
                cowboyTexture1,
                cowboyTexture2,
                cowboyTexture3
            ];

        } catch (e) {

            console.error(
                "[Cowboy Hat] Failed creating cowboy textures:",
                e
            );

            return null;
        }
    }


    // ============================================================
    // 10. IDENTIFY PLAYER / HELMET SPRITES
    // ============================================================

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
            name.includes("player")
        ) {

            console.log(
                "[Cowboy Hat] Possible player/helmet sprite:",
                object
            );

            // Try creating the three textures from
            // the sprite's existing base texture.
            if (
                !cowboyTexture1 ||
                !cowboyTexture2 ||
                !cowboyTexture3
            ) {

                tryCreateCowboyTextures(
                    object
                );
            }
        }
    }


    // ============================================================
    // 11. RUNTIME SCAN
    // ============================================================

    function scanRuntime() {

        if (!atlasInjected)
            return;


        const app =
            findPixiRoot();


        if (!app) {

            console.log(
                "[Cowboy Hat] No Pixi application found yet."
            );

            return;
        }


        console.log(
            "[Cowboy Hat] Pixi application found:",
            app
        );


        let count = 0;


        walkDisplayTree(
            app.stage,
            object => {

                count++;

                inspectSprite(
                    object
                );
            }
        );


        console.log(
            "[Cowboy Hat] Display tree objects scanned:",
            count
        );
    }


    // ============================================================
    // 12. REPEATED SCANNING
    // ============================================================

    const scanner =
        setInterval(
            scanRuntime,
            1000
        );


    setTimeout(
        () => {

            clearInterval(scanner);

            console.log(
                "[Cowboy Hat] Runtime scanner stopped."
            );

        },
        60000
    );


    // ============================================================
    // 13. START
    // ============================================================

    console.log(
        "[Cowboy Hat] Starting runtime scanner."
    );

})();