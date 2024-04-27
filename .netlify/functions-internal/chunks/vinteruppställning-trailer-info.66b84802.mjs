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

				const html = updateImageReferences("<p>När du läser detta känns antagligen vintern långt borta men för den det angår vill vi redan nu komma ut med informationen om att båt på trailer inte kommer att tillåtas som uppställning vintern 2023/34.</p>\n<p>Anledningen är att vi bara vill ha mindre båtar uppställda och kan man inte vända på den är den helt enkelt inte tillräckligt liten.</p>");

				const frontmatter = {"title":"Info angående vinteruppställning på trailer","tags":["uppställning","vinter"],"description":"Inför vinter 2023/24 är det inte längre tillåtet med trailer vid vinteruppställning.","pubDate":"2023-03-27T00:00:00.000Z","heroImage":"/assets/blog/boat-on-trailer.webp"};
				const file = "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/content/news/vinteruppställning-trailer-info.md";
				const url = undefined;
				function rawContent() {
					return "\nNär du läser detta känns antagligen vintern långt borta men för den det angår vill vi redan nu komma ut med informationen om att båt på trailer inte kommer att tillåtas som uppställning vintern 2023/34.\n\nAnledningen är att vi bara vill ha mindre båtar uppställda och kan man inte vända på den är den helt enkelt inte tillräckligt liten.\n";
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
