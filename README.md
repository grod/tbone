# T-Bone's mäktiga extension

1. `npm install`
2. `npm run dev`
3. Gå till `chrome://extensions/`
4. Aktivera Dev Mode
5. Klicka "Load unpacked"
6. Gå till `build`-katalogen och välj dev-foldern 

`npm run build` kommer skapa en prod-folder som du också kan testa på samma sätt


`content.tsx` innehåller den flytande boxen
`popup.tsx` är popup:en som visas när man klickar på extension-ikonen i chrome

Du kan även lägga till en `options.tsx` för settings-sida

Plasmo används som framework. Docs: https://docs.plasmo.com/