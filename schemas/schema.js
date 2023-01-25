// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./arrays/blockContent";
import footerBuilder from "./arrays/footerBuilder";
import pageBuilder from "./arrays/pageBuilder";
import portableText from "./arrays/portableText";
import collection from "./documents/collection";
import color from "./documents/color";
import footer from "./documents/footer";
import header from "./documents/header";
import navigation from "./documents/navigation";
import page from "./documents/page";
import palette from "./documents/palette";
import project from "./documents/project";
import seo from "./documents/seo";
import siteSettings from "./documents/siteSettings";
import spacing from "./documents/spacing";
import testimonial from "./documents/testimonial";
import theme from "./documents/theme";
import typography from "./documents/typography";
import carousel from "./objects/carousel";
import imageGallery from "./objects/imageGallery";
import instaPost from "./objects/instaPost";
import link from "./objects/link";
import linkedCarousel from "./objects/linkedCarousel";
import linkedGallery from "./objects/linkedGallery";
import marquee from "./objects/marquee";
import navItem from "./objects/navItem";
import projectHero from "./objects/projectHero";
import quote from "./objects/quote";
import section from "./objects/section";
import services from "./objects/services";
import showcase from "./objects/showcase";
import splitText from "./objects/splitText";
import statistics from "./objects/statistics";
import superVideo from "./objects/superVideo";
import textContent from "./objects/textContent";
import textWithGraphic from "./objects/textWithGraphic";
import superImage from "./superImage";
import layout from "./objects/layout";
import layoutRow from "./objects/layoutRow";
import layoutItem from "./objects/layoutItem";
import figure from "./documents/figure";
import textAlignment from "./documents/textAlignment";
import nextSlug from "./objects/nextSlug";
import intro from "./documents/intro";
import grid from "./objects/grid";
import gridItem from "./objects/gridItem";
import card from "./objects/card";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    card,
    intro,
    project,
    collection,
    section,
    projectHero,
    imageGallery,
    linkedGallery,
    superImage,
    superVideo,
    textWithGraphic,
    carousel,
    linkedCarousel,
    statistics,
    services,
    blockContent,
    portableText,
    siteSettings,
    page,
    header,
    footer,
    navigation,
    navItem,
    link,
    seo,
    palette,
    theme,
    pageBuilder,
    footerBuilder,
    spacing,
    typography,
    color,
    quote,
    testimonial,
    marquee,
    splitText,
    instaPost,
    showcase,
    textContent,
    layout,
    layoutRow,
    layoutItem,
    figure,
    textAlignment,
    nextSlug,
    grid,
    gridItem,
  ]),
});
