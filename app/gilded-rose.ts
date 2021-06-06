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
            let sellIn = item.sellIn;
            let quality = item.quality

            function increaseQuality() {
                if (item.quality < 50) {
                    item.quality++
                }

            }
            if (name != 'Aged Brie' && name != 'Backstage passes to a TAFKAL80ETC concert') {
                if (quality > 0) {
                    if (name != 'Sulfuras, Hand of Ragnaros') {
                        item.quality--
                    }
                }
            } else {
                if (item.quality < 50) {
                    item.quality++
                    if (name == 'Backstage passes to a TAFKAL80ETC concert') {
                        if (sellIn < 11) {
                            increaseQuality()
                        }
                        if (sellIn < 6) {
                            increaseQuality()
                        }
                    }
                }
            }
            if (name != 'Sulfuras, Hand of Ragnaros') {
                sellIn--
            }
            if (sellIn < 0) {
                if (name != 'Aged Brie') {
                    if (name != 'Backstage passes to a TAFKAL80ETC concert') {
                        if (item.quality > 0) {
                            if (name != 'Sulfuras, Hand of Ragnaros') {
                                item.quality--
                            }
                        }
                    } else {
                        item.quality = 0
                    }
                } else {
                    increaseQuality()
                }
            }
        })

        return products;
    }
}