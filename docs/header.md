# Header application

There are some pages that have the light background so the header should show up with darker colors.

* Letting the header to know its hero has a light background by adding attribute `background: "light"` to the div.hero
* Put the page in lazy loading mode to let the header know the component is updated so it change the header styles accordingly. e.g:
    `const Resources = lazy(() => import("./pages/Resources/Resources"));`

Navigate to page Resources for example.