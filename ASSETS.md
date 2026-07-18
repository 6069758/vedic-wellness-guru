# Image assets needed

Drop these files into **`public/images/`** using the exact filenames below.
Every slot on the site shows its filename until you add the real image — no code
changes needed, just drop the file in and refresh.

## Already included (real, from the Keynote)
| File | Used in |
|------|---------|
| `logo.png` | Navbar, Footer, IPS emblem |
| `guru-golden.png` | **Hero** astrologer + golden backdrop |
| `hero-crowd.png` | IPS section photograph (airport crowd) |

## Photos to provide
| File | Section | Ratio | Suggested size | Notes |
|------|---------|-------|----------------|-------|
| `service-astrology.jpg`| Explore Services| 4:3  | 800×600   | Astrology consultation |
| `service-vastu.jpg`    | Explore Services| 4:3  | 800×600   | Vastu consultation |
| `service-courses.jpg`  | Explore Services| 4:3  | 800×600   | Live course / blackboard |
| `service-meditation.jpg`| Explore Services| 4:3 | 800×600   | Meditation |
| `trusted-portrait.png` | Trusted By      | 4:5  | 900×1125  | **Transparent PNG** — crossed-arms pose |
| `work-elections.jpg`   | See My Work     | 16:9 | 640×360   | Video thumbnail |
| `work-jupiter.jpg`     | See My Work     | 16:9 | 640×360   | Video thumbnail |
| `work-prashna.jpg`     | See My Work     | 16:9 | 640×360   | Video thumbnail |
| `blog-astrology.jpg`   | From the Blog   | 3:2  | 600×400   | |
| `blog-vastu.jpg`       | From the Blog   | 3:2  | 600×400   | |
| `blog-meditation.jpg`  | From the Blog   | 3:2  | 600×400   | |
| `blog-transits.jpg`    | From the Blog   | 3:2  | 600×400   | |

## Optional background textures
These are currently premium CSS gradients (look complete as-is). Provide an
image only if you want the exact Keynote parchment texture:

| Optional file | Section | Size |
|---------------|---------|------|
| `hero-bg-golden.jpg` | Hero backdrop | 1920×1080 |
| `trusted-bg-golden.jpg` | Trusted By backdrop | 1920×1080 |

To wire an optional background image, pass `src="/images/hero-bg-golden.jpg"`
to the Hero backdrop (see `components/Hero.tsx`).
