            // Cowboy hat test injection
            if (e === `loadout`) {
                const baseTexture = r.baseTexture;
                const existingTexture = r.textures[`player-circle-base-01.img`];
            
                if (baseTexture && existingTexture) {
                    const TextureClass = existingTexture.constructor;
                    const RectangleClass = existingTexture.frame.constructor;
            
                    const cowboyHatTexture = new TextureClass(
                        baseTexture,
                        new RectangleClass(3500, 1800, 350, 350)
                    );
            
                    TextureClass.addToCache(cowboyHatTexture, `cowboy-hat.img`);
            
                    r.textures[`cowboy-hat.img`] = cowboyHatTexture;
            
                    console.log(
                        `[Cowboy Hat] Registered cowboy-hat.img`,
                        cowboyHatTexture
                    );
                }
            }
            // Cowboy hat test injection 2
            if (e === `loadout`) {
                const baseTexture = r.baseTexture;
                const existingTexture = r.textures[`player-circle-base-01.img`];
            
                if (baseTexture && existingTexture) {
                    const TextureClass = existingTexture.constructor;
                    const RectangleClass = existingTexture.frame.constructor;
            
                    const cowboyHatTexture = new TextureClass(
                        baseTexture,
                        new RectangleClass(3500, 2150, 350, 350)
                    );
            
                    TextureClass.addToCache(cowboyHatTexture, `cowboy-hat-02.img`);
            
                    r.textures[`cowboy-hat.img`] = cowboyHatTexture;
            
                    console.log(
                        `[Cowboy Hat] Registered cowboy-hat-02.img`,
                        cowboyHatTexture
                    );
                }
            }
            // Cowboy hat test injection 3
            if (e === `loadout`) {
                const baseTexture = r.baseTexture;
                const existingTexture = r.textures[`player-circle-base-01.img`];
            
                if (baseTexture && existingTexture) {
                    const TextureClass = existingTexture.constructor;
                    const RectangleClass = existingTexture.frame.constructor;
            
                    const cowboyHatTexture = new TextureClass(
                        baseTexture,
                        new RectangleClass(3500, 2500, 350, 350)
                    );
            
                    TextureClass.addToCache(cowboyHatTexture, `cowboy-hat-03.img`);
            
                    r.textures[`cowboy-hat.img`] = cowboyHatTexture;
            
                    console.log(
                        `[Cowboy Hat] Registered cowboy-hat-03.img`,
                        cowboyHatTexture
                    );
                }
            }

