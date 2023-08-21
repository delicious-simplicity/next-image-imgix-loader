[made with 💜 by [DS]](https://www.delicious-simplicity.com/)

# @delicious-simplicity/next-image-imgix-loader

A comprehensive [Imgix](https://imgix.com/) image loader for the [Next.js Image component](https://nextjs.org/docs/api-reference/next/image).

### Features

- Allows for native imgix image params/options
- Similar error boundaries as `next/image`
- Uses native `buildUrl` from `react-imgix`
- Replaces image TLD's for other CDN's
  - Shopify

### Usage

```tsx
import Image from "next/image";
import { imgixLoader } from "@delicious-simplicity/next-image-imgix-loader";

const Component = ({ image }) => {
  return (
    <>
      <Image
        loader={(props) => imgixLoader(props, { fit: "crop", ar: "1:1" })}
        src={image.url}
        alt={image.title}
        width={image.width}
        height={image.height}
      />
    </>
  );
};
```

### Options

#### `shopify`

This option transforms any passed url to the loader with `cdn.shopify.com` and replaces it the value of the `NEXT_PUBLIC_SHOPIFY_IMGIX_URL` environment variable. You can set this value in whatever local .env file in your project.

Required: ❌

Type: `boolean`

Default: `false`

Usage:

```ts
imgixLoader(props, { fit: "crop", ar: "1:1" }, { shopify: true });
```

### Required packages

- [`next`](https://www.npmjs.com/package/next)
- [`react-imgix`](https://www.npmjs.com/package/react-imgix)
