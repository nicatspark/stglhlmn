import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, s as spreadAttributes, d as renderSlot, e as renderComponent, u as unescapeHTML, F as Fragment, f as createCollectionToGlobResultMap, g as createGetCollection, h as createGetEntryBySlug, i as renderHead, j as createVNode } from '../astro.7410f0db.mjs';
/* empty css                           *//* empty css                             */import rss, { pagesGlobToRssItems } from '@astrojs/rss';
/* empty css                           *//* empty css                          *//* empty css                           */import { useEffect } from 'react';
import nodemailer from 'nodemailer';
import { Temporal } from '@js-temporal/polyfill';
import fs from 'node:fs';
import 'path';

const $$Astro$c = createAstro("https://hervy.netlify.com/");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, image = "/placeholder-social.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<!-- <link rel='icon' type='image/svg+xml' href='/favicon.svg' media="(prefers-color-scheme: light)"/> -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="generator"${addAttribute(Astro2.generator, "content")}>
<meta name="description" content="A personal website of a frontend aficionado. Updated regularly with tips and tricks.">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="canonical" href="https://hervy.se/">

<!-- font awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerPolicy="no-referrer">

<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title"${addAttribute(title, "content")}>
<meta name="color-scheme" content="dark light">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url"${addAttribute(Astro2.url, "content")}>
<meta property="og:title"${addAttribute(title, "content")}>
<meta property="og:description"${addAttribute(description, "content")}>
<meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url"${addAttribute(Astro2.url, "content")}>
<meta property="twitter:title"${addAttribute(title, "content")}>
<meta property="twitter:description"${addAttribute(description, "content")}>
<meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">`;
}, "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/components/BaseHead.astro");

const $$Astro$b = createAstro("https://hervy.netlify.com/");
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")} role="menuitem"${addAttribute([[className, { active: isActive }], "astro-EIMMU3LG"], "class:list")}${spreadAttributes(props)} onclick="document.documentElement.classList.add('loading');">
  ${renderSlot($$result, $$slots["default"])}
</a>`;
}, "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/components/HeaderLink.astro");

const $$Astro$a = createAstro("https://hervy.netlify.com/");
const $$Uiswitch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Uiswitch;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<label${addAttribute(`switch ${className} astro-OLAUK6V5`, "class")}>
  <input type="checkbox" class="astro-OLAUK6V5">
  <span class="slider astro-OLAUK6V5"></span>
</label>`;
}, "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/components/Uiswitch.astro");

let scrollPos = 0;
let previousScrollDir, id;
const CheckScrollDirection = () => {
  const check = () => {
    const scrollUp = document.body.getBoundingClientRect().top > scrollPos;
    if (previousScrollDir != scrollUp) {
      clearTimeout(id);
      document.dispatchEvent(
        new CustomEvent("NEWSCROLLDIRECTION", {
          detail: scrollUp ? "UP" : "DOWN"
        })
      );
    }
    previousScrollDir = scrollUp;
    id = setTimeout(() => previousScrollDir = void 0, 2e3);
    scrollPos = document.body.getBoundingClientRect().top;
  };
  const init = () => {
    document.addEventListener("scroll", check);
    return window.removeEventListener("scroll", check);
  };
  useEffect(() => init(), []);
};

const __variableDynamicImportRuntimeHelper = (glob, path) => {
    const v = glob[path];
    if (v) {
        return typeof v === 'function' ? v() : Promise.resolve(v);
    }
    return new Promise((_, reject) => {
        (typeof queueMicrotask === 'function' ? queueMicrotask : setTimeout)(reject.bind(null, new Error('Unknown variable dynamic import: ' + path)));
    });
};

const $$Astro$9 = createAstro("https://hervy.netlify.com/");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Icon;
  const { icon } = Astro2.props;
  const { default: innerHTML } = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../svg/logo-stglhlmn.svg": () => import('../logo-stglhlmn.47f68ab0.mjs'),"../svg/logo.svg": () => import('../logo.59065948.mjs')})), `../svg/${icon}.svg`);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(innerHTML)}` })}`;
}, "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/components/icon.astro");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$8 = createAstro("https://hervy.netlify.com/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script>\n  function togglemenu() {\n    const nav = document.querySelector('nav')\n    nav.setAttribute('aria-expanded', 'true')\n    setTimeout(() => window.addEventListener('click', clickHandler))\n\n    function clickHandler({ target }) {\n      if (target.closest('nav')) return\n      console.log('here')\n      const nav = document.querySelector('nav')\n      nav.removeAttribute('aria-expanded')\n      window.removeEventListener('click', clickHandler)\n    }\n  }\n<\/script>\n", '<header class="astro-3EF6KSR2">\n  <div class="logo astro-3EF6KSR2">\n    <span class="rotate astro-3EF6KSR2">', '</span>\n    <h1 class="astro-3EF6KSR2"><a href="/" class="astro-3EF6KSR2"><span class="desktop astro-3EF6KSR2">STEGERHOLMEN<span class="desktop_wide astro-3EF6KSR2">S BRYGGF\xD6RENING</span></span><span class="mobile astro-3EF6KSR2">STGLHLMN</span></a></h1></div>\n  <button id="mobile-menu-btn" aria-label="User menu" aria-haspopup="true" onclick="togglemenu();" class="astro-3EF6KSR2"><i class="fa fa-bars astro-3EF6KSR2"></i></button>\n  <nav aria-label="Main Menu" class="astro-3EF6KSR2">\n    <ul role="menu" aria-labelledby="user-menu" class="astro-3EF6KSR2">\n      <li aria-label="home" class="astro-3EF6KSR2">\n        ', '\n      </li>\n      <li aria-label="blog" class="astro-3EF6KSR2">\n        ', '\n      </li>\n      <li aria-label="about" class="astro-3EF6KSR2">\n        ', '\n      </li>\n      <li aria-label="contact" class="astro-3EF6KSR2">\n        ', '\n      </li>\n      <li aria-label="darkmode" class="astro-3EF6KSR2">\n        ', "\n      </li>\n    </ul>\n    ", "\n  </nav>\n  \n  <script>\n    ;(function highlightCurrentNavItem() {\n      const path = document.location.pathname.toLowerCase()\n      const current =\n        path.split('/')[1] || (path.split('/')[0] === '' ? 'home' : '')\n      const currentListItem = document.querySelector(\n        `nav li[aria-label=\"${current}\"]`\n      )\n      console.log('currentListItem', currentListItem)\n      currentListItem?.setAttribute('aria-current', 'true')\n    })()\n    // window.onload = highlightCurrentNavItem\n  <\/script>\n</header>"], ["<script>\n  function togglemenu() {\n    const nav = document.querySelector('nav')\n    nav.setAttribute('aria-expanded', 'true')\n    setTimeout(() => window.addEventListener('click', clickHandler))\n\n    function clickHandler({ target }) {\n      if (target.closest('nav')) return\n      console.log('here')\n      const nav = document.querySelector('nav')\n      nav.removeAttribute('aria-expanded')\n      window.removeEventListener('click', clickHandler)\n    }\n  }\n<\/script>\n", '<header class="astro-3EF6KSR2">\n  <div class="logo astro-3EF6KSR2">\n    <span class="rotate astro-3EF6KSR2">', '</span>\n    <h1 class="astro-3EF6KSR2"><a href="/" class="astro-3EF6KSR2"><span class="desktop astro-3EF6KSR2">STEGERHOLMEN<span class="desktop_wide astro-3EF6KSR2">S BRYGGF\xD6RENING</span></span><span class="mobile astro-3EF6KSR2">STGLHLMN</span></a></h1></div>\n  <button id="mobile-menu-btn" aria-label="User menu" aria-haspopup="true" onclick="togglemenu();" class="astro-3EF6KSR2"><i class="fa fa-bars astro-3EF6KSR2"></i></button>\n  <nav aria-label="Main Menu" class="astro-3EF6KSR2">\n    <ul role="menu" aria-labelledby="user-menu" class="astro-3EF6KSR2">\n      <li aria-label="home" class="astro-3EF6KSR2">\n        ', '\n      </li>\n      <li aria-label="blog" class="astro-3EF6KSR2">\n        ', '\n      </li>\n      <li aria-label="about" class="astro-3EF6KSR2">\n        ', '\n      </li>\n      <li aria-label="contact" class="astro-3EF6KSR2">\n        ', '\n      </li>\n      <li aria-label="darkmode" class="astro-3EF6KSR2">\n        ', "\n      </li>\n    </ul>\n    ", "\n  </nav>\n  \n  <script>\n    ;(function highlightCurrentNavItem() {\n      const path = document.location.pathname.toLowerCase()\n      const current =\n        path.split('/')[1] || (path.split('/')[0] === '' ? 'home' : '')\n      const currentListItem = document.querySelector(\n        \\`nav li[aria-label=\"\\${current}\"]\\`\n      )\n      console.log('currentListItem', currentListItem)\n      currentListItem?.setAttribute('aria-current', 'true')\n    })()\n    // window.onload = highlightCurrentNavItem\n  <\/script>\n</header>"])), maybeRenderHead($$result), renderComponent($$result, "Icon", $$Icon, { "icon": "logo-stglhlmn", "class": "astro-3EF6KSR2" }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "class": "astro-3EF6KSR2" }, { "default": ($$result2) => renderTemplate`Hem` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog", "class": "astro-3EF6KSR2" }, { "default": ($$result2) => renderTemplate`Bra att veta` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/about", "class": "astro-3EF6KSR2" }, { "default": ($$result2) => renderTemplate`Om` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/contact", "class": "astro-3EF6KSR2" }, { "default": ($$result2) => renderTemplate`Kontakt` }), renderComponent($$result, "UiSwitch", $$Uiswitch, { "className": "theme-toggle astro-3EF6KSR2" }), renderComponent($$result, "CheckScrollDirection", CheckScrollDirection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/components/CheckScrollDirection", "client:component-export": "default", "class": "astro-3EF6KSR2" }));
}, "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/components/Header.astro");

const $$Astro$7 = createAstro("https://hervy.netlify.com/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  function convertToRoman(num) {
    var roman = "";
    var decimal = [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNum = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ];
    for (var i = 0; i < decimal.length; i++) {
      while (decimal[i] <= num) {
        roman += romanNum[i];
        num -= decimal[i];
      }
    }
    return roman;
  }
  return renderTemplate`${maybeRenderHead($$result)}<footer class="astro-SZ7XMLTE">
  &copy; ${convertToRoman(today.getFullYear())} Nicolas Hervy. No rights reserved.
  Sharing is caring.
</footer>`;
}, "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/components/Footer.astro");

const SITE_TITLE = "Stegerholmens Bryggförening";
const SITE_DESCRIPTION = "Välkommen till Stegerholmen! En liten småbåtshamn innanför Göteborg södra skärgård.";

const krabbfiske = "/assets/krabbfiske.webp";

// astro-head-inject

const contentDir = '/src/content/';

const entryGlob = /* #__PURE__ */ Object.assign({"/src/content/news/andressandring.md": () => import('../andressandring.e7cc8bd1.mjs'),"/src/content/news/staddag-2023.md": () => import('../staddag-2023.6d8b9f27.mjs'),"/src/content/news/vinteruppställning-trailer-info.md": () => import('../vinteruppställning-trailer-info.0c3ed6e9.mjs')

});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: entryGlob,
	contentDir,
});

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/news/andressandring.md": () => import('../andressandring.f05171d7.mjs'),"/src/content/news/staddag-2023.md": () => import('../staddag-2023.8c253f21.mjs'),"/src/content/news/vinteruppställning-trailer-info.md": () => import('../vinteruppställning-trailer-info.e29c98b9.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	collectionToEntryMap,
	collectionToRenderEntryMap,
});

const getEntryBySlug = createGetEntryBySlug({
	getCollection,
	collectionToRenderEntryMap,
});

const $$Astro$6 = createAstro("https://hervy.netlify.com/");
const $$Separator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Separator;
  const { label } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<label class="astro-JCHHMUZL"><span class="inner astro-JCHHMUZL">${label}</span></label>`;
}, "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/components/Separator.astro");

const $$Astro$5 = createAstro("https://hervy.netlify.com/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index;
  const allNews = await getCollection("news");
  return renderTemplate`<html lang="en" class="astro-J7PV25F6">
  <head>
    ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "class": "astro-J7PV25F6" })}
  ${renderHead($$result)}</head>
  <body class="astro-J7PV25F6">
    <div class="heroimg astro-J7PV25F6"><img src="/assets/stegerholmen_evening_view.webp" srcset="/assets/stegerholmen_evening_view.webp 800w,/assets/stegerholmen_evening_view_hidef.webp 1000w" sizes="(min-width: 1800px) 1800px, 100vw" alt="Stegelholmen kvällsvy" class="astro-J7PV25F6"></div>
    <main class="astro-J7PV25F6">
      <div class="hero astro-J7PV25F6">
        <div class="astro-J7PV25F6">
          <p class="astro-J7PV25F6">
            <span class="entry astro-J7PV25F6">Välkommen till en av</span> Göteborgs södra skärgårds
            mest pittoreska småbåtshamnar, med anor som sträcker sig generationer
            tillbaka. Under 1800-talet var hamnen bas för kungliga tullverkets båt,
            men idag är det en fantastisk bit av bohuslänsk natur som lockar besökare
            från när och fjärran. Hamnen har behållit sin charmiga karaktär med röda
            fiskebodar, vita småbåtar och klippor som omger det kristallklara vattnet,
            vilket ger besökare en känsla av lugn och ro från stadens puls.</p>
        </div>
        <div class="astro-J7PV25F6"><img${addAttribute(krabbfiske, "src")} alt="Hero image"${addAttribute(400, "width")}${addAttribute(400, "height")} class="astro-J7PV25F6"></div>
      </div>
      ${renderComponent($$result, "Separator", $$Separator, { "label": "Nyheter", "class": "astro-J7PV25F6" })}
      <div class="card-container astro-J7PV25F6">
        ${allNews.map(({ data, slug }) => renderTemplate`<dic class="card-item astro-J7PV25F6"${addAttribute(`location.href = "/posts/${slug}"`, "onClick")}>
              <img class="card-image astro-J7PV25F6"${addAttribute(data.heroImage, "src")}${addAttribute(data.title, "alt")}>
              <h5 class="astro-J7PV25F6">
                <a${addAttribute(`/posts/${slug}`, "href")} class="astro-J7PV25F6">${data.title}</a>
              </h5>
              <p class="astro-J7PV25F6">${data.description}</p>
            </dic>`)}
      </div>
    </main>
    ${renderComponent($$result, "Footer", $$Footer, { "class": "astro-J7PV25F6" })}
    ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE, "class": "astro-J7PV25F6" })}
    ${renderComponent($$result, "Toaster", null, { "client:only": true, "client:component-hydration": "only", "class": "astro-J7PV25F6", "client:component-path": "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/components/Toaster", "client:component-export": "default" })}
    
  </body></html>`;
}, "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/pages/index.astro");

const $$file$4 = "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/pages/index.astro";
const $$url$4 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://hervy.netlify.com/");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="astro-UW5KDBXL">\n  <head>\n    ', "\n    \n  ", '</head>\n  <body class="astro-UW5KDBXL">\n    ', `
    <main class="astro-UW5KDBXL">
      <form id="form" class="neu-box astro-UW5KDBXL" onsubmit="event => event.preventDefault();return false">
        <h3 class="astro-UW5KDBXL">Kontakta f\xF6reningen</h3>
        <fieldset class="astro-UW5KDBXL">
          <label for="name" class="astro-UW5KDBXL">Namn</label>
          <input type="text" id="name" value="" class="astro-UW5KDBXL">
        </fieldset>
        <fieldset class="astro-UW5KDBXL">
          <label for="email" class="astro-UW5KDBXL">Epost</label>
          <input type="text" id="email" value="" class="astro-UW5KDBXL">
        </fieldset>
        <fieldset class="astro-UW5KDBXL">
          <label for="subject" class="astro-UW5KDBXL">\xC4mne</label>
          <input type="text" id="subject" value="" class="astro-UW5KDBXL">
        </fieldset>
        <fieldset class="astro-UW5KDBXL">
          <textarea id="message" placeholder="..." class="astro-UW5KDBXL"></textarea>
        </fieldset>
        <button type="submit" class="astro-UW5KDBXL">
          <div class="idle astro-UW5KDBXL">Skicka</div>
          <div class="loader astro-UW5KDBXL"></div>
        </button>
      </form>
      <script>
        const get = (id) =>
          document.getElementById(id) || {
            value: '',
          }

        const submitForm = () => {
          if (formState().isLoading()) return
          formState().setToLoading(true)
          saveInput()
          sendmail()
        }

        // localStorage code
        const getFormData = () => {
          const store = Object.create(null)
          store.name = get('name')?.value
          store.email = get('email')?.value
          store.subject = get('subject')?.value
          store.message = get('message')?.value
          return store
        }
        const saveInput = () => {
          const { message, subject, ...rest } = getFormData()
          localStorage.setItem('contactinfo', JSON.stringify(rest))
        }
        const retrieveInfo = () => {
          const store = JSON.parse(localStorage.getItem('contactinfo') || '{}')
          get('name').value = store.name || ''
          get('email').value = store.email || ''
        }
        // End: localStorage

        const formState = () => {
          const inputs = [...document.querySelectorAll('input')]
          const button = document.querySelector('button')
          const form = document.querySelector('form')
          const textarea = document.querySelector('textarea')
          const disabled = [...document.querySelectorAll('[disabled]')]

          const setToLoading = (isLoading) => {
            if (!form || !button) return
            if (isLoading) {
              inputs.forEach((inpt) => {
                inpt.setAttribute('disabled', 'true')
              })
              textarea.setAttribute('disabled', 'true')
              form.classList.add('loading')
              return
            }
            form.classList.remove('loading')
            disabled.forEach((inpt) => inpt.removeAttribute('disabled'))
          }

          const isLoading = () => form.classList.contains('loading')

          return { setToLoading, isLoading }
        }

        const submitBtn = document.querySelector('[type="submit"]')
        submitBtn?.addEventListener('click', submitForm)
        retrieveInfo()
        ;[...document.querySelectorAll('input')][0]?.focus()
        // window.onload = () => {
        // }

        // ----
        const sendmail = async () => {
          let { name, email, message, subject } = getFormData()
          if (name.trim() === '') {
            displayToaster('Namn saknas.', (type = 'error'))
            name.focus()
            return
          }
          if (!/^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/.test(email)) {
            displayToaster('Eposten \xE4r felformaterad.', (type = 'error'))
            email.focus()
            return
          }
          if (subject.trim() === '') {
            subject = '\xC4mne saknas'
          }
          const data = await fetch('/api/sendmail.json', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              email,
              message,
              subject,
            }),
          })
            .then((res) => res.json())
            // .then((data) => console.log(data))
            .catch((err) => {
              console.log('Error', err)
              throw new Error('Network error.')
            })
          console.log(data)
          formState().setToLoading(false)
          if (data.success) {
            get('subject').value = ''
            get('message').value = ''
            displayToaster('\u{1F44D} Meddelandet har skickats.')
          } else {
            displayToaster('\u{1F4A9} Ajd\xE5, n\xE5got gick snett.', 'error')
          }
        }

        function displayToaster(message, type = 'success') {
          document.body.dispatchEvent(
            new CustomEvent('TOASTER', {
              detail: [message, 5, type],
            })
          )
        }
      <\/script>
    </main>
    `, "\n    ", "\n  </body></html>"], ['<html lang="en" class="astro-UW5KDBXL">\n  <head>\n    ', "\n    \n  ", '</head>\n  <body class="astro-UW5KDBXL">\n    ', `
    <main class="astro-UW5KDBXL">
      <form id="form" class="neu-box astro-UW5KDBXL" onsubmit="event => event.preventDefault();return false">
        <h3 class="astro-UW5KDBXL">Kontakta f\xF6reningen</h3>
        <fieldset class="astro-UW5KDBXL">
          <label for="name" class="astro-UW5KDBXL">Namn</label>
          <input type="text" id="name" value="" class="astro-UW5KDBXL">
        </fieldset>
        <fieldset class="astro-UW5KDBXL">
          <label for="email" class="astro-UW5KDBXL">Epost</label>
          <input type="text" id="email" value="" class="astro-UW5KDBXL">
        </fieldset>
        <fieldset class="astro-UW5KDBXL">
          <label for="subject" class="astro-UW5KDBXL">\xC4mne</label>
          <input type="text" id="subject" value="" class="astro-UW5KDBXL">
        </fieldset>
        <fieldset class="astro-UW5KDBXL">
          <textarea id="message" placeholder="..." class="astro-UW5KDBXL"></textarea>
        </fieldset>
        <button type="submit" class="astro-UW5KDBXL">
          <div class="idle astro-UW5KDBXL">Skicka</div>
          <div class="loader astro-UW5KDBXL"></div>
        </button>
      </form>
      <script>
        const get = (id) =>
          document.getElementById(id) || {
            value: '',
          }

        const submitForm = () => {
          if (formState().isLoading()) return
          formState().setToLoading(true)
          saveInput()
          sendmail()
        }

        // localStorage code
        const getFormData = () => {
          const store = Object.create(null)
          store.name = get('name')?.value
          store.email = get('email')?.value
          store.subject = get('subject')?.value
          store.message = get('message')?.value
          return store
        }
        const saveInput = () => {
          const { message, subject, ...rest } = getFormData()
          localStorage.setItem('contactinfo', JSON.stringify(rest))
        }
        const retrieveInfo = () => {
          const store = JSON.parse(localStorage.getItem('contactinfo') || '{}')
          get('name').value = store.name || ''
          get('email').value = store.email || ''
        }
        // End: localStorage

        const formState = () => {
          const inputs = [...document.querySelectorAll('input')]
          const button = document.querySelector('button')
          const form = document.querySelector('form')
          const textarea = document.querySelector('textarea')
          const disabled = [...document.querySelectorAll('[disabled]')]

          const setToLoading = (isLoading) => {
            if (!form || !button) return
            if (isLoading) {
              inputs.forEach((inpt) => {
                inpt.setAttribute('disabled', 'true')
              })
              textarea.setAttribute('disabled', 'true')
              form.classList.add('loading')
              return
            }
            form.classList.remove('loading')
            disabled.forEach((inpt) => inpt.removeAttribute('disabled'))
          }

          const isLoading = () => form.classList.contains('loading')

          return { setToLoading, isLoading }
        }

        const submitBtn = document.querySelector('[type="submit"]')
        submitBtn?.addEventListener('click', submitForm)
        retrieveInfo()
        ;[...document.querySelectorAll('input')][0]?.focus()
        // window.onload = () => {
        // }

        // ----
        const sendmail = async () => {
          let { name, email, message, subject } = getFormData()
          if (name.trim() === '') {
            displayToaster('Namn saknas.', (type = 'error'))
            name.focus()
            return
          }
          if (!/^\\\\w+([-+.']\\\\w+)*@\\\\w+([-.]\\\\w+)*\\\\.\\\\w+([-.]\\\\w+)*$/.test(email)) {
            displayToaster('Eposten \xE4r felformaterad.', (type = 'error'))
            email.focus()
            return
          }
          if (subject.trim() === '') {
            subject = '\xC4mne saknas'
          }
          const data = await fetch('/api/sendmail.json', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              email,
              message,
              subject,
            }),
          })
            .then((res) => res.json())
            // .then((data) => console.log(data))
            .catch((err) => {
              console.log('Error', err)
              throw new Error('Network error.')
            })
          console.log(data)
          formState().setToLoading(false)
          if (data.success) {
            get('subject').value = ''
            get('message').value = ''
            displayToaster('\u{1F44D} Meddelandet har skickats.')
          } else {
            displayToaster('\u{1F4A9} Ajd\xE5, n\xE5got gick snett.', 'error')
          }
        }

        function displayToaster(message, type = 'success') {
          document.body.dispatchEvent(
            new CustomEvent('TOASTER', {
              detail: [message, 5, type],
            })
          )
        }
      <\/script>
    </main>
    `, "\n    ", "\n  </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "class": "astro-UW5KDBXL" }), renderHead($$result), renderComponent($$result, "Header", $$Header, { "class": "astro-UW5KDBXL" }), renderComponent($$result, "Footer", $$Footer, { "class": "astro-UW5KDBXL" }), renderComponent($$result, "Toaster", null, { "client:only": true, "client:component-hydration": "only", "class": "astro-UW5KDBXL", "client:component-path": "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/components/Toaster", "client:component-export": "default" }));
}, "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/pages/contact.astro");

const $$file$3 = "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/pages/contact.astro";
const $$url$3 = "/contact";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const get = async (context) =>
  rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: "https://hervy.netlify.com/",
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./blog/renovera-sjobod.md": () => Promise.resolve().then(() => _page5),"./blog/solceller.md": () => Promise.resolve().then(() => _page6)})),
  });

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://hervy.netlify.com/");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const {
    content: { title, description, pubDate, updatedDate, heroImage }
  } = Astro2.props;
  return renderTemplate`<html lang="en" class="astro-BVZIHDZO">
  <head>
    ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "class": "astro-BVZIHDZO" })}
    
  ${renderHead($$result)}</head>

  <body class="astro-BVZIHDZO">
    ${renderComponent($$result, "Header", $$Header, { "class": "astro-BVZIHDZO" })}
    <main class="astro-BVZIHDZO">
      <article class="blog astro-BVZIHDZO">
        <!-- {heroImage && <img width={720} height={360} src={heroImage} alt='' />} -->
        ${heroImage && renderTemplate`<img${addAttribute(720, "width")}${addAttribute(400, "height")}${addAttribute(heroImage, "src")} alt="Hero image" class="astro-BVZIHDZO">`}
        <h2 class="title astro-BVZIHDZO">${title}</h2>
        ${pubDate && renderTemplate`<time class="astro-BVZIHDZO">${pubDate}</time>`}
        ${updatedDate && renderTemplate`<div class="updated astro-BVZIHDZO">
              Publicerad${" "}
              <time class="astro-BVZIHDZO">
                ${new Intl.DateTimeFormat("swe", {
    day: "numeric",
    month: "numeric",
    year: "2-digit"
  }).format(new Date(updatedDate))}
              </time>
            </div>`}
        <hr class="separator astro-BVZIHDZO">
        <!-- <Toc client:load /> -->
        ${renderSlot($$result, $$slots["default"])}
      </article>
    </main>
    ${renderComponent($$result, "Footer", $$Footer, { "class": "astro-BVZIHDZO" })}
    

    ${renderComponent($$result, "Toaster", null, { "client:only": true, "client:component-hydration": "only", "class": "astro-BVZIHDZO", "client:component-path": "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/components/Toaster", "client:component-export": "default" })}
  </body></html>`;
}, "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/layouts/BlogPost.astro");

const images$2 = {
					
				};

				function updateImageReferences$2(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images$2[imagePath].src, ...images$2[imagePath].attributes})
					);
				}

				const html$2 = updateImageReferences$2("<p>Denna webbplats är Stegerholmens Bryggförenings kommunikationskanal ut. Här bör du hitta det mesta av den information du kan förvänta dig av oss. Information som gäller bryggorna specifikt hänvisar vi direkt till respektive bryggägare.</p>\n<p>Stegerholmen är en av Göteborgs södra skärgårds mest pittoreska småbåtshamnar, med anor som sträcker sig generationer tillbaka. Under 1800-talet var hamnen bas för kungliga tullverkets båt, men idag är det en fantastisk bit av bohuslänsk natur som lockar besökare från när och fjärran. Hamnen har behållit sin charmiga karaktär med röda fiskebodar, vita segelbåtar och klippor som omger den kristallklara vattnet, vilket ger besökare en känsla av lugn och ro från stadens puls.</p>");

				const frontmatter$2 = {"layout":"../layouts/BlogPost.astro","title":"Om Stegerholmens småbåtshamn","description":"","updatedDate":"28 Mars 2023","heroImage":"/assets/from_above.webp"};
				const file$2 = "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/pages/about.md";
				const url$2 = "/about";
				function rawContent$2() {
					return "\nDenna webbplats är Stegerholmens Bryggförenings kommunikationskanal ut. Här bör du hitta det mesta av den information du kan förvänta dig av oss. Information som gäller bryggorna specifikt hänvisar vi direkt till respektive bryggägare.\n\nStegerholmen är en av Göteborgs södra skärgårds mest pittoreska småbåtshamnar, med anor som sträcker sig generationer tillbaka. Under 1800-talet var hamnen bas för kungliga tullverkets båt, men idag är det en fantastisk bit av bohuslänsk natur som lockar besökare från när och fjärran. Hamnen har behållit sin charmiga karaktär med röda fiskebodar, vita segelbåtar och klippor som omger den kristallklara vattnet, vilket ger besökare en känsla av lugn och ro från stadens puls.\n";
				}
				function compiledContent$2() {
					return html$2;
				}
				function getHeadings$2() {
					return [];
				}
				async function Content$2() {
					const { layout, ...content } = frontmatter$2;
					content.file = file$2;
					content.url = url$2;
					const contentFragment = createVNode(Fragment, { 'set:html': html$2 });
					return createVNode($$BlogPost, {
									file: file$2,
									url: url$2,
									content,
									frontmatter: content,
									headings: getHeadings$2(),
									rawContent: rawContent$2,
									compiledContent: compiledContent$2,
									'server:root': true,
									children: contentFragment
								});
				}
				Content$2[Symbol.for('astro.needsHeadRendering')] = false;

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$2,
  compiledContent: compiledContent$2,
  default: Content$2,
  file: file$2,
  frontmatter: frontmatter$2,
  getHeadings: getHeadings$2,
  images: images$2,
  rawContent: rawContent$2,
  url: url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://hervy.netlify.com/");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("Slug is required");
  }
  const entry = await getEntryBySlug("news", slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "MarkdownPostLayout", $$BlogPost, { "content": entry.data }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Content", Content, {})}` })}`;
}, "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/pages/posts/[slug].astro");

const $$file$2 = "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/pages/posts/[slug].astro";
const $$url$2 = "/posts/[slug]";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const images$1 = {
					
				};

				function updateImageReferences$1(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images$1[imagePath].src, ...images$1[imagePath].attributes})
					);
				}

				const html$1 = updateImageReferences$1("<p>Man får bättra på det man har men ska man göra nytt måste man kontakta Stegerholmens Bryggförening innan för att få godkänt. Det som är utanför sjöboden måste vara och upplevas som tillgängligt för allmänheten. Staket som inhängnar är således inte tillämpligt.</p>\n<p>Kontakta Stegerholmens bryggförening för att få en kontrollmätning innan du börjar. Annars kan du bli tvungen att riva för att din sjöbod inte följer stadgarna. Om din sjöbod sedan gammalt inte följer de föreskrivna måtten är det däremot okej att byta virke och bättra på. Vi ser gärna att sjöbodarna får lite omtanke.</p>\n<p>Funderar du på en helrenovering, låt stommen vara kvar för att vara säker på att sjöboden inte blir mindre efter renoveringen.</p>");

				const frontmatter$1 = {"layout":"../../layouts/BlogPost.astro","title":"Renovera sjöboden? Tänk på detta.","description":"","pubDate":"Mar 26 2023","heroImage":"/assets/blog/renovering.webp"};
				const file$1 = "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/pages/blog/renovera-sjobod.md";
				const url$1 = "/blog/renovera-sjobod";
				function rawContent$1() {
					return "\nMan får bättra på det man har men ska man göra nytt måste man kontakta Stegerholmens Bryggförening innan för att få godkänt. Det som är utanför sjöboden måste vara och upplevas som tillgängligt för allmänheten. Staket som inhängnar är således inte tillämpligt.\n\nKontakta Stegerholmens bryggförening för att få en kontrollmätning innan du börjar. Annars kan du bli tvungen att riva för att din sjöbod inte följer stadgarna. Om din sjöbod sedan gammalt inte följer de föreskrivna måtten är det däremot okej att byta virke och bättra på. Vi ser gärna att sjöbodarna får lite omtanke.\n\nFunderar du på en helrenovering, låt stommen vara kvar för att vara säker på att sjöboden inte blir mindre efter renoveringen.\n";
				}
				function compiledContent$1() {
					return html$1;
				}
				function getHeadings$1() {
					return [];
				}
				async function Content$1() {
					const { layout, ...content } = frontmatter$1;
					content.file = file$1;
					content.url = url$1;
					const contentFragment = createVNode(Fragment, { 'set:html': html$1 });
					return createVNode($$BlogPost, {
									file: file$1,
									url: url$1,
									content,
									frontmatter: content,
									headings: getHeadings$1(),
									rawContent: rawContent$1,
									compiledContent: compiledContent$1,
									'server:root': true,
									children: contentFragment
								});
				}
				Content$1[Symbol.for('astro.needsHeadRendering')] = false;

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$1,
  compiledContent: compiledContent$1,
  default: Content$1,
  file: file$1,
  frontmatter: frontmatter$1,
  getHeadings: getHeadings$1,
  images: images$1,
  rawContent: rawContent$1,
  url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Solceller är tillåtet om det ligger klos an underlaget. Dvs inte påverkar sjöbodsutseendet nämnvärt.</p>");

				const frontmatter = {"layout":"../../layouts/BlogPost.astro","title":"Solceller på sjöboden","description":"Solceller är tillåtet om det ligger klos an underlaget.","pubDate":"Mar 27 2023","heroImage":"/assets/blog/crab.webp"};
				const file = "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/pages/blog/solceller.md";
				const url = "/blog/solceller";
				function rawContent() {
					return "\nSolceller är tillåtet om det ligger klos an underlaget. Dvs inte påverkar sjöbodsutseendet nämnvärt.\n";
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
					return createVNode($$BlogPost, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  images,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://hervy.netlify.com/");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Blog;
  const posts = (await Astro2.glob(/* #__PURE__ */ Object.assign({"./blog/renovera-sjobod.md": () => Promise.resolve().then(() => _page5),"./blog/solceller.md": () => Promise.resolve().then(() => _page6)}), () => "./blog/*.{md,mdx}")).filter((post) => !post.frontmatter.draft).sort(
    (a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf()
  );
  let i = posts.findIndex((post) => !!post?.frontmatter?.heroImage ? true : false);
  i = i === -1 ? 0 : i;
  const latestPost = posts[i].frontmatter;
  latestPost["url"] = posts[i].url;
  latestPost["contrastColor"] = latestPost.contrastColor || "white";
  latestPost["contrastColorShadow"] = latestPost.contrastColorShadow || "black";
  return renderTemplate`<html lang="en" class="astro-IJNERLR2">
  <head>
    ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "class": "astro-IJNERLR2" })}
    
  ${renderHead($$result)}</head>
  <body class="astro-IJNERLR2">
    ${renderComponent($$result, "Header", $$Header, { "class": "astro-IJNERLR2" })}
    <main class="astro-IJNERLR2">
      <div class="latest-article astro-IJNERLR2"${addAttribute(`--contrast-color: ${latestPost?.contrastColor};--contrast-color-shadow: ${latestPost?.contrastColorShadow};`, "style")}><a aria-label="featured article"${addAttribute(latestPost?.url, "href")} class="astro-IJNERLR2"><img${addAttribute(latestPost?.heroImage, "src")}${addAttribute(latestPost?.title, "alt")} class="astro-IJNERLR2"></a><h3 class="title astro-IJNERLR2">${latestPost?.title}</h3></div>
      <div class="collections astro-IJNERLR2">
        <section class="neu-box astro-IJNERLR2" aria-label="Articles">
          <h3 class="astro-IJNERLR2">Bra att veta</h3>
          <ul class="astro-IJNERLR2">
            ${posts.map((post) => renderTemplate`<li class="astro-IJNERLR2">
                  <time${addAttribute(post.frontmatter.pubDate, "datetime")} class="astro-IJNERLR2">
                    ${new Date(post.frontmatter.pubDate).toLocaleDateString(
    "swe",
    {
      year: "numeric",
      month: "short",
      day: "numeric"
    }
  )}
                  </time>
                  <a${addAttribute(post.url, "href")} class="astro-IJNERLR2">${post.frontmatter.title}</a>
                </li>`)}
          </ul>
        </section>
      </div>
    </main>
    ${renderComponent($$result, "Footer", $$Footer, { "class": "astro-IJNERLR2" })}
  </body></html>`;
}, "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/pages/blog.astro");

const $$file$1 = "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/pages/blog.astro";
const $$url$1 = "/blog";

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://hervy.netlify.com/");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`<html lang="en">
  <head>
    ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}
    
  ${renderHead($$result)}</head>
  <body>
    ${renderComponent($$result, "Header", $$Header, {})}
    <main>
      <h1>404 page missing</h1>
      <p>Somehow you got to the end of internet. Take red pill and celebrate or
        take the blue pill, go back and pretend it never happend!</p>
    </main>
    ${renderComponent($$result, "Footer", $$Footer, {})}
  </body></html>`;
}, "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/pages/404.astro");

const $$file = "/Users/nicolashervy/Documents/random stuff/stglhlmn/src/pages/404.astro";
const $$url = "/404";

const _page8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const emailTo = "nicolas@hervy.se";
const emailToPass = "!Nicher120";
const host = "smtp.gmail.com";
const post = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const formData = await request.json();
    const name = formData.name;
    const email = formData.email;
    const subject = formData.subject;
    const message = `${formData.message}
    ----------------------------------------------------------------------
    From: ${name} • email: ${email}
    `;
    const sentdate = Temporal.Now.plainDateTimeISO().toString();
    saveToLog(name, email, subject, formData.message, sentdate);
    const html = `<div style="margin: 20px auto;font-family: Helvetica, Verdana, sans-serif">${message.replace(
      /[\r\n]/g,
      "<br>"
    )}</div>`;
    let mailTransporter = nodemailer.createTransport({
      host,
      port: 587,
      secure: false,
      auth: {
        user: emailTo,
        pass: emailToPass
      }
    });
    let mailDetails = {
      from: email,
      to: emailTo,
      subject: `${new URL(request.url).hostname}: ${subject}`,
      text: message,
      html
    };
    console.log(
      "***************************** mailDetails",
      mailDetails,
      "nicolas@hervy.se"
    );
    let mailresult;
    try {
      mailresult = await mailTransporter.sendMail(mailDetails);
    } catch (error) {
      console.log("******* Error: ", error);
    }
    console.log("Message sent: %s", mailresult?.messageId);
    console.log("mailresult", mailresult);
    return new Response(JSON.stringify({ ...mailDetails, success: true }), {
      status: 200
    });
  }
  return new Response(null, { status: 400 });
};
function saveToLog(name, email, subject, message, sentdate) {
  const logFilePath = "sentMailLog.json";
  if (!fs.existsSync(logFilePath)) {
    try {
      fs.writeFileSync(logFilePath, "[]");
    } catch (error) {
      console.log("Error creating log file:", error);
    }
  }
  let previousLogs = [];
  try {
    const logFileData = fs.readFileSync(logFilePath, "utf-8");
    previousLogs = JSON.parse(logFileData);
  } catch (error) {
    console.log("Error reading log file:", error);
  }
  const logEntry = { name, email, subject, message, sentdate };
  previousLogs.push(logEntry);
  fs.writeFileSync(logFilePath, JSON.stringify(previousLogs, null, 2));
}

const _page9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d, _page5 as e, _page6 as f, _page7 as g, _page8 as h, _page9 as i };
