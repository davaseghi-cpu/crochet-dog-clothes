import test from 'node:test';
import assert from 'node:assert/strict';
import { products, sizes, total, money } from '../products.js';
test('catalog has unique products, valid prices and supported sizes', () => {
 assert.equal(new Set(products.map(p=>p.id)).size,products.length);
 for(const p of products) { assert.ok(p.price>0); assert.ok(p.name); assert.ok(p.image.startsWith('images/')); }
 assert.deepEqual(Object.keys(sizes),['XS','S','M','L']);
});
test('bag subtotal accounts for different sizes and quantities',()=>{
 assert.equal(total([{id:'cloud',size:'S',quantity:2},{id:'cloud',size:'M',quantity:1},{id:'sage',size:'L',quantity:1}]),146);
 assert.equal(total([]),0);
 assert.match(money(38),/38\.00/);
});
