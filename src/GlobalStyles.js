import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
--header-font-family: "Marcellus", serif;
--subheader-font-family: "Marcellus SC", serif;
--body-font-family: "DM Sans", sans-serif;
--color-primary: #2C1E02;
--color-secondary: #F4DFD1;
--color-tertiary: #A78759;
background-color: var(--color-primary);
}

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, 
p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
h1 {
	font-family: var(--header-font-family);
}
h2 {
	font-family: var(--subheader-font-family);
}
body {
	line-height: 1.2;
	font-family: var(--body-font-family);
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;
