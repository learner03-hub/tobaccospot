# seed.py

from app import app
from models import db, Product, Special
from datetime import date

with app.app_context():
    # 🧹 Delete existing data
    Special.query.delete()
    Product.query.delete()
    db.session.commit()

    products = [
        Product(name="4K's Cigars", price=1.49, description="Affordable and flavorful cigars perfect for everyday enjoyment.", image_url="/images/4k's.jpg", category="cigars"),
        Product(name="4K Wraps", price=1.00, description="Slow-burning wraps that preserve freshness and flavor.", image_url="/images/4kwraps.jpg", category="wraps"),
        Product(name="420 Wraps", price=2.99, description="Organic hemp wraps for a smooth and natural smoke.", image_url="/images/420.jpg", category="wraps"),
        Product(name="AstroLeaf Wraps", price=2.99, description="Out-of-this-world flavor with every roll.", image_url="/images/astroleaf.jpg", category="wraps"),
        Product(name="Backwoods", price=6.99, description="Wild and rustic tobacco leaf cigars, beloved for their unique taste.", image_url="/images/backwoods.jpg", category="cigars"),
        Product(name="Backwoods 3-Pack", price=4.99, description="Backwoods cigars known for a quality taste", image_url="/images/backwoods-3pk.jpg", category="cigars"),
        Product(name="Backwoods City Pack", price=7.99, description="Backwoods cigars with city-inspired flavor blends.", image_url="/images/backwoods-city.jpg", category="cigars"),
        Product(name="Backwoods Single", price=1.99, description="One single Backwoods cigar—fresh and flavorful.", image_url="/images/backwoods-single.jpg", category="cigars"),
        Product(name="Billionaire Wraps", price=1.00, description="Luxury wraps with premium flavor and quality.", image_url="/images/billionaires.jpg", category="wraps"),
        Product(name="Black & Mild", price=1.50, description="Classic tip cigars with a smooth finish.", image_url="/images/blackandmild.jpg", category="cigars"),
        Product(name="Blazy Susan Cones", price=3.99, description="Pre-rolled pink cones made with ultra-thin paper.", image_url="/images/blazycones.jpg", category="cones"),
        Product(name="Blazy Susan Papers", price=2.99, description="Stylish pink rolling papers for a classy session.", image_url="/images/blazypapers.jpg", category="papers"),
        Product(name="BLK Cigars", price=1.49, description="Bold and smooth cigars in convenient packaging.", image_url="/images/blks.jpg", category="cigars"),
        Product(name="Bob Marley Wraps", price=1.00, description="All-natural hemp wraps inspired by Marley vibes.", image_url="/images/bobmarleywraps.jpg", category="wraps"),
        Product(name="Camo Wraps", price=1.99, description="Ultra-thin camouflage-style wraps with unique flavor.", image_url="/images/camo.jpg", category="wraps"),
        Product(name="City Life", price=1.49, description="Urban-inspired cigars with rich flavor.", image_url="/images/citylife.jpg", category="vape"),
        Product(name="Dutch Masters", price=1.49, description="Trusted cigars with a rich heritage and smooth smoke.", image_url="/images/dutch.jpg", category="cigars"),
        Product(name="Elements Papers", price=1.99, description="Rice-based ultra-thin rolling papers with minimal ash.", image_url="/images/elementspapers.jpg", category="papers"),
        Product(name="Game Cigarillos", price=1.49, description="Affordable cigarillos with bold, smooth flavors.", image_url="/images/game.jpg", category="cigars"),
        Product(name="Game Leaf 2pk", price=1.99, description="Natural leaf cigars in convenient 2-pack.", image_url="/images/gameleaf-2pk.jpg", category="cigars"),
        Product(name="Game Leaf 3pk", price=2.99, description="Value pack of 3 rich tobacco leaf cigars.", image_url="/images/gameleaf-3pk.jpg", category="cigars"),
        Product(name="Game Leaf 5pk", price=4.49, description="Bulk deal on 5 premium Game Leaf cigars.", image_url="/images/gameleaf-5pk.jpg", category="cigars"),
        Product(name="Garcia y Vega", price=1.49, description="Classic cigars with a mild, satisfying taste.", image_url="/images/garciayvega.jpg", category="cigars"),
        Product(name="Good Times 69", price=0.68, description="Flavorful wraps perfect for casual rolling.", image_url="/images/goodtimes69.jpg", category="wraps"),
        Product(name="Grabba Leaf", price=4.99, description="Whole tobacco leaf, strong and natural.", image_url="/images/grabbaleaf.jpg", category="leaf"),
        Product(name="Havana 2pk", price=1.99, description="Smooth Havana cigars in a convenient 2-pack.", image_url="/images/havana-2pk.jpg", category="cigars"),
        Product(name="Havana 5pk", price=6.99, description="Stock up with this 5-pack of rich Havana cigars.", image_url="/images/havana-5pk.jpg", category="cigars"),
        Product(name="Hemp Cones", price=2.99, description="Pre-rolled cones made from 100% organic hemp.", image_url="/images/hempcones.jpg", category="cones"),
        Product(name="JOB Papers", price=1.99, description="Classic French rolling papers for a slow burn.", image_url="/images/jobpapers.jpg", category="papers"),
        Product(name="Loose Leaf 2pk", price=2.99, description="Fresh loose-leaf wraps in a resealable 2-pack.", image_url="/images/looseleaf-2pk.jpg", category="wraps"),
        Product(name="Loose Leaf 5pk", price=6.99, description="Bulk 5-pack of premium loose-leaf wraps.", image_url="/images/looseleaf-5pk.jpg", category="wraps"),
        Product(name="Loose Leaf Crush", price=2.99, description="Crush-flavor infused loose-leaf wraps.", image_url="/images/looseleafcrush.jpg", category="wraps"),
        Product(name="Raw Cones", price=2.99, description="RAW's signature pre-rolled cones with filter tips.", image_url="/images/rawcones.jpg", category="cones"),
        Product(name="RAW Papers", price=2.99, description="Unrefined rolling papers for the natural smoker.", image_url="/images/rawpapers.jpg", category="papers"),
        Product(name="Swisher Leaf", price=3.49, description="Swisher's take on the natural leaf cigar.", image_url="/images/swisherleaf.jpg", category="cigars"),
        Product(name="Swisher Mini", price=1.99, description="Mini cigars with Swisher's bold flavors.", image_url="/images/swisher-mini.jpg", category="cigars"),
        Product(name="Swishers", price=1.49, description="Classic Swisher Sweets cigars with flavored options.", image_url="/images/swishers.jpg", category="cigars"),
        Product(name="Throwbacks", price=4.99, description="Retro-style wraps for an old-school smoke.", image_url="/images/throwbacks.jpg", category="wraps"),
        Product(name="Top Papers", price=1.99, description="Economical rolling papers for everyday use.", image_url="/images/toppapers.jpg", category="papers"),
        Product(name="White Owl", price=1.49, description="Timeless cigars with a wide flavor range.", image_url="/images/whiteowl.jpg", category="cigars"),
        Product(name="Wild Hemp Wraps", price=1.00, description="Smooth hemp wraps free of tobacco and nicotine.", image_url="/images/wildhemp.jpg", category="wraps"),
        Product(name="Woods", price=1.99, description="Premium dark leaf cigars for a bold smoke.", image_url="/images/woods.jpg", category="cigars"),
        Product(name="Wood Wraps", price=1.99, description="Rustic wraps made with real wood-like finish.", image_url="/images/woodwraps.jpg", category="wraps"),
        Product(name="Zig Zag Wraps", price=1.00, description="Trusted Zig Zag brand with slow-burning wraps.", image_url="/images/zigzag.jpg", category="wraps"),
        Product(name="Smak'd Gummies", price=10.00, description="Smak'd THC Infused 1500mg Gummies", image_url="/images/smakd.jpg", category="wraps"),
    ]

    specials = [
        Special(
            title="Backwoods",
            discount='Buy Two Save 2$(~~13.99$~~ => 11.99$)',
            details="active!",
            expires_on=date(2025, 10, 1),
            image_url="/images/backwoods.jpg"
        ),
        Special(
            title="Smack'd 1500 mg Gummies",
            discount='Buy 1 Get 1 Free',
            details="Limited time offer. Expires soon!",
            expires_on=date(2025, 10, 5),
            image_url="/images/backwoods.jpg"
        ),
        Special(
            title="LooseLeaf ChiefKeef",
            discount="Two for 15.99$ (~~19.99$~~ => 15.99$)",
            details="active!",
            expires_on=date(2025, 10, 5),
            image_url="/images/almighty.jpg"
        ),
        Special(
            title="Vapes",
            discount='Buy any 2 Get 5$ Off',
            details="active!",
            expires_on=date(2025, 10, 5),
            image_url="/images/utbar.jpg"
        ),
    ]

    db.session.add_all(products)
    db.session.add_all(specials)
    db.session.commit()

    print("✅ Seeded the database with products and specials.")
