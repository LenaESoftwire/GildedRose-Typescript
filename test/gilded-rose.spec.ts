import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('Aged Brie should increase up to 50 and no more', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 1, 0), new Item('Aged Brie', 5, 50)]);
        const items = gildedRose.updateQuality();
        console.log(items);
        expect(items[0].quality).to.equal(1);
        expect(items[1].quality).to.equal(50);
    });

    it('Non-spesified items should decrease down to 0 and no less', function () {
        const gildedRose = new GildedRose([new Item('Other', 1, 0), new Item('Other', 5, 3)]);
        const items = gildedRose.updateQuality();
        console.log(items);
        expect(items[0].quality).to.equal(0);
        expect(items[1].quality).to.equal(2);
    });

    it('Backstage passes should increase up to 50 and no more if sellIn>10. Max 50', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 0), new Item('Backstage passes to a TAFKAL80ETC concert', 11, 50)]);
        const items = gildedRose.updateQuality();
        console.log(items);
        expect(items[0].quality).to.equal(1);
        expect(items[1].quality).to.equal(50);
    });

    it('Backstage passes should increase +2 up to 50 and no more if 11>sellIn>5. Max 50', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 0), new Item('Backstage passes to a TAFKAL80ETC concert', 9, 50)]);
        const items = gildedRose.updateQuality();
        console.log(items);
        expect(items[0].quality).to.equal(2);
        expect(items[1].quality).to.equal(50);
    });


})