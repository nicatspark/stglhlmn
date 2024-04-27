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

				const html = updateImageReferences("<p>Glöm inte meddela din nya adress. Om adressaten inte finns och fakturan inte betalas i tid anses sjöbod eller låda som ledig.</p>\n<p>Detsamma gäller epost eftersom det är vårt förstahandsval att skicka ut fakturan på. Tillhandahåll helst en epost som är oberoebde av arbetsplats om möjligt.</p>");

				const frontmatter = {"title":"Glöm inte anmäla ny adress eller epost","tags":["adress","sjöbod"],"description":"Sjöbod- och lådägare måste skicka uppdaterad adress eller epost.","pubDate":"2023-03-27T00:00:00.000Z","heroImage":"/assets/blog/surprised.webp"};
				const file = "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/content/news/andressandring.md";
				const url = undefined;
				function rawContent() {
					return "\nGlöm inte meddela din nya adress. Om adressaten inte finns och fakturan inte betalas i tid anses sjöbod eller låda som ledig.\n\nDetsamma gäller epost eftersom det är vårt förstahandsval att skicka ut fakturan på. Tillhandahåll helst en epost som är oberoebde av arbetsplats om möjligt.\n";
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
