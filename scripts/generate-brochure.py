from io import BytesIO
from pathlib import Path

from fpdf import FPDF
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUB = ROOT / "public"
OUT = PUB / "brochure"
OUT.mkdir(parents=True, exist_ok=True)
DEST = OUT / "Matchwell-Furniture.pdf"


class Brochure(FPDF):
    def __init__(self) -> None:
        super().__init__(format="A4", unit="mm")
        self.set_auto_page_break(auto=False)
        self.set_title("Matchwell Furniture Brochure")
        self.set_author("Matchwell Furniture")

    def fill_page(self, r: int, g: int, b: int) -> None:
        self.set_fill_color(r, g, b)
        self.rect(0, 0, 210, 297, "F")

    def copper(self) -> None:
        self.set_text_color(196, 138, 92)

    def cream(self) -> None:
        self.set_text_color(244, 241, 234)

    def muted(self) -> None:
        self.set_text_color(180, 176, 168)

    def image_cover(self, path: Path, x: float, y: float, w: float, h: float) -> None:
        image = Image.open(path).convert("RGB")
        image.thumbnail((1400, 1400))
        buffer = BytesIO()
        image.save(buffer, format="JPEG", quality=72, optimize=True)
        buffer.seek(0)
        self.image(buffer, x=x, y=y, w=w, h=h)


def add_cover(pdf: Brochure) -> None:
    pdf.add_page()
    pdf.fill_page(7, 7, 7)
    pdf.image_cover(PUB / "hero" / "hero-still.jpg", 0, 0, 210, 297)
    pdf.set_fill_color(7, 7, 7)
    pdf.set_fill_color(0, 0, 0)
    # dark veil
    pdf.set_fill_color(7, 7, 7)
    with pdf.local_context(fill_opacity=0.45):
        pdf.rect(0, 0, 210, 297, "F")

    logo = PUB / "brand" / "logo.png"
    if logo.exists():
        pdf.image(str(logo), x=18, y=22, w=72)

    pdf.set_xy(18, 210)
    pdf.copper()
    pdf.set_font("Helvetica", "", 11)
    pdf.cell(0, 8, "KOLLAM  ·  CALICUT  ·  WAYANAD  ·  ERNAKULAM")

    pdf.set_xy(18, 222)
    pdf.cream()
    pdf.set_font("Helvetica", "B", 28)
    pdf.multi_cell(170, 12, "Crafting Timeless Elegance,\nBuilt to Last")

    pdf.set_xy(18, 255)
    pdf.muted()
    pdf.set_font("Helvetica", "", 11)
    pdf.cell(0, 6, "Wooden furniture for home and office  ·  30 years of craft")


def add_about(pdf: Brochure) -> None:
    pdf.add_page()
    pdf.fill_page(17, 17, 17)

    pdf.set_xy(18, 22)
    pdf.copper()
    pdf.set_font("Helvetica", "", 10)
    pdf.cell(0, 6, "( ABOUT / MATCHWELL )")

    pdf.set_xy(18, 36)
    pdf.cream()
    pdf.set_font("Helvetica", "B", 28)
    pdf.multi_cell(170, 12, "Thirty years\nin the grain.")

    pdf.set_xy(18, 70)
    pdf.muted()
    pdf.set_font("Helvetica", "", 12)
    pdf.multi_cell(
        174,
        7,
        "Matchwell Furniture blends tradition and invention in Kollam - stylish wooden pieces for home and office. Solid timber, honest joinery, and finishes that last in Kerala air.",
    )

    stats = [
        ("30+", "Years of craft"),
        ("12000+", "Wooden pieces"),
        ("100+", "Skilled workforce"),
        ("4", "Kerala showrooms"),
    ]
    x = 18
    for value, label in stats:
        pdf.set_xy(x, 108)
        pdf.cream()
        pdf.set_font("Helvetica", "B", 18)
        pdf.cell(42, 8, value)
        pdf.set_xy(x, 118)
        pdf.muted()
        pdf.set_font("Helvetica", "", 9)
        pdf.cell(42, 6, label)
        x += 46

    pdf.image_cover(PUB / "about-factory.jpg", 18, 140, 174, 112)
    pdf.set_xy(18, 258)
    pdf.copper()
    pdf.set_font("Helvetica", "", 10)
    pdf.cell(0, 6, "The workshop, Kollam")


def add_collection(pdf: Brochure) -> None:
    pdf.add_page()
    pdf.fill_page(7, 7, 7)

    pdf.set_xy(18, 18)
    pdf.copper()
    pdf.set_font("Helvetica", "", 10)
    pdf.cell(0, 6, "( COLLECTION )")

    pdf.set_xy(18, 28)
    pdf.cream()
    pdf.set_font("Helvetica", "B", 24)
    pdf.cell(0, 10, "Wooden furniture, made to live with.")

    items = [
        (PUB / "products" / "wardrobe.jpg", "Modular wardrobes"),
        (PUB / "products" / "kitchen.jpg", "Kitchens"),
        (PUB / "products" / "beds.jpg", "Beds"),
        (PUB / "gallery" / "dining.jpg", "Dining"),
        (PUB / "products" / "office.jpg", "Office"),
        (PUB / "gallery" / "tv-unit.jpg", "Living"),
    ]

    positions = [
        (18, 48),
        (112, 48),
        (18, 128),
        (112, 128),
        (18, 208),
        (112, 208),
    ]
    for (path, title), (x, y) in zip(items, positions, strict=True):
        pdf.image_cover(path, x, y, 80, 52)
        pdf.set_xy(x, y + 54)
        pdf.cream()
        pdf.set_font("Helvetica", "", 10)
        pdf.cell(80, 6, title)


def add_contact(pdf: Brochure) -> None:
    pdf.add_page()
    pdf.fill_page(17, 17, 17)
    pdf.image_cover(PUB / "gallery" / "living.jpg", 0, 0, 210, 150)
    with pdf.local_context(fill_opacity=0.5):
        pdf.set_fill_color(7, 7, 7)
        pdf.rect(0, 0, 210, 150, "F")

    pdf.set_xy(18, 28)
    pdf.copper()
    pdf.set_font("Helvetica", "", 10)
    pdf.cell(0, 6, "( VISIT / CONTACT )")

    pdf.set_xy(18, 44)
    pdf.cream()
    pdf.set_font("Helvetica", "B", 28)
    pdf.multi_cell(170, 12, "Come to the workshop.")

    pdf.set_xy(18, 168)
    pdf.cream()
    pdf.set_font("Helvetica", "B", 14)
    pdf.cell(0, 8, "Matchwell Furniture")

    lines = [
        "5/660, Near Kolankonathappupankave",
        "Kuriyod, Kollam 691534, Kerala",
        "",
        "+91 97459 36872",
        "+91 99460 00862",
        "WhatsApp  +91 97459 36872",
        "",
        "Kollam  /  Calicut  /  Wayanad  /  Ernakulam",
        "matchwellfurniture.in",
    ]
    y = 180
    pdf.set_font("Helvetica", "", 12)
    for line in lines:
        pdf.set_xy(18, y)
        pdf.muted()
        pdf.cell(0, 7, line)
        y += 8

    pdf.set_xy(18, 272)
    pdf.copper()
    pdf.set_font("Helvetica", "", 10)
    pdf.cell(0, 6, "Crafting Timeless Elegance, Built to Last")


def main() -> None:
    pdf = Brochure()
    add_cover(pdf)
    add_about(pdf)
    add_collection(pdf)
    add_contact(pdf)
    pdf.output(str(DEST))
    print(f"wrote {DEST} ({DEST.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
