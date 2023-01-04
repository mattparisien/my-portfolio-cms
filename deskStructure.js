import S from "@sanity/desk-tool/structure-builder";
import {
  BsAlignStart,
  BsCompassFill,
  BsFillFileEarmarkFill,
  BsGearFill,
  BsHammer,
  BsFonts,
  BsPaletteFill,
  BsStars,
} from "react-icons/bs";

export default () => {
  return S.list()
    .title("Content")
    .items([
      /***** MAIN SIDEBAR ITEMS ******/

      S.listItem()
        .title("Header")
        .child(S.document().schemaType("header").documentId("header")),
      S.listItem()
        .title("Footer")
        .child(S.document().schemaType("footer").documentId("footer")),

      S.divider(),

      S.listItem()
        .title("Pages")
        .icon(BsFillFileEarmarkFill)
        .child(
          S.documentList().title("Pages").filter('_type in ["page", "project"]')
        ),

      S.listItem()
        .title("Navigation")
        .icon(BsCompassFill)
        .child(
          /***** NAVIGATION CHILDREN ******/

          S.list()
            .title("Navigation")
            .items([
              S.listItem()
                .title("Primary Navigation")
                .child(
                  S.document()
                    .schemaType("navigation")
                    .documentId("primaryNavigation")
                ),
              S.listItem()
                .title("Secondary Navigation")
                .child(
                  S.document()
                    .schemaType("navigation")
                    .documentId("secondaryNavigation")
                ),
            ])
        ),
      S.listItem()
        .title("Projects")
        .child(
          S.documentList().title("Projects").filter('_type == "collection"')
        ),
      S.listItem()
        .title("Testimonials")
        .icon(BsFillFileEarmarkFill)
        .child(
          S.documentList()
            .title("Testimonials")
            .filter('_type == "testimonial"')
        ),

      /***** THEME BUILDER START ******/
      S.divider(),
      S.listItem()
        .title("Settings")
        .icon(BsGearFill)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.listItem()
        .title("Theme Builder")
        .icon(BsHammer)
        .child(
          S.list()
            .title("Theming")
            .items([
              /***** THE BUILDER CHILDREN ******/
              S.listItem()
                .title("Color")
                .icon(BsPaletteFill)
                .child(
                  S.document()
                    .schemaType("palette")
                    .documentId("9ecf27fe-a535-4947-ac1d-cd3c8e1e84d1")
                ),
              S.listItem()
                .title("Site Spacing")
                .icon(BsAlignStart)
                .child(
                  S.document()
                    .title("Site Spacing")
                    .schemaType("spacing")
                    .documentId("siteSpacing")
                ),
              S.listItem()
                .title("Typography")
                .icon(BsFonts)
                .child(
                  S.document()
                    .title("Typography")
                    .schemaType("typography")
                    .documentId("siteTypography")
                ),
              S.listItem()
                .title("Themes")
                .icon(BsStars)
                .child(
                  S.documentList().title("Themes").filter('_type == "theme"')
                ),
            ])
        ),
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            "siteSettings",
            // "projects",
            "page",
            "navigation",
            "header",
            "footer",
            "seo",
            "palette",
            "colors",
            "article",
            // "collection",
            "spacing",
            "typography",
            "color",
            "theme",

            // "collection",
          ].includes(item.getId())
      ),
    ]);
};
