# CSROCC Logo

The CSROCC wordmark is traced from the approved logo reference. The formal name
has been rebuilt in Inter Regular to preserve clean, consistent letterforms at
small sizes. All visible text is converted to SVG paths, so the logo does not
depend on fonts installed on the user's device.

## Files

- `csrocc-lockup-on-dark.svg` — full logo and formal name for a dark surface
- `csrocc-lockup-on-light.svg` — full logo and formal name for a light surface
- `csrocc-wordmark-on-dark.svg` — compact wordmark for a dark navigation bar
- `csrocc-wordmark-on-light.svg` — compact wordmark for a light navigation bar
- `CsroccLogo.tsx` — optional React component
- `preview.html` — side-by-side browser preview

## React use

Copy the four SVG files to `public/brand`, and copy `CsroccLogo.tsx` into the
application source.

```tsx
<CsroccLogo surface="dark" lockup />
<CsroccLogo surface="light" lockup={false} />
```

## Plain HTML use

```html
<img
  src="/brand/csrocc-lockup-on-dark.svg"
  alt="CSROCC — Cyber Service Resilience Operations Command Center"
/>
```

The SVG backgrounds are transparent. Use the `on-dark` version on the current
blue login and portal-entry surfaces, and the `on-light` version on white or
very light surfaces.

## Typography

The formal name uses Inter Regular (400), 30 SVG units, with custom tracking.
It is horizontally centered beneath the CSROCC wordmark and is approximately
4.4% narrower, creating a subtle hierarchy without making the two lines feel
disconnected.
