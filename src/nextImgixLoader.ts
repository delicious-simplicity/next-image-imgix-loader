import { ImageLoaderProps } from 'next/image';
import { buildURL, SharedImigixAndSourceProps } from 'react-imgix';

const defaultImgixParams: SharedImigixAndSourceProps['imgixParams'] = {
  auto: 'format',
  fit: 'max',
};

export function imgixLoader(
  loaderProps: ImageLoaderProps,
  imgixParams?: Omit<NonNullable<SharedImigixAndSourceProps['imgixParams']>, 'q' | 'w'>,
  imgixOptions?: SharedImigixAndSourceProps,
): string {
  if (process.env.NODE_ENV !== 'production') {
    const missingValues = [];

    // these should always be provided but make sure they are
    if (!loaderProps.src) missingValues.push('src');
    if (!loaderProps.width) missingValues.push('width');

    if (missingValues.length > 0)
      throw new Error(
        `Next Image Optimization requires ${missingValues.join(
          ', ',
        )} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify(
          { src: loaderProps.src, width: loaderProps.width, quality: loaderProps.quality },
        )}`,
      );

    if (loaderProps.src.startsWith('//'))
      throw new Error(
        `Failed to parse src "${loaderProps.src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`,
      );
  }

  let adjustedImgixParams: SharedImigixAndSourceProps['imgixParams'];

  if (imgixParams) {
    adjustedImgixParams = {
      ...imgixParams,
      q: loaderProps.quality,
      w: loaderProps.width,
      auto: imgixParams.auto ?? defaultImgixParams.auto,
      fit: imgixParams.fit ?? defaultImgixParams.fit,
    };
  } else {
    adjustedImgixParams = {
      q: loaderProps.quality,
      w: loaderProps.width,
      ...defaultImgixParams,
    };
  }

  return buildURL(loaderProps.src, adjustedImgixParams, imgixOptions);
}
