import { Item, GildedRose } from '../app/gilded-rose';

const product = [
    new Item('Aged Brie', 0, 50),
    new Item('Aged Brie', 1, 0),
    new Item('Aged Brie', 4, 20),
    new Item('Aged Brie', 10, 1),
    new Item('Aged Brie', 10, 50),
    new Item('Sulfuras, Hand of Ragnaros', 1, 1),
    new Item('Sulfuras, Hand of Ragnaros', 2, 80),
    new Item('Sulfuras, Hand of Ragnaros', 20, 5),
    new Item('Sulfuras, Hand of Ragnaros', 5, 0),
    new Item('Sulfuras, Hand of Ragnaros', 0, 30),
    new Item('Backstage passes to a TAFKAL80ETC concert', 20, 50),
    new Item('Backstage passes to a TAFKAL80ETC concert', 20, 10),
    new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10),
    new Item('Backstage passes to a TAFKAL80ETC concert', 9, 10),
    new Item('Backstage passes to a TAFKAL80ETC concert', 5, 40),
    new Item('Backstage passes to a TAFKAL80ETC concert', 2, 0),
    new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50),
    new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50),
    new Item('Other', 10, 50),
    new Item('Other', 5, 4),
    new Item('Other', 0, 2),
    new Item('Other', 7, 0),
    new Item('Other', 2, 30)
];
const gildedRose = new GildedRose(product);

gildedRose.updateQuality();

console.log(gildedRose);