# Scalable Vector Graphics (SVG)
## Description
In this Web app showed some **SVG** elements and *animation on **SVG** element* like a button when click on it it changes to close button and a rotating element !!
## Technologies used
**HTML,CSS,Jquery,SVG**
## Web app preview
To see the Web app [click here](http://htmlpreview.github.io/?https://github.com/hardbeater/Scalable-vector-graphics/blob/master/svgexp.html) **(sometimes it take time to load properly so please wait for some time ) **
## HTML syntax for svg
1. **For adding svg to html**
```html
<svg xmlns="http://www.w3.org/2000/svg">
xmlns, is an XML markup language and W3C specification that provides methods for creating internal and external links within XML documents, and associating metadata with those links (sourse:wiki)and this is to prevent the elements from different technologies from clashing like the SVG <a> element and the HTML <a> element can be distinguished if one is called **svg:a** and the other **html:a**
</svg>
```
2. **Some generally used syntax that can be use within svg syntax**
* to draw path however you want to draw you can use curve u can use line etc.
```html
<path d="M (any curve u want u can draw from here)"> </path>
```
* To draw circle
```html
<circle cx="circle's center's X cordinate" cy="circle's center's Y cordinate" r="circle radius"> </circle>
```
* To draw rectangle
```html
<rect x="rectangle's top left corner's X cordinate " y="rectangle's top left corner's Y cordinate" width=" rectangle's width " height="rectangle's height"></rect>
```
*To draw ellipse
```html
<ellipse cx="ellipse center's X cordinate" cy="ellipse center's Y cordinat" rx="radius in X direction" ry="radius in Y direction" ></ellipse>
```
* To draw a polygon 
```html
<polygon points="write point's X and Y cordinates from where to where u want to draw line in polygon "></polygon>
```
```html
<g> for separate two svg elements</g>
```
## Some css properties for svg elements
* To decide the color of stroke
```css
  stroke:color;
```
* To decide stroke width
```css
  stroke-width:color;
```
* To make dashes in stroke (like some part will be colored some part will be empty)
```css
  stroke-dasharray:A px B px;/* value of colored part is 'A' and the empty part value is 'B' so the 'A' pixels will be colored then 'B' pixels empty then 'A' pixels colored likewise*/
```
* To give some offset to dashes
```css
  stroke-dashoffset: A px;/* it shifts dashes by 'A' pixels */
```
* To fill area covered by particular path with color
```css
  fill:color;/* add this to that path's class's css property */
```
* To make the end part of lines or dashes round or square or butt
```css
  stroke-linecap:round or square or butt;
```
## To get total length of particular stroke using javascript
```javascript
  var element = document.querySelector("that path's id or class");
  var length = element.getTotalLength();
  console.log(length);
```



