// Replace these sample products with your own. Prices are in EUR.
export const products = [
  { id: 'cloud', name: 'The Cloud Sweater', category: 'EVERYDAY COMFORT', price: 38, color: 'Oat milk', tone: '#eae5db', image: 'images/cloud.jpg', position: 'center', badge: 'A little favourite', description: 'A soft, beautifully textured layer for slow mornings and little adventures. This sample design brings a touch of cosy charm to your best friend’s wardrobe.' },
  { id: 'rose', name: 'The Rosy Cardigan', category: 'A TOUCH OF CHARM', price: 44, color: 'Dusty rose', tone: '#efddd8', image: 'images/rose.jpg', position: 'center', badge: '', description: 'A sweet little cardigan inspired by garden walks and rosy afternoons. A playful statement piece with the thoughtful feel of handmade crochet.' },
  { id: 'sage', name: 'The Sunday Vest', category: 'LITTLE ADVENTURES', price: 32, color: 'Soft sage', tone: '#e1e7dc', image: 'images/sage.jpg', position: 'center', badge: 'Made for wandering', description: 'Easygoing style for your favourite walking companion. A light, simple silhouette made for everyday moments and a little extra personality.' }
];
export const sizes = { XS: 'Chest 25–32 cm · Back 20–25 cm', S: 'Chest 33–40 cm · Back 26–30 cm', M: 'Chest 41–48 cm · Back 31–35 cm', L: 'Chest 49–56 cm · Back 36–40 cm' };
export const money = n => new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 2 }).format(n);
export function total(cart) { return cart.reduce((sum, item) => sum + (products.find(p => p.id === item.id)?.price || 0) * item.quantity, 0); }
