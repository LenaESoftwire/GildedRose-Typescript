export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }
    
    updateQuality() {
        const products = this.items;
        products.forEach(item => {
            const name = item.name;

            function increaseQuality() {
                if (item.quality < 50) {
                    item.quality++
                }
            }
            function decreaseQuality() {
                if (item.quality > 0) {
                    item.quality--
                }
            }

            if (name != 'Sulfuras, Hand of Ragnaros') {
                item.sellIn --;
            }
            if (name == 'Aged Brie' || name == 'Backstage passes to a TAFKAL80ETC concert' || name == 'Sulfuras, Hand of Ragnaros') {
                increaseQuality();
                if (name == 'Backstage passes to a TAFKAL80ETC concert') {
                    if (item.sellIn < 11) {
                        increaseQuality()
                    }
                    if (item.sellIn < 6) {
                        increaseQuality()
                    }
                    if (item.sellIn < 1) {
                        item.quality = 0;
                    }
                }
            } else {
                decreaseQuality();
            }
                        
        })

        return products;
    }
}