# @delicious-simplicity/next-image-imgix-loader

A comprehensive [Imgix](https://imgix.com/) image loader for the [Next.js Image component](https://nextjs.org/docs/api-reference/next/image).

### Features

- Allows for native imgix image params/options
- Similar error boundaries as `next/image`
- Uses native `buildUrl` from `react-imgix`

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

### Required packages

- [`next`](https://www.npmjs.com/package/next)
- [`react-imgix`](https://www.npmjs.com/package/react-imgix)
