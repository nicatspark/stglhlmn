declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"CSS-module-scripts.md": {
  id: "CSS-module-scripts.md",
  slug: "css-module-scripts",
  body: string,
  collection: "blog",
  data: any
},
"create-wifi-qr.md": {
  id: "create-wifi-qr.md",
  slug: "create-wifi-qr",
  body: string,
  collection: "blog",
  data: any
},
"creating-endpoint-in-astro.md": {
  id: "creating-endpoint-in-astro.md",
  slug: "creating-endpoint-in-astro",
  body: string,
  collection: "blog",
  data: any
},
"css-to-inline-scroll-with-transitions.md": {
  id: "css-to-inline-scroll-with-transitions.md",
  slug: "css-to-inline-scroll-with-transitions",
  body: string,
  collection: "blog",
  data: any
},
"error-handling-fetch.md": {
  id: "error-handling-fetch.md",
  slug: "error-handling-fetch",
  body: string,
  collection: "blog",
  data: any
},
"error-handling-in-typescript.md": {
  id: "error-handling-in-typescript.md",
  slug: "error-handling-in-typescript",
  body: string,
  collection: "blog",
  data: any
},
"guidlines-on-unit-testing.md": {
  id: "guidlines-on-unit-testing.md",
  slug: "guidlines-on-unit-testing",
  body: string,
  collection: "blog",
  data: any
},
"hits-n-misses-2022.md": {
  id: "hits-n-misses-2022.md",
  slug: "hits-n-misses-2022",
  body: string,
  collection: "blog",
  data: any
},
"hydroactive-functional-wc.md": {
  id: "hydroactive-functional-wc.md",
  slug: "hydroactive-functional-wc",
  body: string,
  collection: "blog",
  data: any
},
"markdown-style-guide.md": {
  id: "markdown-style-guide.md",
  slug: "markdown-style-guide",
  body: string,
  collection: "blog",
  data: any
},
"send-mail-with-node.md": {
  id: "send-mail-with-node.md",
  slug: "send-mail-with-node",
  body: string,
  collection: "blog",
  data: any
},
"using-mdx.mdx": {
  id: "using-mdx.mdx",
  slug: "using-mdx",
  body: string,
  collection: "blog",
  data: any
},
"view-transition-api.md": {
  id: "view-transition-api.md",
  slug: "view-transition-api",
  body: string,
  collection: "blog",
  data: any
},
"want-to-see-the-future.md": {
  id: "want-to-see-the-future.md",
  slug: "want-to-see-the-future",
  body: string,
  collection: "blog",
  data: any
},
"we-animation-API.md": {
  id: "we-animation-API.md",
  slug: "we-animation-api",
  body: string,
  collection: "blog",
  data: any
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
