            // m870 Test Injection
            if (e === `loadout`) {
                const baseTexture = r.baseTexture;
                const existingTexture = r.textures[`loot-weapon-m870.img`];
            
                if (baseTexture && existingTexture) {
                    const TextureClass = existingTexture.constructor;
                    const RectangleClass = existingTexture.frame.constructor;
            
                    const cowboyHatTexture = new TextureClass(
                        baseTexture,
                        new RectangleClass(3500, 3000, 128, 128)
                    );
            
                    TextureClass.addToCache(cowboyHatTexture, `loot-weapon-m870.img`);
            
                    r.textures[`loot-weapon-m870.img`] = cowboyHatTexture;
                    console.log(
                        `[Guns] Registered old-loot-weapon-m870.img`,
                        cowboyHatTexture
                    );
                }
            }
            // scout elite to HLR 223 test injection
            if (e === `loadout`) {
                const baseTexture = r.baseTexture;
                const existingTexture = r.textures[`loot-weapon-scout.img`];
            
                if (baseTexture && existingTexture) {
                    const TextureClass = existingTexture.constructor;
                    const RectangleClass = existingTexture.frame.constructor;
            
                    const cowboyHatTexture = new TextureClass(
                        baseTexture,
                        new RectangleClass(3505, 3150, 128, 128)
                    );
            
                    TextureClass.addToCache(cowboyHatTexture, `loot-weapon-scout.img`);
            
                    r.textures[`loot-weapon-scout.img`] = cowboyHatTexture;
                    console.log(
                        `[Guns] Registered loot-weapon-hlr.img`,
                        cowboyHatTexture
                    );
                }
            }
