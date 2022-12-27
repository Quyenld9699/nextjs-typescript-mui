## Create project

```bash
yarn create next-app --typescript
```

## Getting Started

First, run the development server:

```bash
yarn dev
```

## Note

Using image in nextjs: use `<Image />` from `"next/image"` instead of using `<img />`

And `src` of image have to declare in `src/constants/imagePath.ts` such like below:

```ts
import LOGO_FULL_HORIZONTAL_BLACK from 'public/logo/orchai_logo_full_horizontal_black.png';
import LOGO_FULL_HORIZONTAL_WHITE from 'public/logo/orchai_logo_full_horizontal_white.png';
import LOGO_SHORT_WHITE from 'public/logo/orchai_logo_short_white.png';
import LOGO_SHORT_BLACK from 'public/logo/orchai_logo_short_black.png';
import LOGO_FULL_VERTICAL_BLACK from 'public/logo/orchai_logo_full_vertical_black.png';

export const imagePath = {
    LOGO_FULL_HORIZONTAL_BLACK,
    LOGO_FULL_HORIZONTAL_WHITE,
    LOGO_SHORT_WHITE,
    LOGO_SHORT_BLACK,
    LOGO_FULL_VERTICAL_BLACK,
};
```

using `imagePath` in other file:

```ts
import Image from 'next/image';
import { imagePath } from 'src/constants/imagePath';

<Image src={imagePath.LOGO_FULL_HORIZONTAL_BLACK} alt="" title="" />;
```
