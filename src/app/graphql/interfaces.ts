/**
        * This file is auto-generated
        * Please note that any changes in this file may be overwritten
    */
/**
        '/*******************************',
        ' *                             *',
        ' *          TYPE DEFS          *',
        ' *                             *',
        ' *******************************'
    */
/**
 * The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start.
 */
export interface GQLQueryRoot {

  /**
   * List of the shop's articles.
   */
  articles: GQLArticleConnection;

  /**
   * Find a blog by its handle.
   */
  blogByHandle?: GQLBlog;

  /**
   * List of the shop's blogs.
   */
  blogs: GQLBlogConnection;

  /**
   * Find a collection by its handle.
   */
  collectionByHandle?: GQLCollection;

  /**
   * List of the shop’s collections.
   */
  collections: GQLCollectionConnection;

  /**
   * Find a customer by its access token.
   */
  customer?: GQLCustomer;
  node?: GQLNode;
  nodes: Array<GQLNode | null>;

  /**
   * Find a page by its handle.
   */
  pageByHandle?: GQLPage;

  /**
   * List of the shop's pages.
   */
  pages: GQLPageConnection;

  /**
   * Find a product by its handle.
   */
  productByHandle?: GQLProduct;

  /**
   * Find recommended products related to a given `product_id`.
   * To learn more about how recommendations are generated, see
   * [*Showing product recommendations on product pages*](https://help.shopify.com/themes/development/recommended-products).
   */
  productRecommendations?: Array<GQLProduct>;

  /**
   * Tags added to products.
   * Additional access scope required: unauthenticated_read_product_tags.
   */
  productTags: GQLStringConnection;

  /**
   * List of product types for the shop's products that are published to your app.
   */
  productTypes: GQLStringConnection;

  /**
   * List of the shop’s products.
   */
  products: GQLProductConnection;

  /**
   * The list of public Storefront API versions, including supported, release candidate and unstable versions.
   */
  publicApiVersions: Array<GQLApiVersion>;

  /**
   * The shop associated with the storefront access token.
   */
  shop: GQLShop;
}

/**
 * The set of valid sort keys for the Article query.
 */
export enum GQLArticleSortKeys {

  /**
   * Sort by the `title` value.
   */
  TITLE = 'TITLE',

  /**
   * Sort by the `blog_title` value.
   */
  BLOG_TITLE = 'BLOG_TITLE',

  /**
   * Sort by the `author` value.
   */
  AUTHOR = 'AUTHOR',

  /**
   * Sort by the `updated_at` value.
   */
  UPDATED_AT = 'UPDATED_AT',

  /**
   * Sort by the `published_at` value.
   */
  PUBLISHED_AT = 'PUBLISHED_AT',

  /**
   * Sort by the `id` value.
   */
  ID = 'ID',

  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  RELEVANCE = 'RELEVANCE'
}

export interface GQLArticleConnection {

  /**
   * A list of edges.
   */
  edges: Array<GQLArticleEdge>;

  /**
   * Information to aid in pagination.
   */
  pageInfo: GQLPageInfo;
}

export interface GQLArticleEdge {

  /**
   * A cursor for use in pagination.
   */
  cursor: string;

  /**
   * The item at the end of ArticleEdge.
   */
  node: GQLArticle;
}

/**
 * An article in an online store blog.
 */
export interface GQLArticle extends GQLNode {

  /**
   * The article's author.
   * @deprecated Use `authorV2` instead
   */
  author: GQLArticleAuthor;

  /**
   * The article's author.
   */
  authorV2?: GQLArticleAuthor;

  /**
   * The blog that the article belongs to.
   */
  blog: GQLBlog;

  /**
   * List of comments posted on the article.
   */
  comments: GQLCommentConnection;

  /**
   * Stripped content of the article, single line with HTML tags removed.
   */
  content: string;

  /**
   * The content of the article, complete with HTML formatting.
   */
  contentHtml: GQLHTML;

  /**
   * Stripped excerpt of the article, single line with HTML tags removed.
   */
  excerpt?: string;

  /**
   * The excerpt of the article, complete with HTML formatting.
   */
  excerptHtml?: GQLHTML;

  /**
   * A human-friendly unique string for the Article automatically generated from its title.
   */
  handle: string;

  /**
   * Globally unique identifier.
   */
  id: string;

  /**
   * The image associated with the article.
   */
  image?: GQLImage;

  /**
   * The date and time when the article was published.
   */
  publishedAt: GQLDateTime;

  /**
   * The article’s SEO information.
   */
  seo?: GQLSEO;

  /**
   * A categorization that a article can be tagged with.
   */
  tags: Array<string>;

  /**
   * The article’s name.
   */
  title: string;

  /**
   * The url pointing to the article accessible from the web.
   */
  url: GQLURL;
}

/**
 * An object with an ID to support global identification.
 */
export interface GQLNode {

  /**
   * Globally unique identifier.
   */
  id: string;
}

/** Use this to resolve interface type Node */
export type GQLPossibleNodeTypeNames =
'Article' |
'Blog' |
'Comment' |
'Collection' |
'Product' |
'Metafield' |
'ProductVariant' |
'ProductOption' |
'MailingAddress' |
'Checkout' |
'AppliedGiftCard' |
'CheckoutLineItem' |
'Order' |
'Page' |
'ShopPolicy' |
'Payment' |
'ExternalVideo' |
'MediaImage' |
'Model3d' |
'Video';

export interface GQLNodeNameMap {
  Node: GQLNode;
  Article: GQLArticle;
  Blog: GQLBlog;
  Comment: GQLComment;
  Collection: GQLCollection;
  Product: GQLProduct;
  Metafield: GQLMetafield;
  ProductVariant: GQLProductVariant;
  ProductOption: GQLProductOption;
  MailingAddress: GQLMailingAddress;
  Checkout: GQLCheckout;
  AppliedGiftCard: GQLAppliedGiftCard;
  CheckoutLineItem: GQLCheckoutLineItem;
  Order: GQLOrder;
  Page: GQLPage;
  ShopPolicy: GQLShopPolicy;
  Payment: GQLPayment;
  ExternalVideo: GQLExternalVideo;
  MediaImage: GQLMediaImage;
  Model3d: GQLModel3d;
  Video: GQLVideo;
}

/**
 * The author of an article.
 */
export interface GQLArticleAuthor {

  /**
   * The author's bio.
   */
  bio?: string;

  /**
   * The author’s email.
   */
  email: string;

  /**
   * The author's first name.
   */
  firstName: string;

  /**
   * The author's last name.
   */
  lastName: string;

  /**
   * The author's full name.
   */
  name: string;
}

/**
 * An online store blog.
 */
export interface GQLBlog extends GQLNode {

  /**
   * Find an article by its handle.
   */
  articleByHandle?: GQLArticle;

  /**
   * List of the blog's articles.
   */
  articles: GQLArticleConnection;

  /**
   * The authors who have contributed to the blog.
   */
  authors: Array<GQLArticleAuthor>;

  /**
   * A human-friendly unique string for the Blog automatically generated from its title.
   */
  handle: string;

  /**
   * Globally unique identifier.
   */
  id: string;

  /**
   * The blogs’s title.
   */
  title: string;

  /**
   * The url pointing to the blog accessible from the web.
   */
  url: GQLURL;
}

/**
 * An RFC 3986 and RFC 3987 compliant URI string.
 *
 * Example value: `"https://johns-apparel.myshopify.com"`.
 */
export type GQLURL = any;

export interface GQLCommentConnection {

  /**
   * A list of edges.
   */
  edges: Array<GQLCommentEdge>;

  /**
   * Information to aid in pagination.
   */
  pageInfo: GQLPageInfo;
}

export interface GQLCommentEdge {

  /**
   * A cursor for use in pagination.
   */
  cursor: string;

  /**
   * The item at the end of CommentEdge.
   */
  node: GQLComment;
}

/**
 * A comment on an article.
 */
export interface GQLComment extends GQLNode {

  /**
   * The comment’s author.
   */
  author: GQLCommentAuthor;

  /**
   * Stripped content of the comment, single line with HTML tags removed.
   */
  content: string;

  /**
   * The content of the comment, complete with HTML formatting.
   */
  contentHtml: GQLHTML;

  /**
   * Globally unique identifier.
   */
  id: string;
}

/**
 * The author of a comment.
 */
export interface GQLCommentAuthor {

  /**
   * The author's email.
   */
  email: string;

  /**
   * The author’s name.
   */
  name: string;
}

/**
 * A string containing HTML code. Example value: `"<p>Grey cotton knit sweater.</p>"`.
 */
export type GQLHTML = any;

/**
 * Information about pagination in a connection.
 */
export interface GQLPageInfo {

  /**
   * Indicates if there are more pages to fetch.
   */
  hasNextPage: boolean;

  /**
   * Indicates if there are any pages prior to the current page.
   */
  hasPreviousPage: boolean;
}

/**
 * The part of the image that should remain after cropping.
 */
export enum GQLCropRegion {

  /**
   * Keep the center of the image.
   */
  CENTER = 'CENTER',

  /**
   * Keep the top of the image.
   */
  TOP = 'TOP',

  /**
   * Keep the bottom of the image.
   */
  BOTTOM = 'BOTTOM',

  /**
   * Keep the left of the image.
   */
  LEFT = 'LEFT',

  /**
   * Keep the right of the image.
   */
  RIGHT = 'RIGHT'
}

/**
 * Represents an image resource.
 */
export interface GQLImage {

  /**
   * A word or phrase to share the nature or contents of an image.
   */
  altText?: string;

  /**
   * A unique identifier for the image.
   */
  id?: string;

  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   */
  originalSrc: GQLURL;

  /**
   * The location of the image as a URL.
   * @deprecated Previously an image had a single `src` field. This could either return the original image
   * location or a URL that contained transformations such as sizing or scale.
   *
   * These transformations were specified by arguments on the parent field.
   *
   * Now an image has two distinct URL fields: `originalSrc` and `transformedSrc`.
   *
   * * `originalSrc` - the original unmodified image URL
   * * `transformedSrc` - the image URL with the specified transformations included
   *
   * To migrate to the new fields, image transformations should be moved from the parent field to `transformedSrc`.
   *
   * Before:
   * ```graphql
   * {
     *   shop {
       *     productImages(maxWidth: 200, scale: 2) {
         *       edges {
           *         node {
             *           src
           *         }
         *       }
       *     }
     *   }
   * }
   * ```
   *
   * After:
   * ```graphql
   * {
     *   shop {
       *     productImages {
         *       edges {
           *         node {
             *           transformedSrc(maxWidth: 200, scale: 2)
           *         }
         *       }
       *     }
     *   }
   * }
   * ```
   *
   */
  src: GQLURL;

  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: GQLURL;
}

/**
 * List of supported image content types.
 */
export enum GQLImageContentType {

  /**
   * A PNG image.
   */
  PNG = 'PNG',

  /**
   * A JPG image.
   */
  JPG = 'JPG',

  /**
   * A WEBP image.
   */
  WEBP = 'WEBP'
}

/**
 * An ISO-8601 encoded UTC date time string. Example value: `"2019-07-03T20:47:55Z"`.
 */
export type GQLDateTime = any;

/**
 * SEO information.
 */
export interface GQLSEO {

  /**
   * The meta description.
   */
  description?: string;

  /**
   * The SEO title.
   */
  title?: string;
}

/**
 * The set of valid sort keys for the Blog query.
 */
export enum GQLBlogSortKeys {

  /**
   * Sort by the `handle` value.
   */
  HANDLE = 'HANDLE',

  /**
   * Sort by the `title` value.
   */
  TITLE = 'TITLE',

  /**
   * Sort by the `id` value.
   */
  ID = 'ID',

  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  RELEVANCE = 'RELEVANCE'
}

export interface GQLBlogConnection {

  /**
   * A list of edges.
   */
  edges: Array<GQLBlogEdge>;

  /**
   * Information to aid in pagination.
   */
  pageInfo: GQLPageInfo;
}

export interface GQLBlogEdge {

  /**
   * A cursor for use in pagination.
   */
  cursor: string;

  /**
   * The item at the end of BlogEdge.
   */
  node: GQLBlog;
}

/**
 * A collection represents a grouping of products that a shop owner can create to
 * organize them or make their shops easier to browse.
 */
export interface GQLCollection extends GQLNode {

  /**
   * Stripped description of the collection, single line with HTML tags removed.
   */
  description: string;

  /**
   * The description of the collection, complete with HTML formatting.
   */
  descriptionHtml: GQLHTML;

  /**
   * A human-friendly unique string for the collection automatically generated from its title.
   * Limit of 255 characters.
   */
  handle: string;

  /**
   * Globally unique identifier.
   */
  id: string;

  /**
   * Image associated with the collection.
   */
  image?: GQLImage;

  /**
   * List of products in the collection.
   */
  products: GQLProductConnection;

  /**
   * The collection’s name. Limit of 255 characters.
   */
  title: string;

  /**
   * The date and time when the collection was last modified.
   */
  updatedAt: GQLDateTime;
}

/**
 * The set of valid sort keys for the ProductCollection query.
 */
export enum GQLProductCollectionSortKeys {

  /**
   * Sort by the `title` value.
   */
  TITLE = 'TITLE',

  /**
   * Sort by the `price` value.
   */
  PRICE = 'PRICE',

  /**
   * Sort by the `best-selling` value.
   */
  BEST_SELLING = 'BEST_SELLING',

  /**
   * Sort by the `created` value.
   */
  CREATED = 'CREATED',

  /**
   * Sort by the `id` value.
   */
  ID = 'ID',

  /**
   * Sort by the `manual` value.
   */
  MANUAL = 'MANUAL',

  /**
   * Sort by the `collection-default` value.
   */
  COLLECTION_DEFAULT = 'COLLECTION_DEFAULT',

  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  RELEVANCE = 'RELEVANCE'
}

export interface GQLProductConnection {

  /**
   * A list of edges.
   */
  edges: Array<GQLProductEdge>;

  /**
   * Information to aid in pagination.
   */
  pageInfo: GQLPageInfo;
}

export interface GQLProductEdge {

  /**
   * A cursor for use in pagination.
   */
  cursor: string;

  /**
   * The item at the end of ProductEdge.
   */
  node: GQLProduct;
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 */
export interface GQLProduct extends GQLNode, GQLHasMetafields {

  /**
   * Indicates if at least one product variant is available for sale.
   */
  availableForSale: boolean;

  /**
   * List of collections a product belongs to.
   */
  collections: GQLCollectionConnection;

  /**
   * The compare at price of the product across all variants.
   */
  compareAtPriceRange: GQLProductPriceRange;

  /**
   * The date and time when the product was created.
   */
  createdAt: GQLDateTime;

  /**
   * Stripped description of the product, single line with HTML tags removed.
   */
  description: string;

  /**
   * The description of the product, complete with HTML formatting.
   */
  descriptionHtml: GQLHTML;

  /**
   * A human-friendly unique string for the Product automatically generated from its title.
   * They are used by the Liquid templating language to refer to objects.
   */
  handle: string;

  /**
   * Globally unique identifier.
   */
  id: string;

  /**
   * List of images associated with the product.
   */
  images: GQLImageConnection;

  /**
   * The media associated with the product.
   */
  media: GQLMediaConnection;

  /**
   * The metafield associated with the resource.
   */
  metafield?: GQLMetafield;

  /**
   * A paginated list of metafields associated with the resource.
   */
  metafields: GQLMetafieldConnection;

  /**
   * The online store URL for the product.
   * A value of `null` indicates that the product is not published to the Online Store sales channel.
   */
  onlineStoreUrl?: GQLURL;

  /**
   * List of custom product options (maximum of 3 per product).
   */
  options: Array<GQLProductOption>;

  /**
   * List of price ranges in the presentment currencies for this shop.
   */
  presentmentPriceRanges: GQLProductPriceRangeConnection;

  /**
   * The price range.
   */
  priceRange: GQLProductPriceRange;

  /**
   * A categorization that a product can be tagged with, commonly used for filtering and searching.
   */
  productType: string;

  /**
   * The date and time when the product was published to the channel.
   */
  publishedAt: GQLDateTime;

  /**
   * A comma separated list of tags that have been added to the product.
   * Additional access scope required for private apps: unauthenticated_read_product_tags.
   */
  tags: Array<string>;

  /**
   * The product’s title.
   */
  title: string;

  /**
   * The total quantity of inventory in stock for this Product.
   */
  totalInventory?: number;

  /**
   * The date and time when the product was last modified.
   */
  updatedAt: GQLDateTime;

  /**
   * Find a product’s variant based on its selected options.
   * This is useful for converting a user’s selection of product options into a single matching variant.
   * If there is not a variant for the selected options, `null` will be returned.
   */
  variantBySelectedOptions?: GQLProductVariant;

  /**
   * List of the product’s variants.
   */
  variants: GQLProductVariantConnection;

  /**
   * The product’s vendor name.
   */
  vendor: string;
}

/**
 * Represents information about the metafields associated to the specified resource.
 */
export interface GQLHasMetafields {

  /**
   * The metafield associated with the resource.
   */
  metafield?: GQLMetafield;

  /**
   * A paginated list of metafields associated with the resource.
   */
  metafields: GQLMetafieldConnection;
}

/** Use this to resolve interface type HasMetafields */
export type GQLPossibleHasMetafieldsTypeNames = 'Product' | 'ProductVariant';

export interface GQLHasMetafieldsNameMap {
  HasMetafields: GQLHasMetafields;
  Product: GQLProduct;
  ProductVariant: GQLProductVariant;
}

/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 */
export interface GQLMetafield extends GQLNode {

  /**
   * The date and time when the storefront metafield was created.
   */
  createdAt: GQLDateTime;

  /**
   * The description of a metafield.
   */
  description?: string;

  /**
   * Globally unique identifier.
   */
  id: string;

  /**
   * The key name for a metafield.
   */
  key: string;

  /**
   * The namespace for a metafield.
   */
  namespace: string;

  /**
   * The parent object that the metafield belongs to.
   */
  parentResource: GQLMetafieldParentResource;

  /**
   * The date and time when the storefront metafield was updated.
   */
  updatedAt: GQLDateTime;

  /**
   * The value of a metafield.
   */
  value: string;

  /**
   * Represents the metafield value type.
   */
  valueType: GQLMetafieldValueType;
}

/**
 * A resource that the metafield belongs to.
 */
export type GQLMetafieldParentResource = GQLProduct | GQLProductVariant;

/** Use this to resolve union type MetafieldParentResource */
export type GQLPossibleMetafieldParentResourceTypeNames =
'Product' |
'ProductVariant';

export interface GQLMetafieldParentResourceNameMap {
  MetafieldParentResource: GQLMetafieldParentResource;
  Product: GQLProduct;
  ProductVariant: GQLProductVariant;
}

/**
 * A product variant represents a different version of a product, such as differing sizes or differing colors.
 */
export interface GQLProductVariant extends GQLNode, GQLHasMetafields {

  /**
   * Indicates if the product variant is in stock.
   * @deprecated Use `availableForSale` instead
   */
  available?: boolean;

  /**
   * Indicates if the product variant is available for sale.
   */
  availableForSale: boolean;

  /**
   * The compare at price of the variant. This can be used to mark a variant as on
   * sale, when `compareAtPrice` is higher than `price`.
   * @deprecated Use `compareAtPriceV2` instead
   */
  compareAtPrice?: GQLMoney;

  /**
   * The compare at price of the variant. This can be used to mark a variant as on
   * sale, when `compareAtPriceV2` is higher than `priceV2`.
   */
  compareAtPriceV2?: GQLMoneyV2;

  /**
   * Whether a product is out of stock but still available for purchase (used for backorders).
   */
  currentlyNotInStock: boolean;

  /**
   * Globally unique identifier.
   */
  id: string;

  /**
   * Image associated with the product variant. This field falls back to the product image if no image is available.
   */
  image?: GQLImage;

  /**
   * The metafield associated with the resource.
   */
  metafield?: GQLMetafield;

  /**
   * A paginated list of metafields associated with the resource.
   */
  metafields: GQLMetafieldConnection;

  /**
   * List of prices and compare-at prices in the presentment currencies for this shop.
   */
  presentmentPrices: GQLProductVariantPricePairConnection;

  /**
   * List of unit prices in the presentment currencies for this shop.
   */
  presentmentUnitPrices: GQLMoneyV2Connection;

  /**
   * The product variant’s price.
   * @deprecated Use `priceV2` instead
   */
  price: GQLMoney;

  /**
   * The product variant’s price.
   */
  priceV2: GQLMoneyV2;

  /**
   * The product object that the product variant belongs to.
   */
  product: GQLProduct;

  /**
   * The total sellable quantity of the variant for online sales channels.
   */
  quantityAvailable?: number;

  /**
   * Whether a customer needs to provide a shipping address when placing an order for the product variant.
   */
  requiresShipping: boolean;

  /**
   * List of product options applied to the variant.
   */
  selectedOptions: Array<GQLSelectedOption>;

  /**
   * The SKU (stock keeping unit) associated with the variant.
   */
  sku?: string;

  /**
   * The product variant’s title.
   */
  title: string;

  /**
   * The unit price value for the variant based on the variant's measurement.
   */
  unitPrice?: GQLMoneyV2;

  /**
   * The unit price measurement for the variant.
   */
  unitPriceMeasurement?: GQLUnitPriceMeasurement;

  /**
   * The weight of the product variant in the unit system specified with `weight_unit`.
   */
  weight?: number;

  /**
   * Unit of measurement for weight.
   */
  weightUnit: GQLWeightUnit;
}

/**
 * A monetary value string. Example value: `"100.57"`.
 */
export type GQLMoney = any;

/**
 * A monetary value with currency.
 *
 * To format currencies, combine this type's amount and currencyCode fields with your client's locale.
 *
 * For example, in JavaScript you could use Intl.NumberFormat:
 *
 * ```js
 * new Intl.NumberFormat(locale, {
   *   style: 'currency',
   *   currency: currencyCode
   * }).format(amount);
   * ```
   *
   * Other formatting libraries include:
   *
   * * iOS - [NumberFormatter](https://developer.apple.com/documentation/foundation/numberformatter)
   * * Android - [NumberFormat](https://developer.android.com/reference/java/text/NumberFormat.html)
   * * PHP - [NumberFormatter](http://php.net/manual/en/class.numberformatter.php)
   *
   * For a more general solution, the [Unicode CLDR number formatting database] is available with many implementations
   * (such as [TwitterCldr](https://github.com/twitter/twitter-cldr-rb)).
   */
export interface GQLMoneyV2 {

    /**
     * Decimal money amount.
     */
    amount: GQLDecimal;

    /**
     * Currency of the money.
     */
    currencyCode: GQLCurrencyCode;
  }

  /**
   * A signed decimal number, which supports arbitrary precision and is serialized as a string. Example value: `"29.99"`.
   */
export type GQLDecimal = any;

  /**
   * Currency codes.
   */
export enum GQLCurrencyCode {

    /**
     * United States Dollars (USD).
     */
    USD = 'USD',

    /**
     * Euro (EUR).
     */
    EUR = 'EUR',

    /**
     * United Kingdom Pounds (GBP).
     */
    GBP = 'GBP',

    /**
     * Canadian Dollars (CAD).
     */
    CAD = 'CAD',

    /**
     * Afghan Afghani (AFN).
     */
    AFN = 'AFN',

    /**
     * Albanian Lek (ALL).
     */
    ALL = 'ALL',

    /**
     * Algerian Dinar (DZD).
     */
    DZD = 'DZD',

    /**
     * Angolan Kwanza (AOA).
     */
    AOA = 'AOA',

    /**
     * Argentine Pesos (ARS).
     */
    ARS = 'ARS',

    /**
     * Armenian Dram (AMD).
     */
    AMD = 'AMD',

    /**
     * Aruban Florin (AWG).
     */
    AWG = 'AWG',

    /**
     * Australian Dollars (AUD).
     */
    AUD = 'AUD',

    /**
     * Barbadian Dollar (BBD).
     */
    BBD = 'BBD',

    /**
     * Azerbaijani Manat (AZN).
     */
    AZN = 'AZN',

    /**
     * Bangladesh Taka (BDT).
     */
    BDT = 'BDT',

    /**
     * Bahamian Dollar (BSD).
     */
    BSD = 'BSD',

    /**
     * Bahraini Dinar (BHD).
     */
    BHD = 'BHD',

    /**
     * Burundian Franc (BIF).
     */
    BIF = 'BIF',

    /**
     * Belarusian Ruble (BYR).
     * @deprecated `BYR` is deprecated. Use `BYN` available from version `2019-10` onwards instead.
     */
    BYR = 'BYR',

    /**
     * Belize Dollar (BZD).
     */
    BZD = 'BZD',

    /**
     * Bermudian Dollar (BMD).
     */
    BMD = 'BMD',

    /**
     * Bhutanese Ngultrum (BTN).
     */
    BTN = 'BTN',

    /**
     * Bosnia and Herzegovina Convertible Mark (BAM).
     */
    BAM = 'BAM',

    /**
     * Brazilian Real (BRL).
     */
    BRL = 'BRL',

    /**
     * Bolivian Boliviano (BOB).
     */
    BOB = 'BOB',

    /**
     * Botswana Pula (BWP).
     */
    BWP = 'BWP',

    /**
     * Brunei Dollar (BND).
     */
    BND = 'BND',

    /**
     * Bulgarian Lev (BGN).
     */
    BGN = 'BGN',

    /**
     * Burmese Kyat (MMK).
     */
    MMK = 'MMK',

    /**
     * Cambodian Riel.
     */
    KHR = 'KHR',

    /**
     * Cape Verdean escudo (CVE).
     */
    CVE = 'CVE',

    /**
     * Cayman Dollars (KYD).
     */
    KYD = 'KYD',

    /**
     * Central African CFA Franc (XAF).
     */
    XAF = 'XAF',

    /**
     * Chilean Peso (CLP).
     */
    CLP = 'CLP',

    /**
     * Chinese Yuan Renminbi (CNY).
     */
    CNY = 'CNY',

    /**
     * Colombian Peso (COP).
     */
    COP = 'COP',

    /**
     * Comorian Franc (KMF).
     */
    KMF = 'KMF',

    /**
     * Congolese franc (CDF).
     */
    CDF = 'CDF',

    /**
     * Costa Rican Colones (CRC).
     */
    CRC = 'CRC',

    /**
     * Croatian Kuna (HRK).
     */
    HRK = 'HRK',

    /**
     * Czech Koruny (CZK).
     */
    CZK = 'CZK',

    /**
     * Danish Kroner (DKK).
     */
    DKK = 'DKK',

    /**
     * Djiboutian Franc (DJF).
     */
    DJF = 'DJF',

    /**
     * Dominican Peso (DOP).
     */
    DOP = 'DOP',

    /**
     * East Caribbean Dollar (XCD).
     */
    XCD = 'XCD',

    /**
     * Egyptian Pound (EGP).
     */
    EGP = 'EGP',

    /**
     * Ethiopian Birr (ETB).
     */
    ETB = 'ETB',

    /**
     * Falkland Islands Pounds (FKP).
     */
    FKP = 'FKP',

    /**
     * CFP Franc (XPF).
     */
    XPF = 'XPF',

    /**
     * Fijian Dollars (FJD).
     */
    FJD = 'FJD',

    /**
     * Gibraltar Pounds (GIP).
     */
    GIP = 'GIP',

    /**
     * Gambian Dalasi (GMD).
     */
    GMD = 'GMD',

    /**
     * Ghanaian Cedi (GHS).
     */
    GHS = 'GHS',

    /**
     * Guatemalan Quetzal (GTQ).
     */
    GTQ = 'GTQ',

    /**
     * Guyanese Dollar (GYD).
     */
    GYD = 'GYD',

    /**
     * Georgian Lari (GEL).
     */
    GEL = 'GEL',

    /**
     * Guinean Franc (GNF).
     */
    GNF = 'GNF',

    /**
     * Haitian Gourde (HTG).
     */
    HTG = 'HTG',

    /**
     * Honduran Lempira (HNL).
     */
    HNL = 'HNL',

    /**
     * Hong Kong Dollars (HKD).
     */
    HKD = 'HKD',

    /**
     * Hungarian Forint (HUF).
     */
    HUF = 'HUF',

    /**
     * Icelandic Kronur (ISK).
     */
    ISK = 'ISK',

    /**
     * Indian Rupees (INR).
     */
    INR = 'INR',

    /**
     * Indonesian Rupiah (IDR).
     */
    IDR = 'IDR',

    /**
     * Israeli New Shekel (NIS).
     */
    ILS = 'ILS',

    /**
     * Iranian Rial (IRR).
     */
    IRR = 'IRR',

    /**
     * Iraqi Dinar (IQD).
     */
    IQD = 'IQD',

    /**
     * Jamaican Dollars (JMD).
     */
    JMD = 'JMD',

    /**
     * Japanese Yen (JPY).
     */
    JPY = 'JPY',

    /**
     * Jersey Pound.
     */
    JEP = 'JEP',

    /**
     * Jordanian Dinar (JOD).
     */
    JOD = 'JOD',

    /**
     * Kazakhstani Tenge (KZT).
     */
    KZT = 'KZT',

    /**
     * Kenyan Shilling (KES).
     */
    KES = 'KES',

    /**
     * Kuwaiti Dinar (KWD).
     */
    KWD = 'KWD',

    /**
     * Kyrgyzstani Som (KGS).
     */
    KGS = 'KGS',

    /**
     * Laotian Kip (LAK).
     */
    LAK = 'LAK',

    /**
     * Latvian Lati (LVL).
     */
    LVL = 'LVL',

    /**
     * Lebanese Pounds (LBP).
     */
    LBP = 'LBP',

    /**
     * Lesotho Loti (LSL).
     */
    LSL = 'LSL',

    /**
     * Liberian Dollar (LRD).
     */
    LRD = 'LRD',

    /**
     * Libyan Dinar (LYD).
     */
    LYD = 'LYD',

    /**
     * Lithuanian Litai (LTL).
     */
    LTL = 'LTL',

    /**
     * Malagasy Ariary (MGA).
     */
    MGA = 'MGA',

    /**
     * Macedonia Denar (MKD).
     */
    MKD = 'MKD',

    /**
     * Macanese Pataca (MOP).
     */
    MOP = 'MOP',

    /**
     * Malawian Kwacha (MWK).
     */
    MWK = 'MWK',

    /**
     * Maldivian Rufiyaa (MVR).
     */
    MVR = 'MVR',

    /**
     * Mexican Pesos (MXN).
     */
    MXN = 'MXN',

    /**
     * Malaysian Ringgits (MYR).
     */
    MYR = 'MYR',

    /**
     * Mauritian Rupee (MUR).
     */
    MUR = 'MUR',

    /**
     * Moldovan Leu (MDL).
     */
    MDL = 'MDL',

    /**
     * Moroccan Dirham.
     */
    MAD = 'MAD',

    /**
     * Mongolian Tugrik.
     */
    MNT = 'MNT',

    /**
     * Mozambican Metical.
     */
    MZN = 'MZN',

    /**
     * Namibian Dollar.
     */
    NAD = 'NAD',

    /**
     * Nepalese Rupee (NPR).
     */
    NPR = 'NPR',

    /**
     * Netherlands Antillean Guilder.
     */
    ANG = 'ANG',

    /**
     * New Zealand Dollars (NZD).
     */
    NZD = 'NZD',

    /**
     * Nicaraguan Córdoba (NIO).
     */
    NIO = 'NIO',

    /**
     * Nigerian Naira (NGN).
     */
    NGN = 'NGN',

    /**
     * Norwegian Kroner (NOK).
     */
    NOK = 'NOK',

    /**
     * Omani Rial (OMR).
     */
    OMR = 'OMR',

    /**
     * Panamian Balboa (PAB).
     */
    PAB = 'PAB',

    /**
     * Pakistani Rupee (PKR).
     */
    PKR = 'PKR',

    /**
     * Papua New Guinean Kina (PGK).
     */
    PGK = 'PGK',

    /**
     * Paraguayan Guarani (PYG).
     */
    PYG = 'PYG',

    /**
     * Peruvian Nuevo Sol (PEN).
     */
    PEN = 'PEN',

    /**
     * Philippine Peso (PHP).
     */
    PHP = 'PHP',

    /**
     * Polish Zlotych (PLN).
     */
    PLN = 'PLN',

    /**
     * Qatari Rial (QAR).
     */
    QAR = 'QAR',

    /**
     * Romanian Lei (RON).
     */
    RON = 'RON',

    /**
     * Russian Rubles (RUB).
     */
    RUB = 'RUB',

    /**
     * Rwandan Franc (RWF).
     */
    RWF = 'RWF',

    /**
     * Samoan Tala (WST).
     */
    WST = 'WST',

    /**
     * Saint Helena Pounds (SHP).
     */
    SHP = 'SHP',

    /**
     * Saudi Riyal (SAR).
     */
    SAR = 'SAR',

    /**
     * Sao Tome And Principe Dobra (STD).
     */
    STD = 'STD',

    /**
     * Serbian dinar (RSD).
     */
    RSD = 'RSD',

    /**
     * Seychellois Rupee (SCR).
     */
    SCR = 'SCR',

    /**
     * Sierra Leonean Leone (SLL).
     */
    SLL = 'SLL',

    /**
     * Singapore Dollars (SGD).
     */
    SGD = 'SGD',

    /**
     * Sudanese Pound (SDG).
     */
    SDG = 'SDG',

    /**
     * Syrian Pound (SYP).
     */
    SYP = 'SYP',

    /**
     * South African Rand (ZAR).
     */
    ZAR = 'ZAR',

    /**
     * South Korean Won (KRW).
     */
    KRW = 'KRW',

    /**
     * South Sudanese Pound (SSP).
     */
    SSP = 'SSP',

    /**
     * Solomon Islands Dollar (SBD).
     */
    SBD = 'SBD',

    /**
     * Sri Lankan Rupees (LKR).
     */
    LKR = 'LKR',

    /**
     * Surinamese Dollar (SRD).
     */
    SRD = 'SRD',

    /**
     * Swazi Lilangeni (SZL).
     */
    SZL = 'SZL',

    /**
     * Swedish Kronor (SEK).
     */
    SEK = 'SEK',

    /**
     * Swiss Francs (CHF).
     */
    CHF = 'CHF',

    /**
     * Taiwan Dollars (TWD).
     */
    TWD = 'TWD',

    /**
     * Thai baht (THB).
     */
    THB = 'THB',

    /**
     * Tajikistani Somoni (TJS).
     */
    TJS = 'TJS',

    /**
     * Tanzanian Shilling (TZS).
     */
    TZS = 'TZS',

    /**
     * Tongan Pa'anga (TOP).
     */
    TOP = 'TOP',

    /**
     * Trinidad and Tobago Dollars (TTD).
     */
    TTD = 'TTD',

    /**
     * Tunisian Dinar (TND).
     */
    TND = 'TND',

    /**
     * Turkish Lira (TRY).
     */
    TRY = 'TRY',

    /**
     * Turkmenistani Manat (TMT).
     */
    TMT = 'TMT',

    /**
     * Ugandan Shilling (UGX).
     */
    UGX = 'UGX',

    /**
     * Ukrainian Hryvnia (UAH).
     */
    UAH = 'UAH',

    /**
     * United Arab Emirates Dirham (AED).
     */
    AED = 'AED',

    /**
     * Uruguayan Pesos (UYU).
     */
    UYU = 'UYU',

    /**
     * Uzbekistan som (UZS).
     */
    UZS = 'UZS',

    /**
     * Vanuatu Vatu (VUV).
     */
    VUV = 'VUV',

    /**
     * Venezuelan Bolivares (VEF).
     */
    VEF = 'VEF',

    /**
     * Vietnamese đồng (VND).
     */
    VND = 'VND',

    /**
     * West African CFA franc (XOF).
     */
    XOF = 'XOF',

    /**
     * Yemeni Rial (YER).
     */
    YER = 'YER',

    /**
     * Zambian Kwacha (ZMW).
     */
    ZMW = 'ZMW'
  }

export interface GQLMetafieldConnection {

    /**
     * A list of edges.
     */
    edges: Array<GQLMetafieldEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: GQLPageInfo;
  }

export interface GQLMetafieldEdge {

    /**
     * A cursor for use in pagination.
     */
    cursor: string;

    /**
     * The item at the end of MetafieldEdge.
     */
    node: GQLMetafield;
  }

export interface GQLProductVariantPricePairConnection {

    /**
     * A list of edges.
     */
    edges: Array<GQLProductVariantPricePairEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: GQLPageInfo;
  }

export interface GQLProductVariantPricePairEdge {

    /**
     * A cursor for use in pagination.
     */
    cursor: string;

    /**
     * The item at the end of ProductVariantPricePairEdge.
     */
    node: GQLProductVariantPricePair;
  }

  /**
   * The compare-at price and price of a variant sharing a currency.
   */
export interface GQLProductVariantPricePair {

    /**
     * The compare-at price of the variant with associated currency.
     */
    compareAtPrice?: GQLMoneyV2;

    /**
     * The price of the variant with associated currency.
     */
    price: GQLMoneyV2;
  }

export interface GQLMoneyV2Connection {

    /**
     * A list of edges.
     */
    edges: Array<GQLMoneyV2Edge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: GQLPageInfo;
  }

export interface GQLMoneyV2Edge {

    /**
     * A cursor for use in pagination.
     */
    cursor: string;

    /**
     * The item at the end of MoneyV2Edge.
     */
    node: GQLMoneyV2;
  }

  /**
   * Custom properties that a shop owner can use to define product variants.
   * Multiple options can exist. Options are represented as: option1, option2, option3, etc.
   */
export interface GQLSelectedOption {

    /**
     * The product option’s name.
     */
    name: string;

    /**
     * The product option’s value.
     */
    value: string;
  }

  /**
   * The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).
   */
export interface GQLUnitPriceMeasurement {

    /**
     * The type of unit of measurement for the unit price measurement.
     */
    measuredType?: GQLUnitPriceMeasurementMeasuredType;

    /**
     * The quantity unit for the unit price measurement.
     */
    quantityUnit?: GQLUnitPriceMeasurementMeasuredUnit;

    /**
     * The quantity value for the unit price measurement.
     */
    quantityValue: number;

    /**
     * The reference unit for the unit price measurement.
     */
    referenceUnit?: GQLUnitPriceMeasurementMeasuredUnit;

    /**
     * The reference value for the unit price measurement.
     */
    referenceValue: number;
  }

  /**
   * The accepted types of unit of measurement.
   */
export enum GQLUnitPriceMeasurementMeasuredType {

    /**
     * Unit of measurements representing volumes.
     */
    VOLUME = 'VOLUME',

    /**
     * Unit of measurements representing weights.
     */
    WEIGHT = 'WEIGHT',

    /**
     * Unit of measurements representing lengths.
     */
    LENGTH = 'LENGTH',

    /**
     * Unit of measurements representing areas.
     */
    AREA = 'AREA'
  }

  /**
   * The valid units of measurement for a unit price measurement.
   */
export enum GQLUnitPriceMeasurementMeasuredUnit {

    /**
     * 1000 milliliters equals 1 liter.
     */
    ML = 'ML',

    /**
     * 100 centiliters equals 1 liter.
     */
    CL = 'CL',

    /**
     * Metric system unit of volume.
     */
    L = 'L',

    /**
     * 1 cubic meter equals 1000 liters.
     */
    M3 = 'M3',

    /**
     * 1000 milligrams equals 1 gram.
     */
    MG = 'MG',

    /**
     * Metric system unit of weight.
     */
    G = 'G',

    /**
     * 1 kilogram equals 1000 grams.
     */
    KG = 'KG',

    /**
     * 1000 millimeters equals 1 meter.
     */
    MM = 'MM',

    /**
     * 100 centimeters equals 1 meter.
     */
    CM = 'CM',

    /**
     * Metric system unit of length.
     */
    M = 'M',

    /**
     * Metric system unit of area.
     */
    M2 = 'M2'
  }

  /**
   * Units of measurement for weight.
   */
export enum GQLWeightUnit {

    /**
     * 1 kilogram equals 1000 grams.
     */
    KILOGRAMS = 'KILOGRAMS',

    /**
     * Metric system unit of mass.
     */
    GRAMS = 'GRAMS',

    /**
     * 1 pound equals 16 ounces.
     */
    POUNDS = 'POUNDS',

    /**
     * Imperial system unit of mass.
     */
    OUNCES = 'OUNCES'
  }

  /**
   * Metafield value types.
   */
export enum GQLMetafieldValueType {

    /**
     * A string metafield.
     */
    STRING = 'STRING',

    /**
     * An integer metafield.
     */
    INTEGER = 'INTEGER',

    /**
     * A json string metafield.
     */
    JSON_STRING = 'JSON_STRING'
  }

export interface GQLCollectionConnection {

    /**
     * A list of edges.
     */
    edges: Array<GQLCollectionEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: GQLPageInfo;
  }

export interface GQLCollectionEdge {

    /**
     * A cursor for use in pagination.
     */
    cursor: string;

    /**
     * The item at the end of CollectionEdge.
     */
    node: GQLCollection;
  }

  /**
   * The price range of the product.
   */
export interface GQLProductPriceRange {

    /**
     * The highest variant's price.
     */
    maxVariantPrice: GQLMoneyV2;

    /**
     * The lowest variant's price.
     */
    minVariantPrice: GQLMoneyV2;
  }

  /**
   * The set of valid sort keys for the ProductImage query.
   */
export enum GQLProductImageSortKeys {

    /**
     * Sort by the `created_at` value.
     */
    CREATED_AT = 'CREATED_AT',

    /**
     * Sort by the `position` value.
     */
    POSITION = 'POSITION',

    /**
     * Sort by the `id` value.
     */
    ID = 'ID',

    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    RELEVANCE = 'RELEVANCE'
  }

export interface GQLImageConnection {

    /**
     * A list of edges.
     */
    edges: Array<GQLImageEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: GQLPageInfo;
  }

export interface GQLImageEdge {

    /**
     * A cursor for use in pagination.
     */
    cursor: string;

    /**
     * The item at the end of ImageEdge.
     */
    node: GQLImage;
  }

export interface GQLMediaConnection {

    /**
     * A list of edges.
     */
    edges: Array<GQLMediaEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: GQLPageInfo;
  }

export interface GQLMediaEdge {

    /**
     * A cursor for use in pagination.
     */
    cursor: string;

    /**
     * The item at the end of MediaEdge.
     */
    node: GQLMedia;
  }

  /**
   * Represents a media interface.
   */
export interface GQLMedia {

    /**
     * A word or phrase to share the nature or contents of a media.
     */
    alt?: string;

    /**
     * The media content type.
     */
    mediaContentType: GQLMediaContentType;

    /**
     * The preview image for the media.
     */
    previewImage?: GQLImage;
  }

  /** Use this to resolve interface type Media */
export type GQLPossibleMediaTypeNames =
  'ExternalVideo' |
  'MediaImage' |
  'Model3d' |
  'Video';

export interface GQLMediaNameMap {
    Media: GQLMedia;
    ExternalVideo: GQLExternalVideo;
    MediaImage: GQLMediaImage;
    Model3d: GQLModel3d;
    Video: GQLVideo;
  }

  /**
   * The possible content types for a media object.
   */
export enum GQLMediaContentType {

    /**
     * An externally hosted video.
     */
    EXTERNAL_VIDEO = 'EXTERNAL_VIDEO',

    /**
     * A Shopify hosted image.
     */
    IMAGE = 'IMAGE',

    /**
     * A 3d model.
     */
    MODEL_3D = 'MODEL_3D',

    /**
     * A Shopify hosted video.
     */
    VIDEO = 'VIDEO'
  }

  /**
   * Custom product property names like "Size", "Color", and "Material".
   * Products are based on permutations of these options.
   * A product may have a maximum of 3 options.
   * 255 characters limit each.
   */
export interface GQLProductOption extends GQLNode {

    /**
     * Globally unique identifier.
     */
    id: string;

    /**
     * The product option’s name.
     */
    name: string;

    /**
     * The corresponding value to the product option name.
     */
    values: Array<string>;
  }

export interface GQLProductPriceRangeConnection {

    /**
     * A list of edges.
     */
    edges: Array<GQLProductPriceRangeEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: GQLPageInfo;
  }

export interface GQLProductPriceRangeEdge {

    /**
     * A cursor for use in pagination.
     */
    cursor: string;

    /**
     * The item at the end of ProductPriceRangeEdge.
     */
    node: GQLProductPriceRange;
  }

  /**
   * Specifies the input fields required for a selected option.
   */
export interface GQLSelectedOptionInput {

    /**
     * The product option’s name.
     */
    name: string;

    /**
     * The product option’s value.
     */
    value: string;
  }

  /**
   * The set of valid sort keys for the ProductVariant query.
   */
export enum GQLProductVariantSortKeys {

    /**
     * Sort by the `title` value.
     */
    TITLE = 'TITLE',

    /**
     * Sort by the `sku` value.
     */
    SKU = 'SKU',

    /**
     * Sort by the `position` value.
     */
    POSITION = 'POSITION',

    /**
     * Sort by the `id` value.
     */
    ID = 'ID',

    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    RELEVANCE = 'RELEVANCE'
  }

export interface GQLProductVariantConnection {

    /**
     * A list of edges.
     */
    edges: Array<GQLProductVariantEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: GQLPageInfo;
  }

export interface GQLProductVariantEdge {

    /**
     * A cursor for use in pagination.
     */
    cursor: string;

    /**
     * The item at the end of ProductVariantEdge.
     */
    node: GQLProductVariant;
  }

  /**
   * The set of valid sort keys for the Collection query.
   */
export enum GQLCollectionSortKeys {

    /**
     * Sort by the `title` value.
     */
    TITLE = 'TITLE',

    /**
     * Sort by the `updated_at` value.
     */
    UPDATED_AT = 'UPDATED_AT',

    /**
     * Sort by the `id` value.
     */
    ID = 'ID',

    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    RELEVANCE = 'RELEVANCE'
  }

  /**
   * A customer represents a customer account with the shop. Customer accounts store
   * contact information for the customer, saving logged-in customers the trouble of
   * having to provide it at every checkout.
   */
export interface GQLCustomer {

    /**
     * Indicates whether the customer has consented to be sent marketing material via email.
     */
    acceptsMarketing: boolean;

    /**
     * A list of addresses for the customer.
     */
    addresses: GQLMailingAddressConnection;

    /**
     * The date and time when the customer was created.
     */
    createdAt: GQLDateTime;

    /**
     * The customer’s default address.
     */
    defaultAddress?: GQLMailingAddress;

    /**
     * The customer’s name, email or phone number.
     */
    displayName: string;

    /**
     * The customer’s email address.
     */
    email?: string;

    /**
     * The customer’s first name.
     */
    firstName?: string;

    /**
     * A unique identifier for the customer.
     */
    id: string;

    /**
     * The customer's most recently updated, incomplete checkout.
     */
    lastIncompleteCheckout?: GQLCheckout;

    /**
     * The customer’s last name.
     */
    lastName?: string;

    /**
     * The orders associated with the customer.
     */
    orders: GQLOrderConnection;

    /**
     * The customer’s phone number.
     */
    phone?: string;

    /**
     * A comma separated list of tags that have been added to the customer.
     * Additional access scope required: unauthenticated_read_customer_tags.
     */
    tags: Array<string>;

    /**
     * The date and time when the customer information was updated.
     */
    updatedAt: GQLDateTime;
  }

export interface GQLMailingAddressConnection {

    /**
     * A list of edges.
     */
    edges: Array<GQLMailingAddressEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: GQLPageInfo;
  }

export interface GQLMailingAddressEdge {

    /**
     * A cursor for use in pagination.
     */
    cursor: string;

    /**
     * The item at the end of MailingAddressEdge.
     */
    node: GQLMailingAddress;
  }

  /**
   * Represents a mailing address for customers and shipping.
   */
export interface GQLMailingAddress extends GQLNode {

    /**
     * The first line of the address. Typically the street address or PO Box number.
     */
    address1?: string;

    /**
     * The second line of the address. Typically the number of the apartment, suite, or unit.
     */
    address2?: string;

    /**
     * The name of the city, district, village, or town.
     */
    city?: string;

    /**
     * The name of the customer's company or organization.
     */
    company?: string;

    /**
     * The name of the country.
     */
    country?: string;

    /**
     * The two-letter code for the country of the address.
     *
     * For example, US.
     * @deprecated Use `countryCodeV2` instead
     */
    countryCode?: string;

    /**
     * The two-letter code for the country of the address.
     *
     * For example, US.
     */
    countryCodeV2?: GQLCountryCode;

    /**
     * The first name of the customer.
     */
    firstName?: string;

    /**
     * A formatted version of the address, customized by the provided arguments.
     */
    formatted: Array<string>;

    /**
     * A comma-separated list of the values for city, province, and country.
     */
    formattedArea?: string;

    /**
     * Globally unique identifier.
     */
    id: string;

    /**
     * The last name of the customer.
     */
    lastName?: string;

    /**
     * The latitude coordinate of the customer address.
     */
    latitude?: number;

    /**
     * The longitude coordinate of the customer address.
     */
    longitude?: number;

    /**
     * The full name of the customer, based on firstName and lastName.
     */
    name?: string;

    /**
     * A unique phone number for the customer.
     *
     * Formatted using E.164 standard. For example, _+16135551111_.
     */
    phone?: string;

    /**
     * The region of the address, such as the province, state, or district.
     */
    province?: string;

    /**
     * The two-letter code for the region.
     *
     * For example, ON.
     */
    provinceCode?: string;

    /**
     * The zip or postal code of the address.
     */
    zip?: string;
  }

  /**
   * ISO 3166-1 alpha-2 country codes with some differences.
   */
export enum GQLCountryCode {

    /**
     * Afghanistan.
     */
    AF = 'AF',

    /**
     * Åland Islands.
     */
    AX = 'AX',

    /**
     * Albania.
     */
    AL = 'AL',

    /**
     * Algeria.
     */
    DZ = 'DZ',

    /**
     * Andorra.
     */
    AD = 'AD',

    /**
     * Angola.
     */
    AO = 'AO',

    /**
     * Anguilla.
     */
    AI = 'AI',

    /**
     * Antigua & Barbuda.
     */
    AG = 'AG',

    /**
     * Argentina.
     */
    AR = 'AR',

    /**
     * Armenia.
     */
    AM = 'AM',

    /**
     * Aruba.
     */
    AW = 'AW',

    /**
     * Australia.
     */
    AU = 'AU',

    /**
     * Austria.
     */
    AT = 'AT',

    /**
     * Azerbaijan.
     */
    AZ = 'AZ',

    /**
     * Bahamas.
     */
    BS = 'BS',

    /**
     * Bahrain.
     */
    BH = 'BH',

    /**
     * Bangladesh.
     */
    BD = 'BD',

    /**
     * Barbados.
     */
    BB = 'BB',

    /**
     * Belarus.
     */
    BY = 'BY',

    /**
     * Belgium.
     */
    BE = 'BE',

    /**
     * Belize.
     */
    BZ = 'BZ',

    /**
     * Benin.
     */
    BJ = 'BJ',

    /**
     * Bermuda.
     */
    BM = 'BM',

    /**
     * Bhutan.
     */
    BT = 'BT',

    /**
     * Bolivia.
     */
    BO = 'BO',

    /**
     * Bosnia & Herzegovina.
     */
    BA = 'BA',

    /**
     * Botswana.
     */
    BW = 'BW',

    /**
     * Bouvet Island.
     */
    BV = 'BV',

    /**
     * Brazil.
     */
    BR = 'BR',

    /**
     * British Indian Ocean Territory.
     */
    IO = 'IO',

    /**
     * Brunei.
     */
    BN = 'BN',

    /**
     * Bulgaria.
     */
    BG = 'BG',

    /**
     * Burkina Faso.
     */
    BF = 'BF',

    /**
     * Burundi.
     */
    BI = 'BI',

    /**
     * Cambodia.
     */
    KH = 'KH',

    /**
     * Canada.
     */
    CA = 'CA',

    /**
     * Cape Verde.
     */
    CV = 'CV',

    /**
     * Caribbean Netherlands.
     */
    BQ = 'BQ',

    /**
     * Cayman Islands.
     */
    KY = 'KY',

    /**
     * Central African Republic.
     */
    CF = 'CF',

    /**
     * Chad.
     */
    TD = 'TD',

    /**
     * Chile.
     */
    CL = 'CL',

    /**
     * China.
     */
    CN = 'CN',

    /**
     * Christmas Island.
     */
    CX = 'CX',

    /**
     * Cocos (Keeling) Islands.
     */
    CC = 'CC',

    /**
     * Colombia.
     */
    CO = 'CO',

    /**
     * Comoros.
     */
    KM = 'KM',

    /**
     * Congo - Brazzaville.
     */
    CG = 'CG',

    /**
     * Congo - Kinshasa.
     */
    CD = 'CD',

    /**
     * Cook Islands.
     */
    CK = 'CK',

    /**
     * Costa Rica.
     */
    CR = 'CR',

    /**
     * Croatia.
     */
    HR = 'HR',

    /**
     * Cuba.
     */
    CU = 'CU',

    /**
     * Curaçao.
     */
    CW = 'CW',

    /**
     * Cyprus.
     */
    CY = 'CY',

    /**
     * Czechia.
     */
    CZ = 'CZ',

    /**
     * Côte d’Ivoire.
     */
    CI = 'CI',

    /**
     * Denmark.
     */
    DK = 'DK',

    /**
     * Djibouti.
     */
    DJ = 'DJ',

    /**
     * Dominica.
     */
    DM = 'DM',

    /**
     * Dominican Republic.
     */
    DO = 'DO',

    /**
     * Ecuador.
     */
    EC = 'EC',

    /**
     * Egypt.
     */
    EG = 'EG',

    /**
     * El Salvador.
     */
    SV = 'SV',

    /**
     * Equatorial Guinea.
     */
    GQ = 'GQ',

    /**
     * Eritrea.
     */
    ER = 'ER',

    /**
     * Estonia.
     */
    EE = 'EE',

    /**
     * Eswatini.
     */
    SZ = 'SZ',

    /**
     * Ethiopia.
     */
    ET = 'ET',

    /**
     * Falkland Islands.
     */
    FK = 'FK',

    /**
     * Faroe Islands.
     */
    FO = 'FO',

    /**
     * Fiji.
     */
    FJ = 'FJ',

    /**
     * Finland.
     */
    FI = 'FI',

    /**
     * France.
     */
    FR = 'FR',

    /**
     * French Guiana.
     */
    GF = 'GF',

    /**
     * French Polynesia.
     */
    PF = 'PF',

    /**
     * French Southern Territories.
     */
    TF = 'TF',

    /**
     * Gabon.
     */
    GA = 'GA',

    /**
     * Gambia.
     */
    GM = 'GM',

    /**
     * Georgia.
     */
    GE = 'GE',

    /**
     * Germany.
     */
    DE = 'DE',

    /**
     * Ghana.
     */
    GH = 'GH',

    /**
     * Gibraltar.
     */
    GI = 'GI',

    /**
     * Greece.
     */
    GR = 'GR',

    /**
     * Greenland.
     */
    GL = 'GL',

    /**
     * Grenada.
     */
    GD = 'GD',

    /**
     * Guadeloupe.
     */
    GP = 'GP',

    /**
     * Guatemala.
     */
    GT = 'GT',

    /**
     * Guernsey.
     */
    GG = 'GG',

    /**
     * Guinea.
     */
    GN = 'GN',

    /**
     * Guinea-Bissau.
     */
    GW = 'GW',

    /**
     * Guyana.
     */
    GY = 'GY',

    /**
     * Haiti.
     */
    HT = 'HT',

    /**
     * Heard & McDonald Islands.
     */
    HM = 'HM',

    /**
     * Vatican City.
     */
    VA = 'VA',

    /**
     * Honduras.
     */
    HN = 'HN',

    /**
     * Hong Kong SAR China.
     */
    HK = 'HK',

    /**
     * Hungary.
     */
    HU = 'HU',

    /**
     * Iceland.
     */
    IS = 'IS',

    /**
     * India.
     */
    IN = 'IN',

    /**
     * Indonesia.
     */
    ID = 'ID',

    /**
     * Iran.
     */
    IR = 'IR',

    /**
     * Iraq.
     */
    IQ = 'IQ',

    /**
     * Ireland.
     */
    IE = 'IE',

    /**
     * Isle of Man.
     */
    IM = 'IM',

    /**
     * Israel.
     */
    IL = 'IL',

    /**
     * Italy.
     */
    IT = 'IT',

    /**
     * Jamaica.
     */
    JM = 'JM',

    /**
     * Japan.
     */
    JP = 'JP',

    /**
     * Jersey.
     */
    JE = 'JE',

    /**
     * Jordan.
     */
    JO = 'JO',

    /**
     * Kazakhstan.
     */
    KZ = 'KZ',

    /**
     * Kenya.
     */
    KE = 'KE',

    /**
     * Kiribati.
     */
    KI = 'KI',

    /**
     * North Korea.
     */
    KP = 'KP',

    /**
     * Kosovo.
     */
    XK = 'XK',

    /**
     * Kuwait.
     */
    KW = 'KW',

    /**
     * Kyrgyzstan.
     */
    KG = 'KG',

    /**
     * Laos.
     */
    LA = 'LA',

    /**
     * Latvia.
     */
    LV = 'LV',

    /**
     * Lebanon.
     */
    LB = 'LB',

    /**
     * Lesotho.
     */
    LS = 'LS',

    /**
     * Liberia.
     */
    LR = 'LR',

    /**
     * Libya.
     */
    LY = 'LY',

    /**
     * Liechtenstein.
     */
    LI = 'LI',

    /**
     * Lithuania.
     */
    LT = 'LT',

    /**
     * Luxembourg.
     */
    LU = 'LU',

    /**
     * Macao SAR China.
     */
    MO = 'MO',

    /**
     * Madagascar.
     */
    MG = 'MG',

    /**
     * Malawi.
     */
    MW = 'MW',

    /**
     * Malaysia.
     */
    MY = 'MY',

    /**
     * Maldives.
     */
    MV = 'MV',

    /**
     * Mali.
     */
    ML = 'ML',

    /**
     * Malta.
     */
    MT = 'MT',

    /**
     * Martinique.
     */
    MQ = 'MQ',

    /**
     * Mauritania.
     */
    MR = 'MR',

    /**
     * Mauritius.
     */
    MU = 'MU',

    /**
     * Mayotte.
     */
    YT = 'YT',

    /**
     * Mexico.
     */
    MX = 'MX',

    /**
     * Moldova.
     */
    MD = 'MD',

    /**
     * Monaco.
     */
    MC = 'MC',

    /**
     * Mongolia.
     */
    MN = 'MN',

    /**
     * Montenegro.
     */
    ME = 'ME',

    /**
     * Montserrat.
     */
    MS = 'MS',

    /**
     * Morocco.
     */
    MA = 'MA',

    /**
     * Mozambique.
     */
    MZ = 'MZ',

    /**
     * Myanmar (Burma).
     */
    MM = 'MM',

    /**
     * Namibia.
     */
    NA = 'NA',

    /**
     * Nauru.
     */
    NR = 'NR',

    /**
     * Nepal.
     */
    NP = 'NP',

    /**
     * Netherlands.
     */
    NL = 'NL',

    /**
     * Netherlands Antilles.
     */
    AN = 'AN',

    /**
     * New Caledonia.
     */
    NC = 'NC',

    /**
     * New Zealand.
     */
    NZ = 'NZ',

    /**
     * Nicaragua.
     */
    NI = 'NI',

    /**
     * Niger.
     */
    NE = 'NE',

    /**
     * Nigeria.
     */
    NG = 'NG',

    /**
     * Niue.
     */
    NU = 'NU',

    /**
     * Norfolk Island.
     */
    NF = 'NF',

    /**
     * North Macedonia.
     */
    MK = 'MK',

    /**
     * Norway.
     */
    NO = 'NO',

    /**
     * Oman.
     */
    OM = 'OM',

    /**
     * Pakistan.
     */
    PK = 'PK',

    /**
     * Palestinian Territories.
     */
    PS = 'PS',

    /**
     * Panama.
     */
    PA = 'PA',

    /**
     * Papua New Guinea.
     */
    PG = 'PG',

    /**
     * Paraguay.
     */
    PY = 'PY',

    /**
     * Peru.
     */
    PE = 'PE',

    /**
     * Philippines.
     */
    PH = 'PH',

    /**
     * Pitcairn Islands.
     */
    PN = 'PN',

    /**
     * Poland.
     */
    PL = 'PL',

    /**
     * Portugal.
     */
    PT = 'PT',

    /**
     * Qatar.
     */
    QA = 'QA',

    /**
     * Cameroon.
     */
    CM = 'CM',

    /**
     * Réunion.
     */
    RE = 'RE',

    /**
     * Romania.
     */
    RO = 'RO',

    /**
     * Russia.
     */
    RU = 'RU',

    /**
     * Rwanda.
     */
    RW = 'RW',

    /**
     * St. Barthélemy.
     */
    BL = 'BL',

    /**
     * St. Helena.
     */
    SH = 'SH',

    /**
     * St. Kitts & Nevis.
     */
    KN = 'KN',

    /**
     * St. Lucia.
     */
    LC = 'LC',

    /**
     * St. Martin.
     */
    MF = 'MF',

    /**
     * St. Pierre & Miquelon.
     */
    PM = 'PM',

    /**
     * Samoa.
     */
    WS = 'WS',

    /**
     * San Marino.
     */
    SM = 'SM',

    /**
     * São Tomé & Príncipe.
     */
    ST = 'ST',

    /**
     * Saudi Arabia.
     */
    SA = 'SA',

    /**
     * Senegal.
     */
    SN = 'SN',

    /**
     * Serbia.
     */
    RS = 'RS',

    /**
     * Seychelles.
     */
    SC = 'SC',

    /**
     * Sierra Leone.
     */
    SL = 'SL',

    /**
     * Singapore.
     */
    SG = 'SG',

    /**
     * Sint Maarten.
     */
    SX = 'SX',

    /**
     * Slovakia.
     */
    SK = 'SK',

    /**
     * Slovenia.
     */
    SI = 'SI',

    /**
     * Solomon Islands.
     */
    SB = 'SB',

    /**
     * Somalia.
     */
    SO = 'SO',

    /**
     * South Africa.
     */
    ZA = 'ZA',

    /**
     * South Georgia & South Sandwich Islands.
     */
    GS = 'GS',

    /**
     * South Korea.
     */
    KR = 'KR',

    /**
     * South Sudan.
     */
    SS = 'SS',

    /**
     * Spain.
     */
    ES = 'ES',

    /**
     * Sri Lanka.
     */
    LK = 'LK',

    /**
     * St. Vincent & Grenadines.
     */
    VC = 'VC',

    /**
     * Sudan.
     */
    SD = 'SD',

    /**
     * Suriname.
     */
    SR = 'SR',

    /**
     * Svalbard & Jan Mayen.
     */
    SJ = 'SJ',

    /**
     * Sweden.
     */
    SE = 'SE',

    /**
     * Switzerland.
     */
    CH = 'CH',

    /**
     * Syria.
     */
    SY = 'SY',

    /**
     * Taiwan.
     */
    TW = 'TW',

    /**
     * Tajikistan.
     */
    TJ = 'TJ',

    /**
     * Tanzania.
     */
    TZ = 'TZ',

    /**
     * Thailand.
     */
    TH = 'TH',

    /**
     * Timor-Leste.
     */
    TL = 'TL',

    /**
     * Togo.
     */
    TG = 'TG',

    /**
     * Tokelau.
     */
    TK = 'TK',

    /**
     * Tonga.
     */
    TO = 'TO',

    /**
     * Trinidad & Tobago.
     */
    TT = 'TT',

    /**
     * Tunisia.
     */
    TN = 'TN',

    /**
     * Turkey.
     */
    TR = 'TR',

    /**
     * Turkmenistan.
     */
    TM = 'TM',

    /**
     * Turks & Caicos Islands.
     */
    TC = 'TC',

    /**
     * Tuvalu.
     */
    TV = 'TV',

    /**
     * Uganda.
     */
    UG = 'UG',

    /**
     * Ukraine.
     */
    UA = 'UA',

    /**
     * United Arab Emirates.
     */
    AE = 'AE',

    /**
     * United Kingdom.
     */
    GB = 'GB',

    /**
     * United States.
     */
    US = 'US',

    /**
     * U.S. Outlying Islands.
     */
    UM = 'UM',

    /**
     * Uruguay.
     */
    UY = 'UY',

    /**
     * Uzbekistan.
     */
    UZ = 'UZ',

    /**
     * Vanuatu.
     */
    VU = 'VU',

    /**
     * Venezuela.
     */
    VE = 'VE',

    /**
     * Vietnam.
     */
    VN = 'VN',

    /**
     * British Virgin Islands.
     */
    VG = 'VG',

    /**
     * Wallis & Futuna.
     */
    WF = 'WF',

    /**
     * Western Sahara.
     */
    EH = 'EH',

    /**
     * Yemen.
     */
    YE = 'YE',

    /**
     * Zambia.
     */
    ZM = 'ZM',

    /**
     * Zimbabwe.
     */
    ZW = 'ZW'
  }

  /**
   * A container for all the information required to checkout items and pay.
   */
export interface GQLCheckout extends GQLNode {

    /**
     * The gift cards used on the checkout.
     */
    appliedGiftCards: Array<GQLAppliedGiftCard>;

    /**
     * The available shipping rates for this Checkout.
     * Should only be used when checkout `requiresShipping` is `true` and
     * the shipping address is valid.
     */
    availableShippingRates?: GQLAvailableShippingRates;

    /**
     * The date and time when the checkout was completed.
     */
    completedAt?: GQLDateTime;

    /**
     * The date and time when the checkout was created.
     */
    createdAt: GQLDateTime;

    /**
     * The currency code for the Checkout.
     */
    currencyCode: GQLCurrencyCode;

    /**
     * A list of extra information that is added to the checkout.
     */
    customAttributes: Array<GQLAttribute>;

    /**
     * The customer associated with the checkout.
     * @deprecated This field will always return null. If you have an authentication token for the customer, you can use the `customer` field on the query root to retrieve it.
     */
    customer?: GQLCustomer;

    /**
     * Discounts that have been applied on the checkout.
     */
    discountApplications: GQLDiscountApplicationConnection;

    /**
     * The email attached to this checkout.
     */
    email?: string;

    /**
     * Globally unique identifier.
     */
    id: string;

    /**
     * A list of line item objects, each one containing information about an item in the checkout.
     */
    lineItems: GQLCheckoutLineItemConnection;

    /**
     * The sum of all the prices of all the items in the checkout. Taxes, shipping and discounts excluded.
     */
    lineItemsSubtotalPrice: GQLMoneyV2;

    /**
     * The note associated with the checkout.
     */
    note?: string;

    /**
     * The resulting order from a paid checkout.
     */
    order?: GQLOrder;

    /**
     * The Order Status Page for this Checkout, null when checkout is not completed.
     */
    orderStatusUrl?: GQLURL;

    /**
     * The amount left to be paid. This is equal to the cost of the line items, taxes
     * and shipping minus discounts and gift cards.
     * @deprecated Use `paymentDueV2` instead
     */
    paymentDue: GQLMoney;

    /**
     * The amount left to be paid. This is equal to the cost of the line items, taxes
     * and shipping minus discounts and gift cards.
     */
    paymentDueV2: GQLMoneyV2;

    /**
     * Whether or not the Checkout is ready and can be completed. Checkouts may
     * have asynchronous operations that can take time to finish. If you want
     * to complete a checkout or ensure all the fields are populated and up to
     * date, polling is required until the value is true.
     */
    ready: boolean;

    /**
     * States whether or not the fulfillment requires shipping.
     */
    requiresShipping: boolean;

    /**
     * The shipping address to where the line items will be shipped.
     */
    shippingAddress?: GQLMailingAddress;

    /**
     * The discounts that have been allocated onto the shipping line by discount applications.
     */
    shippingDiscountAllocations: Array<GQLDiscountAllocation>;

    /**
     * Once a shipping rate is selected by the customer it is transitioned to a `shipping_line` object.
     */
    shippingLine?: GQLShippingRate;

    /**
     * Price of the checkout before shipping and taxes.
     * @deprecated Use `subtotalPriceV2` instead
     */
    subtotalPrice: GQLMoney;

    /**
     * Price of the checkout before shipping and taxes.
     */
    subtotalPriceV2: GQLMoneyV2;

    /**
     * Specifies if the Checkout is tax exempt.
     */
    taxExempt: boolean;

    /**
     * Specifies if taxes are included in the line item and shipping line prices.
     */
    taxesIncluded: boolean;

    /**
     * The sum of all the prices of all the items in the checkout, taxes and discounts included.
     * @deprecated Use `totalPriceV2` instead
     */
    totalPrice: GQLMoney;

    /**
     * The sum of all the prices of all the items in the checkout, taxes and discounts included.
     */
    totalPriceV2: GQLMoneyV2;

    /**
     * The sum of all the taxes applied to the line items and shipping lines in the checkout.
     * @deprecated Use `totalTaxV2` instead
     */
    totalTax: GQLMoney;

    /**
     * The sum of all the taxes applied to the line items and shipping lines in the checkout.
     */
    totalTaxV2: GQLMoneyV2;

    /**
     * The date and time when the checkout was last updated.
     */
    updatedAt: GQLDateTime;

    /**
     * The url pointing to the checkout accessible from the web.
     */
    webUrl: GQLURL;
  }

  /**
   * Details about the gift card used on the checkout.
   */
export interface GQLAppliedGiftCard extends GQLNode {

    /**
     * The amount that was taken from the gift card by applying it.
     * @deprecated Use `amountUsedV2` instead
     */
    amountUsed: GQLMoney;

    /**
     * The amount that was taken from the gift card by applying it.
     */
    amountUsedV2: GQLMoneyV2;

    /**
     * The amount left on the gift card.
     * @deprecated Use `balanceV2` instead
     */
    balance: GQLMoney;

    /**
     * The amount left on the gift card.
     */
    balanceV2: GQLMoneyV2;

    /**
     * Globally unique identifier.
     */
    id: string;

    /**
     * The last characters of the gift card.
     */
    lastCharacters: string;

    /**
     * The amount that was applied to the checkout in its currency.
     */
    presentmentAmountUsed: GQLMoneyV2;
  }

  /**
   * A collection of available shipping rates for a checkout.
   */
export interface GQLAvailableShippingRates {

    /**
     * Whether or not the shipping rates are ready.
     * The `shippingRates` field is `null` when this value is `false`.
     * This field should be polled until its value becomes `true`.
     */
    ready: boolean;

    /**
     * The fetched shipping rates. `null` until the `ready` field is `true`.
     */
    shippingRates?: Array<GQLShippingRate>;
  }

  /**
   * A shipping rate to be applied to a checkout.
   */
export interface GQLShippingRate {

    /**
     * Human-readable unique identifier for this shipping rate.
     */
    handle: string;

    /**
     * Price of this shipping rate.
     * @deprecated Use `priceV2` instead
     */
    price: GQLMoney;

    /**
     * Price of this shipping rate.
     */
    priceV2: GQLMoneyV2;

    /**
     * Title of this shipping rate.
     */
    title: string;
  }

  /**
   * Represents a generic custom attribute.
   */
export interface GQLAttribute {

    /**
     * Key or name of the attribute.
     */
    key: string;

    /**
     * Value of the attribute.
     */
    value?: string;
  }

export interface GQLDiscountApplicationConnection {

    /**
     * A list of edges.
     */
    edges: Array<GQLDiscountApplicationEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: GQLPageInfo;
  }

export interface GQLDiscountApplicationEdge {

    /**
     * A cursor for use in pagination.
     */
    cursor: string;

    /**
     * The item at the end of DiscountApplicationEdge.
     */
    node: GQLDiscountApplication;
  }

  /**
   * Discount applications capture the intentions of a discount source at
   * the time of application.
   */
export interface GQLDiscountApplication {

    /**
     * The method by which the discount's value is allocated to its entitled items.
     */
    allocationMethod: GQLDiscountApplicationAllocationMethod;

    /**
     * Which lines of targetType that the discount is allocated over.
     */
    targetSelection: GQLDiscountApplicationTargetSelection;

    /**
     * The type of line that the discount is applicable towards.
     */
    targetType: GQLDiscountApplicationTargetType;

    /**
     * The value of the discount application.
     */
    value: GQLPricingValue;
  }

  /** Use this to resolve interface type DiscountApplication */
export type GQLPossibleDiscountApplicationTypeNames =
  'AutomaticDiscountApplication' |
  'DiscountCodeApplication' |
  'ManualDiscountApplication' |
  'ScriptDiscountApplication';

export interface GQLDiscountApplicationNameMap {
    DiscountApplication: GQLDiscountApplication;
    AutomaticDiscountApplication: GQLAutomaticDiscountApplication;
    DiscountCodeApplication: GQLDiscountCodeApplication;
    ManualDiscountApplication: GQLManualDiscountApplication;
    ScriptDiscountApplication: GQLScriptDiscountApplication;
  }

  /**
   * The method by which the discount's value is allocated onto its entitled lines.
   */
export enum GQLDiscountApplicationAllocationMethod {

    /**
     * The value is spread across all entitled lines.
     */
    ACROSS = 'ACROSS',

    /**
     * The value is applied onto every entitled line.
     */
    EACH = 'EACH',

    /**
     * The value is specifically applied onto a particular line.
     * @deprecated Use ACROSS instead.
     */
    ONE = 'ONE'
  }

  /**
   * Which lines on the order that the discount is allocated over, of the type
   * defined by the Discount Application's target_type.
   */
export enum GQLDiscountApplicationTargetSelection {

    /**
     * The discount is allocated onto all the lines.
     */
    ALL = 'ALL',

    /**
     * The discount is allocated onto only the lines it is entitled for.
     */
    ENTITLED = 'ENTITLED',

    /**
     * The discount is allocated onto explicitly chosen lines.
     */
    EXPLICIT = 'EXPLICIT'
  }

  /**
   * The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards.
   */
export enum GQLDiscountApplicationTargetType {

    /**
     * The discount applies onto line items.
     */
    LINE_ITEM = 'LINE_ITEM',

    /**
     * The discount applies onto shipping lines.
     */
    SHIPPING_LINE = 'SHIPPING_LINE'
  }

  /**
   * The price value (fixed or percentage) for a discount application.
   */
export type GQLPricingValue = GQLMoneyV2 | GQLPricingPercentageValue;

  /** Use this to resolve union type PricingValue */
export type GQLPossiblePricingValueTypeNames =
  'MoneyV2' |
  'PricingPercentageValue';

export interface GQLPricingValueNameMap {
    PricingValue: GQLPricingValue;
    MoneyV2: GQLMoneyV2;
    PricingPercentageValue: GQLPricingPercentageValue;
  }

  /**
   * The value of the percentage pricing object.
   */
export interface GQLPricingPercentageValue {

    /**
     * The percentage value of the object.
     */
    percentage: number;
  }

export interface GQLCheckoutLineItemConnection {

    /**
     * A list of edges.
     */
    edges: Array<GQLCheckoutLineItemEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: GQLPageInfo;
  }

export interface GQLCheckoutLineItemEdge {

    /**
     * A cursor for use in pagination.
     */
    cursor: string;

    /**
     * The item at the end of CheckoutLineItemEdge.
     */
    node: GQLCheckoutLineItem;
  }

  /**
   * A single line item in the checkout, grouped by variant and attributes.
   */
export interface GQLCheckoutLineItem extends GQLNode {

    /**
     * Extra information in the form of an array of Key-Value pairs about the line item.
     */
    customAttributes: Array<GQLAttribute>;

    /**
     * The discounts that have been allocated onto the checkout line item by discount applications.
     */
    discountAllocations: Array<GQLDiscountAllocation>;

    /**
     * Globally unique identifier.
     */
    id: string;

    /**
     * The quantity of the line item.
     */
    quantity: number;

    /**
     * Title of the line item. Defaults to the product's title.
     */
    title: string;

    /**
     * Unit price of the line item.
     */
    unitPrice?: GQLMoneyV2;

    /**
     * Product variant of the line item.
     */
    variant?: GQLProductVariant;
  }

  /**
   * An amount discounting the line that has been allocated by a discount.
   */
export interface GQLDiscountAllocation {

    /**
     * Amount of discount allocated.
     */
    allocatedAmount: GQLMoneyV2;

    /**
     * The discount this allocated amount originated from.
     */
    discountApplication: GQLDiscountApplication;
  }

  /**
   * An order is a customer’s completed request to purchase one or more products from
   * a shop. An order is created when a customer completes the checkout process,
   * during which time they provides an email address, billing address and payment information.
   */
export interface GQLOrder extends GQLNode {

    /**
     * Represents the reason for the order's cancellation. Returns null if the order wasn't canceled.
     */
    cancelReason?: GQLOrderCancelReason;

    /**
     * The date and time when the order was canceled. Returns null if the order wasn't canceled.
     */
    canceledAt?: GQLDateTime;

    /**
     * The code of the currency used for the payment.
     */
    currencyCode: GQLCurrencyCode;

    /**
     * The subtotal of line items and their discounts, excluding line items that have
     * been removed. Does not contain order-level discounts, shipping costs, or
     * shipping discounts. Taxes are not included unless the order is a
     * taxes-included order.
     */
    currentSubtotalPrice: GQLMoneyV2;

    /**
     * The total amount of the order, including taxes and discounts, minus amounts for line items that have been removed.
     */
    currentTotalPrice: GQLMoneyV2;

    /**
     * The total of all taxes applied to the order, excluding taxes for returned line items.
     */
    currentTotalTax: GQLMoneyV2;

    /**
     * The locale code in which this specific order happened.
     */
    customerLocale?: string;

    /**
     * The unique URL that the customer can use to access the order.
     */
    customerUrl?: GQLURL;

    /**
     * Discounts that have been applied on the order.
     */
    discountApplications: GQLDiscountApplicationConnection;

    /**
     * Whether the order has had any edits applied or not.
     */
    edited: boolean;

    /**
     * The customer's email address.
     */
    email?: string;

    /**
     * The financial status of the order.
     */
    financialStatus?: GQLOrderFinancialStatus;

    /**
     * The fulfillment status for the order.
     */
    fulfillmentStatus: GQLOrderFulfillmentStatus;

    /**
     * Globally unique identifier.
     */
    id: string;

    /**
     * List of the order’s line items.
     */
    lineItems: GQLOrderLineItemConnection;

    /**
     * Unique identifier for the order that appears on the order.
     * For example, _#1000_ or _Store1001.
     */
    name: string;

    /**
     * A unique numeric identifier for the order for use by shop owner and customer.
     */
    orderNumber: number;

    /**
     * The total price of the order before any applied edits.
     */
    originalTotalPrice: GQLMoneyV2;

    /**
     * The customer's phone number for receiving SMS notifications.
     */
    phone?: string;

    /**
     * The date and time when the order was imported.
     * This value can be set to dates in the past when importing from other systems.
     * If no value is provided, it will be auto-generated based on current date and time.
     */
    processedAt: GQLDateTime;

    /**
     * The address to where the order will be shipped.
     */
    shippingAddress?: GQLMailingAddress;

    /**
     * The discounts that have been allocated onto the shipping line by discount applications.
     */
    shippingDiscountAllocations: Array<GQLDiscountAllocation>;

    /**
     * The unique URL for the order's status page.
     */
    statusUrl: GQLURL;

    /**
     * Price of the order before shipping and taxes.
     * @deprecated Use `subtotalPriceV2` instead
     */
    subtotalPrice?: GQLMoney;

    /**
     * Price of the order before shipping and taxes.
     */
    subtotalPriceV2?: GQLMoneyV2;

    /**
     * List of the order’s successful fulfillments.
     */
    successfulFulfillments?: Array<GQLFulfillment>;

    /**
     * The sum of all the prices of all the items in the order, taxes and discounts included (must be positive).
     * @deprecated Use `totalPriceV2` instead
     */
    totalPrice: GQLMoney;

    /**
     * The sum of all the prices of all the items in the order, taxes and discounts included (must be positive).
     */
    totalPriceV2: GQLMoneyV2;

    /**
     * The total amount that has been refunded.
     * @deprecated Use `totalRefundedV2` instead
     */
    totalRefunded: GQLMoney;

    /**
     * The total amount that has been refunded.
     */
    totalRefundedV2: GQLMoneyV2;

    /**
     * The total cost of shipping.
     * @deprecated Use `totalShippingPriceV2` instead
     */
    totalShippingPrice: GQLMoney;

    /**
     * The total cost of shipping.
     */
    totalShippingPriceV2: GQLMoneyV2;

    /**
     * The total cost of taxes.
     * @deprecated Use `totalTaxV2` instead
     */
    totalTax?: GQLMoney;

    /**
     * The total cost of taxes.
     */
    totalTaxV2?: GQLMoneyV2;
  }

  /**
   * Represents the reason for the order's cancellation.
   */
export enum GQLOrderCancelReason {

    /**
     * The customer wanted to cancel the order.
     */
    CUSTOMER = 'CUSTOMER',

    /**
     * The order was fraudulent.
     */
    FRAUD = 'FRAUD',

    /**
     * There was insufficient inventory.
     */
    INVENTORY = 'INVENTORY',

    /**
     * Payment was declined.
     */
    DECLINED = 'DECLINED',

    /**
     * The order was canceled for an unlisted reason.
     */
    OTHER = 'OTHER'
  }

  /**
   * Represents the order's current financial status.
   */
export enum GQLOrderFinancialStatus {

    /**
     * Displayed as **Pending**.
     */
    PENDING = 'PENDING',

    /**
     * Displayed as **Authorized**.
     */
    AUTHORIZED = 'AUTHORIZED',

    /**
     * Displayed as **Partially paid**.
     */
    PARTIALLY_PAID = 'PARTIALLY_PAID',

    /**
     * Displayed as **Partially refunded**.
     */
    PARTIALLY_REFUNDED = 'PARTIALLY_REFUNDED',

    /**
     * Displayed as **Voided**.
     */
    VOIDED = 'VOIDED',

    /**
     * Displayed as **Paid**.
     */
    PAID = 'PAID',

    /**
     * Displayed as **Refunded**.
     */
    REFUNDED = 'REFUNDED'
  }

  /**
   * Represents the order's current fulfillment status.
   */
export enum GQLOrderFulfillmentStatus {

    /**
     * Displayed as **Unfulfilled**.
     */
    UNFULFILLED = 'UNFULFILLED',

    /**
     * Displayed as **Partially fulfilled**.
     */
    PARTIALLY_FULFILLED = 'PARTIALLY_FULFILLED',

    /**
     * Displayed as **Fulfilled**.
     */
    FULFILLED = 'FULFILLED',

    /**
     * Displayed as **Restocked**.
     */
    RESTOCKED = 'RESTOCKED',

    /**
     * Displayed as **Pending fulfillment**.
     */
    PENDING_FULFILLMENT = 'PENDING_FULFILLMENT',

    /**
     * Displayed as **Open**.
     */
    OPEN = 'OPEN',

    /**
     * Displayed as **In progress**.
     */
    IN_PROGRESS = 'IN_PROGRESS'
  }

export interface GQLOrderLineItemConnection {

    /**
     * A list of edges.
     */
    edges: Array<GQLOrderLineItemEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: GQLPageInfo;
  }

export interface GQLOrderLineItemEdge {

    /**
     * A cursor for use in pagination.
     */
    cursor: string;

    /**
     * The item at the end of OrderLineItemEdge.
     */
    node: GQLOrderLineItem;
  }

  /**
   * Represents a single line in an order. There is one line item for each distinct product variant.
   */
export interface GQLOrderLineItem {

    /**
     * The number of entries associated to the line item minus the items that have been removed.
     */
    currentQuantity: number;

    /**
     * List of custom attributes associated to the line item.
     */
    customAttributes: Array<GQLAttribute>;

    /**
     * The discounts that have been allocated onto the order line item by discount applications.
     */
    discountAllocations: Array<GQLDiscountAllocation>;

    /**
     * The total price of the line item, including discounts, and displayed in the presentment currency.
     */
    discountedTotalPrice: GQLMoneyV2;

    /**
     * The total price of the line item, not including any discounts. The total price
     * is calculated using the original unit price multiplied by the quantity, and it
     * is displayed in the presentment currency.
     */
    originalTotalPrice: GQLMoneyV2;

    /**
     * The number of products variants associated to the line item.
     */
    quantity: number;

    /**
     * The title of the product combined with title of the variant.
     */
    title: string;

    /**
     * The product variant object associated to the line item.
     */
    variant?: GQLProductVariant;
  }

  /**
   * Represents a single fulfillment in an order.
   */
export interface GQLFulfillment {

    /**
     * List of the fulfillment's line items.
     */
    fulfillmentLineItems: GQLFulfillmentLineItemConnection;

    /**
     * The name of the tracking company.
     */
    trackingCompany?: string;

    /**
     * Tracking information associated with the fulfillment,
     * such as the tracking number and tracking URL.
     */
    trackingInfo: Array<GQLFulfillmentTrackingInfo>;
  }

export interface GQLFulfillmentLineItemConnection {

    /**
     * A list of edges.
     */
    edges: Array<GQLFulfillmentLineItemEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: GQLPageInfo;
  }

export interface GQLFulfillmentLineItemEdge {

    /**
     * A cursor for use in pagination.
     */
    cursor: string;

    /**
     * The item at the end of FulfillmentLineItemEdge.
     */
    node: GQLFulfillmentLineItem;
  }

  /**
   * Represents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item.
   */
export interface GQLFulfillmentLineItem {

    /**
     * The associated order's line item.
     */
    lineItem: GQLOrderLineItem;

    /**
     * The amount fulfilled in this fulfillment.
     */
    quantity: number;
  }

  /**
   * Tracking information associated with the fulfillment.
   */
export interface GQLFulfillmentTrackingInfo {

    /**
     * The tracking number of the fulfillment.
     */
    number?: string;

    /**
     * The URL to track the fulfillment.
     */
    url?: GQLURL;
  }

  /**
   * The set of valid sort keys for the Order query.
   */
export enum GQLOrderSortKeys {

    /**
     * Sort by the `processed_at` value.
     */
    PROCESSED_AT = 'PROCESSED_AT',

    /**
     * Sort by the `total_price` value.
     */
    TOTAL_PRICE = 'TOTAL_PRICE',

    /**
     * Sort by the `id` value.
     */
    ID = 'ID',

    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    RELEVANCE = 'RELEVANCE'
  }

export interface GQLOrderConnection {

    /**
     * A list of edges.
     */
    edges: Array<GQLOrderEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: GQLPageInfo;
  }

export interface GQLOrderEdge {

    /**
     * A cursor for use in pagination.
     */
    cursor: string;

    /**
     * The item at the end of OrderEdge.
     */
    node: GQLOrder;
  }

  /**
   * Shopify merchants can create pages to hold static HTML content. Each Page object
   * represents a custom page on the online store.
   */
export interface GQLPage extends GQLNode {

    /**
     * The description of the page, complete with HTML formatting.
     */
    body: GQLHTML;

    /**
     * Summary of the page body.
     */
    bodySummary: string;

    /**
     * The timestamp of the page creation.
     */
    createdAt: GQLDateTime;

    /**
     * A human-friendly unique string for the page automatically generated from its title.
     */
    handle: string;

    /**
     * Globally unique identifier.
     */
    id: string;

    /**
     * The title of the page.
     */
    title: string;

    /**
     * The timestamp of the latest page update.
     */
    updatedAt: GQLDateTime;

    /**
     * The url pointing to the page accessible from the web.
     */
    url: GQLURL;
  }

  /**
   * The set of valid sort keys for the Page query.
   */
export enum GQLPageSortKeys {

    /**
     * Sort by the `title` value.
     */
    TITLE = 'TITLE',

    /**
     * Sort by the `updated_at` value.
     */
    UPDATED_AT = 'UPDATED_AT',

    /**
     * Sort by the `id` value.
     */
    ID = 'ID',

    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    RELEVANCE = 'RELEVANCE'
  }

export interface GQLPageConnection {

    /**
     * A list of edges.
     */
    edges: Array<GQLPageEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: GQLPageInfo;
  }

export interface GQLPageEdge {

    /**
     * A cursor for use in pagination.
     */
    cursor: string;

    /**
     * The item at the end of PageEdge.
     */
    node: GQLPage;
  }

export interface GQLStringConnection {

    /**
     * A list of edges.
     */
    edges: Array<GQLStringEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: GQLPageInfo;
  }

export interface GQLStringEdge {

    /**
     * A cursor for use in pagination.
     */
    cursor: string;

    /**
     * The item at the end of StringEdge.
     */
    node: string;
  }

  /**
   * The set of valid sort keys for the Product query.
   */
export enum GQLProductSortKeys {

    /**
     * Sort by the `title` value.
     */
    TITLE = 'TITLE',

    /**
     * Sort by the `product_type` value.
     */
    PRODUCT_TYPE = 'PRODUCT_TYPE',

    /**
     * Sort by the `vendor` value.
     */
    VENDOR = 'VENDOR',

    /**
     * Sort by the `updated_at` value.
     */
    UPDATED_AT = 'UPDATED_AT',

    /**
     * Sort by the `created_at` value.
     */
    CREATED_AT = 'CREATED_AT',

    /**
     * Sort by the `best_selling` value.
     */
    BEST_SELLING = 'BEST_SELLING',

    /**
     * Sort by the `price` value.
     */
    PRICE = 'PRICE',

    /**
     * Sort by the `id` value.
     */
    ID = 'ID',

    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    RELEVANCE = 'RELEVANCE'
  }

  /**
   * A version of the API.
   */
export interface GQLApiVersion {

    /**
     * The human-readable name of the version.
     */
    displayName: string;

    /**
     * The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle.
     */
    handle: string;

    /**
     * Whether the version is supported by Shopify.
     */
    supported: boolean;
  }

  /**
   * Shop represents a collection of the general settings and information about the shop.
   */
export interface GQLShop {

    /**
     * List of the shop' articles.
     * @deprecated Use `QueryRoot.articles` instead.
     */
    articles: GQLArticleConnection;

    /**
     * List of the shop' blogs.
     * @deprecated Use `QueryRoot.blogs` instead.
     */
    blogs: GQLBlogConnection;

    /**
     * Find a collection by its handle.
     * @deprecated Use `QueryRoot.collectionByHandle` instead.
     */
    collectionByHandle?: GQLCollection;

    /**
     * List of the shop’s collections.
     * @deprecated Use `QueryRoot.collections` instead.
     */
    collections: GQLCollectionConnection;

    /**
     * The three-letter code for the currency that the shop accepts.
     * @deprecated Use `paymentSettings` instead
     */
    currencyCode: GQLCurrencyCode;

    /**
     * A description of the shop.
     */
    description?: string;

    /**
     * A string representing the way currency is formatted when the currency isn’t specified.
     */
    moneyFormat: string;

    /**
     * The shop’s name.
     */
    name: string;

    /**
     * Settings related to payments.
     */
    paymentSettings: GQLPaymentSettings;

    /**
     * The shop’s primary domain.
     */
    primaryDomain: GQLDomain;

    /**
     * The shop’s privacy policy.
     */
    privacyPolicy?: GQLShopPolicy;

    /**
     * Find a product by its handle.
     * @deprecated Use `QueryRoot.productByHandle` instead.
     */
    productByHandle?: GQLProduct;

    /**
     * A comma separated list of tags that have been added to products.
     * Additional access scope required: unauthenticated_read_product_tags.
     * @deprecated Use `QueryRoot.productTags` instead.
     */
    productTags: GQLStringConnection;

    /**
     * List of the shop’s product types.
     * @deprecated Use `QueryRoot.productTypes` instead.
     */
    productTypes: GQLStringConnection;

    /**
     * List of the shop’s products.
     * @deprecated Use `QueryRoot.products` instead.
     */
    products: GQLProductConnection;

    /**
     * The shop’s refund policy.
     */
    refundPolicy?: GQLShopPolicy;

    /**
     * Countries that the shop ships to.
     */
    shipsToCountries: Array<GQLCountryCode>;

    /**
     * The shop’s Shopify Payments account id.
     * @deprecated Use `paymentSettings` instead
     */
    shopifyPaymentsAccountId?: string;

    /**
     * The shop’s terms of service.
     */
    termsOfService?: GQLShopPolicy;
  }

  /**
   * Settings related to payments.
   */
export interface GQLPaymentSettings {

    /**
     * List of the card brands which the shop accepts.
     */
    acceptedCardBrands: Array<GQLCardBrand>;

    /**
     * The url pointing to the endpoint to vault credit cards.
     */
    cardVaultUrl: GQLURL;

    /**
     * The country where the shop is located.
     */
    countryCode: GQLCountryCode;

    /**
     * The three-letter code for the shop's primary currency.
     */
    currencyCode: GQLCurrencyCode;

    /**
     * A list of enabled currencies (ISO 4217 format) that the shop accepts.
     * Merchants can enable currencies from their Shopify Payments settings in the Shopify admin.
     */
    enabledPresentmentCurrencies: Array<GQLCurrencyCode>;

    /**
     * The shop’s Shopify Payments account id.
     */
    shopifyPaymentsAccountId?: string;

    /**
     * List of the digital wallets which the shop supports.
     */
    supportedDigitalWallets: Array<GQLDigitalWallet>;
  }

  /**
   * Card brand, such as Visa or Mastercard, which can be used for payments.
   */
export enum GQLCardBrand {

    /**
     * Visa
     */
    VISA = 'VISA',

    /**
     * Mastercard
     */
    MASTERCARD = 'MASTERCARD',

    /**
     * Discover
     */
    DISCOVER = 'DISCOVER',

    /**
     * American Express
     */
    AMERICAN_EXPRESS = 'AMERICAN_EXPRESS',

    /**
     * Diners Club
     */
    DINERS_CLUB = 'DINERS_CLUB',

    /**
     * JCB
     */
    JCB = 'JCB'
  }

  /**
   * Digital wallet, such as Apple Pay, which can be used for accelerated checkouts.
   */
export enum GQLDigitalWallet {

    /**
     * Apple Pay.
     */
    APPLE_PAY = 'APPLE_PAY',

    /**
     * Android Pay.
     */
    ANDROID_PAY = 'ANDROID_PAY',

    /**
     * Google Pay.
     */
    GOOGLE_PAY = 'GOOGLE_PAY',

    /**
     * Shopify Pay.
     */
    SHOPIFY_PAY = 'SHOPIFY_PAY'
  }

  /**
   * Represents a web address.
   */
export interface GQLDomain {

    /**
     * The host name of the domain (eg: `example.com`).
     */
    host: string;

    /**
     * Whether SSL is enabled or not.
     */
    sslEnabled: boolean;

    /**
     * The URL of the domain (eg: `https://example.com`).
     */
    url: GQLURL;
  }

  /**
   * Policy that a merchant has configured for their store, such as their refund or privacy policy.
   */
export interface GQLShopPolicy extends GQLNode {

    /**
     * Policy text, maximum size of 64kb.
     */
    body: string;

    /**
     * Policy’s handle.
     */
    handle: string;

    /**
     * Globally unique identifier.
     */
    id: string;

    /**
     * Policy’s title.
     */
    title: string;

    /**
     * Public URL to the policy.
     */
    url: GQLURL;
  }

  /**
   * The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start.
   */
export interface GQLMutation {

    /**
     * Updates the attributes of a checkout.
     * @deprecated Use `checkoutAttributesUpdateV2` instead
     */
    checkoutAttributesUpdate?: GQLCheckoutAttributesUpdatePayload;

    /**
     * Updates the attributes of a checkout.
     */
    checkoutAttributesUpdateV2?: GQLCheckoutAttributesUpdateV2Payload;

    /**
     * Completes a checkout without providing payment information. You can use this
     * mutation for free items or items whose purchase price is covered by a gift card.
     */
    checkoutCompleteFree?: GQLCheckoutCompleteFreePayload;

    /**
     * Completes a checkout using a credit card token from Shopify's Vault.
     * @deprecated Use `checkoutCompleteWithCreditCardV2` instead
     */
    checkoutCompleteWithCreditCard?: GQLCheckoutCompleteWithCreditCardPayload;

    /**
     * Completes a checkout using a credit card token from Shopify's card vault.
     * Before you can complete checkouts using CheckoutCompleteWithCreditCardV2, you
     * need to  [_request payment processing_](https://help.shopify.com/api/guides/sales-channel-sdk/getting-started#request-payment-processing).
     */
    checkoutCompleteWithCreditCardV2?: GQLCheckoutCompleteWithCreditCardV2Payload;

    /**
     * Completes a checkout with a tokenized payment.
     * @deprecated Use `checkoutCompleteWithTokenizedPaymentV2` instead
     */
    checkoutCompleteWithTokenizedPayment?: GQLCheckoutCompleteWithTokenizedPaymentPayload;

    /**
     * Completes a checkout with a tokenized payment.
     * @deprecated Use `checkoutCompleteWithTokenizedPaymentV3` instead
     */
    checkoutCompleteWithTokenizedPaymentV2?: GQLCheckoutCompleteWithTokenizedPaymentV2Payload;

    /**
     * Completes a checkout with a tokenized payment.
     */
    checkoutCompleteWithTokenizedPaymentV3?: GQLCheckoutCompleteWithTokenizedPaymentV3Payload;

    /**
     * Creates a new checkout.
     */
    checkoutCreate?: GQLCheckoutCreatePayload;

    /**
     * Associates a customer to the checkout.
     * @deprecated Use `checkoutCustomerAssociateV2` instead
     */
    checkoutCustomerAssociate?: GQLCheckoutCustomerAssociatePayload;

    /**
     * Associates a customer to the checkout.
     */
    checkoutCustomerAssociateV2?: GQLCheckoutCustomerAssociateV2Payload;

    /**
     * Disassociates the current checkout customer from the checkout.
     * @deprecated Use `checkoutCustomerDisassociateV2` instead
     */
    checkoutCustomerDisassociate?: GQLCheckoutCustomerDisassociatePayload;

    /**
     * Disassociates the current checkout customer from the checkout.
     */
    checkoutCustomerDisassociateV2?: GQLCheckoutCustomerDisassociateV2Payload;

    /**
     * Applies a discount to an existing checkout using a discount code.
     * @deprecated Use `checkoutDiscountCodeApplyV2` instead
     */
    checkoutDiscountCodeApply?: GQLCheckoutDiscountCodeApplyPayload;

    /**
     * Applies a discount to an existing checkout using a discount code.
     */
    checkoutDiscountCodeApplyV2?: GQLCheckoutDiscountCodeApplyV2Payload;

    /**
     * Removes the applied discount from an existing checkout.
     */
    checkoutDiscountCodeRemove?: GQLCheckoutDiscountCodeRemovePayload;

    /**
     * Updates the email on an existing checkout.
     * @deprecated Use `checkoutEmailUpdateV2` instead
     */
    checkoutEmailUpdate?: GQLCheckoutEmailUpdatePayload;

    /**
     * Updates the email on an existing checkout.
     */
    checkoutEmailUpdateV2?: GQLCheckoutEmailUpdateV2Payload;

    /**
     * Applies a gift card to an existing checkout using a gift card code. This will replace all currently applied gift cards.
     * @deprecated Use `checkoutGiftCardsAppend` instead
     */
    checkoutGiftCardApply?: GQLCheckoutGiftCardApplyPayload;

    /**
     * Removes an applied gift card from the checkout.
     * @deprecated Use `checkoutGiftCardRemoveV2` instead
     */
    checkoutGiftCardRemove?: GQLCheckoutGiftCardRemovePayload;

    /**
     * Removes an applied gift card from the checkout.
     */
    checkoutGiftCardRemoveV2?: GQLCheckoutGiftCardRemoveV2Payload;

    /**
     * Appends gift cards to an existing checkout.
     */
    checkoutGiftCardsAppend?: GQLCheckoutGiftCardsAppendPayload;

    /**
     * Adds a list of line items to a checkout.
     * @deprecated Use `checkoutLineItemsReplace` instead
     */
    checkoutLineItemsAdd?: GQLCheckoutLineItemsAddPayload;

    /**
     * Removes line items from an existing checkout.
     * @deprecated Use `checkoutLineItemsReplace` instead
     */
    checkoutLineItemsRemove?: GQLCheckoutLineItemsRemovePayload;

    /**
     * Sets a list of line items to a checkout.
     */
    checkoutLineItemsReplace?: GQLCheckoutLineItemsReplacePayload;

    /**
     * Updates line items on a checkout.
     * @deprecated Use `checkoutLineItemsReplace` instead
     */
    checkoutLineItemsUpdate?: GQLCheckoutLineItemsUpdatePayload;

    /**
     * Updates the shipping address of an existing checkout.
     * @deprecated Use `checkoutShippingAddressUpdateV2` instead
     */
    checkoutShippingAddressUpdate?: GQLCheckoutShippingAddressUpdatePayload;

    /**
     * Updates the shipping address of an existing checkout.
     */
    checkoutShippingAddressUpdateV2?: GQLCheckoutShippingAddressUpdateV2Payload;

    /**
     * Updates the shipping lines on an existing checkout.
     */
    checkoutShippingLineUpdate?: GQLCheckoutShippingLineUpdatePayload;

    /**
     * Creates a customer access token.
     * The customer access token is required to modify the customer object in any way.
     */
    customerAccessTokenCreate?: GQLCustomerAccessTokenCreatePayload;

    /**
     * Creates a customer access token using a multipass token instead of email and password.
     * A customer record is created if customer does not exist. If a customer record already
     * exists but the record is disabled, then it's enabled.
     */
    customerAccessTokenCreateWithMultipass?: GQLCustomerAccessTokenCreateWithMultipassPayload;

    /**
     * Permanently destroys a customer access token.
     */
    customerAccessTokenDelete?: GQLCustomerAccessTokenDeletePayload;

    /**
     * Renews a customer access token.
     *
     * Access token renewal must happen *before* a token expires.
     * If a token has already expired, a new one should be created instead via `customerAccessTokenCreate`.
     */
    customerAccessTokenRenew?: GQLCustomerAccessTokenRenewPayload;

    /**
     * Activates a customer.
     */
    customerActivate?: GQLCustomerActivatePayload;

    /**
     * Activates a customer with the activation url received from `customerCreate`.
     */
    customerActivateByUrl?: GQLCustomerActivateByUrlPayload;

    /**
     * Creates a new address for a customer.
     */
    customerAddressCreate?: GQLCustomerAddressCreatePayload;

    /**
     * Permanently deletes the address of an existing customer.
     */
    customerAddressDelete?: GQLCustomerAddressDeletePayload;

    /**
     * Updates the address of an existing customer.
     */
    customerAddressUpdate?: GQLCustomerAddressUpdatePayload;

    /**
     * Creates a new customer.
     */
    customerCreate?: GQLCustomerCreatePayload;

    /**
     * Updates the default address of an existing customer.
     */
    customerDefaultAddressUpdate?: GQLCustomerDefaultAddressUpdatePayload;

    /**
     * Sends a reset password email to the customer, as the first step in the reset password process.
     */
    customerRecover?: GQLCustomerRecoverPayload;

    /**
     * Resets a customer’s password with a token received from `CustomerRecover`.
     */
    customerReset?: GQLCustomerResetPayload;

    /**
     * Resets a customer’s password with the reset password url received from `CustomerRecover`.
     */
    customerResetByUrl?: GQLCustomerResetByUrlPayload;

    /**
     * Updates an existing customer.
     */
    customerUpdate?: GQLCustomerUpdatePayload;
  }

  /**
   * Specifies the fields required to update a checkout's attributes.
   */
export interface GQLCheckoutAttributesUpdateInput {

    /**
     * The text of an optional note that a shop owner can attach to the checkout.
     */
    note?: string;

    /**
     * A list of extra information that is added to the checkout.
     */
    customAttributes?: Array<GQLAttributeInput>;

    /**
     * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
     * The required attributes are city, province, and country.
     * Full validation of the addresses is still done at complete time.
     */
    allowPartialAddresses?: boolean;
  }

  /**
   * Specifies the input fields required for an attribute.
   */
export interface GQLAttributeInput {

    /**
     * Key or name of the attribute.
     */
    key: string;

    /**
     * Value of the attribute.
     */
    value: string;
  }

  /**
   * Return type for `checkoutAttributesUpdate` mutation.
   */
export interface GQLCheckoutAttributesUpdatePayload {

    /**
     * The updated checkout object.
     */
    checkout: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Represents an error that happens during execution of a checkout mutation.
   */
export interface GQLCheckoutUserError extends GQLDisplayableError {

    /**
     * Error code to uniquely identify the error.
     */
    code?: GQLCheckoutErrorCode;

    /**
     * Path to the input field which caused the error.
     */
    field?: Array<string>;

    /**
     * The error message.
     */
    message: string;
  }

  /**
   * Represents an error in the input of a mutation.
   */
export interface GQLDisplayableError {

    /**
     * Path to the input field which caused the error.
     */
    field?: Array<string>;

    /**
     * The error message.
     */
    message: string;
  }

  /** Use this to resolve interface type DisplayableError */
export type GQLPossibleDisplayableErrorTypeNames =
  'CheckoutUserError' |
  'UserError' |
  'CustomerUserError';

export interface GQLDisplayableErrorNameMap {
    DisplayableError: GQLDisplayableError;
    CheckoutUserError: GQLCheckoutUserError;
    UserError: GQLUserError;
    CustomerUserError: GQLCustomerUserError;
  }

  /**
   * Possible error codes that could be returned by CheckoutUserError.
   */
export enum GQLCheckoutErrorCode {

    /**
     * Input value is blank.
     */
    BLANK = 'BLANK',

    /**
     * Input value is invalid.
     */
    INVALID = 'INVALID',

    /**
     * Input value is too long.
     */
    TOO_LONG = 'TOO_LONG',

    /**
     * Input value is not present.
     */
    PRESENT = 'PRESENT',

    /**
     * Input value should be less than maximum allowed value.
     */
    LESS_THAN = 'LESS_THAN',

    /**
     * Input value should be greater than or equal to minimum allowed value.
     */
    GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO',

    /**
     * Input value should be less or equal to maximum allowed value.
     */
    LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO',

    /**
     * Checkout is already completed.
     */
    ALREADY_COMPLETED = 'ALREADY_COMPLETED',

    /**
     * Checkout is locked.
     */
    LOCKED = 'LOCKED',

    /**
     * Input value is not supported.
     */
    NOT_SUPPORTED = 'NOT_SUPPORTED',

    /**
     * Input email contains an invalid domain name.
     */
    BAD_DOMAIN = 'BAD_DOMAIN',

    /**
     * Input Zip is invalid for country provided.
     */
    INVALID_FOR_COUNTRY = 'INVALID_FOR_COUNTRY',

    /**
     * Input Zip is invalid for country and province provided.
     */
    INVALID_FOR_COUNTRY_AND_PROVINCE = 'INVALID_FOR_COUNTRY_AND_PROVINCE',

    /**
     * Invalid state in country.
     */
    INVALID_STATE_IN_COUNTRY = 'INVALID_STATE_IN_COUNTRY',

    /**
     * Invalid province in country.
     */
    INVALID_PROVINCE_IN_COUNTRY = 'INVALID_PROVINCE_IN_COUNTRY',

    /**
     * Invalid region in country.
     */
    INVALID_REGION_IN_COUNTRY = 'INVALID_REGION_IN_COUNTRY',

    /**
     * Shipping rate expired.
     */
    SHIPPING_RATE_EXPIRED = 'SHIPPING_RATE_EXPIRED',

    /**
     * Gift card cannot be applied to a checkout that contains a gift card.
     */
    GIFT_CARD_UNUSABLE = 'GIFT_CARD_UNUSABLE',

    /**
     * Gift card is disabled.
     */
    GIFT_CARD_DISABLED = 'GIFT_CARD_DISABLED',

    /**
     * Gift card code is invalid.
     */
    GIFT_CARD_CODE_INVALID = 'GIFT_CARD_CODE_INVALID',

    /**
     * Gift card has already been applied.
     */
    GIFT_CARD_ALREADY_APPLIED = 'GIFT_CARD_ALREADY_APPLIED',

    /**
     * Gift card currency does not match checkout currency.
     */
    GIFT_CARD_CURRENCY_MISMATCH = 'GIFT_CARD_CURRENCY_MISMATCH',

    /**
     * Gift card is expired.
     */
    GIFT_CARD_EXPIRED = 'GIFT_CARD_EXPIRED',

    /**
     * Gift card has no funds left.
     */
    GIFT_CARD_DEPLETED = 'GIFT_CARD_DEPLETED',

    /**
     * Gift card was not found.
     */
    GIFT_CARD_NOT_FOUND = 'GIFT_CARD_NOT_FOUND',

    /**
     * Cart does not meet discount requirements notice.
     */
    CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE = 'CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE',

    /**
     * Discount expired.
     */
    DISCOUNT_EXPIRED = 'DISCOUNT_EXPIRED',

    /**
     * Discount disabled.
     */
    DISCOUNT_DISABLED = 'DISCOUNT_DISABLED',

    /**
     * Discount limit reached.
     */
    DISCOUNT_LIMIT_REACHED = 'DISCOUNT_LIMIT_REACHED',

    /**
     * Discount not found.
     */
    DISCOUNT_NOT_FOUND = 'DISCOUNT_NOT_FOUND',

    /**
     * Customer already used once per customer discount notice.
     */
    CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE = 'CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE',

    /**
     * Checkout is already completed.
     */
    EMPTY = 'EMPTY',

    /**
     * Not enough in stock.
     */
    NOT_ENOUGH_IN_STOCK = 'NOT_ENOUGH_IN_STOCK',

    /**
     * Missing payment input.
     */
    MISSING_PAYMENT_INPUT = 'MISSING_PAYMENT_INPUT',

    /**
     * The amount of the payment does not match the value to be paid.
     */
    TOTAL_PRICE_MISMATCH = 'TOTAL_PRICE_MISMATCH',

    /**
     * Line item was not found in checkout.
     */
    LINE_ITEM_NOT_FOUND = 'LINE_ITEM_NOT_FOUND',

    /**
     * Unable to apply discount.
     */
    UNABLE_TO_APPLY = 'UNABLE_TO_APPLY'
  }

  /**
   * Represents an error in the input of a mutation.
   */
export interface GQLUserError extends GQLDisplayableError {

    /**
     * Path to the input field which caused the error.
     */
    field?: Array<string>;

    /**
     * The error message.
     */
    message: string;
  }

  /**
   * Specifies the fields required to update a checkout's attributes.
   */
export interface GQLCheckoutAttributesUpdateV2Input {

    /**
     * The text of an optional note that a shop owner can attach to the checkout.
     */
    note?: string;

    /**
     * A list of extra information that is added to the checkout.
     */
    customAttributes?: Array<GQLAttributeInput>;

    /**
     * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
     * The required attributes are city, province, and country.
     * Full validation of the addresses is still done at complete time.
     */
    allowPartialAddresses?: boolean;
  }

  /**
   * Return type for `checkoutAttributesUpdateV2` mutation.
   */
export interface GQLCheckoutAttributesUpdateV2Payload {

    /**
     * The updated checkout object.
     */
    checkout?: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `checkoutCompleteFree` mutation.
   */
export interface GQLCheckoutCompleteFreePayload {

    /**
     * The updated checkout object.
     */
    checkout?: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Specifies the fields required to complete a checkout with
   * a Shopify vaulted credit card payment.
   */
export interface GQLCreditCardPaymentInput {

    /**
     * The amount of the payment.
     */
    amount: GQLMoney;

    /**
     * A unique client generated key used to avoid duplicate charges. When a
     * duplicate payment is found, the original is returned instead of creating a new one.
     */
    idempotencyKey: string;

    /**
     * The billing address for the payment.
     */
    billingAddress: GQLMailingAddressInput;

    /**
     * The ID returned by Shopify's Card Vault.
     */
    vaultId: string;

    /**
     * Executes the payment in test mode if possible. Defaults to `false`.
     */
    test?: boolean;
  }

  /**
   * Specifies the fields accepted to create or update a mailing address.
   */
export interface GQLMailingAddressInput {

    /**
     * The first line of the address. Typically the street address or PO Box number.
     */
    address1?: string;

    /**
     * The second line of the address. Typically the number of the apartment, suite, or unit.
     */
    address2?: string;

    /**
     * The name of the city, district, village, or town.
     */
    city?: string;

    /**
     * The name of the customer's company or organization.
     */
    company?: string;

    /**
     * The name of the country.
     */
    country?: string;

    /**
     * The first name of the customer.
     */
    firstName?: string;

    /**
     * The last name of the customer.
     */
    lastName?: string;

    /**
     * A unique phone number for the customer.
     *
     * Formatted using E.164 standard. For example, _+16135551111_.
     */
    phone?: string;

    /**
     * The region of the address, such as the province, state, or district.
     */
    province?: string;

    /**
     * The zip or postal code of the address.
     */
    zip?: string;
  }

  /**
   * Return type for `checkoutCompleteWithCreditCard` mutation.
   */
export interface GQLCheckoutCompleteWithCreditCardPayload {

    /**
     * The checkout on which the payment was applied.
     */
    checkout: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * A representation of the attempted payment.
     */
    payment?: GQLPayment;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * A payment applied to a checkout.
   */
export interface GQLPayment extends GQLNode {

    /**
     * The amount of the payment.
     * @deprecated Use `amountV2` instead
     */
    amount: GQLMoney;

    /**
     * The amount of the payment.
     */
    amountV2: GQLMoneyV2;

    /**
     * The billing address for the payment.
     */
    billingAddress?: GQLMailingAddress;

    /**
     * The checkout to which the payment belongs.
     */
    checkout: GQLCheckout;

    /**
     * The credit card used for the payment in the case of direct payments.
     */
    creditCard?: GQLCreditCard;

    /**
     * A message describing a processing error during asynchronous processing.
     */
    errorMessage?: string;

    /**
     * Globally unique identifier.
     */
    id: string;

    /**
     * A client-side generated token to identify a payment and perform idempotent operations.
     */
    idempotencyKey?: string;

    /**
     * The URL where the customer needs to be redirected so they can complete the 3D Secure payment flow.
     */
    nextActionUrl?: GQLURL;

    /**
     * Whether or not the payment is still processing asynchronously.
     */
    ready: boolean;

    /**
     * A flag to indicate if the payment is to be done in test mode for gateways that support it.
     */
    test: boolean;

    /**
     * The actual transaction recorded by Shopify after having processed the payment with the gateway.
     */
    transaction?: GQLTransaction;
  }

  /**
   * Credit card information used for a payment.
   */
export interface GQLCreditCard {

    /**
     * The brand of the credit card.
     */
    brand?: string;

    /**
     * The expiry month of the credit card.
     */
    expiryMonth?: number;

    /**
     * The expiry year of the credit card.
     */
    expiryYear?: number;

    /**
     * The credit card's BIN number.
     */
    firstDigits?: string;

    /**
     * The first name of the card holder.
     */
    firstName?: string;

    /**
     * The last 4 digits of the credit card.
     */
    lastDigits?: string;

    /**
     * The last name of the card holder.
     */
    lastName?: string;

    /**
     * The masked credit card number with only the last 4 digits displayed.
     */
    maskedNumber?: string;
  }

  /**
   * An object representing exchange of money for a product or service.
   */
export interface GQLTransaction {

    /**
     * The amount of money that the transaction was for.
     * @deprecated Use `amountV2` instead
     */
    amount: GQLMoney;

    /**
     * The amount of money that the transaction was for.
     */
    amountV2: GQLMoneyV2;

    /**
     * The kind of the transaction.
     */
    kind: GQLTransactionKind;

    /**
     * The status of the transaction.
     * @deprecated Use `statusV2` instead
     */
    status: GQLTransactionStatus;

    /**
     * The status of the transaction.
     */
    statusV2?: GQLTransactionStatus;

    /**
     * Whether the transaction was done in test mode or not.
     */
    test: boolean;
  }

export enum GQLTransactionKind {
    SALE = 'SALE',
    CAPTURE = 'CAPTURE',
    AUTHORIZATION = 'AUTHORIZATION',
    EMV_AUTHORIZATION = 'EMV_AUTHORIZATION',
    CHANGE = 'CHANGE'
  }

export enum GQLTransactionStatus {
    PENDING = 'PENDING',
    SUCCESS = 'SUCCESS',
    FAILURE = 'FAILURE',
    ERROR = 'ERROR'
  }

  /**
   * Specifies the fields required to complete a checkout with
   * a Shopify vaulted credit card payment.
   */
export interface GQLCreditCardPaymentInputV2 {

    /**
     * The amount and currency of the payment.
     */
    paymentAmount: GQLMoneyInput;

    /**
     * A unique client generated key used to avoid duplicate charges. When a
     * duplicate payment is found, the original is returned instead of creating a new one.
     */
    idempotencyKey: string;

    /**
     * The billing address for the payment.
     */
    billingAddress: GQLMailingAddressInput;

    /**
     * The ID returned by Shopify's Card Vault.
     */
    vaultId: string;

    /**
     * Executes the payment in test mode if possible. Defaults to `false`.
     */
    test?: boolean;
  }

  /**
   * Specifies the fields for a monetary value with currency.
   */
export interface GQLMoneyInput {

    /**
     * Decimal money amount.
     */
    amount: GQLDecimal;

    /**
     * Currency of the money.
     */
    currencyCode: GQLCurrencyCode;
  }

  /**
   * Return type for `checkoutCompleteWithCreditCardV2` mutation.
   */
export interface GQLCheckoutCompleteWithCreditCardV2Payload {

    /**
     * The checkout on which the payment was applied.
     */
    checkout?: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * A representation of the attempted payment.
     */
    payment?: GQLPayment;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Specifies the fields required to complete a checkout with
   * a tokenized payment.
   */
export interface GQLTokenizedPaymentInput {

    /**
     * The amount of the payment.
     */
    amount: GQLMoney;

    /**
     * A unique client generated key used to avoid duplicate charges. When a
     * duplicate payment is found, the original is returned instead of creating a new one.
     */
    idempotencyKey: string;

    /**
     * The billing address for the payment.
     */
    billingAddress: GQLMailingAddressInput;

    /**
     * The type of payment token.
     */
    type: string;

    /**
     * A simple string or JSON containing the required payment data for the tokenized payment.
     */
    paymentData: string;

    /**
     * Executes the payment in test mode if possible. Defaults to `false`.
     */
    test?: boolean;

    /**
     * Public Hash Key used for AndroidPay payments only.
     */
    identifier?: string;
  }

  /**
   * Return type for `checkoutCompleteWithTokenizedPayment` mutation.
   */
export interface GQLCheckoutCompleteWithTokenizedPaymentPayload {

    /**
     * The checkout on which the payment was applied.
     */
    checkout: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * A representation of the attempted payment.
     */
    payment?: GQLPayment;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Specifies the fields required to complete a checkout with
   * a tokenized payment.
   */
export interface GQLTokenizedPaymentInputV2 {

    /**
     * The amount and currency of the payment.
     */
    paymentAmount: GQLMoneyInput;

    /**
     * A unique client generated key used to avoid duplicate charges. When a
     * duplicate payment is found, the original is returned instead of creating a new one.
     */
    idempotencyKey: string;

    /**
     * The billing address for the payment.
     */
    billingAddress: GQLMailingAddressInput;

    /**
     * A simple string or JSON containing the required payment data for the tokenized payment.
     */
    paymentData: string;

    /**
     * Whether to execute the payment in test mode, if possible. Test mode is not
     * supported in production stores. Defaults to `false`.
     */
    test?: boolean;

    /**
     * Public Hash Key used for AndroidPay payments only.
     */
    identifier?: string;

    /**
     * The type of payment token.
     */
    type: string;
  }

  /**
   * Return type for `checkoutCompleteWithTokenizedPaymentV2` mutation.
   */
export interface GQLCheckoutCompleteWithTokenizedPaymentV2Payload {

    /**
     * The checkout on which the payment was applied.
     */
    checkout?: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * A representation of the attempted payment.
     */
    payment?: GQLPayment;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Specifies the fields required to complete a checkout with
   * a tokenized payment.
   */
export interface GQLTokenizedPaymentInputV3 {

    /**
     * The amount and currency of the payment.
     */
    paymentAmount: GQLMoneyInput;

    /**
     * A unique client generated key used to avoid duplicate charges. When a
     * duplicate payment is found, the original is returned instead of creating a new one.
     */
    idempotencyKey: string;

    /**
     * The billing address for the payment.
     */
    billingAddress: GQLMailingAddressInput;

    /**
     * A simple string or JSON containing the required payment data for the tokenized payment.
     */
    paymentData: string;

    /**
     * Whether to execute the payment in test mode, if possible. Test mode is not
     * supported in production stores. Defaults to `false`.
     */
    test?: boolean;

    /**
     * Public Hash Key used for AndroidPay payments only.
     */
    identifier?: string;

    /**
     * The type of payment token.
     */
    type: GQLPaymentTokenType;
  }

  /**
   * The valid values for the types of payment token.
   */
export enum GQLPaymentTokenType {

    /**
     * Apple Pay token type.
     */
    APPLE_PAY = 'APPLE_PAY',

    /**
     * Vault payment token type.
     */
    VAULT = 'VAULT',

    /**
     * Shopify Pay token type.
     */
    SHOPIFY_PAY = 'SHOPIFY_PAY',

    /**
     * Google Pay token type.
     */
    GOOGLE_PAY = 'GOOGLE_PAY'
  }

  /**
   * Return type for `checkoutCompleteWithTokenizedPaymentV3` mutation.
   */
export interface GQLCheckoutCompleteWithTokenizedPaymentV3Payload {

    /**
     * The checkout on which the payment was applied.
     */
    checkout?: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * A representation of the attempted payment.
     */
    payment?: GQLPayment;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Specifies the fields required to create a checkout.
   */
export interface GQLCheckoutCreateInput {

    /**
     * The email with which the customer wants to checkout.
     */
    email?: string;

    /**
     * A list of line item objects, each one containing information about an item in the checkout.
     */
    lineItems?: Array<GQLCheckoutLineItemInput>;

    /**
     * The shipping address to where the line items will be shipped.
     */
    shippingAddress?: GQLMailingAddressInput;

    /**
     * The text of an optional note that a shop owner can attach to the checkout.
     */
    note?: string;

    /**
     * A list of extra information that is added to the checkout.
     */
    customAttributes?: Array<GQLAttributeInput>;

    /**
     * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
     * The required attributes are city, province, and country.
     * Full validation of addresses is still done at complete time.
     */
    allowPartialAddresses?: boolean;

    /**
     * The three-letter currency code of one of the shop's enabled presentment currencies.
     * Including this field creates a checkout in the specified currency. By default, new
     * checkouts are created in the shop's primary currency.
     */
    presentmentCurrencyCode?: GQLCurrencyCode;
  }

  /**
   * Specifies the input fields to create a line item on a checkout.
   */
export interface GQLCheckoutLineItemInput {

    /**
     * Extra information in the form of an array of Key-Value pairs about the line item.
     */
    customAttributes?: Array<GQLAttributeInput>;

    /**
     * The quantity of the line item.
     */
    quantity: number;

    /**
     * The identifier of the product variant for the line item.
     */
    variantId: string;
  }

  /**
   * Return type for `checkoutCreate` mutation.
   */
export interface GQLCheckoutCreatePayload {

    /**
     * The new checkout object.
     */
    checkout?: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `checkoutCustomerAssociate` mutation.
   */
export interface GQLCheckoutCustomerAssociatePayload {

    /**
     * The updated checkout object.
     */
    checkout: GQLCheckout;

    /**
     * The associated customer object.
     */
    customer?: GQLCustomer;

    /**
     * List of errors that occurred executing the mutation.
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `checkoutCustomerAssociateV2` mutation.
   */
export interface GQLCheckoutCustomerAssociateV2Payload {

    /**
     * The updated checkout object.
     */
    checkout?: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * The associated customer object.
     */
    customer?: GQLCustomer;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `checkoutCustomerDisassociate` mutation.
   */
export interface GQLCheckoutCustomerDisassociatePayload {

    /**
     * The updated checkout object.
     */
    checkout: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `checkoutCustomerDisassociateV2` mutation.
   */
export interface GQLCheckoutCustomerDisassociateV2Payload {

    /**
     * The updated checkout object.
     */
    checkout?: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `checkoutDiscountCodeApply` mutation.
   */
export interface GQLCheckoutDiscountCodeApplyPayload {

    /**
     * The updated checkout object.
     */
    checkout: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `checkoutDiscountCodeApplyV2` mutation.
   */
export interface GQLCheckoutDiscountCodeApplyV2Payload {

    /**
     * The updated checkout object.
     */
    checkout?: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `checkoutDiscountCodeRemove` mutation.
   */
export interface GQLCheckoutDiscountCodeRemovePayload {

    /**
     * The updated checkout object.
     */
    checkout?: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `checkoutEmailUpdate` mutation.
   */
export interface GQLCheckoutEmailUpdatePayload {

    /**
     * The checkout object with the updated email.
     */
    checkout: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `checkoutEmailUpdateV2` mutation.
   */
export interface GQLCheckoutEmailUpdateV2Payload {

    /**
     * The checkout object with the updated email.
     */
    checkout?: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `checkoutGiftCardApply` mutation.
   */
export interface GQLCheckoutGiftCardApplyPayload {

    /**
     * The updated checkout object.
     */
    checkout: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `checkoutGiftCardRemove` mutation.
   */
export interface GQLCheckoutGiftCardRemovePayload {

    /**
     * The updated checkout object.
     */
    checkout: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `checkoutGiftCardRemoveV2` mutation.
   */
export interface GQLCheckoutGiftCardRemoveV2Payload {

    /**
     * The updated checkout object.
     */
    checkout?: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `checkoutGiftCardsAppend` mutation.
   */
export interface GQLCheckoutGiftCardsAppendPayload {

    /**
     * The updated checkout object.
     */
    checkout?: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `checkoutLineItemsAdd` mutation.
   */
export interface GQLCheckoutLineItemsAddPayload {

    /**
     * The updated checkout object.
     */
    checkout?: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `checkoutLineItemsRemove` mutation.
   */
export interface GQLCheckoutLineItemsRemovePayload {

    /**
     * The updated checkout object.
     */
    checkout?: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `checkoutLineItemsReplace` mutation.
   */
export interface GQLCheckoutLineItemsReplacePayload {

    /**
     * The updated checkout object.
     */
    checkout?: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    userErrors: Array<GQLCheckoutUserError>;
  }

  /**
   * Specifies the input fields to update a line item on the checkout.
   */
export interface GQLCheckoutLineItemUpdateInput {

    /**
     * The identifier of the line item.
     */
    id?: string;

    /**
     * The variant identifier of the line item.
     */
    variantId?: string;

    /**
     * The quantity of the line item.
     */
    quantity?: number;

    /**
     * Extra information in the form of an array of Key-Value pairs about the line item.
     */
    customAttributes?: Array<GQLAttributeInput>;
  }

  /**
   * Return type for `checkoutLineItemsUpdate` mutation.
   */
export interface GQLCheckoutLineItemsUpdatePayload {

    /**
     * The updated checkout object.
     */
    checkout?: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `checkoutShippingAddressUpdate` mutation.
   */
export interface GQLCheckoutShippingAddressUpdatePayload {

    /**
     * The updated checkout object.
     */
    checkout: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `checkoutShippingAddressUpdateV2` mutation.
   */
export interface GQLCheckoutShippingAddressUpdateV2Payload {

    /**
     * The updated checkout object.
     */
    checkout?: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `checkoutShippingLineUpdate` mutation.
   */
export interface GQLCheckoutShippingLineUpdatePayload {

    /**
     * The updated checkout object.
     */
    checkout?: GQLCheckout;

    /**
     * List of errors that occurred executing the mutation.
     */
    checkoutUserErrors: Array<GQLCheckoutUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `checkoutUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Specifies the input fields required to create a customer access token.
   */
export interface GQLCustomerAccessTokenCreateInput {

    /**
     * The email associated to the customer.
     */
    email: string;

    /**
     * The login password to be used by the customer.
     */
    password: string;
  }

  /**
   * Return type for `customerAccessTokenCreate` mutation.
   */
export interface GQLCustomerAccessTokenCreatePayload {

    /**
     * The newly created customer access token object.
     */
    customerAccessToken?: GQLCustomerAccessToken;

    /**
     * List of errors that occurred executing the mutation.
     */
    customerUserErrors: Array<GQLCustomerUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `customerUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * A CustomerAccessToken represents the unique token required to make modifications to the customer object.
   */
export interface GQLCustomerAccessToken {

    /**
     * The customer’s access token.
     */
    accessToken: string;

    /**
     * The date and time when the customer access token expires.
     */
    expiresAt: GQLDateTime;
  }

  /**
   * Represents an error that happens during execution of a customer mutation.
   */
export interface GQLCustomerUserError extends GQLDisplayableError {

    /**
     * Error code to uniquely identify the error.
     */
    code?: GQLCustomerErrorCode;

    /**
     * Path to the input field which caused the error.
     */
    field?: Array<string>;

    /**
     * The error message.
     */
    message: string;
  }

  /**
   * Possible error codes that could be returned by CustomerUserError.
   */
export enum GQLCustomerErrorCode {

    /**
     * Input value is blank.
     */
    BLANK = 'BLANK',

    /**
     * Input value is invalid.
     */
    INVALID = 'INVALID',

    /**
     * Input value is already taken.
     */
    TAKEN = 'TAKEN',

    /**
     * Input value is too long.
     */
    TOO_LONG = 'TOO_LONG',

    /**
     * Input value is too short.
     */
    TOO_SHORT = 'TOO_SHORT',

    /**
     * Unidentified customer.
     */
    UNIDENTIFIED_CUSTOMER = 'UNIDENTIFIED_CUSTOMER',

    /**
     * Customer is disabled.
     */
    CUSTOMER_DISABLED = 'CUSTOMER_DISABLED',

    /**
     * Input password starts or ends with whitespace.
     */
    PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE = 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE',

    /**
     * Input contains HTML tags.
     */
    CONTAINS_HTML_TAGS = 'CONTAINS_HTML_TAGS',

    /**
     * Input contains URL.
     */
    CONTAINS_URL = 'CONTAINS_URL',

    /**
     * Invalid activation token.
     */
    TOKEN_INVALID = 'TOKEN_INVALID',

    /**
     * Customer already enabled.
     */
    ALREADY_ENABLED = 'ALREADY_ENABLED',

    /**
     * Address does not exist.
     */
    NOT_FOUND = 'NOT_FOUND',

    /**
     * Input email contains an invalid domain name.
     */
    BAD_DOMAIN = 'BAD_DOMAIN',

    /**
     * Multipass token is not valid.
     */
    INVALID_MULTIPASS_REQUEST = 'INVALID_MULTIPASS_REQUEST'
  }

  /**
   * Return type for `customerAccessTokenCreateWithMultipass` mutation.
   */
export interface GQLCustomerAccessTokenCreateWithMultipassPayload {

    /**
     * An access token object associated with the customer.
     */
    customerAccessToken?: GQLCustomerAccessToken;

    /**
     * List of errors that occurred executing the mutation.
     */
    customerUserErrors: Array<GQLCustomerUserError>;
  }

  /**
   * Return type for `customerAccessTokenDelete` mutation.
   */
export interface GQLCustomerAccessTokenDeletePayload {

    /**
     * The destroyed access token.
     */
    deletedAccessToken?: string;

    /**
     * ID of the destroyed customer access token.
     */
    deletedCustomerAccessTokenId?: string;

    /**
     * List of errors that occurred executing the mutation.
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `customerAccessTokenRenew` mutation.
   */
export interface GQLCustomerAccessTokenRenewPayload {

    /**
     * The renewed customer access token object.
     */
    customerAccessToken?: GQLCustomerAccessToken;

    /**
     * List of errors that occurred executing the mutation.
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Specifies the input fields required to activate a customer.
   */
export interface GQLCustomerActivateInput {

    /**
     * The activation token required to activate the customer.
     */
    activationToken: string;

    /**
     * New password that will be set during activation.
     */
    password: string;
  }

  /**
   * Return type for `customerActivate` mutation.
   */
export interface GQLCustomerActivatePayload {

    /**
     * The customer object.
     */
    customer?: GQLCustomer;

    /**
     * A newly created customer access token object for the customer.
     */
    customerAccessToken?: GQLCustomerAccessToken;

    /**
     * List of errors that occurred executing the mutation.
     */
    customerUserErrors: Array<GQLCustomerUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `customerUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `customerActivateByUrl` mutation.
   */
export interface GQLCustomerActivateByUrlPayload {

    /**
     * The customer that was activated.
     */
    customer?: GQLCustomer;

    /**
     * A new customer access token for the customer.
     */
    customerAccessToken?: GQLCustomerAccessToken;

    /**
     * List of errors that occurred executing the mutation.
     */
    customerUserErrors: Array<GQLCustomerUserError>;
  }

  /**
   * Return type for `customerAddressCreate` mutation.
   */
export interface GQLCustomerAddressCreatePayload {

    /**
     * The new customer address object.
     */
    customerAddress?: GQLMailingAddress;

    /**
     * List of errors that occurred executing the mutation.
     */
    customerUserErrors: Array<GQLCustomerUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `customerUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `customerAddressDelete` mutation.
   */
export interface GQLCustomerAddressDeletePayload {

    /**
     * List of errors that occurred executing the mutation.
     */
    customerUserErrors: Array<GQLCustomerUserError>;

    /**
     * ID of the deleted customer address.
     */
    deletedCustomerAddressId?: string;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `customerUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `customerAddressUpdate` mutation.
   */
export interface GQLCustomerAddressUpdatePayload {

    /**
     * The customer’s updated mailing address.
     */
    customerAddress?: GQLMailingAddress;

    /**
     * List of errors that occurred executing the mutation.
     */
    customerUserErrors: Array<GQLCustomerUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `customerUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Specifies the fields required to create a new customer.
   */
export interface GQLCustomerCreateInput {

    /**
     * The customer’s first name.
     */
    firstName?: string;

    /**
     * The customer’s last name.
     */
    lastName?: string;

    /**
     * The customer’s email.
     */
    email: string;

    /**
     * A unique phone number for the customer.
     *
     * Formatted using E.164 standard. For example, _+16135551111_.
     */
    phone?: string;

    /**
     * The login password used by the customer.
     */
    password: string;

    /**
     * Indicates whether the customer has consented to be sent marketing material via email.
     */
    acceptsMarketing?: boolean;
  }

  /**
   * Return type for `customerCreate` mutation.
   */
export interface GQLCustomerCreatePayload {

    /**
     * The created customer object.
     */
    customer?: GQLCustomer;

    /**
     * List of errors that occurred executing the mutation.
     */
    customerUserErrors: Array<GQLCustomerUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `customerUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `customerDefaultAddressUpdate` mutation.
   */
export interface GQLCustomerDefaultAddressUpdatePayload {

    /**
     * The updated customer object.
     */
    customer?: GQLCustomer;

    /**
     * List of errors that occurred executing the mutation.
     */
    customerUserErrors: Array<GQLCustomerUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `customerUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `customerRecover` mutation.
   */
export interface GQLCustomerRecoverPayload {

    /**
     * List of errors that occurred executing the mutation.
     */
    customerUserErrors: Array<GQLCustomerUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `customerUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Specifies the fields required to reset a customer’s password.
   */
export interface GQLCustomerResetInput {

    /**
     * The reset token required to reset the customer’s password.
     */
    resetToken: string;

    /**
     * New password that will be set as part of the reset password process.
     */
    password: string;
  }

  /**
   * Return type for `customerReset` mutation.
   */
export interface GQLCustomerResetPayload {

    /**
     * The customer object which was reset.
     */
    customer?: GQLCustomer;

    /**
     * A newly created customer access token object for the customer.
     */
    customerAccessToken?: GQLCustomerAccessToken;

    /**
     * List of errors that occurred executing the mutation.
     */
    customerUserErrors: Array<GQLCustomerUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `customerUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Return type for `customerResetByUrl` mutation.
   */
export interface GQLCustomerResetByUrlPayload {

    /**
     * The customer object which was reset.
     */
    customer?: GQLCustomer;

    /**
     * A newly created customer access token object for the customer.
     */
    customerAccessToken?: GQLCustomerAccessToken;

    /**
     * List of errors that occurred executing the mutation.
     */
    customerUserErrors: Array<GQLCustomerUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `customerUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * Specifies the fields required to update the Customer information.
   */
export interface GQLCustomerUpdateInput {

    /**
     * The customer’s first name.
     */
    firstName?: string;

    /**
     * The customer’s last name.
     */
    lastName?: string;

    /**
     * The customer’s email.
     */
    email?: string;

    /**
     * A unique phone number for the customer.
     *
     * Formatted using E.164 standard. For example, _+16135551111_. To remove the phone number, specify `null`.
     */
    phone?: string;

    /**
     * The login password used by the customer.
     */
    password?: string;

    /**
     * Indicates whether the customer has consented to be sent marketing material via email.
     */
    acceptsMarketing?: boolean;
  }

  /**
   * Return type for `customerUpdate` mutation.
   */
export interface GQLCustomerUpdatePayload {

    /**
     * The updated customer object.
     */
    customer?: GQLCustomer;

    /**
     * The newly created customer access token. If the customer's password is updated, all previous access tokens
     * (including the one used to perform this mutation) become invalid, and a new token is generated.
     */
    customerAccessToken?: GQLCustomerAccessToken;

    /**
     * List of errors that occurred executing the mutation.
     */
    customerUserErrors: Array<GQLCustomerUserError>;

    /**
     * List of errors that occurred executing the mutation.
     * @deprecated Use `customerUserErrors` instead
     */
    userErrors: Array<GQLUserError>;
  }

  /**
   * **defaultDef**
   */
export interface GQLQuery {
    default?: string;
  }

  /**
   * Automatic discount applications capture the intentions of a discount that was automatically applied.
   */
export interface GQLAutomaticDiscountApplication extends GQLDiscountApplication {

    /**
     * The method by which the discount's value is allocated to its entitled items.
     */
    allocationMethod: GQLDiscountApplicationAllocationMethod;

    /**
     * Which lines of targetType that the discount is allocated over.
     */
    targetSelection: GQLDiscountApplicationTargetSelection;

    /**
     * The type of line that the discount is applicable towards.
     */
    targetType: GQLDiscountApplicationTargetType;

    /**
     * The title of the application.
     */
    title: string;

    /**
     * The value of the discount application.
     */
    value: GQLPricingValue;
  }

  /**
   * Discount code applications capture the intentions of a discount code at
   * the time that it is applied.
   */
export interface GQLDiscountCodeApplication extends GQLDiscountApplication {

    /**
     * The method by which the discount's value is allocated to its entitled items.
     */
    allocationMethod: GQLDiscountApplicationAllocationMethod;

    /**
     * Specifies whether the discount code was applied successfully.
     */
    applicable: boolean;

    /**
     * The string identifying the discount code that was used at the time of application.
     */
    code: string;

    /**
     * Which lines of targetType that the discount is allocated over.
     */
    targetSelection: GQLDiscountApplicationTargetSelection;

    /**
     * The type of line that the discount is applicable towards.
     */
    targetType: GQLDiscountApplicationTargetType;

    /**
     * The value of the discount application.
     */
    value: GQLPricingValue;
  }

  /**
   * Represents a video hosted outside of Shopify.
   */
export interface GQLExternalVideo extends GQLNode, GQLMedia {

    /**
     * A word or phrase to share the nature or contents of a media.
     */
    alt?: string;

    /**
     * The URL.
     */
    embeddedUrl: GQLURL;

    /**
     * Globally unique identifier.
     */
    id: string;

    /**
     * The media content type.
     */
    mediaContentType: GQLMediaContentType;

    /**
     * The preview image for the media.
     */
    previewImage?: GQLImage;
  }

  /**
   * Manual discount applications capture the intentions of a discount that was manually created.
   */
export interface GQLManualDiscountApplication extends GQLDiscountApplication {

    /**
     * The method by which the discount's value is allocated to its entitled items.
     */
    allocationMethod: GQLDiscountApplicationAllocationMethod;

    /**
     * The description of the application.
     */
    description?: string;

    /**
     * Which lines of targetType that the discount is allocated over.
     */
    targetSelection: GQLDiscountApplicationTargetSelection;

    /**
     * The type of line that the discount is applicable towards.
     */
    targetType: GQLDiscountApplicationTargetType;

    /**
     * The title of the application.
     */
    title: string;

    /**
     * The value of the discount application.
     */
    value: GQLPricingValue;
  }

  /**
   * Represents a Shopify hosted image.
   */
export interface GQLMediaImage extends GQLNode, GQLMedia {

    /**
     * A word or phrase to share the nature or contents of a media.
     */
    alt?: string;

    /**
     * Globally unique identifier.
     */
    id: string;

    /**
     * The image for the media.
     */
    image?: GQLImage;

    /**
     * The media content type.
     */
    mediaContentType: GQLMediaContentType;

    /**
     * The preview image for the media.
     */
    previewImage?: GQLImage;
  }

  /**
   * Represents a Shopify hosted 3D model.
   */
export interface GQLModel3d extends GQLNode, GQLMedia {

    /**
     * A word or phrase to share the nature or contents of a media.
     */
    alt?: string;

    /**
     * Globally unique identifier.
     */
    id: string;

    /**
     * The media content type.
     */
    mediaContentType: GQLMediaContentType;

    /**
     * The preview image for the media.
     */
    previewImage?: GQLImage;

    /**
     * The sources for a 3d model.
     */
    sources: Array<GQLModel3dSource>;
  }

  /**
   * Represents a source for a Shopify hosted 3d model.
   */
export interface GQLModel3dSource {

    /**
     * The filesize of the 3d model.
     */
    filesize: number;

    /**
     * The format of the 3d model.
     */
    format: string;

    /**
     * The MIME type of the 3d model.
     */
    mimeType: string;

    /**
     * The URL of the 3d model.
     */
    url: string;
  }

  /**
   * Script discount applications capture the intentions of a discount that
   * was created by a Shopify Script.
   */
export interface GQLScriptDiscountApplication extends GQLDiscountApplication {

    /**
     * The method by which the discount's value is allocated to its entitled items.
     */
    allocationMethod: GQLDiscountApplicationAllocationMethod;

    /**
     * The description of the application as defined by the Script.
     * @deprecated Use `title` instead
     */
    description: string;

    /**
     * Which lines of targetType that the discount is allocated over.
     */
    targetSelection: GQLDiscountApplicationTargetSelection;

    /**
     * The type of line that the discount is applicable towards.
     */
    targetType: GQLDiscountApplicationTargetType;

    /**
     * The title of the application as defined by the Script.
     */
    title: string;

    /**
     * The value of the discount application.
     */
    value: GQLPricingValue;
  }

  /**
   * Represents a Shopify hosted video.
   */
export interface GQLVideo extends GQLNode, GQLMedia {

    /**
     * A word or phrase to share the nature or contents of a media.
     */
    alt?: string;

    /**
     * Globally unique identifier.
     */
    id: string;

    /**
     * The media content type.
     */
    mediaContentType: GQLMediaContentType;

    /**
     * The preview image for the media.
     */
    previewImage?: GQLImage;

    /**
     * The sources for a video.
     */
    sources: Array<GQLVideoSource>;
  }

  /**
   * Represents a source for a Shopify hosted video.
   */
export interface GQLVideoSource {

    /**
     * The format of the video source.
     */
    format: string;

    /**
     * The height of the video.
     */
    height: number;

    /**
     * The video MIME type.
     */
    mimeType: string;

    /**
     * The URL of the video.
     */
    url: string;

    /**
     * The width of the video.
     */
    width: number;
  }

