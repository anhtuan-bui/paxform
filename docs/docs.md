### Header application

There are some pages that have the light background so the header should show up with darker colors.

* Letting the header to know its hero has a light background by adding attribute `background: "light"` to the div.hero
* Put the page in lazy loading mode to let the header know the component is updated so it change the header styles accordingly. e.g:
    `const Resources = lazy(() => import("./pages/Resources/Resources"));`

Navigate to page Resources for example.

### Triangle application

There is often a triangle at the bottom of each section to make a diagonal line separating the sections. There are 2 options to make this diagonal.

1. Use `<div className="bottom_triangle"></div>`
    * Depending on the color of the next section, you can pick the following color which is listed in styles/mutual.scss
    * Applying the color example `<div className="bottom_triangle bottom_triangle--dark-blue"></div>`

2. Use component `<SectionTriangleRight variant="white"/>`. The variant attribute change depending on the color which is listed in styles/mutual.scss