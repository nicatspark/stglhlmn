import { j as createVNode, s as spreadAttributes, F as Fragment } from './astro.7410f0db.mjs';
import 'cookie';
import 'path-to-regexp';
import 'mime';
import 'kleur/colors';
import 'string-width';
import 'slash';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Ett uppskattat inslag på försommaren är när vi fixar upp vår hamn för säsongen.</p>\n<p>Kom och hjälp till gör vår hamn fin, tjöta och ät korv i vänners lag. Det brukar finnas godis eller glass till barnen.\nOömma kläder och trädgårdshandskar är bra att ha.</p>");

				const frontmatter = {"title":"Städdag i hamnen lördagen den 3 juni kl 10.00","tags":["Städdag","vinter"],"description":"Ett uppskattat inslag på försommaren är när vi gör i ordning vår hamn efter kung bore härjat färdigt och inför säsongen.","pubDate":"2023-04-01T00:00:00.000Z","heroImage":"/assets/blog/crab.webp"};
				const file = "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/content/news/staddag-2023.md";
				const url = undefined;
				function rawContent() {
					return "\nEtt uppskattat inslag på försommaren är när vi fixar upp vår hamn för säsongen.\n\nKom och hjälp till gör vår hamn fin, tjöta och ät korv i vänners lag. Det brukar finnas godis eller glass till barnen.\nOömma kläder och trädgårdshandskar är bra att ha.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
